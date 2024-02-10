const display = document.getElementById('display-txt');

let count = 0; // state

display.innerText = count;

const increment = () => {
  count++;
  display.innerText = count;
};

const decBtn = document.getElementById('dec-btn');

decBtn.addEventListener('click', () => {
  if (count === 0) {
    alert("Count will be negative!!!");
    return;
  }
  count--;
  display.innerHTML = count;
});
