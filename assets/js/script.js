let email = 'hector_jonathas@hcode.com';

email = 'hector.jonathas2@hcode.com';

console.log(email);
console.log('O seu e-mail é: ' + email);
console.log(`O seu e-mail é: ${email}`);


document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulário');

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse está fora do formulário');

});

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email: email,
        password: password
    };

    if (!json.email) {

        console.lerror("O campo deve ser preenchido!");
    } else if (!json.passoword) {

        console.error("O campo password deve ser preenchido!");
    } else {

        console.info("Dados validados com sucesso");
    }

});