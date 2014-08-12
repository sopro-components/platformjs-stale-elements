function Elements(){
  this.testDiv = browser.driver.findElement(by.id('testDiv'));
  this.testComponent = browser.driver.findElement(by.id('testPolymerIcon'));
};
describe("A barebones test case for platform.js breaking webdriver", function(){
  var elements;
  it('sets up the test', function(){
    browser.driver.get('http://localhost:8000/');
    elements = new Elements();
  });
  it('looks for testDiv', function(){
    expect(elements.testDiv.isDisplayed()).toBe(true);
  });
  it('looks for testPolymerIcon', function(){
    expect(elements.testComponent.isDisplayed()).toBe(true);
  });
});
