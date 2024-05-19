import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseContext from '../Hooks/UseContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const [error ,setError] = useState("")
    const navigate = useNavigate()
    const {
        createUser,
        setLoading,
        userUpdate,} = UseContext()
    const handleSignUp = (e)=>{
        e.preventDefault()
        const form =e.target
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        if (password.length < 6) {

            setError("password length must be 6 or longer ")
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError("You must enter a uppercase letter")
            return
        }
        if (!/[0-9]/.test(password)) {
            setError("You must enter a lowercase letter")
            return
        }
        createUser(email ,password)
        .then(res=>{
            if (res.user) { 
                userUpdate(name , photoURL)
                axios.post ("https://blogs-wesite-client.vercel.app/jwt",{email : email},{
                    withCredentials : true
                 })
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Sign Up Successfully",
                    showConfirmButton: false,
                    timer: 2000
                  });
                  navigate("/")
                  setLoading(false)
            }
        })
        .catch(error=>{
            if (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                    footer: '<a href="#">Why do I have this issue?</a>'
                  });
                  setLoading(false)
            }
        })
        
    }
    return (
        <div>
            <div>
                <div className="font-sans">
                    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                        <div className="relative sm:max-w-sm w-full">
                            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                                <label for="" className="block mt-3 text-3xl text-gray-700 text-center font-semibold">
                                    Sign Up
                                </label>
                                <form method="#" action="#" onSubmit={handleSignUp} className="mt-10">
                                    <div>
                                        <input type="text" placeholder="Full Name" name='name' className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>
                                    <div className="mt-7">
                                        <input type="email" required name='email' placeholder="Email address" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>
                                    <div className="mt-7">
                                        <input type="text" name='photoURL' placeholder="Photo URL" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>
                                    <div className="mt-7">
                                        <input type="password" name='password' required placeholder="Enter password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />

                                    <p className=' text-red-700'>{error}</p>
                                    </div>
                                    <div className="mt-7">
                                        <button type='submit' className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                         Sign Up
                                        </button>
                                    </div>
                                    <div className="mt-7">
                                        <div className="flex justify-center items-center">
                                            <label className="mr-2" > have You Already Account?</label>
                                            <Link to="/signIn" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                                Sing in Here
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;