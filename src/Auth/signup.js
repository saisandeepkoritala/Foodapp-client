import { useState,useEffect,useRef } from 'react';
import axios from "axios";
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import NavigationContext from '../context/Navigation'; 
import { toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {

    useEffect(()=>{
        Ref.current.focus();
    },[])
    const Ref=useRef();
    const {Setuser,Setsignuser}=useContext(NavigationContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const notify=(name)=>{
        toast.success(`Hi ${name}!!`,{
            position:toast.POSITION.TOP_RIGHT
        })
    }

    const notifyFail=()=>{
        toast.error("Fill out all details !!",{
            position:toast.POSITION.TOP_RIGHT
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const response = await axios.post("https://mern-food-app-updj.onrender.com/api/v1/user/signup",formData)
        
        if(!response.data.error){
            const name=response.data.data.user.name;
            notify(name);
            setTimeout(()=>{
                Setuser(true);
                Setsignuser(false);
                navigate('/home');
            },2000)
            }
            else{
                console.log("hi")
                notifyFail()
            }
    };

    return (
        <>
        <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className='fields'>
            <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='John Doe'
                ref={Ref}
            />
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder='Johndoe@gmail.com'
            />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Minimum Length is 8'
            />
            </div>
            <div>
            <label htmlFor="passwordConfirm">Confirm</label>
            <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                placeholder='Confirm Password'
            />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        </div>
        <ToastContainer/>
        </>
    );
}

export default Signup;
