// job description
let cardInfo = document.querySelectorAll(".flip");

for (let i = 0; i < cardInfo.length; i++) {
  cardInfo[i].addEventListener("mouseover", flipCard);
  cardInfo[i].addEventListener("mouseout", unflipCard);
}

function flipCard(event) {
  let cardFlip =
    event.target.parentElement.parentElement.parentElement.parentElement;

  console.log(
    event.target.parentElement.parentElement.parentElement.parentElement
  );

  cardFlip.classList.toggle("flipped");

  return true;
}

function unflipCard(event) {
  let cardFlip =
    event.target.parentElement.parentElement.parentElement.parentElement;
  setTimeout(function () {
    cardFlip.classList.remove("flipped");
  }, 15000);
}
