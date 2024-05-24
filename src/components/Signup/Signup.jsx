import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import styles from './Signup.module.css';


const Signup = () => {
    const [userData, setUserData] = useState({ email: "", password: "" }); 
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/signup", userData);
            if (response.data.status) {
                localStorage.setItem("userData", JSON.stringify(response.data.data));
                navigate("/"); // Navigate to home page
            } else {
                toast.error(response.data.message); // Display error message using toast
            }
        } catch (error) {
            console.error("An error occurred:", error);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className={styles.signuppage}>
            <form className={styles.form} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type='text'
                        name='email' // Change name to lowercase
                        placeholder='Enter Email'
                        required
                        aria-label="Enter Email"
                        onChange={inputHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type='password'
                        name='password' // Change name to lowercase
                        placeholder='Enter Password'
                        required
                        aria-label="Enter Password"
                        onChange={inputHandler}
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.signupButton}>Signup</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
