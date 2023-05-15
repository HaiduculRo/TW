let seconds = 0;
let intervalId = null;

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
