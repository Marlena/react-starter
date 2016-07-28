require ('../spec_helper');

describe('Baby Animal Page', () => {
  let BabyAnimalPage;

  beforeEach(()=> {
    BabyAnimalPage = require('../../../app/components/baby_animal_page');

    ReactDOM.render(<BabyAnimalPage />, root);


  });

  it('exists', ()=> {
    expect('.baby-animal-page').toExist();
  });
  
});