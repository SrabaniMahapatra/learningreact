import React from 'react'

// const Welcome = () => {
//   return (
//     <div>
//      {/* <h1> Welcome Srabani Mahapatra</h1> */}
     
//     </div>
//   )
// }
function Welcome(props) {
  return <h1>My name is {props.name}  and my age is{props.age}</h1>;
}

export default Welcome
