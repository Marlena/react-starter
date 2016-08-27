require('../spec_helper');

describe('Baby Animal List', ()=> {
  let BabyAnimalList;

  beforeEach(()=> {
    BabyAnimalList = require('../../../app/components/baby_animal_list');

    let bunny = 'http://wallpapercave.com/wp/IhMAYSI.jpg';
    let goat = 'http://www.cubebreaker.com/wp-content/uploads/2014/03/baby-goats-01.jpg';
    let puppy = 'http://marlenacompton.com/wp-content/uploads/2010/08/IMG_0581.jpg';

    spyOn(BabyAnimalList.prototype, 'render').and.callThrough();
    ReactDOM.render(<BabyAnimalList babyAnimals={[bunny, goat, puppy]}/>, root);

  });

  it('renders', ()=> {
    expect(BabyAnimalList.prototype.render).toHaveBeenCalled();
  });

  it('shows 3 baby animals', () => {
    expect('.baby-animal').toHaveLength(3);
  });
});