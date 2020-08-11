# Knowledge
## 1. spread / rest operator `...`
https://dev.to/sagar/three-dots---in-javascript-26ci

### Spread Operators
> The spread operator is used to expand elements of an iterable (like an array) into places where multiple elements can fit.

```JavaScript
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg pizza', ...specialty];
// 'Deep Dish', 'Pepperoni', 'Hawaiian', 'veg pizza', 'Meatzza', 'Spicy Mama', 'Margherita'
console.log(pizzas); 
```

### Rest Parameters
> With rest parameters, we can gather any number of arguments into an array and do what we want with them. Rest parameters have been introduced to reduce the boilerplate code that was induced by the arguments. 


## 2. HTML DOM Events
https://www.w3schools.com/jsref/dom_obj_event.asp
> HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.
> Events are normally used in combination with functions, and the function will not be executed before the event occurs (such as when a user clicks a button).

## 3. HTML DOM innerHTML Property
https://www.w3schools.com/jsref/prop_html_innerhtml.asp
> The innerHTML property sets or returns the HTML content (inner HTML) of an element.

```JavaScript
document.getElementById("demo").innerHTML = "Paragraph changed!";
```