AOS.init({
 	duration: 1200,
 	anchorPlacement: 'top-bottom',
 	easing: 'ease-in-out',
})

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("cookiepage").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("cookiepage").style.width = "0%";
}