export class AgeCalc {
  constructor(age, date){
    this.age = age;
    this.date = date;
  }
  ageInSeconds(){
    this.age = this.age * 31536000;
  }
  ageMercury(){
    this.age = this.age / .24;
  }
}
