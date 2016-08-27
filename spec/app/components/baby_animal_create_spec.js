require('../spec_helper');

describe('Baby Animal Create', () => {
  let BabyAnimalCreate;

  beforeEach(() => {

    BabyAnimalCreate = require('../../../app/components/baby_animal_create');
    ReactDOM.render(<BabyAnimalCreate />, root);
    $('.baby-animal-create input').simulate('change', {target: {value: 'http://wallpapercave.com/wp/IhMAYSI.jpg'}});
  });

  describe('when submitting the form', () => {

    beforeEach(() => {
      $('.baby-animal-create form').simulate('submit');

    });

    it('#CREATE', ()=>{
      expect('babyAnimalCreate').toHaveBeenDispatchedWith({data: 'http://wallpapercave.com/wp/IhMAYSI.jpg'});
    });

    it('clears the value', () => {
      expect('.baby-animal-create input').toHaveValue('');
    });

  });

  it('the button is disabled', () => {
    //$( "input[name='first_name']" );
    expect("button:contains('Create!')").not.toBeDisabled();
  });

  describe('When there is no text in the input', () => {
    beforeEach(() => {
      $('.baby-animal-create input').simulate('change', {target: {value: ''}});
    });

    it('is disabled', () => {
      expect("button:contains('Create!')").toBeDisabled();
    });

  });

  describe('The example button', () => {


    it('exists', () => {
      expect("button:contains('Example')").toHaveLength(1);
    });

    it('sets the state in the text box when clicked', () => {
      $("button:contains('Example: http://www.cubebreaker.com/wp-content/uploads/2014/03/baby-goats-01.jpg')").simulate('click');
      expect('#baby-animal-input').toHaveValue('http://www.cubebreaker.com/wp-content/uploads/2014/03/baby-goats-01.jpg');
    });


  });

});