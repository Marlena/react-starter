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
    this.setState({babyAnimal: ''});
  };

  change = e => {
    this.setState({[e.currentTarget.name]: e.target.value});
  };

  populateExample = () =>{
    this.setState({babyAnimal:'http://www.cubebreaker.com/wp-content/uploads/2014/03/baby-goats-01.jpg'});
  };

  render() {
    const {babyAnimal} = this.state;

    const disabled = !babyAnimal.length;

    return(
      <div className="baby-animal-create">
        <form onSubmit={this.submit} className="form-inline">
          <div className="form-group">
            <label htmlFor="baby-animal-input">Baby Animal Link</label>&nbsp;
            <input type="text" className="form-control" id="baby-animal-input" name="babyAnimal" value={babyAnimal} onChange={this.change}/>&nbsp;
            <button className="btn btn-default" disabled={disabled} type="submit">Create!</button>
          </div>
        </form>
        <div>
          <button className="baby-animal-example btn btn-default" type="button" onClick={this.populateExample}>Example: http://www.cubebreaker.com/wp-content/uploads/2014/03/baby-goats-01.jpg</button>

        </div>
      </div>
      );
  }
}

module.exports = BabyAnimalCreate;