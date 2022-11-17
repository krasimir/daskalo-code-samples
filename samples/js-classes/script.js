const CarOld = function (initialColor) {
  let color = initialColor;
  let speed = 0;

  return {
    getSpeed() {
      return speed;
    },
    speedUp() {
      speed += 1;
    },
    slowDown() {
      speed -= 1;
      if (speed < 0) {
        speed = 0;
      }
    }
  }
}

const car = CarOld('green');
car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();
// console.log(car.getSpeed());


class Car {
  color = 'red';
  speed = 0;
  constructor(initialColor) {
    this.color = initialColor;
  }
  speedUp() {
    this.speed += 1;
  }
  slowDown() {
    this.speed -= 1;
    if (this.speed < 0) {
      this.speed = 0;
    }
  }
}

const car2 = new Car('green');
car2.speedUp();
car2.speedUp();
car2.speedUp();
console.log(car2);

class SportCar extends Car {
  speed = 10;
}

const car3 = new SportCar('blue');
console.log(car3);

const user = {
  name: 'Krasimir',
  changeName(str) {
    this.name = str;
  }
}

user.changeName('Ivan')
console.log(user);




