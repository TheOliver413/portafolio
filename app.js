const btn = document.getElementById('button');
const from = document.getElementById('from_name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_b2ek4dq';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                from.value = '';
                email.value = '';
                subject.value = '';
                message.value = '';
                alert('Enviado!');
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });