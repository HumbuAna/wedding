const weddingDate = new Date('2026-09-26T11:00:00+02:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '0';
    document.getElementById('minutes').textContent = '0';
    document.getElementById('seconds').textContent = '0';
    return;
  }

  document.getElementById('days').textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById('hours').textContent = Math.floor((distance / (1000 * 60 * 60)) % 24);
  document.getElementById('minutes').textContent = Math.floor((distance / (1000 * 60)) % 60);
  document.getElementById('seconds').textContent = Math.floor((distance / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value.trim();
  const attendance = document.getElementById('attendance').value;
  const recipient = 'htakalani@gmail.com';
  const subject = encodeURIComponent('Wedding RSVP - Humbu & Ana');
  const body = encodeURIComponent(
`Wedding RSVP - Humbu & Ana

Full name / Nome e cognome: ${fullName}
Will you be attending? / Parteciperai?: ${attendance}

RSVP deadline: 18 July 2026
Wedding date: 26 September 2026`
  );

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
