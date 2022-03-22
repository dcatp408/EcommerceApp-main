import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import './Login.css'

const Registration = (props) => {



    // const { id } = useParams();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const history = useHistory()
    // const [errArray, setErrArray] = useState([])

    const onSubmitHandler = e => {

        e.preventDefault()







        axios.post('http://localhost:8000/api/user/', {
            userName, email, password, confirmPassword
        })
        //         .then(res=> {history.push('/')})
        //         .catch(err=>{ 
        //             const errResponse = err.response.data.errors 
        //             let tempArr = []
        //             for (const key of Object.keys(errResponse)){
        //                 tempArr.push(errResponse[key].message)
        //             }
        //             setErrArray(tempArr)

        // })
    }




    return (
        <><div className="center">
            <h1>Register</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="txt_field">

                    <input type="text" path="userName" required="required" onChange={(e) => setUserName(e.target.value)} value={userName} />
                    <span></span>
                    <label path="userName">Username</label>

                </div>
                {/* <errors path="userName" class="text-danger" /> */}
                <div className="txt_field">
                    <input type="text" path="email" required="required" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <span></span>
                    <label path="email">Email</label>
                </div>
                {/* <errors path="email" class="text-danger" /> */}
                <div className="txt_field">
                    <input type="password" path="password" required="required" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <span></span>
                    <label path="password">Password</label>
                </div>
                {/* <errors path="password" class="text-danger" /> */}
                <div className="txt_field">
                    <input type="password" path="confirmPassword" required="required" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                    <span></span>
                    <label path="confirmPassword">Confirm Password</label>
                </div>
                {/* <errors path="confirm" class="text-danger" /> */}


                <input type="submit" value="Register" />

                <div className="signup_link">
                    Already a member?<Link to="/">login</Link>
                </div>
            </form>
            {/* {errArray.map((err, i) => (<p key={i}> {err}</p>))} */}
        </div></>
    )
}

export default Registration;