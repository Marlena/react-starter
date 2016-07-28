const React = require('react');
const types = require('react').PropTypes;

class BabyAnimalPage extends React.Component{

  static propTypes = {
    config: types.object
  };

  render(){
    return (
        <div className="baby-animal-page">
          <h1>Hai!!!</h1>
        </div>);
  }


}

module.exports = BabyAnimalPage;