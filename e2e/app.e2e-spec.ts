import { by, browser, element } from 'protractor'
describe('App', () => {
  describe('default screen', () => {
    beforeEach(() => {
      browser.get('/');
    });

    it('App should have a title', () => {
      expect(browser.getTitle()).toContain('Ionic App')
    });

    it('the calculator tab is displayed by default', () => {
      expect(element(by.css('[aria-selected=true] .tab-button-text')) // First we find the selected tab  
        .getAttribute('innerHTML')) // Then we grab the html content
        .toContain('Calculator'); // Then we check if it matches our expectations
    });

    it('should have a title saying calculator', () => {
      expect(element(by.css('.toolbar-title'))
        .getAttribute('innerHTML'))
        .toContain('calculator');
    });
    
    it('Should have a about Tab', () => {
      expect(element(by.css('#tab-t0-1'))
        .getAttribute('innerHTML'))
        .toContain('About');
    })
  });
});

