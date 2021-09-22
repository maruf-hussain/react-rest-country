
import './App.css';
import Countries from './Component/Countries/Countries';




function App() {
  return (
    <div className="App">
   <Countries></Countries>
    </div>
  );
}


export default App;











// ......................Practice..................................//
// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//      <Countries></Countries>
//     </div>
//   );
// }

// function Countries() {
//   const [countrys, setCountrys] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => setCountrys(data))
//   },[])
//   return(
//     <div>
//       <h1>I will Travel in this Countries</h1>
//       {
// countrys.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div className="country">
// <h1>Name: {props.name}</h1>
// <h3>Capital: {props.capital}</h3>

//     </div>
//   )
  
// }
// export default App;
