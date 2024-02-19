const allSeats = document.getElementsByClassName("seats");
let count = 0;
for (const seat of allSeats) {
  seat.addEventListener("click", function () {
    count = count + 1;
    setInnerText("total-select", count);
    seat.style.backgroundColor = "#1DD100";
    document.getElementById("remaining-seat").innerText--;
    const appendLi = document.getElementById("append-here");
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
