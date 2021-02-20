import React, {useEffect, useState} from 'react';
import { Card } from 'antd';



// creating users profile component to show users their saved information. 
const ViewUsers = () => {
const [people, setPeople] = useState([])
const fetchPeople = () => {
  
  fetch('http://localhost:3001/api/users')
  .then(response => response.json())
  .then((data) => {
    console.log(data)
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
            See Who's on ArtHouse 
          </h1>
          <div className="user-prog-holder">
            {people ? people.map((item) => { 
              return (<div key={item._id} className="user-prof">
                <Card size="small" title="ArtHouse Users" style={{ width: 270, display: "inline-block" }}>
                  <p>User Name: <span className="user-prof-txt">{item.usr_name} </span></p>
                  <p>Email: <span className="user-prof-txt">{item.email} </span></p>
                </Card>
              </div>)
            }) : " "}  
          </div>
        </div>
      </div>
    </div>
    )
};
  
  export default ViewUsers;
