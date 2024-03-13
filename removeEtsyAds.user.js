// ==UserScript==
// @name        Etsy Ad Remover - Last Updated July 5 2023
// @author      Rage Wheeler
// @description Removes search ads from Etsy
// @match       https://*.etsy.com/*
// @version     1.0
// @grant none
// ==/UserScript==


// NOTE: If you are still seeing ads, increase the DELAY TIME by 200
// The DELAY TIME is the number in the last line of this code
// Once you have increased the number, go to File within this page and click Save
// Now reload the Etsy page
// Repeat this process until no ads display
// If you are still seeing ads, Etsy probably changed their page layout
// In that case, message me and I will update the script

// Wait for a specific duration using setTimeout
setTimeout(function() {
// Attempt to access the DOM elements here

// Select the element with ID "content"
const contentElement = document.querySelector('#content');

// Select the <ol> element within the content element
const olElement = contentElement.querySelector('ol');

// Select all <li> elements within the <ol> element
const liElements = olElement.querySelectorAll('li');

// Iterate over the <li> elements
liElements.forEach(li => {
  // Select all <span> elements within the current <li> element
  const spanElements = li.querySelectorAll('span');

  // Filter the <span> elements to find those containing "ad "
  const filteredSpanElements = Array.from(spanElements).filter(span => span.textContent.includes('by Etsy seller'));

  // Iterate over the filtered <span> elements
  filteredSpanElements.forEach(span => {
    // Check if the height and width are not 0
    const computedStyle = window.getComputedStyle(span);
    const height = parseFloat(computedStyle.height);
    const width = parseFloat(computedStyle.width);

    if (height !== 0 && width !== 0) {
      // Delete the parent <li> element
      li.remove();
    }
  });
});
}, 500); // DELAY TIME: Adjust the delay (in milliseconds) as needed
