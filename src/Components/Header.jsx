import React from 'react';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const link = <>
        <NavLink to="/" className={({isActive})=> isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>Home</NavLink>
        <NavLink to="/feature" className={({isActive})=> isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>Featured Blogs</NavLink>
        <NavLink to="/blogs"className={({isActive})=> isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>All blogs</NavLink>
        <NavLink to="/addBlogs"className={({isActive})=> isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>Add Blog</NavLink>
        <NavLink to="/wishlist"className={({isActive})=> isActive ? "bg-emerald-500 px-2 py-1 rounded-md" : ""}>Wishlist</NavLink>

    </>
    return (
        <div>

            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Flowbite >
                        <DarkThemeToggle />
                    </Flowbite>
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar className='ml-5' alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
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