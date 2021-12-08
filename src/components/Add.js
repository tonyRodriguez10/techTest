import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

function Add() {

    /****************************  const *****************************/
    const [id, setId] = useState('');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [photoUrls, setPhotourls] = useState('');
    const [status, setStatus] = useState('');
    const history = useHistory();

    /* POST*/
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

      /* Captured data from UI and send to API*/
      function postLine(){
        setPet(({
          "id": 500,
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
                "id": 500,
                "category": {
                    "id": 500,
                    "name": category
                },
                "name": name,
                "photoUrls": [
                    photoUrls
                ],
                "tags": [
                    {
                    "id": 500,
                    "name": status
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
                <h3>Add new pet</h3>
                <form> 
                    <div class="form-group">
                        <label for="ownerName">Owner name:</label>
                        <input type="text" class="form-control" id="ownerName" aria-describedby="ownerName" placeholder="Enter owner name" onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="petName">Pet name:</label>
                        <input type="text" class="form-control" id="petName" aria-describedby="petName" placeholder="Enter pet name" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="petPhoto">Pet photo:</label>
                        <input type="text" class="form-control" id="petPhoto" aria-describedby="petPhoto" placeholder="Upload a pet photo" onChange={(e) => setPhotourls(e.target.value)}/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your pet photo with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="pepetStatustName">Pet Status:</label>
                        <select id="petStatus" class="form-control custom-select custom-select-lg" onChange={(e) => setStatus(e.target.value)}>
                            <option selected>Choose one...</option>
                            <option>Homeless</option>
                            <option>Adopted</option>
                        </select>
                    </div>
                    <br /><br />
                    <button type="button" class="btn btn-primary" style={{marginRight : '3%'}} onClick={()=>postLine()}>Submit</button>
                    <button type="submit" class="btn btn-secondary" onClick={() => {history.push(`/`)}}>Cancel</button>
                </form>
        </div>
        </>
        )
}

  export default Add;