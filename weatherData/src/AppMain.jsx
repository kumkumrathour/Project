// import React from 'react';
// import {useState,useEffect} from "react";
// const URL = "http://api.weatherapi.com/v1/current.json?key=1dccb0e6366f467e8ee175442230504&q=Bhopal";
// function AppMain() {
//     const [temp , setTemp] =useState(0);
//         const fetchData = async () =>{
//             const result = await fetch(URL) ;
//             // const data = await result.json();
//             // setTemp(data.current.location)
//             // console.log(result);
//         const data =await result.json();
//         const transformed = {
//             id:data.location.name,
//             current:data.current.temp_c,
//         };
//         setTemp([transformed]);
//         };
//         useEffect(()=>{
//             fetchData();
//         },[]);
    
//   return (
//     <div className="AppMain">
//       <table>
//         {temp.map(tempData =>(
//             <tr key={tempData.id}>
//                 <td>{tempData.id}</td>
//                 <td>{tempData.current}</td>
//             </tr>
//         ))}
//       </table>
//       <button onClick={fetchData}>summit</button>
//     </div>
//   );
// }

// export default AppMain;


//  http://api.weatherapi.com/v1/current.json?key=1dccb0e6366f467e8ee175442230504&q=Bhopal&aqi=yes//  http://api.weatherapi.com/v1/current.json?key=1dccb0e6366f467e8ee175442230504&q=Bhopal&aqi=yes