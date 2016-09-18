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
          $('#baby-animal-type-input').simulate('change', {target: {value: 'bunny'}});
          $('#baby-animal-link-input').simulate('change', {target: {value: 'www.dailybunny.org'}});
        });


        it('the create button is not disabled', () => {
          expect('button:contains(\'Create!\')').not.toBeDisabled();
        });

        describe('when the form is submitted', () => {

          beforeEach(() => {
            $('.baby-animal-create form').simulate('submit');

          });

          it('dispatches the create action', ()=>{
            expect('babyAnimalCreate').toHaveBeenDispatchedWith({data: {type: 'bunny', link: 'www.dailybunny.org'}});
          });

          it('clears the link value', () => {
            expect('input#baby-animal-link-input').toHaveValue('');
          });

          it('clears the type value', () => {
            expect('input#baby-animal-type-input').toHaveValue('');
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
      expect('button:contains(\'Create!\')').toBeDisabled();
    });

  });

    it('shows', () => {
      expect('button:contains(\'Example\')').toHaveLength(1);
    });

    describe('when the example button is clicked', () => {
      it('sets the state in the text box', () => {
        $('button:contains(\'Example\')').simulate('click');
        expect('#baby-animal-link-input').toHaveValue('http://gifrific.com/wp-content/uploads/2012/07/Bunny-eating-dandelion.gif');
      });

    });

  describe('adding a type', () => {
    it('shows a text box in the form', () => {
      expect('input#baby-animal-type-input').toExist();
    });

    it('shows a label', () => {
      expect('div.baby-animal-type > label').toHaveText('Baby Animal Type');
    });

  });


});