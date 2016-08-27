require('../spec_helper');

describe('Delete Baby Animal', () => {
  beforeEach(() => {
    const BabyAnimalDelete = require('../../../app/components/baby_animal_delete');

    ReactDOM.render(<BabyAnimalDelete value="http://wallpapercave.com/wp/IhMAYSI.jpg"/>, root);
  });

  it('exists', () => {
    expect('.delete-baby-animal').toExist();
  });

  it('shows a delete button', () => {
    expect('button').toHaveClass('delete-baby-animal');
  });


  describe('click delete', () => {
    beforeEach(()=> {
      $('.delete-baby-animal').simulate('click');
    });

    it('dispatches the delete action', ()=> {
      expect('babyAnimalDelete').toHaveBeenDispatchedWith({data: 'http://wallpapercave.com/wp/IhMAYSI.jpg'} );
    });

  });


});