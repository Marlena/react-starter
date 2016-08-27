import React from'react';
import {Actions} from 'p-flux';

const types = React.PropTypes;


class BabyAnimal extends React.Component{

  static propTypes = {
    value: types.node.isRequired
  };

  click = e => {
    Actions.babyAnimalDelete(this.props.value);
  };

  render(){
    const {value} = this.props;

    return (
        <div className="baby-animal">
          <img className="photo" src={value}/>
          <button type="button" className="delete-baby-animal btn btn-default" onClick={this.click}>Delete!</button>
        </div>
    );
  }
}

module.exports = BabyAnimal;