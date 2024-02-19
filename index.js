const allSeats = document.getElementsByClassName("seats");
let count = 0;
const maxClicks = 4;
const ticketPrice = 550;
const clickedSeats = new Set();

for (const seat of allSeats) {
  seat.addEventListener("click", function () {
    if (count < maxClicks && !clickedSeats.has(seat)) {
      count = count + 1;

      seat.style.backgroundColor = "#1DD100";
      clickedSeats.add(seat);
      const remin = document.getElementById("remaining-seat").innerText--;
      if (remin == 0) {
        document.getElementById("remaining-seat").innerText = 0;
      }

      if (!seat.getAttribute("data-clicked")) {
        // append
        const seatName = seat.innerText;

        const appendLi = document.getElementById("append-here");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = seatName;
        const p2 = document.createElement("p");
        p2.innerText = "Economy";
        const p3 = document.createElement("p");
        p3.innerText = parseInt(ticketPrice);
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        appendLi.appendChild(li);

        seat.setAttribute("data-clicked", true);
      }

      // total
      totalPrice("total-price", parseInt(ticketPrice));
      // grand total
      grandTotalPrice("grand-price", ticketPrice);

      setInnerText("total-select", count);
    } else {
      console.log("Maximum clicks reached");
    }
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function totalPrice(id, value) {
  const totalPriceElement = document.getElementById(id);
  const totalPrice = parseInt(totalPriceElement.innerText);
  const sum = totalPrice + value;
  totalPriceElement.innerText = sum;
}

function grandTotalPrice(id, value) {
  const grandTotalPriceElement = document.getElementById(id);
  const grandTotalPrice = parseInt(grandTotalPriceElement.innerText);
  const sum = grandTotalPrice + value;
  grandTotalPriceElement.innerText = sum;
}
