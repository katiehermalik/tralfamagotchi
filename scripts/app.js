// Create a class for Tralfamagotchi
// Instantiate Salo
// Attach event listener to 'play' button 
    // - will activate timer function
// Create a timer that counts down from 10
    // - attach the countdown to 'Sustenance', 'Energy', and 'Engagement'
    // - will decrement scores at matching intervals.
// Create another timer that counts up to 3 over 30 second intervals.
    // - will increment 'age'.
// Attach event listeners to 'lights', 'food', 'engage'
    // - will add 1 to 'Sustenance', 'Energy', and 'Engagement' (corresponding button)
// Attach event listener to 'Rename' button
    // - will activate form
      // - grab input value of form and update 'name'
// Create Game Over alert if any value reaches 0 or age reaches 3.


class Pet {
  constructor (name, age, sustenance, energy, engagement) {
    this.name = name;
    this.age = age;
    this.sustenance = sustenance;
    this.energy = energy;
    this.engagement = engagement;
  }

  startAgeTimer () {
    let self = this;
    const timerId = setInterval( function() {
      if (self.age === 2) {
        alert('GAME OVER - So it goes.');
        clearInterval(timerId);
      }
        self.age++;
        $('#age').text(`Age: ${self.age}`);
    }, 5000);
  }


}

class Tralfamagotchi extends Pet {
  constructor(name) {
    super(name, 0, 10, 10, 10);
    $('#name').text(`Name: ${name}`)
  }
}

const Salo = new Tralfamagotchi('Salo');


$('#play').on('click', () => {
  Salo.startAgeTimer();
});


console.log(Salo.age)