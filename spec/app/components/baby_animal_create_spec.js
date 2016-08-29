require('../spec_helper');

describe('Baby Animal Create', () => {
  let BabyAnimalCreate;

  beforeEach(() => {

    BabyAnimalCreate = require('../../../app/components/baby_animal_create');
    ReactDOM.render(<BabyAnimalCreate />, root);
    $('.baby-animal-create input').simulate('change', {target: {value: 'http://wallpapercave.com/wp/IhMAYSI.jpg'}});
  });

  describe('when the form is submitted', () => {

    beforeEach(() => {
      $('.baby-animal-create form').simulate('submit');

    });

    it('dispatches the create action', ()=>{
      expect('babyAnimalCreate').toHaveBeenDispatchedWith({data: 'http://wallpapercave.com/wp/IhMAYSI.jpg'});
    });

    it('clears the value', () => {
      expect('.baby-animal-create input').toHaveValue('');
    });

  });

    describe('when there is text in the input', () => {

      it('the create button is not disabled', () => {
        expect("button:contains('Create!')").not.toBeDisabled();
      });
    });

    describe('when there is no text in the input', () => {
      beforeEach(() => {
        $('.baby-animal-create input').simulate('change', {target: {value: ''}});
      });

      it('the create button is disabled', () => {
        expect("button:contains('Create!')").toBeDisabled();
      });

    });

    it('shows an example button', () => {
      expect("button:contains('Example')").toHaveLength(1);
    });

    describe('when the example button is clicked', () => {
      it('sets the state in the text box', () => {
        $("button:contains('Example: http://www.cubebreaker.com/wp-content/uploads/2014/03/baby-goats-01.jpg')").simulate('click');
        expect('#baby-animal-input').toHaveValue('http://www.cubebreaker.com/wp-content/uploads/2014/03/baby-goats-01.jpg');
      });

    });

});