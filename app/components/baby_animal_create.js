import React from 'react';
import {Actions} from 'p-flux';

class BabyAnimalCreate extends React.Component{

  constructor(props, context){
    super(props, context);
    this.state = {
      babyAnimalType: '',
      babyAnimalLink: ''
    };
  }

  submit = e => {
    e.preventDefault();

    Actions.babyAnimalCreate({ type: this.state.babyAnimalType, link: this.state.babyAnimalLink});
    this.setState({babyAnimalLink: ''});
    this.setState({babyAnimalType: ''});
  };

  change = e => {
    this.setState({[e.currentTarget.name]: e.target.value});
  };

  populateExample = () =>{
    this.setState({babyAnimalLink:'http://gifrific.com/wp-content/uploads/2012/07/Bunny-eating-dandelion.gif'});
  };

  render() {
    const {babyAnimalType} = this.state;
    const {babyAnimalLink} = this.state;

    const disabled = !babyAnimalType.length;

    return(
      <div className="baby-animal-create">
        <form onSubmit={this.submit} className="form-inline">
          <div className="form-group">
            <div className="baby-animal-type">
              <label htmlFor="baby-animal-type-input">Baby Animal Type</label>&nbsp;
              <input type="text" className="form-control" id="baby-animal-type-input" name="babyAnimalType" value={babyAnimalType} onChange={this.change}/>
            </div>
            <div className="baby-animal-link">
              <label htmlFor="baby-animal-link-input">Baby Animal Link</label>&nbsp;
              <input type="text" className="form-control" id="baby-animal-link-input" name="babyAnimalLink" value={babyAnimalLink} onChange={this.change}/>&nbsp;
            </div>
            <button className="btn btn-default" disabled={disabled} type="submit">Create!</button>
          </div>
        </form>
        <div>
          <button className="baby-animal-example btn btn-default" type="button" onClick={this.populateExample}>Example: http://gifrific.com/wp-content/uploads/2012/07/Bunny-eating-dandelion.gif</button>
        </div>
      </div>
      );
  }
}

module.exports = BabyAnimalCreate;