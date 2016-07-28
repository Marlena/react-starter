require ('../spec_helper');

describe('BabyAnimal', ()=> {
  let BabyAnimal;

  beforeEach(()=> {
    BabyAnimal = require('../../../app/components/baby_animal');

    spyOn(BabyAnimal.prototype, 'render').and.callThrough();
    ReactDOM.render(<BabyAnimal />, root);
  });

  it('shows', () => {
    expect('.baby-animal').toExist();
  });

  it('renders', ()=> {
    expect(BabyAnimal.prototype.render).toHaveBeenCalled();
  });

  it('shows a photo', ()=> {
    expect($('img')).toExist();
    //here is the photo
    //https://en.wikipedia.org/wiki/Angora_rabbit#/media/File:Englishangora.jpg
  });
});