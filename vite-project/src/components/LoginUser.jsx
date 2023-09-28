import { useState } from "react"
import { useNavigate } from "react-router-dom";

function LoginUser(props) {
const AuthKey = props.AuthKey
const setAuthKey = props.setAuthKey

const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [userSignin, setUserSignin] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const LoginUser = async () => {
    try {
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/2302-acc-ct-web-pt-b/users/login`, {
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
        window.alert('username or password is incorect, please try again')
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
    const path = '/'
    navigate(path)
  }
  
    return (
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
          <input value={password} onChange={(e) => setpassword(e.target.value)} placeholder="password"/>
          <button type="submit" onClick={() => {LoginUser()}}>submit</button>
        </form>
        <span>dont have and account?</span><button onClick={routeChange}>SignUp</button>
      </div>
    )
  }
  
  export default LoginUser