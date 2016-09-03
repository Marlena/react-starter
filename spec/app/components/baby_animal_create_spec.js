require('../spec_helper');

describe('BabyAnimalCreate', () => {
  let BabyAnimalCreate;

  beforeEach(() => {

    BabyAnimalCreate = require('../../../app/components/baby_animal_create');
    ReactDOM.render(<BabyAnimalCreate />, root);
  });

  describe('adding a baby animal link', () => {
    it('shows a label', () => {
      expect('div.baby-animal-link > label').toHaveText('Baby Animal Link');
    });


    describe('shows a text box', () => {

      describe('when there is text', () => {
        beforeEach(() => {
          $('#baby-animal-input').simulate('change', {target: {value: 'http://wallpapercave.com/wp/IhMAYSI.jpg'}});
        });


        it('the create button is not disabled', () => {
          expect("button:contains('Create!')").not.toBeDisabled();
        });

        describe('when the form is submitted', () => {

          beforeEach(() => {
            $('.baby-animal-create form').simulate('submit');

          });

          it('dispatches the create action', ()=>{
            expect('babyAnimalCreate').toHaveBeenDispatchedWith({data: 'http://wallpapercave.com/wp/IhMAYSI.jpg'});
          });

          it('clears the value', () => {
            expect('input#baby-animal-input').toHaveValue('');
          });

        });

      });



    });
  });


  describe('the example button', () => {
    beforeEach(() => {
      $('.baby-animal-create input').simulate('change', {target: {value: ''}});
    });

    it('the create button is disabled', () => {
      expect("button:contains('Create!')").toBeDisabled();
    });

  });

    it('shows', () => {
      expect("button:contains('Example')").toHaveLength(1);
    });

    describe('when the example button is clicked', () => {
      it('sets the state in the text box', () => {
        $("button:contains('Example: http://gifrific.com/wp-content/uploads/2012/07/Bunny-eating-dandelion.gif')").simulate('click');
        expect('#baby-animal-input').toHaveValue('http://gifrific.com/wp-content/uploads/2012/07/Bunny-eating-dandelion.gif');
      });

    });

  describe('adding a tag', () => {
    it('shows a text box in the form', () => {
      expect('input#baby-animal-tag-input').toExist();
    });

    it('shows a label', () => {
      expect('div.baby-animal-tag > label').toHaveText('Baby Animal Tag');
    });

  });


});