import React from 'react';
const types = React.PropTypes;
const BabyAnimal = require('./baby_animal');

class BabyAnimalList extends React.Component {

  static propTypes = {
    babyAnimals: types.array.isRequired
  };

  render(){

    const {babyAnimals} = this.props;

    const babyAnimalList = babyAnimals.map( (baby, key) => {
      return <BabyAnimal value={baby} key={key}/>
    });

    return (
        <div className="baby-animal-list">
          {babyAnimalList}
        </div>
    );
  }
}

module.exports = BabyAnimalList;