import { Link } from "react-router-dom"
import { Courses } from "./courses"
export const Home = ()=>{
    return(
        <>
            <section>
                <div class='h-fit text-center bg-gradient-to-r from-black to-red-100'>
                    <div class='bg-[url(/images/girl.png)] bg-cover h-screen min-h-[400px] max-h-[800px] bg-no-repeat bg-center w-full flex justify-center items-center'>
                        <div class='p-[20%] text-white font-bold'>
                            <h1 class='font-bold text-2xl md:text-4xl lg:text-5xl mb-4'>Web Development Made Easy</h1>
                            <h3 class='text-lg md:text-xl mb-6'>Join us now</h3>
                            <div class=' flex justify-center text-black'>
                                <Link to='/registration'>
                                <div class='bg-white text-black font-medium py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors'>Register</div></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <Courses />
            </section>
        </>
    )
}