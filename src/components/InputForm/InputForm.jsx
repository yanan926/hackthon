import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./inputForm.scss"

function InputForm({setPerson,setUserUrl}) {
  const navigate = useNavigate()
  const APIKEY = "Key b907cdfa6acc4fffb62a87a0cd0f9267";

  let handleSubmit = async (e) => {
    e.preventDefault();
    const urlLink = e.target.urlLink.value;
    setUserUrl(urlLink)
    let data = JSON.stringify({
      inputs: [
        {
          data: {
            image: {
              url: urlLink,
            },
          },
        },
      ],
    });

    let config = {
      headers: {
        Authorization: "Key b907cdfa6acc4fffb62a87a0cd0f9267",
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      `https://api.clarifai.com/v2/users/clarifai/apps/main/models/celebrity-face-detection/versions/2ba4d0b0e53043f38dbbed49e03917b6/outputs`,
      data,
      config
    );
    console.log(response.data.outputs[0].data.regions[0].data.concepts[0]);
    console.log(response.data.outputs[0].data.regions[0].data.concepts[0].name);
    console.log(
      response.data.outputs[0].data.regions[0].data.concepts[0].value
    );

    const person = response.data.outputs[0].data.regions[0].data.concepts[0]

    if(person) {

    setPerson(response.data.outputs[0].data.regions[0].data.concepts[0])
    // navigate to Result page
    navigate('/result')

    } else {
      // oops?
    }


  };


  return (
    <>
      <form onSubmit={handleSubmit}>
       
        <div className="inputContainer">
        <label>Url Link</label>
        <input
          type="text"
          name="urlLink"
          placeholder="Please enter you image url link"
        />
         <button type="submit">Submit</button>
        </div>
       

      </form>
    </>
  );
}

export default InputForm;
