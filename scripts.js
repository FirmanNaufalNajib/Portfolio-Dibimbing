document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Your message has been sent!');
});


function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  var phoneNumber = '6281214790789'; // Ganti dengan nomor WhatsApp tujuan Anda
  
  var whatsappURL = `https://wa.me/${phoneNumber}?text=` +
      `Nama: ${encodeURIComponent(name)}%0A` +
      `Email: ${encodeURIComponent(email)}%0A` +
      `Pesan: ${encodeURIComponent(message)}`;
      
  window.open(whatsappURL, '_blank');
}