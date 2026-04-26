
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import {useState, React} from 'react' 
import toast from 'react-toastify'

const register = () => {
const [username, setUsername] = useState("");
const [email, setUsername] = useState("");
const [phone, setUsername] = useState("");
const [password, setUsername] = useState("");

const handleRegister = async(e) => {
    e.preventDefault();
    try{
    const res = await axios.post("http://localhost:5000/api/register", {username, email, phone, password});
    if(res.data.status === 1){
    toast.success("Successfully registered");
    Navigate("/login");
    }
    }catch(err){
        toast.error(err.response?.data?.message || "Login error");
    }
}

return(
    <div>
        <div>
            <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <input type="email" placeholder="Enter Email" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <input type="number" placeholder="Enter number" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <input type="password" placeholder="Enter password" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            <p> Already have an account <Link to="/login"></Link></p>
            <button type="submit">Register</button>
        </div>
    </div>
)};

export default register;