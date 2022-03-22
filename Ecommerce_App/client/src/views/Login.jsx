import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom'
import './Login.css';

const Login = (props) => {
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const { id } = useParams();
    const history = useHistory()
    const [refresh, setRefresh] = useState(true)

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/user/')
    //         .then(res=>{
    //             console.log(res.data)
    //             setUsers(res.data)})
    //         .catch(err => console.error(err))
    // },[refresh]);
    const onSubmitHandler = e => {

        e.preventDefault()

        axios.post('http://localhost:8000/api/user/', {
            userName, email, password, confirmPassword
        })

    }
    return (
        <><div className="center">
            <h1>Login</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="txt_field">
                    <input type="text" path="email" required="required" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <span></span>
                    <label path="email">Email</label>
                </div>
                <errors path="email" class="text-danger" />
                <div className="txt_field">
                    <input type="password" path="password" required="required" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <span></span>
                    <label path="password">Password</label>
                </div>
                <errors path="password" class="text-danger" />
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login" />
                <div class="signup_link">
                    Not a member?<Link to="/register">Sign up</Link>
                </div>
            </form>

        </div></>
    )





}
export default Login;