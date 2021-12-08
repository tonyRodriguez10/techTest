import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Swal from 'sweetalert2';
function Edit()  { 
    /****************************  const *****************************/
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [photoUrls, setPhotourls] = useState('');
    const [status, setStatus] = useState('');
    const history = useHistory();

    /* Object */
    const [pet, setPet]=useState({
      "id": '',
      "category": {
                      "id": '',
                       "name":''
                   },
      "name": "doggie",
      "photoUrls": [
                     ''
                   ],
      "tags": [
                  {
                      "id": '',
                      "name":''
                  }
               ],
      "status": ''
    })//end const


    /* Get data by ID from API */
    const getRequest=async()=>{
      await axios.get('https://petstore.swagger.io/v2/pet/'+ window.$id)
      .then(res=>{   
        setCategory(res.data.category.name);
        setName(res.data.name);
        setPhotourls(res.data.photoUrls);
        setStatus(res.data.status);
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
        history.push('/');
      })
    }

    useEffect(async()=>{
      await getRequest();
    },[])



      /* Captured data from UI and send to API*/
      function postLine(){
        setPet(({
          "id": window.$id,
          "category": category,
          "name": name,
          "photoUrls": photoUrls,
          "status": status
        }))
        console.log(category);
        console.log(name);
        console.log(photoUrls);
        console.log(status);
        console.log(pet);
        axios({
          method: 'post',
          url: 'https://petstore.swagger.io/v2/pet',
          data: {
          "id": window.$id,
          "category": {
            "id": window.$id,
            "name": category
          },
          "name": name,
          "photoUrls": [
            photoUrls
          ],
          "tags": [
            {
              "id": window.$id,
              "name": name
            }
          ],
          "status": status
        }
      });
      Swal.fire({
        title: 'Pet edited succesfully!',
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
          history.push('/');
         
      }

    return (
        <>
        <div>
                <h3>Edit existing pet</h3>
                <form> 
                    <div className="form-group">
                        <label for="ownerName">Owner name:</label>
                        <input type="text" className="form-control" defaultValue={category} id="ownerName" aria-describedby="ownerName" placeholder="Enter owner name" onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="petName">Pet name:</label>
                        <input type="text" className="form-control" defaultValue={name} id="petName" aria-describedby="petName" placeholder="Enter pet name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="petPhoto">Pet photo:</label>
                        <input type="text" className="form-control" defaultValue={photoUrls} id="petPhoto" aria-describedby="petPhoto" placeholder="Upload a pet photo" onChange={(e) => setPhotourls(e.target.value)}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your pet photo with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="pepetStatustName">Pet Status:</label>
                        <select id="petStatus" selected={status} className="form-control custom-select custom-select-lg" onChange={(e) => setStatus(e.target.value)}>
                            <option selected>Choose one...</option>
                            <option value={"Homeless"} selected={status == "Homeless"}>Homeless</option>
                            <option value={"Adopted"} selected={status == "Adopted" }>Adopted</option>
                        </select>
                    </div>
                    <br /><br />
                    <button type="button" className="btn btn-primary" style={{marginRight : '3%'}} onClick={()=>postLine()}>Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={() => {history.push(`/`)}}>Cancel</button>
                </form>
        </div>
        </>
        )
}

  export default Edit;