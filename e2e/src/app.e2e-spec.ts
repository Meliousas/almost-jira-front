import { AppPage } from './app.po';
import {by, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Almost Jira');
  });

  it('should create navigation bar', () => {
    page.navigateTo();
    expect(page.getNavbarElement()).toBeTruthy();
  });

  it('Login functionallity should work for registered user', () => {
    
    console.log('Given I have opened login page);
    
    browser.driver.get('http://localhost:4200/register');
    const user = browser.driver.findElement(by.name('username'));
    const password = browser.driver.findElement(by.name('password'));
    const button = element(by.className('submit'));

    console.log('When i provide my credentials');
    
    user.sendKeys('first');
    password.sendKeys('nope');

    console.log('Then I should be logged in and dashboard should by displayed');
    
    expect(user.getAttribute('value')).toEqual('first');
    expect(password.getAttribute('value')).toEqual('nope');
    button.click().then(() => {
      browser.waitForAngular();
      expect(browser.driver.get('http://localhost:4200/dashboard'));
    });
});
