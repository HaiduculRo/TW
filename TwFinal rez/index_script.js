let seconds = 0;
let intervalId = null;

///cate secunde am stat
function toggleInterval() {
  const stop = intervalId != null;
    intervalId = setInterval(() => {
      seconds++;
      document.querySelector("footer > p").textContent = `Stai pe această pagină de ${seconds} secunde.`;
  }, 1000);
}

window.onload = () => {
  toggleInterval();
}
///schimbare titlu la click 
function changeTitle1() {
  var img = document.getElementById("poza1");
  img.title = "Napoleon I (15 august 1769 - 5 mai 1821)";
}

function changeTitleByClass(className) {
  var images = document.getElementsByClassName(className);
  for (var i = 0; i < images.length; i++) {
    var title;
    switch (className) {
      case "poza2":
        title = "Charles de Gaulle (22 noiembrie 1890 - 9 noiembrie 1970)";
        break;
      case "poza3":
        title = "Marie Curie (7 noiembrie 1867 - 4 iulie 1934)";
        break;
    }
    images[i].title = title;
  }
}
///Butoane colorate
function changeBackgroundColor(event) {
  var personalitati = document.querySelector('.personalitati');

  if (event.key === 'b') {
    personalitati.style.backgroundColor = 'blue';
  } else if (event.key === 'm') {
    personalitati.style.backgroundColor = 'purple';
  }
}
///ora curenta(thx lab)
document.addEventListener('keydown', changeBackgroundColor);

function afiseazaOraSiMinutele() {
  var ora = dataSiOra.getHours();
  var min = dataSiOra.getMinutes();
  var dataSiOra = new Date();
  document.getElementById("ora").innerHTML = "Ora curentă: " + ora + ":" + min;
}

afiseazaOraSiMinutele(); // Afiseaza ora si minutele initiale

setInterval(afiseazaOraSiMinutele, 1000); // Actualizare


function validatePhoneNumber() {
  var phoneNumber = document.getElementById("phoneNumber").value;
  var pattern = /^07\d{8}$/; // Expresia regulata pt telefon

  if (pattern.test(phoneNumber)) {
    alert("Numărul de telefon este valid!");
  } else {
    alert("Numărul de telefon nu este valid!");
  }
}