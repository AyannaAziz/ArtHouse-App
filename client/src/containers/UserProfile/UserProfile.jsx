import React, {useEffect, useState} from 'react'



const UserProfile = () => {
const [people, setPeople] = useState([])
const fetchPeople = () => {
  
  fetch('http://localhost:3001/api/users')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    // setPeople( (prev) => {
    //   return [...prev,...data]
    // })
    
   setPeople(data)
  }) 

}

  useEffect(() => {
    fetchPeople()
  }, [])
  return (
      <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="center-align">
            Look at profile here.
          </h1>
          {people.map((item) => {
           <li key={item._id,}>  item.usr_name </li>
            
             
          })}
        </div>
      </div>
    </div>
    )
};
  
  export default UserProfile;
