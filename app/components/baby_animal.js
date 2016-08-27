import React from'react';
const BabyAnimalDelete = require('./baby_animal_delete');

const types = React.PropTypes;


class BabyAnimal extends React.Component{

  static propTypes = {
    value: types.node.isRequired
  };

  render(){
    const {value} = this.props;

    return (
        <div className="baby-animal">
          <img className="photo" src={value}/>
          <BabyAnimalDelete value={value}/>
        </div>
    );
  }
}

module.exports = BabyAnimal;