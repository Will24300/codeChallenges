class Lamp {
  constructor(color, on = false) {
    (this.color = color), (this.on = on);
  }
  toggleSwitch() {
    if (this.on === false) {
      return (this.on = true);
    } else {
      return (this.on = false);
    }
  }
  state() {
    return this.on ? "The lamp is on" : "The lamp is off";
  }
}
const lamp1 = new Lamp("blue");
lamp1.toggleSwitch();
lamp1.toggleSwitch();
console.log(lamp1.state());
