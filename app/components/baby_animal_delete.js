const React = require('react');
import {Actions} from 'p-flux';

const types = React.PropTypes;

class BabyAnimalDelete extends React.Component {
  static propTypes = {
    value: types.string.isRequired
  };

  click = e => {
    Actions.babyAnimalDelete(this.props.value);
  };

  render(){
    return(<div className="delete-baby-animal">
      <button type="button" className="delete-baby-animal btn btn-default" onClick={this.click}>Delete!</button>
    </div>);
  }
}

module.exports = BabyAnimalDelete;