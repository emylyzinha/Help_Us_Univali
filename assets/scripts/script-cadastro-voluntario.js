
const formCadastroVoluntario = document.getElementById('form-voluntario');

formCadastroVoluntario.addEventListener('submit', function (e) {
    e.preventDefault();

    // Abrir modal de sucesso
    const modal = new bootstrap.Modal(document.getElementById('modalSucessoCadastroVoluntario'));
    modal.show();

    // Resetar formulário
    formCadastroVoluntario.reset();
});

