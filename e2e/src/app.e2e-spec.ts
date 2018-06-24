import { AppPage } from './app.po';

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

  // it('should render 3 buttons for not signed in user', () => {
  //   page.navigateTo();
  //
  //   expect(page.getNavbarElement());
  // });
});
