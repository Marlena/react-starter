require ('../spec_helper');

describe('BabyAnimal', ()=> {
  let BabyAnimal;

  beforeEach(()=> {
    BabyAnimal = require('../../../app/components/baby_animal');

    spyOn(BabyAnimal.prototype, 'render').and.callThrough();
    ReactDOM.render(<BabyAnimal value="http://wallpapercave.com/wp/IhMAYSI.jpg"/>, root);
  });

  it('shows', () => {
    expect('.baby-animal').toExist();
  });

  it('renders', ()=> {
    expect(BabyAnimal.prototype.render).toHaveBeenCalled();
  });

  it('shows a photo', ()=> {
    expect('img').toHaveAttr('src', 'http://wallpapercave.com/wp/IhMAYSI.jpg');
  });
});