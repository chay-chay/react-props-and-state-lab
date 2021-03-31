import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    };
  }

  fetchPets = () => {
    let endpoint = '/api/pets';

    if (this.state.filters.type !== 'all') {
      endpoint += `?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
      .then(res => res.json())
      .then(pets => this.setState({ pets: pets }));
  };

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets: pets });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;







// import React from 'react'
// import Filters from './Filters'
// import PetBrowser from './PetBrowser'

// class App extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       pets: [],
//       filters: {
//         type: 'all'
//       }
//     }
//   }

//   onFindPetsClick = (word) => {
//     console.log(word)
//     let url = '/api/pets'
//     if (this.state.filters.type === 'cat'){
//       url = url + '?type=cat'
//     } else if(this.state.filters.type === 'dog'){
//       url = url + '?type=dog'
//     } else if(this.state.filters.type === 'micropig'){
//       url = url + '?type=micropig'
//     } 


//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       // console.log(data)
//       this.setState({...this.state, pets: data})
      
//       // console.log(data)
//     })
//   }

//   onChangeType = (e) => {
//     // console.log(e.target.value)
//     this.setState({...this.state, filters: { type: e.target.value}})
    
//   }

//   // this pet (pass argument onclick).props.pet.id- argument to id find
//   // isAdop to true 
//   onAdoptPet = petId => {
//     const pets = this.state.pets.map(p => {
//       return p.id === petId ? { ...p, isAdopted: true } : p;
//     });
//     this.setState({ pets: pets });
//   };
//   // onFindPetsClick()
//   plusFive = (num) =>{
//     console.log(num + 5)
//   }

//   render() {
//     console.log(this.state.filters.type)
    
//     return (
//       <div className="ui container">
//         <header>
//           <h1 className="ui dividing header">React Animal Shelter</h1>
//         </header>
//         <div className="ui container">
//           <div className="ui grid">
//             <div className="four wide column">
//               <Filters onChangeType={this.onChangeType} onFindPetsClick={() => this.onFindPetsClick()}/>
//             </div>
//             <div className="twelve wide column">
//               <PetBrowser pets={this.state.pets} />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App
