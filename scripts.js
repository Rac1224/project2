
const JW_PEI_URL =
  "https://i.pinimg.com/736x/f6/8b/cc/f68bccf94dadc27e11105fb47cd09c76.jpg";
const MANGO_URL =
  "https://i.pinimg.com/736x/38/c8/a0/38c8a015fb6358aa409ddab1189a5aa7.jpg";
const MADEWELL_URL =
  "https://i.pinimg.com/736x/81/e4/f3/81e4f36d315e92f558f37dc91a184fc6.jpg";
const C_N_K_URL =
  "https://i.pinimg.com/736x/6d/84/1b/6d841b81ebdedda1b248e43bce99f285.jpg";
const ANTH_URL =
  "https://i.pinimg.com/736x/ad/2e/a7/ad2ea7b5ee1d3c6040d14f1d735a36c5.jpg";


// Arrays of Obejcts (Luxury Brands titles)
const catalogItems = [
  {
    title: "JW Pei",
    imageURL: JW_PEI_URL,
    bullets: ["Chic staples", "Under $200", "European vibes"]
  },
  
  {
    title: "Mango",
    imageURL: MANGO_URL,
    bullets: ["Luxe-Looking Basics", "Under $150", "Accessible"]
  },

  {
    title: "Madewell",
    imageURL: MADEWELL_URL,
    bullets: ["Vintage-Inspired", "Under $100", "Quality basics"]
  },

  {
    title: "Charles & Keith",
    imageURL: C_N_K_URL,
    bullets: ["Simple Elemet", "Under $200", "Minimalistic Aesthetic"]
  },

  {
    title: "Anthropologie",
    imageURL: ANTH_URL,    
    bullets: ["Bohemian Aesthetic", "Under $100", "Trendy-Foraw styles"]
  }
];

// Set three display cards at first
let displayLimit = 3;

// Display the data in the arrays
function showCards(limit = displayLimit) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  catalogItems.slice(0, limit).forEach((item) => {
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, item); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  });
}

function editCardContent(card, item) {
  card.style.display = "block";
  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = item.title;

  const cardImage = card.querySelector("img");
  cardImage.src = item.imageURL;
  cardImage.alt = item.title + "  Image";

  const ul = card.querySelector("ul");
  ul.innerHTML = "";

  item.bullets.forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    ul.appendChild(li);
  });
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  showCards(); 
});

// Pass
catalogItems.slice(0, limit).forEach((item) => {
  const nextCard = templateCard.cloneNode(true);
  editCardContent(nextCard, item);
  cardContainer.appendChild(nextCard);
});

// Reminder - Wise Quote
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "Call it eco-fashion if you like, I think it is just common sense."
  );
}

// Remove Cards
function removeCard() {
  if (displayLimit > 0) {
    displayLimit--;
    showCards();
  }
}

// Add New Cards
function addCards() {
  //Edge Case - if all cards are showing
  if (displayLimit >= catalogItems.length) {
    alert("Those are all the cards we have!");
    return;
  }

  displayLimit++;
  showCards();
}

//Sort Cards
function sortCards(key = "title", reverse = false) {
  const sortedItems = [...catalogItems].sort((a, b) => {
    if (a[key] < b[key]) return reverse ? 1 : -1;
    if (a[key] > b[key]) return reverse ? -1 : 1;
    return 0;
  });
  showCardsFromArray(sortedItems);
}

function showCardsFromArray(items) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  items.slice(0, displayLimit).forEach((item) => {
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, item);
    cardContainer.appendChild(nextCard);
  });
}

// Reference: https://www.whowhatwear.com/affordable-purse-brands, https://stackoverflow.com/questions/18637418/trying-to-load-local-json-file-to-show-data-in-a-html-page-using-jquery, https://stackoverflow.com/questions/17684921/sort-json-object-in-javascript
