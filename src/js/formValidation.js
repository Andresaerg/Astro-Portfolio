import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.js';

const btn = document.getElementById('send_button');
const user_name = document.getElementById('floating_name');
const email = document.getElementById('floating_email');
const company = document.getElementById('floating_company');
const message = document.getElementById('floating_message');
const serviceID = 'default_service';
const templateID = 'template_i02kfup';

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
            title: 'Complete todos los campos',
            text: 'Por favor, complete todos los campos requeridos para enviar el mensaje',
            icon: 'info',
            confirmButtonText: 'Volver'
        });
        return false; // Prevent form submission
    }

    if (!validateEmail(email.value)) {
        console.log(validateEmail(email))
        Swal.fire({
            title: 'Email inválido',
            text: 'Por favor, ingrese un email válido',
            icon: 'error',
            confirmButtonText: 'Volver'
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

    if(validateForm()){
        btn.disabled = true;
        btn.value = 'Enviando...';
    
        emailjs.sendForm(serviceID, templateID, this, {
            publicKey: '1DYi9grOdbv7E9jR3',
        })
        .then(() => {
            btn.value = 'Enviar';
            Swal.fire({
                title: 'Correo enviado', 
                text: '¡Gracias por su mensaje!', 
                icon: 'success', 
                confirmButtonText: 'Volver'
            });
    
            user_name.value = '';
            email.value = '';
            company.value = '';
            message.value = '';
            btn.disabled = false;
        }, (err) => {
            btn.value = 'Enviar';
            console.log(JSON.stringify(err))
            Swal.fire({
                title: 'Oops', 
                text: 'Algo ha salido mal...', 
                icon: 'error',
                confirmButtonText: 'Volver'
            });
            btn.disabled = false;
        });
    }
})