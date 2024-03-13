sport = ['MTB', 'PAINTBALL', 'E-SPORTS', 'ROLLER DERBY', 'BASKETBALL', 'FIRMENBEKLEIDUNG']
product = ['JERSEYS', 'MERGE']
sportImages = ['./img/slideshow/mtb.jpg', './img/slideshow/paintball.jpg', './img/slideshow/esports.jpg', './img/slideshow/roller-derby.jpg', './img/slideshow/basketball.jpg', './img/slideshow/business.jpg',]

picture = 0;


function onload() {
    let chosenSport = document.getElementById('slideShowSport');
    chosenSport.innerHTML = `<img src="${sportImages[0]}">`;
}


function addChosenSport(i) {
    let chosenSport = document.getElementById('chosenSport');
    chosenSport.innerHTML = `<img src="./img/icon-check.png" id="check-icon"> ${sport[i]}`;
}


function addChosenProduct(i) {
    let chosenProduct = document.getElementById('chosenProduct');
    chosenProduct.innerHTML = `<img src="./img/icon-check.png" id="check-icon"> ${product[i]}`;
}


function sportContactForm() {
    let sportValueInput = document.getElementById('sportContactForm').value;
    let chosenSport = document.getElementById('chosenSport');
    chosenSport.innerHTML = `<img src="./img/icon-check.png" id="check-icon"> ${sportValueInput}`;
}


function nextPicture() {
    picture++;
    let slideShowSport = document.getElementById('slideShowSport');
    slideShowSport.innerHTML = `
    <img src="${sportImages[picture]}" id="currentSlide">
    `;
}


document.addEventListener('DOMContentLoaded', function () {
    let buttonMerch = document.getElementById('btnMerch');
    let buttonJerseys = document.getElementById('btnJerseys');

    function styleOnClick(clickedButton, otherButton) {
        clickedButton.classList.add('hovered');
        otherButton.classList.remove('hovered');
    }

    buttonMerch.addEventListener('click', function () {
        styleOnClick(buttonMerch, buttonJerseys);
    });

    buttonJerseys.addEventListener('click', function () {
        styleOnClick(buttonJerseys, buttonMerch);
    });
});


document.addEventListener('DOMContentLoaded', function () {


    // Hole alle Buttons
    let buttonMtb = document.getElementById('btnMtb');
    let buttonPaintball = document.getElementById('btnPaintball');
    let buttonESports = document.getElementById('btnESports');
    let buttonRollerDerby = document.getElementById('btnRollerDerby');
    let buttonBasketball = document.getElementById('btnBasketball');
    let buttonFirmenbekleidung = document.getElementById('btnFirmenbekleidung');

    // Füge Event-Listener für jeden Button hinzu
    buttonMtb.addEventListener('click', function () {
        styleOnClick(buttonMtb, [buttonPaintball, buttonESports, buttonRollerDerby, buttonBasketball, buttonFirmenbekleidung]);
        addChosenSport(0);
    });

    buttonPaintball.addEventListener('click', function () {
        styleOnClick(buttonPaintball, [buttonMtb, buttonESports, buttonRollerDerby, buttonBasketball, buttonFirmenbekleidung]);
        addChosenSport(1);
    });

    buttonESports.addEventListener('click', function () {
        styleOnClick(buttonESports, [buttonMtb, buttonPaintball, buttonRollerDerby, buttonBasketball, buttonFirmenbekleidung]);
        addChosenSport(2);
    });

    buttonRollerDerby.addEventListener('click', function () {
        styleOnClick(buttonRollerDerby, [buttonMtb, buttonPaintball, buttonESports, buttonBasketball, buttonFirmenbekleidung]);
        addChosenSport(3);
    });

    buttonBasketball.addEventListener('click', function () {
        styleOnClick(buttonBasketball, [buttonMtb, buttonPaintball, buttonESports, buttonRollerDerby, buttonFirmenbekleidung]);
        addChosenSport(4);
    });

    buttonFirmenbekleidung.addEventListener('click', function () {
        styleOnClick(buttonFirmenbekleidung, [buttonMtb, buttonPaintball, buttonESports, buttonRollerDerby, buttonBasketball]);
        addChosenSport(5);
    });


    // Definiere eine Funktion, um den Stil der Buttons zu ändern
    function styleOnClick(clickedButton, otherButtons) {
        clickedButton.classList.add('hovered'); // Hinzufügen der Klasse 'hovered' zum angeklickten Button
        // Iteriere über die anderen Buttons und entferne die Klasse 'hovered' von ihnen
        otherButtons.forEach(function (button) {
            if (button !== clickedButton) {
                button.classList.remove('hovered');
            }
        });
    }
});


function scrollToElement() {
    // Finde das Ziel-Element, zu dem gescrollt werden soll
    var element = document.getElementById('2');

    // Scrolle zum Element
    element.scrollIntoView({ behavior: 'smooth' });
}


