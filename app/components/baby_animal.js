const React = require('react');
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
        </div>
    );
  }
}

module.exports = BabyAnimal;