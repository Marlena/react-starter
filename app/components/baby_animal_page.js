import React from 'react';
import BabyAnimal from './baby_animal.js';
import BabyAnimalCreate from './baby_animal_create.js'

const types = require('react').PropTypes;

class BabyAnimalPage extends React.Component{

  static propTypes = {
    config: types.object
  };

  render(){
    return (
        <div className="baby-animal-page">
          <BabyAnimalCreate />
          <BabyAnimal />
        </div>);
  }

}

module.exports = BabyAnimalPage;