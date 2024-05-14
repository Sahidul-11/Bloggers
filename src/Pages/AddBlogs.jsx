import React from 'react';

const AddBlogs = () => {

    return (
        <div>
            <div class="min-h-screen bg-gray-100 p-0 sm:p-12">
                <div class="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 class="text-2xl font-bold mb-8">Form With Floating Labels</h1>
                    <form id="form" novalidate>
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

                        <div class="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="shortDes"
                                placeholder=" "
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="password" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Write Short Description</label>
                            <span class="text-sm text-red-600 hidden" id="error">Password is required</span>
                        </div>

                        <fieldset class="relative z-0 w-full p-px mb-5">

                            <span class="text-sm text-red-600 hidden" id="error">Option has to be selected</span>
                        </fieldset>

                        <div>
                            <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900"> Headliner </label>

                            <select
                                name="HeadlineAct"
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
                                id="OrderNotes"
                                class="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                                rows="4"
                                placeholder="Enter any additional Description..."
                            ></textarea>
                        </div>
                        <button
                            id="button"
                            type="button"
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