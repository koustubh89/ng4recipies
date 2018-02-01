import { FlightsearchPage } from './app.po';

describe('flightsearch App', function() {
  let page: FlightsearchPage;

  beforeEach(() => {
    page = new FlightsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
