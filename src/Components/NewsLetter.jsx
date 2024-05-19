import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const NewsLetter = () => {
    const [sub , setSub] = useState(true)
    const handleSubscribe = (e) => {
        e.preventDefault()
         if (sub) {
            toast.success("Thank you for subscribing to our newsletter")
            setSub(!sub)
         }
         else{
            toast.error("UnSubscribed")
            setSub(!sub)
         }
       
    }
    return (
        <div>
            <div className="w-full mb-10 text-white dark:bg-gray-500 bg-[url(https://source.unsplash.com/random/640x480)] bg-cover bg-center bg-no-repeat bg-opacity-60">
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-white">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-white">Find out about events and other news</p>
                    <div className="flex flex-row">
                        <form onSubmit={handleSubscribe} action="">
                            <input type="email" required placeholder="Enter your Email" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                            <button type="submit" className={`w-2/5 p-3 ${sub ?  "bg-violet-600" : "bg-[#eb3d3d]"} font-semibold rounded-r-lg sm:w-1/3  dark:text-gray-50`}>{sub? "Subscribe" : "Unsubscribe"}</button>
                        </form>
                    </div>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
