function toggleCard() {
    const flipCard = document.querySelector('.flip-card');
    const front = document.querySelector('.flip-card .front');
    const back = document.querySelector('.flip-card .back');

    if (front.style.display !== 'none') {
        front.style.display = 'none';
        back.style.display = 'flex';
    } else {
        front.style.display = 'block';
        back.style.display = 'none';
    }
}

function confirmSubmission() {
    return confirm('¿Estás seguro de que los datos son correctos?');
}
