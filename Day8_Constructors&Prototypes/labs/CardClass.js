class CardClass {
    constructor (value, suit){
        this.value = value;
        this.suit = suit;
    }

    toString() {
        if (this.value === 1){
            return `Card { Ace of ${this.suit[0].toUpperCase() + this.suit.slice(1)} }`;
        } else if (this.value === 13) {
            return `Card { King of ${this.suit[0].toUpperCase() + this.suit.slice(1)} }`;
        }
        return `Card { ${this.value} of ${this.suit[0].toUpperCase() + this.suit.slice(1)} }`;
    }
}

class Deck {
    constructor() {
        // this.deck = [...an array of Card Instances]
        this.deck = this.createDeck;
    }

    createDeck(){
        const deck = [];
        const values = [];
        for (let i = 1; i<13; i++) {
            values.push(i);
        }

        const suits = ['spades', 'hearts', 'clubs', 'diamonds'];

        for (let value of values){
            for (let suit of suits){
                deck.push(new CardClass(value, suit));
            }
        }
        return deck;
    }

    draw() {
        const topCard = this.deck[0];
        this.deck = this.deck.slice(1);
        return topCard
    }

    reset(){
        this.deck = this.createDeck();
    }
}