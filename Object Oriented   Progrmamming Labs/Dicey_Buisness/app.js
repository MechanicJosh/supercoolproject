class Die {
    static diceArray = [];
    static counter = 0;
    constructor(){
        Die.counter++;
        this.id = Die.counter;
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
        this.div.addEventListener('click', ()=> { this.roll(); });
        this.div.addEventListener('dblclick', () =>{
            const index = Die.diceArray.indexOf(this);
            Die.diceArray.splice(index, 1);
            this.div.remove();
        });

        document.getElementById('dice-container').appendChild(this.div);
    }
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1 ;
        this.div.innerText = this.value;
    }
}

document.getElementById('generate-die').addEventListener('click', function(){
    let die = new Die;
    Die.diceArray.push(die);
});

document.getElementById('roll-dice').addEventListener('click', () => {
    Die.diceArray.forEach(die => die.roll());
});

document.getElementById('sum-dice').addEventListener('click', sumDice);


function sumDice(){
    const sum = Die.diceArray.reduce((accumulator, currentDie) => {
        return accumulator + currentDie.value;
    }, 0);
    alert(`The sum of the dice is ${sum}`);
    console.log();
}

