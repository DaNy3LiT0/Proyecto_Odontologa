function toggleCard() {
    var flipCard = document.querySelector('.flip-card');
    var front = flipCard.querySelector('.front');
    var back = flipCard.querySelector('.back');

    if (front.style.display === 'block' || front.style.display === '') {
        front.style.display = 'none';
        back.style.display = 'block';
    } else {
        front.style.display = 'block';
        back.style.display = 'none';
    }
}
