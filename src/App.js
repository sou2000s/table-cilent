import { useEffect, useState } from "react";



function App() {

 const [data , setData] = useState([])
 const [isAscd , setIsAscd] = useState(true)

 useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    setData(data.Sheet1)
  })
 } , [])
console.log(data);

  return (
    <div className="">
     <h1 className="text-center text-2xl">Table</h1>
<div class="overflow-x-auto mt-9 relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                  Id
                </th>
                <th scope="col" class="py-3 px-6">
                   First Name
                </th>
                <th scope="col" class="py-3 px-6">
                  Last Name
                </th>
                <th scope="col" class="py-3 px-6">
                   Email
                </th>
                <th scope="col" class="py-3 px-6">
                   Gender
                </th>
                <th scope="col" class="py-3 px-6">
                    Ip address
                </th>
                <th scope="col" class="py-3 px-6">
                    Airport Code
                </th>
                <th scope="col" class="py-3 px-6">
                   Time
                </th>
                <th scope="col" class="py-3 px-6">
                    Status
                </th>
                <th scope="col" class="py-3 px-6">
                   Mobile
                </th>
                <th scope="col" class="py-3 px-6">
                   Area
                </th>
                <th scope="col" class="py-3 px-6">
                  Show
                </th>
                <th scope="col" class="py-3 px-6">
                  Edit
                </th>
            </tr>
        </thead>
        <tbody>
            {/* <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Laptop
                </td>
                <td class="py-4 px-6">
                    $2999
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
            
        {data.map(user => {
          return <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.id}
                </th>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.first_name}
                </th>
                <td class="py-4 px-6">
                    {user.last_name}
                </td>
                <td class="py-4 px-6">
                    {user.email}
                </td>
                <td class="py-4 px-6">
                   {user.gender}
                </td>
                <td class="py-4 px-6">
                   {user.ip_address}
                </td>
                <td class="py-4 px-6">
                   {user.airport_code}
                </td>
                <td class="py-4 px-6">
                   {user.time}
                </td>
                <td className="py-4 px-6">
                   <p className={user.status === "true" ? "text-green-700" : "text-red-800" }>{user.status} </p> 
                                 
                </td>
                <td class="py-4 px-6">
                   {user.mobile}
                </td>
                <td class="py-4 px-6">
                   {user.area}
                </td>
                <td class="py-4 px-6">
                   {user.show}
                </td>
                <td class="py-4 px-6">
                   {user.edit}
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
