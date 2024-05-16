import axios, { Axios } from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseContext from "../Hooks/UseContext";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { comment } from "postcss";

const Details = () => {

    const { user } = UseContext()
    const [ACard, setACard] = useState(null)
    const { id } = useParams()
    const [update, setUpdate] = useState(false)
    const [comments , setComments] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:5000/comment?id=${id}`)
            .then(res => {
                setComments(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id, update])
    useEffect(() => {
        axios.get(`http://localhost:5000/details?id=${id}`)
            .then(res => {
                setACard(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])

    if (!ACard) {
        return
    }
    const checkUser = () => {
        if (user.email === authorEmail) {
            return (
                Swal.fire({
                    position: "top",
                    icon: "warning",
                    title: "You Can't comment On Your Own Blogs",
                    showConfirmButton: false,
                    timer: 2000
                })
            )

        }
    }
    const { author } = ACard
    const { authorEmail, authorName, authorImage } = author;
    const handleComment = (e) => {
        e.preventDefault()
        if (user.email === authorEmail) {
            return
        }

        const comment = e.target.comment.value;
        if (comment.length <= 0) {
            return
        }
        const data = {
            blogId: id,
            comment,
            ownerImage: user.photoURL,
            ownerName: user.displayName,
            ownerImage: user.photoURL,

        }
        axios.post("http://localhost:5000/comment", data)
            .then(res => {
                if (res.data) {
                    setUpdate(!update)
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Blog added Successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
            .catch(error => {
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
            <Card
                className=" w-full md:w-4/5 box-border mx-auto my-10"
                imgAlt="Apple Watch Series 7 in colors pink, silver, and black">
                <img className="h-auto md:h-[550px]" src={ACard.URL} alt="" srcset="" />

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
                <div className="">
                    <div>  <span className="text-sm font-bold text-gray-900 dark:text-white block py-4"> Description :</span></div>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{ACard.Description}</span>

                </div>
                <div className="w-full  md:flex justify-center items-center gap-10">
                    {
                        user.email === authorEmail && <div>
                            <Link className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring mb-10">
                                <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                                <span
                                    className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                >
                                    Update
                                </span>
                            </Link>
                        </div>

                    }


                    <div onClick={checkUser} className=" w-full md:w-1/2">
                        <label for="OrderNotes" class="sr-only">Order notes</label>

                        <form onSubmit={handleComment} action="">
                            <div
                                class="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700"
                            >
                                <textarea
                                    name="comment"

                                    id="OrderNotes"
                                    class="w-full resize-none border-none align-top focus:ring-0 sm:text-sm dark:bg-gray-800 dark:text-white"
                                    rows="4"
                                    placeholder="Write Your Comment Here..."
                                ></textarea>

                                <div class="flex items-center justify-end gap-2 bg-white p-3 dark:bg-gray-800">
                                    <button
                                        type="reset"
                                        class="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-100"
                                    >
                                        Clear
                                    </button>

                                    <button
                                        type="submit"
                                        class="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
                                    >
                                        comment
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Card>
           {
            comments.length>0 ? <Card className="w-4/5 md:w-1/2 mx-auto my-10">
            <div className="mb-4 flex items-center justify-between">
                <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">Latest Comments</h5>
                <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    View all
                </a>
            </div>
            <div className="flow-root">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                   {
                    comments.map(comment=> <li key={comment._id} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                            {/* <Image
                                alt="Neil image"
                                height="32"
                                src="/images/people/profile-picture-1.jpg"
                                width="32"
                                className="rounded-full"
                            /> */}
                            <img className="h-16 w-16 rounded-full" src={comment.ownerImage} alt="" srcset="" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="truncate font-extrabold inline px-2 py-1 rounded bg-opacity-50 bg-green-500 text-gray-900 dark:text-white">{comment.ownerName}</p>
                            <p className="truncate font-medium text-gray-900 dark:text-white">{comment.comment}</p>
                           
                        </div>
                        
                    </div>
                </li>)
                   }
                </ul>
            </div>
        </Card> : <h1 className=" text-center text-3xl font-bold ">NO comment</h1>
           }

        </div>
    );
};

export default Details;