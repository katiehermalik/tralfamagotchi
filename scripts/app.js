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
  setTimeout(saloMove, 167);
  gifSwitch()
  $('#play').prop('disabled', true);
});

$('#reset').on('click', () => {
  document.location.reload(true);
});

$('#rename').on('click', () => {
  $('#rename-active').slideToggle();
  $('#rename').slideToggle();
});

$('#submit').on('click', () => {
  let newName = $('#input').val();
  $('#name').text(`Name: ${newName}`);
  $('#rename-active').slideToggle();
  $('#rename').slideToggle();
  $('#input').val('');
  if (newName === "") {
    $('#name').text(`Name: Salo`);
  } 
});

$('#food').on('click', () => {
  Salo.isHungry();
});

$('#lights').on('click', () => {
  Salo.isSleepy();
});

$('#engage').on('click', () => {
  Salo.isBored();
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

  isHungry () {
    if (this.sustenance < 50) {
      this.sustenance++;
      $('#sustenance').text(`Sustenance: ${this.sustenance}`);
      $('#sus-bar').val(`${this.sustenance}`);
    } 
  };

  isSleepy () {
    if (this.energy < 50) {
      this.energy++;
      $('#energy').text(`Energy: ${this.energy}`);
      $('#energy-bar').val(`${this.energy}`);
      $('body').toggleClass('dark');
    }
  };

  isBored () {
    if (this.engagement < 50) {
      this.engagement++;
      $('#engagement').text(`Engagement: ${this.engagement}`);
      $('#engage-bar').val(`${this.engagement}`);
    }
  };

  startAgeTimer () {
    let self = this;
    self.ageTimerId = setInterval( function() {
      if (self.age === 2) {
        // TO DO // Stop at 3
        $('#adult-salo').addClass('fade').css({opacity: 0,});
        // alert('GAME OVER - So it goes.');
        clearInterval(self.ageTimerId);
        clearInterval(self.statusTimerId);
        clearInterval(moveTimerId);
        $('#food').prop('disabled', true);
        $('#lights').prop('disabled', true);
        $('#engage').prop('disabled', true);
      } else {
        self.age++;
        $('#age').text(`Age: ${self.age}`);
        if (self.age === 1) {
          $('#baby-salo').addClass('fade').css({opacity: 0,});
          $('#teen-salo').fadeIn(1500)
        } else if (self.age === 2) {
          $('#teen-salo').fadeOut(1500)
          $('#adult-salo').fadeIn(1500);
        } 
      }
    }, 10000);
  }

  startStatusTimer () {
    let self = this;
    self.statusTimerId = setInterval( function() {
      if (self.sustenance === 0 || self.energy === 0 || self.engagement === 0) {
        $('#baby-salo').addClass('fade').css({opacity: 0,});
        $('#teen-salo').addClass('fade').css({opacity: 0,});
        $('#adult-salo').fadeOut(1500);
        // alert('GAME OVER - So it goes.');
        clearInterval(self.statusTimerId);
        clearInterval(self.ageTimerId);
        clearInterval(moveTimerId);
        $('#food').prop('disabled', true);
        $('#lights').prop('disabled', true);
        $('#engage').prop('disabled', true);
      } else if ($('body').hasClass('dark')) {
          if (self.energy <= 49) {
            $('#food').prop('disabled', true);
            $('#engage').prop('disabled', true);
            self.sustenance--;
            $('#sustenance').text(`Sustenance: ${self.sustenance}`);
            $('#sus-bar').val(`${self.sustenance}`);
            self.energy += 2;
            $('#energy').text(`Energy: ${self.energy}`);
            $('#energy-bar').val(`${self.energy}`);
            self.engagement--;
            $('#engagement').text(`Engagement: ${self.engagement}`);
            $('#engage-bar').val(`${self.engagement}`);
          } else {
            $('body').toggleClass('dark');
          }
      } else {
          $('#food').prop('disabled', false);
          $('#engage').prop('disabled', false);
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
    }, 500);
  }
}

class Tralfamagotchi extends Pet {
  constructor() {
    super('Salo', 0, 50, 50, 50);
    $('#name').text(`Name: Salo`)
  }
}

const Salo = new Tralfamagotchi();


function gifSwitch() {
  $('#still-salo').hide();
  $('#baby-salo').show();
}

let headedLeft = true;

function saloMove() {
  moveTimerId = setInterval( function () {
    if (headedLeft === true) {
      if ($('.salo').position().left > 50) {
      $('.salo').animate({left: '-=4vw'}, 500, 'swing');
      } else if ($('.salo').position().left < 50) {
        console.log($('.salo').position());
        $('.salo').css('transform', 'scaleX(-1)');
        $('.salo').animate({left: '+=4vw'}, 500, 'swing');
        headedLeft = false;
      }
    
    } else if (headedLeft === false) {
      console.log($('.salo').position());
      if ($('.salo').position().left < 650) {
      $('.salo').animate({left: '+=4vw'}, 500, 'swing');
      } else if ($('.salo').position().left > 650) {
        $('.salo').css('transform', 'scaleX(1)');
        $('.salo').animate({left: '-=4vw'}, 500, 'swing'); 
        headedLeft = true
      }
    }   
  }, 1350);
}
