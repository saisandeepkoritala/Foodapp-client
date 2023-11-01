import React, { useState } from 'react';
import axios from "axios";
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import NavigationContext from '../context/Navigation'; 

function Signup() {
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

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.post("https://mern-food-app-loq7.onrender.com/api/v1/user/signup",formData)
        if(!response.data.error){
            Setuser(true);
            Setsignuser(false);
            navigate('/home');
            }
            else{
                navigate("/")
            }
    };

    return (
        <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
            />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}

export default Signup;
