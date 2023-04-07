import React ,{useState} from 'react';
import './App.css';
function App() {
      const [isLoading, setisLoading] = useState(false);
      const [carts,setCarts] = useState([]);
    //  json() => this is the method which convert data(promises) into an object of java this again 
    //  return a promise then  again this then() we get data
    function fetchMoviesHandler() {
      setisLoading(true)
      fetch('https://dummyjson.com/carts')
      .then(response =>{
        return response.json();
      })
      .then((data) => {
        const transformed = data.carts.map(carData =>{
          return {
            id:carData.id,
            products:carData.products,
            total:carData.total
          }
        })
        setCarts(transformed);
        setisLoading(false)
        console.log(transformed);
      })
    }

  return (
    <div className="App">
      {isLoading?'data is loading':<table>
      {carts.map(cart=>(
         <tr>
         <td>{cart.id}</td>
         <td>{cart.products[0].title}</td>
         <td>{cart.total}</td>
       </tr>
          
        ))}
           
      </table>}
      
        
        <button onClick={fetchMoviesHandler}>fetch data</button>
    </div>
  )
}

export default App
// name, region , country 

// http://api.weatherapi.com/v1/current.json?key=1dccb0e6366f467e8ee175442230504&q=Bhopal&aqi=yes


// http://api.weatherapi.com/v1/current.json?key=1dccb0e6366f467e8ee175442230504&q=Bhopal&aqi=yes