var a = [
    ['url', 13, 2002],
    ['port', 15, 512]
];
function funcao() {
    a.forEach(function (element) {
        console.log(element[0]);
    });
}
funcao();
var CardSuits;
(function (CardSuits) {
    CardSuits[CardSuits["Clubs"] = 0] = "Clubs";
    CardSuits[CardSuits["Hearts"] = 1] = "Hearts";
    CardSuits[CardSuits["Spades"] = 2] = "Spades";
    CardSuits[CardSuits["Diamonds"] = 3] = "Diamonds";
})(CardSuits || (CardSuits = {}));
function funcoes() {
    var x = 2;
    if (x === CardSuits.Hearts) {
        alert('true');
    }
    else {
        alert('false');
    }
    console.log(CardSuits.Hearts);
}
funcoes();
