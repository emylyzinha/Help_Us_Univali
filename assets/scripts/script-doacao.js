const formDoacao = document.getElementById('formDoacao');

formDoacao.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const nomeModal = document.getElementById('nomeModal');

    nomeModal.innerText = nome;

    const modal = new bootstrap.Modal(document.getElementById('modalSucesso'));
    modal.show();

    formDoacao.reset();
});
