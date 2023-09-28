import './Post.css'
import { useState } from 'react'
import NavBar from './Navbar'
function Post(props) {
  const AuthKey = props.AuthKey
  const setAuthKey = props.setAuthKey
  const [title ,setTitle] = useState("")
  const [description ,setDescription] = useState("")
  const [price ,setPrice] = useState("")
  const [willDeliver ,setWillDeliver] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const submitPost = async () => {

    try {
      const response = await fetch(`https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-b/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AuthKey}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const handleSelectChange = (event) => {
    // Update the 'willDeliver' state based on the selected option
    setWillDeliver(event.target.value === 'true');
  };

    return (
      <div>
        <NavBar />
        <form onSubmit={handleSubmit}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title'/>
          <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='description'/>
          <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price'/>
          
          <select onChange={handleSelectChange} value={willDeliver.toString()}>
            <option value="true">will deliver</option>
            <option value="false">will not deliver</option>
          </select>

          <button type='submit' onClick={() => {submitPost()}}>submit</button>
        </form>
      </div>
    )
  }
  
  export default Post