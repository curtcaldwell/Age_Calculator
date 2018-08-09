import { AgeCalc } from './../src/ageCalc.js'

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
})
