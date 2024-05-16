import axios from 'axios';
import React from 'react';
import UseContext from '../Hooks/UseContext';
import Swal from 'sweetalert2';

const AddBlogs = () => {
    const {user} = UseContext()
    const handleAdd =(e)=>{
        e.preventDefault()
        const authorEmail = user.email;
        const authorName = user.displayName;
        const authorImage = user.photoURL
        const author = {authorEmail , authorName , authorImage};
        const form = e.target;
        const title = form.title.value;
        const Category = form.Category.value;
        const URL = form.URL.value;
        const shortDes = form.shortDes.value;
        const Description = form.Description.value;
        const blog = {title ,Category, URL,shortDes, Description , author}
        axios.post("http://localhost:5000/blogs", blog)
        .then(res=>{
            if (res.data) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Blog added Successfully",
                    showConfirmButton: false,
                    timer: 2000
                  });
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
            }
        })
    }

    return (
        <div>
            <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
                <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 class="text-2xl font-bold mb-8">Form With Floating Labels</h1>
                    <form onSubmit={handleAdd} id="form" novalidate>
                        <div class="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="title"
                                placeholder=" "
                                required
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Title</label>
                            <span class="text-sm text-red-600 hidden" id="error">Name is required</span>
                        </div>

                        <div class="relative z-0 w-full mb-5">
                            <input
                                type="url"
                                name="URL"
                                placeholder=" "
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Image URL</label>
                            <span class="text-sm text-red-600 hidden" id="error">Email address is required</span>
                        </div>

                        <div>
                            <label for="OrderNotes" class="block text-sm font-medium text-gray-700"> Short Description </label>

                            <textarea
                            name='shortDes'
                                id="OrderNotes"
                                class="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                rows="3"
                                placeholder="Enter any additional short Description..."
                            ></textarea>
                        </div>

                        <fieldset class="relative z-0 w-full p-px mb-5">

                            <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                        </fieldset>

                        <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">Categories </label>

                            <select
                                name="Category"
                                id="HeadlineAct"
                                className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                            >
                                <option value="">Please select</option>
                                <option value="Programming and Development">Programming and Development</option>
                                <option value="Software and Apps">Software and Apps</option>
                                <option value="Cybersecurity">Cybersecurity</option>
                                <option value="Photography">Photography</option>
                                <option value="Lifestyle">Lifestyle</option>
                                
                            </select>
                        </div>
                        <div>
                            <label for="OrderNotes" class="block text-sm font-medium text-gray-700"> Description </label>

                            <textarea
                            name='Description'
                                id="OrderNotes"
                                class="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                rows="4"
                                placeholder="Enter any additional Description..."
                            ></textarea>
                        </div>
                        <button
                            id="button"
                            type="submit"
                            class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none">
                            Add Blogs
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddBlogs;