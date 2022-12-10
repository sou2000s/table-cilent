import { useEffect, useRef, useState } from "react";



function App() {

 const [uerData , setUserData] = useState([])
 const [isAscd , setIsAscd] = useState(true)
 const [color , setClolor] = useState(true)
const ref = useRef(null)


 useEffect(()=>{
  fetch(`http://localhost:5000/users?oder=${isAscd  ? "asc" : "dsc"}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    setUserData(data)
  })
 } , [isAscd])
console.log(uerData);
console.log(isAscd);
console.log(color);
const testFunction = (id) =>{
 const parent =   ref.current.parentElement.children[id - 1 ];
 parent.style.backgroundColor  = "pink"
}


  return (
    <div className="">
     <h1 className="text-center text-2xl">Table</h1>
     <button onClick={()=> setIsAscd(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Asc</button>
     <button onClick={()=> setIsAscd(false)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Dsc</button>
<div className="overflow-x-auto mt-9 relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        
            <tr>
               
                
                
              
                <th scope="col" className="py-3 px-6">
                  Id
                </th>
                <th scope="col" className="py-3 px-6">
                   First Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Last Name
                </th>
                <th scope="col" className="py-3 px-6">
                   Email
                </th>
                <th scope="col" className="py-3 px-6">
                   Gender
                </th>
                <th scope="col" className="py-3 px-6">
                    Ip address
                </th>
                <th scope="col" className="py-3 px-6">
                    Airport Code
                </th>
                <th scope="col" className="py-3 px-6">
                   Time
                </th>
                <th scope="col" className="py-3 px-6">
                    Status
                </th>
                <th scope="col" className="py-3 px-6">
                   Mobile
                </th>
                <th scope="col" className="py-3 px-6">
                   Area
                </th>
                <th scope="col" className="py-3 px-6">
                  Show
                </th>
                <th scope="col" className="py-3 px-6">
                  Edit
                </th>
                <th scope="col" className="py-3 px-6">
                  Change Color
                </th>
            </tr>
        </thead>
        <tbody>
            {/* <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td className="py-4 px-6">
                    Sliver
                </td>
                <td className="py-4 px-6">
                    Laptop
                </td>
                <td className="py-4 px-6">
                    $2999
                </td>
                <td className="py-4 px-6">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
            
        {uerData?.map(user => {
          return <tr ref={ref} className={`  ${color ? "bg-white " : "bg-green-500"}   border-b dark:bg-gray-900 dark:border-gray-700`}>
                
                
               
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.id}
                </td>
                <td  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.first_name}
                </td>
                <td className="py-4 px-6 ">
                    {user.last_name}
                </td>
                <td className="py-4 px-6">
                    {user.email}
                </td>
                <td className="py-4 px-6">
                   {user.gender}
                </td>
                <td className="py-4 px-6">
                   {user.ip_address}
                </td>
                <td className="py-4 px-6">
                   {user.airport_code}
                </td>
                <td className="py-4 px-6">
                   {user.time}
                </td>
                <td className="py-4 px-6">
                   <p className={user.status === "true" ? "text-green-700" : "text-red-800" }>{user.status} </p> 
                                 
                </td>
                <td className="py-4 px-6">
                   {user.mobile}
                </td>
                <td className="py-4 px-6">
                   {user.area}
                </td>
                <td className="py-4 px-6">
                   {user.show}
                </td>
               
                <td className="py-4 px-6">
                   {user.edit}
                </td>
                <td className="py-4 px-6">
                   <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>testFunction(user.id)}>Change Color</button>
                </td>
                
            </tr>
        })}

        </tbody>
    </table>
</div>

    </div>
  );
}

export default App;
