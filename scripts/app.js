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

// ----------------------------------------  Global Variables

let movingLeft = true;

// ----------------------------------------  Event Listeners

$('#play').on('click', () => {
  Salo.startAgeTimer();
  Salo.startStatusTimer();
  setTimeout(move, 167);
  gifSwitch()
  $('#play').prop('disabled', true);
});

$('#reset').on('click', () => {
  document.location.reload(true);
});

$('#rules').on('click', () => {
  $('.modal').fadeIn(1500);
  $('.popup-rules').fadeIn(1500);
  $('.popup-content').css('display', 'flex');
  $('.popup-flex').css('display', 'flex');
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
$
$('#food').on('click', () => {
  Salo.isHungry();
});

$('#lights').on('click', () => {
  Salo.isSleepy();
});

$('#engage').on('click', () => {
  Salo.isBored();
});

$('.close').on('click', () => {
  $('.modal').fadeOut(1500);
  $('.victory').fadeOut(1500);
  $('.popup-rules').fadeOut(1500);
  $('.game-over').fadeOut(1500);

});

// ----------------------------------- Tamagatchi class, methods, and timers
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

  isBored () {
    if (this.engagement < 50) {
      this.engagement++;
      $('#engagement').text(`Engagement: ${this.engagement}`);
      $('#engage-bar').val(`${this.engagement}`);
    }
  };
  
  isSleepy () {
    if (this.energy < 50) {
      this.energy++;
      $('#energy').text(`Energy: ${this.energy}`);
      $('#energy-bar').val(`${this.energy}`);
      $('body').toggleClass('dark');
      
      // Switching between still and animated images for sleeping and waking up
      
      if ($('body').hasClass('dark')) {
        clearInterval(moveTimerId);
        if ($("#baby-salo").css('opacity') !== '0') {
        $('#baby-salo').css('opacity', '0');
        $('#baby-sleep').css('opacity', '1');
        } else if ($("#teen-salo").css('opacity') !== '0') {
          $('#teen-salo').css('opacity', '0');
          $('#teen-sleep').css('opacity', '1');
        } else if ($("#adult-salo").css('opacity') !== '0') {
          $('#adult-salo').css('opacity', '0');
          $('#adult-sleep').css('opacity', '1');
        }
      } else {
        if ($("#baby-sleep").css('opacity') !== '0') {
          $('#baby-sleep').css('opacity', '0');
          $('#baby-salo').css('opacity', '1');
          } else if ($("#teen-sleep").css('opacity') !== '0') {
            $('#teen-sleep').css('opacity', '0');
            $('#teen-salo').css('opacity', '1');
          } else if ($("#adult-sleep").css('opacity') !== '0') {
            $('#adult-sleep').css('opacity', '0');
            $('#adult-salo').css('opacity', '1');
          }
        setTimeout(move, 167);
      }
    }
  };

  // -------------------------- Age Timer (increments)

  startAgeTimer () {
    let self = this;
    self.ageTimerId = setInterval( function() {
      if (self.age === 2) {
        $('.modal').fadeIn(1500);
        $('.victory').fadeIn(1500);
        $('.popup-content').css('display', 'flex');
        $('.popup-flex').css('display', 'flex');
        if ($('body').hasClass('dark')) {
          $('body').toggleClass('dark');
          $('#adult-sleep').css('opacity', '0');
          $('#adult-salo').css('opacity', '1');
        }
        $('#age').text(`Age: 3`);
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
          if ($('body').hasClass('dark')) {
            $('#baby-sleep').css('opacity', '0');
            $('#teen-sleep').css('opacity', '1');
          } else {
            $('#baby-salo').css('opacity', '0');
            $('#teen-salo').css('opacity', '1');
          }
        } else if (self.age === 2) {
          if ($('body').hasClass('dark')) {
            $('#teen-sleep').css('opacity', '0');
            $('#adult-sleep').css('opacity', '1');
          } else {
            $('#teen-salo').css('opacity', '0');
            $('#adult-salo').css('opacity', '1');
          }
        } 
      }
    }, 30000);
  }

  // ----------------------------- Status Timer (decrements)

  startStatusTimer () {
    let self = this;
    self.statusTimerId = setInterval( function() {
      if (self.sustenance === 0 || self.energy === 0 || self.engagement === 0) {
        $('#baby-salo').fadeOut(1500);
        $('#teen-salo').fadeOut(1500);
        $('#adult-salo').fadeOut(1500);
        $('#baby-sleep').fadeOut(1500);
        $('#teen-sleep').fadeOut(1500);
        $('#adult-sleep').fadeOut(1500);
        $('.modal').fadeIn(1500);
        $('.game-over').fadeIn(1500);
        $('.popup-content').css('display', 'flex');
        $('.popup-flex').css('display', 'flex');
        clearInterval(self.statusTimerId);
        clearInterval(self.ageTimerId);
        clearInterval(moveTimerId);
        $('#food').prop('disabled', true);
        $('#lights').prop('disabled', true);
        $('#engage').prop('disabled', true);

        // Disable other 'care' buttons if sleeping

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

          // Switching to animated images if waking up and enabling all buttons

          } else {
            $('body').toggleClass('dark');
            if($("#baby-sleep").css('opacity') !== '0') {
              $('#baby-sleep').css('opacity', '0');
              $('#baby-salo').css('opacity', '1');
              } else if ($("#teen-sleep").css('opacity') !== '0') {
                $('#teen-sleep').css('opacity', '0');
                $('#teen-salo').css('opacity', '1');
              } else if ($("#adult-sleep").css('opacity') !== '0') {
                $('#adult-sleep').css('opacity', '0');
                $('#adult-salo').css('opacity', '1');
              }
            setTimeout(move, 167);
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

// ------------------------------------------- Instantiate Tralfamagotchi
class Tralfamagotchi extends Pet {
  constructor() {
    super('Salo', 0, 50, 50, 50);
    $('#name').text(`Name: Salo`)
  }
}

const Salo = new Tralfamagotchi();

// ------------------------------------------------------ Animation

function gifSwitch() {
  $('#still-salo').css('opacity', '0');
  $('#baby-salo').css('opacity', '1');  
}

function move() {
  moveTimerId = setInterval( function () {
    if (movingLeft === true) {
      if ($('.salo').position().left > 200) {
      $('.salo').animate({left: '-=4vw'}, 500, 'swing');
      } else if ($('.salo').position().left < 200) {
        $('.salo').css('transform', 'scaleX(-1)');
        $('.salo').animate({left: '+=4vw'}, 500, 'swing');
        movingLeft = false;
      }
    
    } else if (movingLeft === false) {
      if ($('.salo').position().left < 500) {
      $('.salo').animate({left: '+=4vw'}, 500, 'swing');
      } else if ($('.salo').position().left > 500) {
        $('.salo').css('transform', 'scaleX(1)');
        $('.salo').animate({left: '-=4vw'}, 500, 'swing'); 
        movingLeft = true;
      }
    }   
  }, 1350);
}

