/* Personal imports */
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, useCallback } from 'react';
import {Link, useHistory } from 'react-router-dom';
import '../styles/layouts/buttons.css'; 
import Swal from 'sweetalert2';

function Home(){

  const [id, setId] = useState('');
  const [data, setData]=useState([]); 
  const history = useHistory();
 
  function refreshPage() {
    window.location.reload(false);
  }

  function deleteArticle(id){
     axios.delete('https://petstore.swagger.io/v2/pet/'+id)
    .then(res=>{  
      Swal.fire({
				title: 'Pet deleted succesfully!',
				icon: "success",
				background: "#d4edda",
				timer:2000,
				timerProgressBar:true,
				toast: true,
				position:"top-end",
				width: "300px",
				showConfirmButton: false,
				padding: "0.3rem"
			  })
        refreshPage();
    })
    .catch(function (error){
      Swal.fire({
        title: 'Internal API error, please try again :c',
        icon: "error",
        background: "#d4edda",
        timer:4000,
        timerProgressBar:true,
        toast: true,
        position:"top-end",
        width: "300px",
        showConfirmButton: false,
        padding: "0.3rem"
      })
    })
	}

  const getRequest=async()=>{
          /* API URL */
          const baseURL = "https://petstore.swagger.io/v2/pet/"+id;
            await axios.get(baseURL)
            .then(res=>{  
              setData(res.data); 
              Swal.fire({
                title: 'Pet found!',
                icon: "success",
                background: "#d4edda",
                timer:1000,
                timerProgressBar:true,
                toast: true,
                position:"top-end",
                width: "300px",
                showConfirmButton: false,
                padding: "0.3rem"
              })
            })
            .catch(function (error){
              setData('');
              Swal.fire({
                title: 'Pet not found!',
                icon: "error",
                background: "#d4edda",
                timer:1000,
                timerProgressBar:true,
                toast: true,
                position:"top-end",
                width: "300px",
                showConfirmButton: false,
                padding: "0.3rem"
              })
            })
  }

  return (
    <div className="Home">
       <input type="number" id="searchID" aria-describedby="searchID" placeholder="Enter pet ID to search" onChange={(e) => setId(e.target.value)}/>
       <button type="button" className="btn btn-info" onClick={()=>getRequest()}>Go!</button>
      <Link to="/add"><button className="btn btn-success btnAdd" >Add a pet</button></Link>
      <button className="btn btn-warning" onClick={refreshPage}>Reload</button>
  {Object.keys(data).length === 0 ? 
  (
    <div style={{fontSize : '50px', color : 'red'}}>...We don't fount any pet :c </div>
    
  ) : 
  (
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
              <td>{data.category.name != "" ? data.category.name : "N.A"}</td>
              <td>{data.name != "" ? data.name : "N.A" }</td>
              <td><img src={data.photoUrls[0]} width="100px" height="100px"/></td>
              <td>{data.status != "" ? data.status : "N.A" }</td>
              <td> 
                <button className="btn btn-success" style={{marginRight : '3%'}} onClick={() => {history.push(`/edit/${data.id}`)
                  window.$id = data.id;
                }}>Edit a pet
                </button>

                <button className="btn btn-success" onClick={() => deleteArticle(data.id)}>Delete a pet</button>
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