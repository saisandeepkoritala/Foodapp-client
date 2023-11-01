import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import NavigationContext from '../context/Navigation';
import axios from 'axios';

const Login = () => {
    const {Setuser,Setsignuser}=useContext(NavigationContext);
    const [formData, setFormData] = useState({
        username: '',
        password: '',

    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post("https://mern-food-app-loq7.onrender.com/api/v1/user/login",
        {email:formData.username,password:formData.password})
        console.log(response)
        if(!response.data.error){
        Setuser(true);
        navigate('/home');
        }
        else{
            navigate("/")
        }
        // Setuser(true);
        // navigate("/home");

    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Login</h2>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </div>
                <button type="submit" style={styles.submitButton}>Login</button>
            </form>
            <div>
            <button type="submit" style={styles.submitButton} 
            onClick={()=>{
                Setsignuser(true)
                navigate("/signup")
                }}>Sign Up</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '400px',
        height:"400px",
        margin: '0 auto',
        padding: '25px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    submitButton: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        margin:"5px"
    },
    };

export default Login;
