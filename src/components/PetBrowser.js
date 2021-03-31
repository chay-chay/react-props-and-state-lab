import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    const petCards = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ));

    return <div className="ui cards">{petCards}</div>;
  }
}

export default PetBrowser;


// import React from 'react'

// import Pet from './Pet'

// class PetBrowser extends React.Component {
//   render() {
//     console.log(this.props.pets)
// // const age = 50
// //     if (age > 30){
// //       console.log('old')
// //     } else {
// //       console.log('young')
// //     }

// // age > 30 ?  console.log('very old') : console.log('very young')

// // console.log('arrayMap', newArray1)
// // console.log('arrayForEach', arrayForEach)

//     return <div className="ui cards" >
//       {this.props.pets.map((pet, i) => {
//         return <Pet key={i} pet={pet} /> // use index for unique (key have to unique)
        
//       })}
//     </div>
//   }
// }

// export default PetBrowser



// // const array = [{name: 'gift', age: 20}, {name: 'bay', age: 50}]

// // const newArray1 = array.map((person, index) => index) 
// // no {} need to explicit return and if have another argument, second argument is index.



// // const newArray1 = array.map(person => {
// //   if (person.age > 20){
// //        person.age = person.age + 5
// //   }
// //   return person
// // })

// // const newArray1 = array.map(char =>{
// //   return char + '5'
// // })
// // const arrayForEach = []
// //  array.forEach(char =>{
// //   arrayForEach.push(char + '5')
// // })


