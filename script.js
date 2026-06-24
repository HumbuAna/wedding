
document.getElementById('rsvpForm').addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById('fullName').value;
  const attendance = document.getElementById('attendance').value;

  const message =
`Wedding RSVP - Humbu & Ana

Full Name / Nome e Cognome: ${name}

Attendance / Presenza: ${attendance}`;

  window.open('https://wa.me/27797506051?text=' + encodeURIComponent(message), '_blank');
});
