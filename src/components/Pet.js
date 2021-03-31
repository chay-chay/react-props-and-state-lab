import React from 'react';

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}{' '}
            {this.props.pet.gender === 'female' ? '♀' : '♂'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}
              className="ui primary button">
              Adopt pet
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Pet;










// import React from 'react'

// class Pet extends React.Component {

//   onAdoptPet(id){
    
//   }

//   render() {
//     if (this.props.pet.isAdopted === true){
//       console.log('hide btn')
//     } else {
//       console.log('show btn')
//     }
//     this.props.pet.isAdopted === true ? console.log('hide btn') : console.log('show btn')
//     console.log(this.props.pet.isAdopted)
//     return (
//       <div className="card">
//         <div className="content">
//           <a className="header">
//             {/*'♀' OR '♂' */}
//             {this.props.pet.gender === 'female' ? '♀' : '♂'}
//             Name:   {this.props.pet.name}
//           </a>
//           <div className="meta">
//             <span className="date">Type: {this.props.pet.type}</span>
//           </div>
//           <div className="description">
//             <p>Age:   {this.props.pet.age} </p>
//             <p>Weight:   {this.props.pet.weight}</p>
//           </div>
//         </div>
//         <div className="extra content">
//           {this.props.pet.isAdopted === true ? 
//           <button className="ui disabled button"  >Already adopted</button> 
//           : <button className="ui primary button" onClick={this.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
//         }
       
//         </div>
//       </div>
//     )
//   }
// }

// export default Pet
