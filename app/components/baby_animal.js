const React = require('react');

class BabyAnimal extends React.Component{

  render(){
    return (
        <div className="baby-animal">
          <img className="photo" src="http://wallpapercave.com/wp/IhMAYSI.jpg"/>
        </div>
    );
  }
}

module.exports = BabyAnimal;