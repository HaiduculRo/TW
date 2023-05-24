
// Funcție pentru a adăuga o adresă de contact random la lista existentă
function generateRandomContact() {
    var randomAddress = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    
    for (var i=0;i<10;++i) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      randomAddress = randomAddress + characters.charAt(randomIndex);
    }
    return randomAddress + '@yahoo.com';
  }
  
  if (!localStorage.getItem('numarApasari')) 
      localStorage.setItem('numarApasari', '0');
  

  function addRandomContact() {
    var rez = generateRandomContact(); ///generare random mail
    var linkList = document.getElementById('linkuri');
    var newContact = document.createElement('li');
    var newLink = document.createElement('a');
    newLink.href = 'mailto:' + rez;
    newLink.textContent = rez;

    newContact.appendChild(newLink);
    linkList.appendChild(newContact); /// adaugare copil mail random


    var numarApasari = localStorage.getItem('numarApasari'); ///local storage
    numarApasari = parseInt(numarApasari) + 1;

    localStorage.setItem('numarApasari', numarApasari.toString()); 
    numarApasariElement.textContent = numarApasari.toString();
  }
  

  
  var addButton = document.getElementById('add-contact-button');
  var numarApasariElement = document.getElementById('numar-apasari');
  
  addButton.addEventListener('click', addRandomContact);
  
  ///stergere mail si modificare local storage
  var deleteButton = document.getElementById('delete-button');
  deleteButton.addEventListener('click', function() {
    var linkList = document.getElementById('linkuri'); // Adăugare declarație linkList
    var contactItems = document.querySelectorAll('#linkuri li');
    if (contactItems.length > 0) {
      var lastContact = contactItems[contactItems.length - 1];
      var contactId = lastContact.getAttribute('data-id');
      linkList.removeChild(lastContact);
      var numarApasari = parseInt(localStorage.getItem('numarApasari'));
      numarApasari--; ///scadere localStorage
      localStorage.setItem('numarApasari', numarApasari.toString());
      numarApasariElement.textContent = numarApasari.toString();
    }
  });

  function validateForm() {
    // Obțineți valorile introduse în câmpurile de input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Validare
    if (name === "") {
      alert("Vă rugăm să completați câmpul de nume!");
      return false; // Opriți trimiterea formularului
    }

    if (email === "") {
      alert("Vă rugăm să completați câmpul de email!");
      return false; // Opriți trimiterea formularului
    }
    return true;
  }