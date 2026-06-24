document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const guests = document.getElementById('guests').value;
  const attendance = document.getElementById('attendance').value;
  const message = document.getElementById('message').value;
  const phone = '447428454074';
  const text = `Wedding RSVP - Humbu & Ana%0A%0AName: ${encodeURIComponent(name)}%0AGuests: ${encodeURIComponent(guests)}%0AAttendance: ${encodeURIComponent(attendance)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
});
