import { VerticalTabPage } from './app.po';

describe('vertical-tab App', () => {
  let page: VerticalTabPage;

  beforeEach(() => {
    page = new VerticalTabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
