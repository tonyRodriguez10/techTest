import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

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
          history.push('/');
        
      }

    return (
        <>
        <div>
                <h3>Edit existing pet</h3>
                <form> 
                    <div class="form-group">
                        <label for="ownerName">Owner name:</label>
                        <input type="text" class="form-control" defaultValue={category} id="ownerName" aria-describedby="ownerName" placeholder="Enter owner name" onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="petName">Pet name:</label>
                        <input type="text" class="form-control" defaultValue={name} id="petName" aria-describedby="petName" placeholder="Enter pet name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="petPhoto">Pet photo:</label>
                        <input type="text" class="form-control" defaultValue={photoUrls} id="petPhoto" aria-describedby="petPhoto" placeholder="Upload a pet photo" onChange={(e) => setPhotourls(e.target.value)}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your pet photo with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="pepetStatustName">Pet Status:</label>
                        <select id="petStatus" selected={status} class="form-control custom-select custom-select-lg" onChange={(e) => setStatus(e.target.value)}>
                            <option selected>Choose one...</option>
                            <option value={"Homeless"} selected={status == "Homeless"}>Homeless</option>
                            <option value={"Adopted"} selected={status == "Adopted" }>Adopted</option>
                        </select>
                    </div>
                    <br /><br />
                    <button type="button" class="btn btn-primary" style={{marginRight : '3%'}} onClick={()=>postLine()}>Submit</button>
                    <button type="button" class="btn btn-secondary" onClick={() => {history.push(`/`)}}>Cancel</button>
                </form>
        </div>
        </>
        )
}

  export default Edit;