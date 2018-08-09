import { AgeCalc } from './../src/ageCalc.js'

describe('AgeCalc', function () {
  it('should cound seconds from date until todats date', function() {
    let newAge = new AgeCalc(28);
    newage.ageInSeconds();
    expect(88300800).toEqual(newage.age);
  });
})
