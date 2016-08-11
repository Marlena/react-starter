require ('../spec_helper');


describe('Baby Animal Page', () => {
  let BabyAnimalPage;

  beforeEach(()=> {
    BabyAnimalPage = require('../../../app/components/baby_animal_page');

    spyOn(BabyAnimalPage.prototype, 'render').and.callThrough();

    ReactDOM.render(<BabyAnimalPage babyAnimals={['http://wallpapercave.com/wp/IhMAYSI.jpg']}/>, root);

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

  describe('Create baby animal', () => {
    it('exists', ()=>{
      expect('.baby-animal-create').toExist();
    });
  });

  describe('Baby Animal list', ()=> {
    it('exists', () => {
      expect('.baby-animal-list').toExist()
    });
  })

});