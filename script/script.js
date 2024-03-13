document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn_more').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('#projectOverlay').classList.remove('hidden');
            document.querySelectorAll('.container *:not(#projectOverlay)').forEach(element => {
                element.classList.add('blurred');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn_exit').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('#projectOverlay').classList.add('hidden');
            document.querySelectorAll('.container *:not(#projectOverlay)').forEach(element => {
                element.classList.remove('blurred');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', (event) => {
        if (document.querySelector('#projectOverlay').classList.contains('visible')) {
            event.preventDefault();
        }
    });
});


document.querySelector('.ver_mais').addEventListener('mouseover', function() {
    document.querySelector('.imagem_projeto').classList.add('no-blur');
});

document.querySelector('.ver_mais').addEventListener('mouseout', function() {
    document.querySelector('.imagem_projeto').classList.remove('no-blur');
});

window.addEventListener('scroll', function() {
    var minhaDiv = document.getElementById('menu-principal');
    if (window.scrollY > 100) { 
        // Altere 100 para o ponto onde deseja aplicar a estilização
        minhaDiv.classList.add('divSemEstilo');
    } else {
        minhaDiv.classList.remove('divComEstilo');
    }
});



