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

$('#play').on('click', () => {
  Salo.startAgeTimer();
  Salo.startStatusTimer();
});

$('#rename').on('click', () => {
  // TO DO // css transition to larger div
});

$('#submit').on('click', () => {
  let newName = $('#input').val();
  $('#name').text(`Name: ${newName}`);
  if (newName === "") {
    $('#name').text(`Name: Salo`);
  } 
});

$('#lights').on('click', () => {
  if (Salo.energy < 10) {
  Salo.energy++;
  $('#energy').text(`Energy: ${Salo.energy}`);
  $('#energy-bar').val(`${Salo.energy}`);
  $('body').toggleClass('dark');
  // TO DO // disable other buttons in dark mode
  // TO DO // attach an animation to represent Salo sleeping
  } else {
  // TO DO // attach an animation - shake head 'no'
  }
});

$('#food').on('click', () => {
  if (Salo.sustenance < 10) {
  Salo.sustenance++;
  $('#sustenance').text(`Sustenance: ${Salo.sustenance}`);
  $('#sus-bar').val(`${Salo.sustenance}`);
  // TO DO // attach an animation to represent Salo eating
  } else {
  // TO DO // attach an animation - shake head 'no'
  }
});

$('#engage').on('click', () => {
  if (Salo.engagement < 10) {
  Salo.engagement++;
  $('#engagement').text(`Engagement: ${Salo.engagement}`);
  $('#engage-bar').val(`${Salo.engagement}`);
  // TO DO // attach an animation to represent Salo playing
  } else {
  // TO DO // attach an animation - shake head 'no'
  }
});

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
        // TO DO // Stop at 3
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
      } else if ($('body').hasClass('dark')) {
          if (self.energy <= 9) {
            self.sustenance--;
            $('#sustenance').text(`Sustenance: ${self.sustenance}`);
            $('#sus-bar').val(`${self.sustenance}`);
            self.energy++;
            $('#energy').text(`Energy: ${self.energy}`);
            $('#energy-bar').val(`${self.energy}`);
            self.engagement--;
            $('#engagement').text(`Engagement: ${self.engagement}`);
            $('#engage-bar').val(`${self.engagement}`);
          } else {
            $('body').toggleClass('dark');
          }
      } else {
          self.sustenance--;
          $('#sustenance').text(`Sustenance: ${self.sustenance}`);
          $('#sus-bar').val(`${self.sustenance}`);
          self.energy--;
          $('#energy').text(`Energy: ${self.energy}`);
          $('#energy-bar').val(`${self.energy}`);
          self.engagement--;
          $('#engagement').text(`Engagement: ${self.engagement}`);
          $('#engage-bar').val(`${self.engagement}`);
          }
    }, 1000);
  }
}

class Tralfamagotchi extends Pet {
  constructor() {
    super('Salo', 0, 10, 10, 10);
    $('#name').text(`Name: Salo`)
  }
}

const Salo = new Tralfamagotchi();