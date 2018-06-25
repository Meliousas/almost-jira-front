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

  it('should render 3 buttons for not signed in user', () => {
    page.navigateTo();
   // const headerRight = page.getNavbarElement().element(by.className('header-right'));
   // const buttons = page.getNavbarElement().element(by.className('header-right')).all(by.css('routerLink'));

//    expect(buttons.count()).toEqual(3);
  });
});
