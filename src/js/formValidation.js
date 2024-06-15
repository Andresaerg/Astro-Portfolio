import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.js';
//import 'sweetalert2/dist/sweetalert2.min.css';
//import '@sweetalert2/theme-dark/dark.css';

const btn = document.getElementById('send_button');
const user_name = document.getElementById('floating_name');
const email = document.getElementById('floating_email');
const company = document.getElementById('floating_company');
const message = document.getElementById('floating_message');
const serviceID = 'default_service';
const templateID = 'template_i02kfup';

document.getElementById('form')
.addEventListener('submit', function(event) {
            
    event.preventDefault();

    if(user_name.value === '' || email.value === '' || message === ''){
        Swal.fire({
            title: 'Complete todos los campos', 
            text: 'Por favor, complete todos los campos para enviar el mensaje', 
            icon: 'info',
            confirmButtonText: 'Volver'
        })

        return;
    }

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

})