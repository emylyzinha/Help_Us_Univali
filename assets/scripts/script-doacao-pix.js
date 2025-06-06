const formDoacaoPix = document.getElementById('formDoacaoPix');

formDoacaoPix.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede que a página recarregue

    const nome = document.getElementById('nome').value;
    document.getElementById('nomeModal').innerText = nome;

    const modal = new bootstrap.Modal(document.getElementById('modalSucessoPix'));
    modal.show();

    formDoacaoPix.reset(); // Limpa o formulário após envio
});
