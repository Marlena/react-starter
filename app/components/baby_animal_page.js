import React from 'react';
import BabyAnimal from './baby_animal.js';

const types = require('react').PropTypes;

class BabyAnimalPage extends React.Component{

  static propTypes = {
    config: types.object
  };

  render(){
    return (
        <div className="baby-animal-page">
          <BabyAnimal />
        </div>);
  }

}

module.exports = BabyAnimalPage;