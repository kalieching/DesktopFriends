let p = new p5(() => { });

let selfHelpSnake, productivityPanda, moneySavingMonkey;
let backgroundImg;

p.setup = function () {
  // create self help snake using animal class at (5, 100)
  backgroundImg = p.loadImage("/img/googlechrome.png");
  p.createCanvas(p.windowWidth- 210, p.windowHeight + 100);
  // p.image(backgroundImg, 0, 0, 75, 75);
  // FONT CHANGE
  p.textFont("Helvetica");
  p.textStyle(p.BOLD);
  
  selfHelpSnake = new Animal(10, 100,
    "/img/snake.png",
    ["Hey, go drink a glass of water!", "Why not take a quick stretch break?"]);

  snakeReminders = new Reminder(selfHelpSnake);
   
  productivityPanda = new Animal(10, 200,
    "/img/panda.png",
    ["Hi! Did you read your book today?"]); 

    pandaReminders = new Reminder(productivityPanda);

  moneySavingMonkey = new Animal(10, 300,
    "/img/monkey.png",
    ["Hello, make sure to save $5 today!"]);

    monkeyReminders = new Reminder(moneySavingMonkey);
  
}

p.draw = function () {
 p.background(backgroundImg, 0, 0, 150, 150);
  
  // if (p.millis() > 500 + selfHelpSnake.startTime) {
  //   selfHelpSnake.show(); 
  //   selfHelpSnake.startTime = p.millis();
  // }
  // selfHelpSnake.draw(); 

  // if (p.millis() > 500 + productivityPanda.startTime) {
  //   productivityPanda.show();
  //   productivityPanda.startTime = p.millis();
  // }
  // productivityPanda.draw(); 
  
  // if (p.millis() > 500 + moneySavingMonkey.startTime) {
  //   moneySavingMonkey.show();
  //   moneySavingMonkey.startTime = p.millis();
  // }
  // moneySavingMonkey.draw();

  selfHelpSnake.displayOnInterval(8000);
  productivityPanda.displayOnInterval(7000);
  moneySavingMonkey.displayOnInterval(9000);

  if (selfHelpSnake.x <= -220) {
    snakeReminders.chooseReminder("s");
  }
  if (productivityPanda.x <= -220) {
    pandaReminders.chooseReminder("p");
  }
  if (moneySavingMonkey.x <= -220) {
    monkeyReminders.chooseReminder("m");
  }

  checkboxes();
}

// SIDE PANEL FUNCTIONS
function openSettings() {
  document.getElementById('settings').setAttribute("style","width:400px");
}

function closeSettings() {
  document.getElementById('settings').setAttribute("style","width:0px");
}



function checkboxes() {
  if (document.getElementById('snake').checked) {
    selfHelpSnake.enableAnimal(true);
    
    // REMINDERS FOR SNAKE
    
    if (document.getElementById('snake_water').checked) {
      snakeReminders.enableReminder(true, "water");
    }

    if (document.getElementById('snake_posture').checked) {
      snakeReminders.enableReminder(true, "posture");
    }
  }

  if (document.getElementById('snake').checked == false) {
    selfHelpSnake.enableAnimal(false);
  }

  if (document.getElementById('panda').checked) {
    productivityPanda.enableAnimal(true);
    console.log("You have become friends with the productivity panda!");

    // REMINDERS FOR PANDA
    
    if (document.getElementById('panda_deadlines').checked) {
      pandaReminders.enableReminder(true, "deadline");
    }

    if (document.getElementById('panda_meetings').checked) {
      pandaReminders.enableReminder(true, "meeting");
    }
  }

  if (document.getElementById('panda').checked == false) {
    productivityPanda.enableAnimal(false);
  }



  if (document.getElementById('monkey').checked) {
    moneySavingMonkey.enableAnimal(true);
    // REMINDERS FOR MONKEY 
    if (document.getElementById('monkey_save').checked) {
      monkeyReminders.enableReminder(true, "save");
    }
    
    if (document.getElementById('monkey_stock').checked) {
      monkeyReminders.enableReminder(true, "stock");
    }
    
    console.log("You have become friends with the money-saving monkey!");
  }

  if (document.getElementById('monkey').checked == false) {
      moneySavingMonkey.enableAnimal(false);
  }
}

// When the user clicks on <div>, open the popup
function snakePopup() {
  var popup = document.getElementById("snakePopup");
  popup.classList.toggle("show");
}

function pandaPopup() {
  var popup = document.getElementById("pandaPopup");
  popup.classList.toggle("show");
}

function monkeyPopup() {
  var popup = document.getElementById("monkeyPopup");
  popup.classList.toggle("show");
}