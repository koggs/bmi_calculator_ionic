import {by, browser, element} from 'protractor'
describe('Calculator', () => {
  it('fill in form', () => {
    element(by.css('[aria-labelledby="lbl-0"]')).sendKeys(90); // fill in the weight
    element(by.css('[aria-labelledby="lbl-1"]')).sendKeys(186); // fill in the height
    element(by.buttonText('Calculate')).click(); // click the calculation button
    browser.sleep(1000); // gives the browser some time to load the answer to the page

    expect(element(by.css('.card-content'))
      .getText())
      .toContain('Person: Weight 90 kg, Height 186 cm')

    expect(element(by.css('.card-content'))
      .getText())
      .toContain('You are Overweight')

  });
});