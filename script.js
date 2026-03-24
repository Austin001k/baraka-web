function buy(product) {
  alert(product + ' Added to cart! Thank you for shopping with us');
}

function searchproducts() {

  // Get the text from search bar
  let input = document.getElementById('productsearch').value.toLowerCase();

  // Get all product cards
  let cards = document.getElementsByClassName('card');

  // Loop through every card
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    // Get text inside card
    let text = card.innerText.toLowerCase();

    // Show or hide
    if (text.includes(input)) {
      card.style.display = "";   // show
    } else {
      card.style.display = "none"; // hide
    }
  }
}
