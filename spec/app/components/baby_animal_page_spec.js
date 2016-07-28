require ('../spec_helper');


describe('Baby Animal Page', () => {
  let BabyAnimalPage;

  beforeEach(()=> {
    BabyAnimalPage = require('../../../app/components/baby_animal_page');

    spyOn(BabyAnimalPage.prototype, 'render').and.callThrough();

    ReactDOM.render(<BabyAnimalPage />, root);

  });

  it('exists', ()=> {
    expect('.baby-animal-page').toExist();
  });

  it('renders', ()=> {
    expect(BabyAnimalPage.prototype.render).toHaveBeenCalled();
  });

  describe('BabyAnimal', () => {
    it('shows', () => {
      expect('.baby-animal').toExist();
    });
  });

});