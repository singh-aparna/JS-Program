// getElementById vs. getElementByClass

// 	• getElementById: 
// 		○ Retrieves an element by its unique ID.
// 		○ Faster when you know the exact ID.
// 		○ Use for elements that should only appear once.

// 	• getElementsByClassName: 
// 		○ Returns an array of elements with the same class name.
// 		○ Useful when you have multiple elements with the same class.
// 		○ Can be less performant for large numbers of elements.

// Choosing Between getElementById and getElementByClass:
// 	• Use getElementById for elements with a unique ID.
// 	• Use getElementsByClassName for multiple elements with the same class.

// Example (Code Snippet):
// JavaScript
// const heading = document.getElementById('main-heading'); // Use for unique ID
// const buttons = document.getElementsByClassName('btn'); // Use for multiple buttons
//  Use code with caution.