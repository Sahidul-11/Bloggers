import React from 'react';
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Link, NavLink } from 'react-router-dom';
import UseContext from '../Hooks/UseContext';
import Swal from 'sweetalert2';
import "../Pages/style.css"

const Header = () => {
    const { user, signOutUser ,setLoading } = UseContext()

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
                setLoading(false)
                Swal.fire({
                    title: "Logged Out!",
                    text: "You has been Logged Out.",
                    icon: "success"
                });
            }
        });
    }
    const link = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>Home</NavLink>
        <NavLink to="/feature" className={({ isActive }) => isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>Featured Blogs</NavLink>
        <NavLink to="/blogs" className={({ isActive }) => isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>All blogs</NavLink>
        {
            user && <>
                <NavLink to="/addBlogs" className={({ isActive }) => isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>Add Blog</NavLink>
                <NavLink to="/wishlist" className={({ isActive }) => isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>Wishlist</NavLink>
            </>
        }

    </>
    return (
        <div className='z-50 sticky'>

            <Navbar fluid rounded>
                <Navbar.Brand >

                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"><img className='bg-gray-800 p-2 rounded-xl' src="https://i.ibb.co/5vMhs1x/logo-white.png" alt="" srcset="" /></span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Flowbite >
                        <DarkThemeToggle />
                    </Flowbite>
                    {
                        user ? <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                user.photoURL ?
                                    <Avatar className='ml-5' alt="User settings" img={user.photoURL} rounded /> :
                                    <Avatar className='ml-5' alt="User settings" rounded />

                            }
                        >
                            <Dropdown.Header className='z-40'>
                                <span className="block text-sm">{user.display}</span>
                                <span className="block truncate text-sm font-medium">{user.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
                        </Dropdown> : <Link to="/signIn" className='btn'><Button className='ml-3 bg-[#db3333] '>Sign In</Button></Link>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='dark:text-white'>

                    {
                        link
                    }

                </Navbar.Collapse>
            </Navbar>


        </div>
    );
};

export default Header;