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

  it('has a BabyAnimal', () => {
    expect('.baby-animal').toExist();
  });

  it('has a BabyAnimalCreate', ()=>{
    expect('.baby-animal-create').toExist();
  });

  it('has a BabyAnimalList', () => {
    expect('.baby-animal-list').toExist();
  });
  
});