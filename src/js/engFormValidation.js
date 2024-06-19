import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const btn = document.getElementById('send_button');
const user_name = document.getElementById('floating_name');
const email = document.getElementById('floating_email');
const company = document.getElementById('floating_company');
const message = document.getElementById('floating_message');
const serviceID = 'default_service';
const templateID = 'template_i02kfup';

console.log(email)

document.querySelectorAll('form input:required, form textarea:required').forEach(input => {
    input.addEventListener('invalid', function() {
        this.classList.add('border-red-600', 'focus:border-red-600', 'dark:border-red-600','dark:focus:border-red-600');
    });

    input.addEventListener('input', function() {
        if (this.checkValidity()) {
            this.classList.remove('border-red-600', 'focus:border-red-600', 'dark:border-red-600','dark:focus:border-red-600');
        }
    });
});


const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

// Función para validar el formulario
const validateForm = () => {
    if (user_name.value === '' || email.value === '' || message.value === '') {
        Swal.fire({
            title: 'Complete all fields',
            text: 'Please complete all fields to send the message',
            icon: 'info',
            confirmButtonText: 'Go back'
        });
        return false; // Prevent form submission
    }

    if (!validateEmail(email.value)) {
        console.log(validateEmail(email))
        Swal.fire({
            title: 'Invalid email',
            text: 'Please enter a valid email address',
            icon: 'error',
            confirmButtonText: 'Go back'
        });
        return false; // Prevent form submission
    }

    // Other validations (if needed)

    // If all validations pass, allow form submission
    return true;
};


document.getElementById('form')
.addEventListener('submit', function(event) {

    event.preventDefault();

    if (validateForm()) {
        btn.disabled = true;
        btn.value = 'Sending...';

        emailjs.sendForm(serviceID, templateID, this, {
            publicKey: '1DYi9grOdbv7E9jR3',
        })
        .then(() => {
            btn.value = 'Send';
            Swal.fire({
                title: 'Email sent',
                text: 'Thank you for your message!',
                icon: 'success',
                confirmButtonText: 'Go back'
            });

            user_name.value = '';
            email.value = '';
            company.value = '';
            message.value = '';
            btn.disabled = false;
        }, (err) => {
            btn.value = 'Send';
            console.log(JSON.stringify(err))
            Swal.fire({
                title: 'Oops',
                text: 'Something went wrong...',
                icon: 'error',
                confirmButtonText: 'Go back'
            });
            btn.disabled = false;
        });
    }
})