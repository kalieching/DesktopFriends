class Reminder {
  constructor(animal) {
    this.animal = animal;
    console.log(this.animal);

    this.snakeReminders = [
      "What's up? Go take a sip of water and stay hydrated!",
      "Hey, sit up straight and fix that posture of yours!"
    ];

    this.pandaReminders = [
      "You have a deadline coming up tomorrow!",
      "Your schedule indicates a meeting in 10 minutes!"
    ];

    this.monkeyReminders = [
      "Don't forget to put $10 away in your savings!", 
      "Set aside some time to check the stock market."
    ];

    // s for snake, m for monkey, p for panda

    this.sEnabled = [false, false];
    this.pEnabled = [false, false];
    this.mEnabled = [false, false];
    this.sEnabledReminderIndexes = [];
    this.pEnabledReminderIndexes = [];
    this.mEnabledReminderIndexes = [];
    this.sIndex = 0;
    this.pIndex = 0;
    this.mIndex = 0;

    this.sWaterEnabled = false;
    this.sPostureEnabled = false;
    this.pDeadlineEnabled = false;
    this.pMeetingEnabled = false;
    this.mSaveEnabled = false;
    this.mStockEnabled = false;

    this.shownReminderIndex = 0;
  }

  enableReminder(checked, category) {

    if (category.localeCompare("water") === 0) {
      console.log(category);
      this.sWaterEnabled = checked;
      this.sEnabled[0] = checked;
      //this.sendReminder("s", 0);
    }

    if (category.localeCompare("posture") === 0) {
      this.sPostureEnabled = checked;
      this.sEnabled[1] = checked;
      //this.sendReminder("s", 1);
    }

    if (category.localeCompare("deadline") === 0) {
      this.pDeadlineEnabled = checked;
      this.pEnabled[0] = checked;
      //this.sendReminder("p", 0);
    }

    if (category.localeCompare("meeting") === 0) {
      this.pMeetingEnabled = checked;
      this.pEnabled[1] = checked;
      //this.sendReminder("p", 1);
    }

    // send monkey reminder
    if (category.localeCompare("save") === 0) {
      this.mSaveEnabled = checked;
      this.mEnabled[0] = checked;
      //this.sendReminder("m", 0);
    }

    
    if (category.localeCompare("stock") === 0) {
      this.mStockEnabled = checked;
      this.mEnabled[1] = checked;
      //this.sendReminder("m", 1);
    }

    if (this.sEnabledReminderIndexes.length > 0) {
      this.sendReminder("s", this.sIndex);
    }

    if (this.pEnabledReminderIndexes.length > 0) {
      this.sendReminder("p", this.pIndex);
    }
    
    if (this.mEnabledReminderIndexes.length > 0) {
      this.sendReminder("m", this.mIndex);
    }

    //this.sendReminder("s", this.sIndex);
    //this.sendReminder("p", this.pIndex);
    //this.sendReminder("m", this.mIndex);

  }

  chooseReminder(animalR) {
    if (animalR.localeCompare("s") === 0) {
      this.sEnabledReminderIndexes = [];

      for (let i = 0; i < this.sEnabled.length; i++) {
        if (this.sEnabled[i]) {
          this.sEnabledReminderIndexes.push(i);
        }
      }
      
      this.sIndex = this.sEnabledReminderIndexes[p.floor(p.random(this.sEnabledReminderIndexes.length))];
    }

    if (animalR.localeCompare("p") === 0) {
      this.pEnabledReminderIndexes = [];

      for (let i = 0; i < this.pEnabled.length; i++) {
        if (this.pEnabled[i]) {
          this.pEnabledReminderIndexes.push(i);
        }
      }

      this.pIndex = this.pEnabledReminderIndexes[p.floor(p.random(this.pEnabledReminderIndexes.length))];
    }

    if (animalR.localeCompare("m") === 0) {
      this.mEnabledReminderIndexes = [];

      for (let i = 0; i < this.mEnabled.length; i++) {
        if (this.mEnabled[i]) {
          this.mEnabledReminderIndexes.push(i);
        }
      }

      this.mIndex = this.mEnabledReminderIndexes[p.floor(p.random(this.mEnabledReminderIndexes.length))];
    }
  }

  sendReminder(animalR, remindNum) {
    
    this.drawReminderBubble(animalR);

    p.fill(0);
    p.textSize(13);
    
    if (animalR.localeCompare("s") === 0) {
      p.text(this.snakeReminders[remindNum], this.animal.x + 60, this.animal.y, 150, 100);
    } else if (animalR.localeCompare("p") === 0) {
      p.text(this.pandaReminders[remindNum], this.animal.x + 60, this.animal.y, 150, 100);
    } else if (animalR.localeCompare("m") === 0) {
      p.text(this.monkeyReminders[remindNum], this.animal.x + 60, this.animal.y, 150, 100);
    }
  }

  drawReminderBubble(animal) {
    p.noStroke();
    if (animal.localeCompare("s") === 0) {
      p.fill(197, 240, 208);
      p.rect(this.animal.x + 55, this.animal.y- 5, 155, 57, 10);
    } else if (animal.localeCompare("p") === 0) {
      p.fill(240, 222, 255);
      p.rect(this.animal.x + 55, this.animal.y- 5, 155, 57, 10);
    } else if (animal.localeCompare("m") === 0) {
      p.fill(255, 220, 189);
      p.rect(this.animal.x + 55, this.animal.y- 5, 155, 57, 10);
    }
  }
}