import { useMutation, useQuery } from '@tanstack/react-query';
import UseContext from '../Hooks/UseContext';
import axios from 'axios';
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const List = () => {
    const { user } = UseContext()

    const { isPending, isError, data, error , refetch } = useQuery({
        queryKey: ['wishList'],
        queryFn: async () => {
            const { data } = await axios.get(`https://blogs-wesite-client.vercel.app/wishList?email=${user.email}`,{
                withCredentials: true
            })

            return data
        },
    })
    const {mutateAsync} =useMutation({
        mutationFn: async ({id}) => {
            const { data } = await axios.delete(`https://blogs-wesite-client.vercel.app/wishList?id=${id}`)
            
        },
        onSuccess: () => {
            refetch()
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Blog Removed Successfully",
                showConfirmButton: false,
                timer: 2000
            });
        }
        
    })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }
   const handleWish = async(id)=>{
       await mutateAsync({id})
   }
   console.log(data)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 mx-2 md:mx-4 lg:mx-20 gap-8">
                {data.length > 0 ?
                    data.map(blog => <Card 
                        className="w-full box-border"
                        imgAlt="Apple Watch Series 7 in colors pink, silver, and black">
                        <img className="h-[350px]" src={blog.blog?.URL} alt="" srcset="" />
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {blog.blog?.Category}
                        </h5>
        
                        <div className="mb-5 mt-2.5 flex items-center">
                            <div className="dark:text-white font-bold">Title : </div>
                            <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                {blog.blog?.title}
                            </span>
                        </div>
                        <div className="">
                            <div>  <span className="text-sm font-bold text-gray-900 dark:text-white block py-4">Short Description :</span></div>
                            <span className="text-sm font-bold text-gray-900 dark:text-white">{blog.blog?.shortDes}</span>
        
                        </div>
                        <div className=" flex-col md:flex-row justify-between gap-4 w-full">
                            <button onClick={()=>handleWish(blog._id)} className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
                                <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                                <span
                                    className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                >
                                    Remove Wishlist
                                </span>
                            </button>
                            <Link to={`/details/${blog.blog?._id}`} className=" group relative ml-5 inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500">
                                <span className="absolute inset-0 border border-current"></span>
                                <span
                                    className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                                >
                                    Details
                                </span>
                            </Link>
                        </div>
                    </Card> ) :
                    <h1 className='text-center text-3xl font-bold col-span-3'> No Blogs Found</h1>
                }
            </div>
        </div>
    );
};

export default List;