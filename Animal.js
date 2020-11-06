
class Animal {
  constructor(x, y, image, reminders) {
    this.onScreenX = x;
    this.onScreenY = y;
    this.offScreenX = this.onScreenX - 250;
    this.offScreenY = this.onScreenY;
    this.x = this.offScreenX;
    this.y = this.offScreenY;
    this.v = 0.5;
    this.a = 0.2;

    this.width = 50;
    this.height = 50;

    this.image = p.loadImage(image);
    this.reminders = reminders;
    this.currentReminder = 0;
    this.appointments = [];
    this.appointmentSoon = false;
    this.currentAppointment = 0;

    this.isVisible = false;
    this.enabled = false;
    this.startTime = 0;
  }

  show() {
    if (this.enabled) {
      this.isVisible = true;
      this.currentReminder = p.floor(p.random(this.reminders.length));
      this.v = 1;
    }
  }

  hide() {
    this.isVisible = false;
    this.v = 1;
  }
  
  draw() {
    if (this.enabled) {
      if (this.isVisible) {
        if (this.x < this.onScreenX) {
          this.v += this.a;
          this.x += this.v;
        }

        if (this.x >= this.onScreenX) {
          for (let i = 0; i < this.appointments.length; i++) {
            if (this.appointments[i].date.getTime() - Date.now() < 5 * 60 * 1000) {
              this.appointmentSoon = true;
              this.currentAppointment = i;
            }
          }

          if (this.appointmentSoon) {
            console.log("appointment soon!");
          }
        }
      } else {
        if (this.x > this.offScreenX) {
          this.v += this.a;
          this.x -= this.v;
        }
      }

      p.image(this.image, this.x, this.y, this.width, this.height);
    }
  }

  displayOnInterval(interval) {
    if (p.millis() > interval + this.startTime) {
      this.show();
      this.startTime = p.millis();
    }

    if (p.millis() > 2500 + this.startTime) {
      this.hide();
    }
    this.draw();
  }

  enableAnimal(checked) {
    this.enabled = checked;
  }
}

