import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BlogCard from '../Components/BlogCard';
import { Banner, Button, TextInput } from 'flowbite-react';

const Blogs = () => {

    const [category, setCategory] = useState("");
    const [search, setSearch] = useState('');

    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: ['Blogs'],
        queryFn: () => blogFunction(category, search),
    })

    const blogFunction = async (a, b) => {
        const { data } = await axios.get(`https://blogs-wesite-client.vercel.app/blogs?Category=${a}&search=${b}`)
        return data

    }
    console.log(data)
    const handleSort = (e) => {
        const caa = e.target.value;
        setSearch('')
        setCategory(caa)

    }
    const handleSearch = (e) => {
        e.preventDefault()
        const text = e.target.search.value;
        console.log(text)
        setSearch(text)
    }
    useEffect(() => {
        refetch()
    }, [category, search])


    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>

    }

    return (
        <div>
            <div className='flex justify-center mt-10 dark:bg-gray-700 py-6 rounded-lg gap-20 '>
                <div>
                    <label htmlFor="HeadlineAct" className="block text-3xl font-medium text-gray-900 dark:text-white">Sort </label>

                    <select
                        onChange={handleSort}
                        name="Category"
                        id="HeadlineAct"
                        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                    >
                        <option value="">Default</option>
                        <option value="Programming and Development">Programming and Development</option>
                        <option value="Software and Apps">Software and Apps</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Photography">Photography</option>
                        <option value="Lifestyle">Lifestyle</option>

                    </select>
                </div>
                <Banner className='pt-5' >
                    <div className="flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                        <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto ">
                            <form onSubmit={handleSearch} action="#" className="flex w-full  flex-col items-center md:flex-row md:gap-x-3">
                                <TextInput className='dark:text-white' name='search' id="email" placeholder="Write to Search" required type="text" />
                                <Button type="submit">Search</Button>
                            </form>
                        </div>
                    </div>
                </Banner>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 mx-2 md:mx-20 gap-8">
                {data.length > 0 ?
                    data.map(a => <BlogCard key={a._id} ACard={a}></BlogCard>) :
                    <h1 className='text-center text-3xl font-bold col-span-3'> No Blogs Found</h1>

                }
            </div>
        </div>
    );
};

export default Blogs;