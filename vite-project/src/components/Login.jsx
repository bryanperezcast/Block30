import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login(props) {
const AuthKey = props.AuthKey
const setAuthKey = props.setAuthKey
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const signupUser = async () => {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-b/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      });
      const result = await response.json();
      if (result.success === false) {
        window.alert('username already exist, try another')
      } else {
        const hi = result.data.token
        setAuthKey(hi)
        const path = '/Home'
        navigate(path)
      }
      return result
    } catch (err) {
      console.error(err);
    }
  }

  function routeChange () {
    const path = '/LoginUser'
    navigate(path)
  }


  
    return (
      <div>
        <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <input value={password} onChange={(e) => setpassword(e.target.value)} placeholder="password"/>
          <button type="submit" onClick={() => {signupUser()}}>submit</button>
        </form>
        <span>have an account?</span><button onClick={routeChange}>Login</button>
      </div>
    )
  }
  
  export default Login
  