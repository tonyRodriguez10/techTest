/* Personal imports */
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useCallback } from 'react';
import {Link, useHistory } from 'react-router-dom';
import '../styles/layouts/buttons.css'; 
import Swal from 'sweetalert2';

function Home(){
      /* API URL */
  const baseURL = "https://petstore.swagger.io/v2/pet/500";
  const [data, setData]=useState([]); 
  window.$id = 0;
  const history = useHistory();
 
  function refreshPage() {
    window.location.reload(false);
  }

  async function  handleDelete(id){
    await axios.delete('https://petstore.swagger.io/v2/pet/')
    .then(res=>{  
      Swal.fire({
				title: 'Pet deleted succesfully!',
				icon: "success",
				background: "#d4edda",
				timer:3000,
				timerProgressBar:true,
				toast: true,
				position:"top-end",
				width: "600px",
				showConfirmButton: false,
				padding: "0.3rem"
			  })
    })
  };

  const getRequest=async()=>{
        await axios.get(baseURL)
        .then(res=>{  
          setData(res.data);     
          console.log(res.data.photoUrls[0])
        })
        .catch(function (error){
         
        })
      }


      
  useEffect(async()=>{
    await getRequest();
  },[])

  return (
    <div className="Home">
      <Link to="/add"><button className="btn btn-success btnAdd" >Add a pet</button></Link>
      <button className="btn btn-warning" onClick={refreshPage}>Reload</button>
  {Object.keys(data).length === 0 ? (
    <div style={{fontSize : '50px', color : 'red'}}>...We don't fount any pet :c </div>
  ) : (
      <React.Fragment>
        
      
      <table id="test" className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Owner</th>
              <th scope="col">Pet Name</th>
              <th scope="col">Photo</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr key={data.id}>
              <td>{data.category.name}</td>
              <td>{data.name}</td>
              <img src={data.photoUrls[0]} width="100px" height="100px"/>
              <td>{data.status}</td>
              <td> 
                <button className="btn btn-success" style={{marginRight : '3%'}} onClick={() => {history.push(`/edit/${data.id}`)
                  window.$id = data.id;
                }}>Edit a pet
                </button>

                {/* <button className="btn btn-success" onClick={handleDelete(data.id)}>Delete a pet</button> */}
                </td>
            </tr>
          </tbody>
        </table>
   </React.Fragment>
       )}
  </div>
    );
}//end function
export default Home;