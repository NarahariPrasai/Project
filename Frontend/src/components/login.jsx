import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

const navigate = useNavigate();

const [ email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
        const res = await axios("http://localhost:5000/api/login", {email, password});
        if(res.data.status === 1){
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", json.stringify(res.data.user));
            toast.success("Logged in successfully");
            navigate("/");
        }
    }catch(err){
        toast.error(err.response?.data?.message || "Login error");
    }
};
    return(
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Write email" value={email} onChange={(e) =>{setEmail(e.target.value)}} required />
                    <input type="password" placeholder="Write password" value={password} onChange={(e) =>{setPaassword(e.target.value)}} required/>
                    <button type="submit">Login</button>
                    <p>Create an account<Link to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    )
};

export default Login;