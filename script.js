
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');

    form.addEventListener('submit', function(event) {
        //
        event.preventDefault();

        // 
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('mensagem').value;

        // 
        if (nome === "" || email === "" || msg === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert("Sucesso! Mensagem enviada corretamente.");
            form.reset(); // 
        }
    });
});