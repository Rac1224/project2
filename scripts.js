
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
    bullets: ["Vegan leather", "Under $100", "Trendy styles"]
  },
  
  {
    title: "Mango",
    imageURL: MANGO_URL,
    bullets: ["Chic staples", "Under $200", "European vibes"]
  },
  {
    title: "Madewell",
    imageURL: MADEWELL_URL,
    bullets: ["Vegan leather", "Under $100", "Trendy styles"]
  },
  {
    title: "Charles & Keith",
    imageURL: C_N_K_URL,
    bullets: ["Vegan leather", "Under $100", "Trendy styles"]
  },
  {
    title: "Anthropologie",
    imageURL: ANTH_URL,    
    bullets: ["Vegan leather", "Under $100", "Trendy styles"]
  }
];

// Set three display cards at first
let displayLimit = 3;

// This function adds cards the page to display the data in the array
function showCards(limit = displayLimit) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  catalogItems.slice(0, limit).forEach((item) => {
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, item.title, item.imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  });
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + "  Image";

  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  showCards(); 
});

// Reminder - Wise Quote
function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "Call it eco-fashion if you like, I think it is just common sense."
  );
}

// Remove Cards
function removeLastCard() {
  catalogItems.pop(); // Remove last item in titles array
  showCards();
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

// Sort
function sortCards(criteria) {
  switch(criteria) {
    case 'price-low':
      currentItems.sort((a, b) => a.price - b.price);
      break;
    case 'rating':
      currentItems.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // Reset to original order
      currentItems = [...catalogItems];
  }
  showCards();
}

