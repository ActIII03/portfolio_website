// job description
let jobInfo = document.querySelectorAll(".card");

for (let i = 0; i < jobInfo.length; i++) {
  jobInfo[i].addEventListener("mouseover", flipCard);
  jobInfo[i].addEventListener("mouseout", unflipCard);
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
