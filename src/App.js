import React, { Component } from 'react';
import Characters from "./components/Characters"
class App extends Component {
      state = {
            characters: [
                  {
                        id: 1,
                        name: "Lion-O",
                        img: "https://static.comicvine.com/uploads/original/11/116475/4173481-lion-o.jpg"
                  },
                  {
                        id: 2,
                        name: "Tygra",
                        img: "https://vignette.wikia.nocookie.net/thundercatslair/images/1/1c/Tygra.jpg/revision/latest?cb=20140627151309"
                  },
                  {
                        id: 3,
                        name: "Mumm-Ra",
                        img: "https://i.pinimg.com/originals/8e/27/8e/8e278e75403695c648a3892c39d120e6.jpg"
                  }
            ]
      }
      render() {
            return (
                  <div className="App">
                        <Characters characters={this.state.characters} />
                  </div>
            );
      }
}

export default App;