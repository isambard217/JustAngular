import { JustAngularPage } from './app.po';

describe('just-angular App', () => {
  let page: JustAngularPage;

  beforeEach(() => {
    page = new JustAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
