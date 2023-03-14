// Definieren Sie die Arrays für die Karten und die Übungen
const cards = [  "2 of Hearts",  "3 of Hearts",  "4 of Hearts",  "5 of Hearts",  "6 of Hearts",  "7 of Hearts",  "8 of Hearts",  "9 of Hearts",  "10 of Hearts",  "Jack of Hearts",  "Queen of Hearts",  "King of Hearts",  "Ace of Hearts",  "2 of Diamonds",  "3 of Diamonds",  "4 of Diamonds",  "5 of Diamonds",  "6 of Diamonds",  "7 of Diamonds",  "8 of Diamonds",  "9 of Diamonds",  "10 of Diamonds",  "Jack of Diamonds",  "Queen of Diamonds",  "King of Diamonds",  "Ace of Diamonds",  "2 of Spades",  "3 of Spades",  "4 of Spades",  "5 of Spades",  "6 of Spades",  "7 of Spades",  "8 of Spades",  "9 of Spades",  "10 of Spades",  "Jack of Spades",  "Queen of Spades",  "King of Spades",  "Ace of Spades",  "2 of Clubs",  "3 of Clubs",  "4 of Clubs",  "5 of Clubs",  "6 of Clubs",  "7 of Clubs",  "8 of Clubs",  "9 of Clubs",  "10 of Clubs",  "Jack of Clubs",  "Queen of Clubs",  "King of Clubs",  "Ace of Clubs",  "Joker",  "Joker"];

let exercises = {};
let shuffledCards = [];

// Funktion zum Mischen der Karten
function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

// Funktion zum Starten des Workouts
function startWorkout() {
  // Holen Sie sich die Übungen aus den Eingabefeldern und speichern Sie sie
  exercises = {
    hearts: document.getElementById("hearts").value,
    diamonds: document.getElementById("diamonds").value,
    spades: document.getElementById("spades").value,
    clubs: document.getElementById("clubs").value
  };

  // Mischen Sie die Karten
  shuffledCards = shuffleCards([...cards]);

  // Verstecken Sie den Start-Button und zeigen Sie den Karten-Container und den Next-Button an
  document.getElementById("startButton").style.display = "none";
  document.getElementById("cardContainer").style.display = "block";
  document.getElementById("nextButton").style.display = "inline-block";

  // Zeigen Sie die erste Karte und die entsprechende Übung an
  showNextCard();
}

// Funktion zum Anzeigen der nächsten Karte
function showNextCard() {
  const cardContainer = document.getElementById("cardContainer");
  const nextButton = document.getElementById("nextButton");

  if (shuffledCards.length > 0) {
    // Holen Sie sich die nächste Karte und ihre Übung
    const card = shuffledCards.pop();
    const cardValue = card.split(" ")[0];
    const cardSuit = card.split(" ")[2];
    const exerciseText = exercises[cardSuit.toLowerCase()];

    // Zeigen Sie die Karte und die entsprechende Übung an
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `${cardValue} <br> ${cardSuit}<br> ${exerciseText}`;
    if(cardContainer.hasChildNodes()) {
      cardContainer.removeChild(cardContainer.childNodes[0]);
    }
    cardContainer.appendChild(cardElement);

    // Wenn es noch mehr Karten gibt, zeigen Sie den Next-Button an
    if (shuffledCards.length > 0) {
      nextButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "none";
    }
  }
}

// Event-Listener für den Next-Button
document.getElementById("nextButton").addEventListener("click", showNextCard);
