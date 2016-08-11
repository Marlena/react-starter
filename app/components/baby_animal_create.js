import React from 'react';
import {Actions} from 'p-flux';

class BabyAnimalCreate extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {babyAnimal: ''};
  }

  submit = e => {
    e.preventDefault();
    Actions.babyAnimalCreate(this.state.babyAnimal);
  };

  change = e => {
    this.setState({[e.currentTarget.name]: e.target.value});
  };

  render() {
    const {babyAnimal} = this.state;

    return(
      <div className="baby-animal-create">
        <form onSubmit={this.submit}>
          <input type="text" name="babyAnimal" value={babyAnimal} onChange={this.change}/>
          <button className="btn btn-default" type="submit">Create!</button>
        </form>
      </div>
      );
  }
}

module.exports = BabyAnimalCreate;