import React from 'react';
import BabyAnimal from './baby_animal';
import BabyAnimalCreate from './baby_animal_create'
import BabyAnimalList from './baby_animal_list';

const types = require('react').PropTypes;

class BabyAnimalPage extends React.Component{

  static propTypes = {
    config: types.object,
    babyAnimals: types.array
  };

  render(){
    const {babyAnimals} = this.props;

    return (

        <div className="baby-animal-page">
          <BabyAnimalCreate />
          <BabyAnimalList babyAnimals={babyAnimals} />
        </div>);
  }

}

module.exports = BabyAnimalPage;