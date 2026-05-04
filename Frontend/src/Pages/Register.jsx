
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import {useState, React} from 'react' 
import {toast}from 'react-toastify'

const Register = () => {

const navigate = useNavigate();

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [password, setPassword] = useState("");

const handleRegister = async(e) => {
    e.preventDefault();
    try{
    const res = await axios.post("http://localhost:5000/api/register", {username, email, phone, password});
    if(res.data.status === 1){
    toast.success("Successfully registered");
    navigate("/login");
    }
    }catch(err){
        toast.error(err.response?.data?.message || "Login error");
    }
}

return(
    <div>
        <div>
            <form onSubmit={handleRegister}>
            <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)} required/><br/>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/><br/>
            <input type="number" placeholder="Enter phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required/><br/>
            <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/>
            <p> Already have an account <Link to="/login">Login</Link></p>
            <button className="cursor-pointer" type="submit">Register</button>
            </form>
        </div>
    </div>
)};

export default Register;