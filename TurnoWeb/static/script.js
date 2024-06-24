// Función para cambiar el estado de las tarjetas
function toggleCard() {
  var flipCard = document.querySelector('.flip-card');
  var front = flipCard.querySelector('.front');
  var back = flipCard.querySelector('.back');

  // Cambia la visibilidad de las tarjetas
  if (front.style.visibility === 'visible') {
    front.style.display = 'none';
    front.style.visibility = 'hidden';
    back.style.display = 'block';
    back.style.visibility = 'visible';
  } else {
    front.style.display = 'block';
    front.style.visibility = 'visible';
    back.style.display = 'none';
    back.style.visibility = 'hidden';
  }
}
