import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


const FeaturedBlogs = () => {
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['wishList'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/blogs`,{
                withCredentials : true
            })
            return data
        },
    })
    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    const top10 = data.sort((a, b) => b?.Description?.length - a?.Description?.length).slice(0, 10);
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 my-16">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Top 10 Blogs
                </h3>

            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">SL NO</th>
                            <th className="py-3 px-6"> Blog Owner</th>
                            <th className="py-3 px-6">Blog Title</th>
                            <th className="py-3 px-6 pl-16">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            top10.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap font-bold text-xl">{idx + 1}</td>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.URL} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.author?.authorName}</span>
                                            <span className="block text-gray-700 text-xs">{item.author?.authorEmail}</span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link to={`/details/${item._id}`} className=" group relative ml-5 inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500">
                                            <span className="absolute inset-0 border border-current"></span>
                                            <span
                                                className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                                            >
                                                Details
                                            </span>
                                        </Link>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeaturedBlogs;