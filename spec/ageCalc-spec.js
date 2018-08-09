import { AgeCalc } from './../src/ageCalc.js'
const averageAge = 85;

describe('AgeCalc', function () {
  it('should cound seconds from date until todats date', function() {
    let newage = new AgeCalc(28);
    newage.ageInSeconds();
    expect(883008000).toEqual(newage.age);
  });
  it('should return users age on Mercury', function() {
    let newage = new AgeCalc(28);
    newage.ageMercury();
    expect(116.66666666666667).toEqual(newage.age);
  });
  it('should return users age on Venus', function() {
    let newage = new AgeCalc(28);
    newage.ageVenus();
    expect(45.16129032258065).toEqual(newage.age);
  });
  it('should return users age on Mars', function() {
    let newage = new AgeCalc(28);
    newage.ageVenus();
    expect(45.16129032258065).toEqual(newage.age);
  });
  it('should return users age on Jupiter', function() {
    let newage = new AgeCalc(28);
    newage.ageJupiter();
    expect(2.3608768971332212).toEqual(newage.age);
  });
  it('should find the difference in seconds between two dates', function() {
    let newage = new AgeCalc()
    let today = new Date(2018, 8, 9, 10, 10, 10);
    let lastYear = new Date(2017, 8, 9, 10, 10, 10);
    expect(newage.differenceDates(today, lastYear)).toEqual(31536000);
  });
  it('should return users years left on Mercury', function() {
    let newage = new AgeCalc(28);
    expect(newage.yearsLeftMercury(averageAge)).toEqual(237.5);
  });
  it('should return users years left on Venus', function() {
    let newage = new AgeCalc(28);
    expect(newage.yearsLeftVenus(averageAge)).toEqual(91.93548387096774);
  });
  it('should return users years left on Mars', function() {
    let newage = new AgeCalc(28);
    expect(newage.yearsLeftMars(averageAge)).toEqual(30.319148936170215);
  });
  it('should return users years left on Jupiter', function() {
    let newage = new AgeCalc(28);
    expect(newage.yearsLeftJupiter(averageAge)).toEqual(4.8060708263069145);
  });
  it('should return many years to user has left', function() {
    let newage = new AgeCalc(28);
    expect(newage.yearsPast(averageAge)).toEqual(-57);
  });

})
