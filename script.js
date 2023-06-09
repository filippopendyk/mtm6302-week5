const myMessage = document.getElementById("message");

const myColors = ['red', 'blue', 'green'];

const darkColors = [
    'darkseagreen',
    'darkgreen',
    'darkred'
];

const allColors = myColors.concat(darkColors);

myMessage.textContent += allColors;