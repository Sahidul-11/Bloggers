import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import UseContext from "../Hooks/UseContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
const BlogCard = ({ ACard }) => {
    const { user } = UseContext()
    const { mutateAsync } = useMutation({
        mutationFn: async ({ blogs }) => {
            const { data } = await axios.post("http://localhost:5000/wishList", blogs)
        },
        onSuccess: () => {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Blog added Successfully",
                showConfirmButton: false,
                timer: 2000
            });
        }
    })
 const handleWish = async ()=>{
    const blogs ={
        UserEmail: user.email,
        blog : ACard
    }
   await mutateAsync({blogs})
 }
    return (
        <div>
            <Card
                className="w-full box-border"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black">
                <img className="h-[350px]" src={ACard.URL} alt="" srcset="" />
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {ACard.Category}
                </h5>

                <div className="mb-5 mt-2.5 flex items-center">
                    <div className="dark:text-white font-bold">Title : </div>
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                        {ACard.title}
                    </span>
                </div>
                <div className="">
                    <div>  <span className="text-sm font-bold text-gray-900 dark:text-white block py-4">Short Description :</span></div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{ACard.shortDes}</span>

                </div>
                <div className=" flex-col md:flex-row justify-between gap-4 w-full">
                    <button onClick={handleWish} className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
                        <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                        <span
                            className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                        >
                            Add To Wishlist
                        </span>
                    </button>
                    <Link to={`/details/${ACard._id}`} className=" group relative ml-5 inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500">
                        <span className="absolute inset-0 border border-current"></span>
                        <span
                            className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
                        >
                            Details
                        </span>
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default BlogCard;
