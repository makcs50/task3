const tamogotchi = {
  name: "Ahmad,",
  meal: 1,
  energy: 4,
  mood: 4,
  age: 20,
  getStatus: function () {
    if(this.meal <= 0 || this.energy <= 0 || this.mood <= 0){
        return `${this.name}'Дала геч дойла'`
    }

    else{
    let isHungry = this.meal < 3 ? 'Я голоден' : 'Я не голоден'
    let isSleap = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать'
    let iFune = this.mood < 3 ? 'Мне скучно' : 'Мне весело'
    let isMarry = this.age > 15 ? 'Хочеть жениться' : "все равно хочет жениться"
    return `${tamogotchi.name}, ${isMarry} Настроение: ${iFune } ${tamogotchi.mood}, Еда: ${isHungry } ${tamogotchi.meal}, Энергия: ${isSleap } ${tamogotchi.energy},`;
    } 
},
  setName: function (obj) {
    return (this.name = obj);
  },
  eat: function () {
    if( this.meal < 5){
    this.meal++;
    this.mood--;
    }
    console.log(this.meal, this.mood);
  },
  sleap: function () {
    if( this.energy < 5){
    this.energy++;
    this.meal--;
    }
    console.log(this.energy, this.meal);
  },
  play: function () {
    if( this.mood < 5){
    this.mood++;
    this.energy--;
    }
    console.log(this.mood, this.energy);
  },
};

console.log(tamogotchi.setName("Ahmad"));
console.log(tamogotchi.eat());
console.log(tamogotchi.sleap());
console.log(tamogotchi.play());
console.log(tamogotchi.getStatus());
