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


  describe('#DELETE', () => {
    beforeEach(()=> {
      $('.delete-baby-animal').simulate('click');
    });

    it('has a button', () => {
      expect('button').toHaveClass('delete-baby-animal');
    });

    it('dispatches the delete action when clicked', ()=> {
      expect('babyAnimalDelete').toHaveBeenDispatchedWith({data: 'http://wallpapercave.com/wp/IhMAYSI.jpg'} );
    });
  });

});