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
    this.ageTimerId = 0;
    this.statusTimerId = 0;
  }
  startAgeTimer () {
    let self = this;
    self.ageTimerId = setInterval( function() {
      if (self.age === 3) {
        alert('GAME OVER - So it goes.');
        clearInterval(self.ageTimerId);
        clearInterval(self.statusTimerId);
      } else {
        self.age++;
        $('#age').text(`Age: ${self.age}`);
        }
    }, 5000);
  }

  startStatusTimer () {
    let self = this;
    self.statusTimerId = setInterval( function() {
      if (self.sustenance === 0 || self.energy === 0 || self.engagement === 0) {
        alert('GAME OVER - So it goes.');
        clearInterval(self.statusTimerId);
        clearInterval(self.ageTimerId);
      } else {
        self.sustenance--;
        $('#sustenance').text(`Sustenance: ${self.sustenance}`);
        self.energy--;
        $('#energy').text(`Energy: ${self.energy}`);
        self.engagement--;
        $('#engagement').text(`Engagement: ${self.engagement}`);
        }
    }, 1000);
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
  Salo.startStatusTimer();
});


console.log(Salo.age)