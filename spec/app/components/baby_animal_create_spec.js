require('../spec_helper');

describe('Baby Animal Create', () => {
  let BabyAnimalCreate;

  beforeEach(() => {

    BabyAnimalCreate = require ('../../../app/components/baby_animal_create');
    ReactDOM.render(<BabyAnimalCreate />, root);
    $('.baby-animal-create input').val('http://wallpapercave.com/wp/IhMAYSI.jpg').simulate('change');
    $('.baby-animal-create form').simulate('submit');
  });


  it('#CREATE', ()=>{
    expect('babyAnimalCreate').toHaveBeenDispatched();
  });


});