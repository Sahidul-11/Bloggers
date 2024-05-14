import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseContext from '../Hooks/UseContext';
import Swal from 'sweetalert2';
const SignIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { googleLogIn,
        setLoading,
        singInUser
        } = UseContext()

    const handleGoogle =()=>{
        googleLogIn()
        .then(res=>{
            if (res.user) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Sign Up Successfully",
                    showConfirmButton: false,
                    timer: 2000
                  });
                  navigate(location.state || "/")
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
    const handleSignIn = (e)=>{
        e.preventDefault()
        const form =e.target
        const email = form.email.value;
        const password = form.password.value;
        singInUser(email , password)
        .then(res=>{
            if (res.user) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Sign Up Successfully",
                    showConfirmButton: false,
                    timer: 2000
                  });
                  navigate(location.state || "/")
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
                                  Sign In
                                </label>
                                   <form method="#" onSubmit={handleSignIn} action="#" className="mt-10">

                                    <div className="mt-7">
                                        <input type="email" placeholder="Your email" name='email'required className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>

                                    <div className="mt-7">
                                        <input type="password" placeholder="Enter Password" name='password' required className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>
                                    <div className="mt-7">
                                        <button type='submit' className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                           Sign In
                                        </button>
                                    </div>
                                    </form>
                                
                                    <div className="flex mt-7 items-center text-center">
                                        <hr className="border-gray-300 border-1 w-full rounded-md" />
                                        <label className="block font-medium text-sm text-gray-600 w-full">
                                           Sin In By
                                        </label>
                                        <hr className="border-gray-300 border-1 w-full rounded-md" />
                                    </div>

                                    <div className="flex mt-7 justify-around w-full">
                                        <button onClick={handleGoogle} className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                            Google
                                        </button>
                                        <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">

                                            GitHub
                                        </button>
                                    </div>

                                    <div className="mt-7">
                                        <div className="flex justify-center items-center">
                                            <label className="mr-2" >Don't have Account?</label>
                                            <Link to="/signUp" className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                                Sing up Here
                                            </Link>
                                        </div>
                                    </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;