import { useState } from "react"
import {motion, AnimatePresence} from 'framer-motion'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export const Layout = () => {
    const [menu, setMenu] = useState(true)
    const menubar =()=>{
        setMenu(!menu)
    }
    return(
        <>
            <div>
                <div class='relative text-white'>
                    <header class='bg-gradient-to-r from-red-700 via-zinc-800 to-black'>
                        <nav class='flex justify-between text-center p-7 font-bold text-[0.8rem] md:text-2xl lg:text-3xl'>
                            <Link to='/'>
                            <h4 class='text-[1.2rem] '>UP5 ACADEMY</h4>
                            </Link>
                            <ul class='gap-7 hidden md:flex lg:flex'>
                                <Link to='/about'>
                                <li>About</li>
                                </Link>
                                
                                <li>Profile</li>
                                <li>Contact</li>
                                <li>Support</li>
                            </ul>
                            <div class='text-[1.2rem] md:text-2xl md:hidden lg:hidden text-blue-500' onClick={menubar}>
                                <div >
                                    {menu ? <i class="bi bi-list"></i>:<i class="bi bi-sort-down"></i> }
                                </div>
                            </div>
                        </nav>
                    </header>
                    <div>
                        <AnimatePresence>
                        {menu ? ('') : (
                            <motion.div 
                            initial={{
                                x: 0,
                            }}
                            animate={{
                                x: [100, 0],
                            }}
                            exit={{
                                x:[0, 200]
                            }}
                            transition={{
                                duration: 1,
                            }}
                            class='bg-red-500 w-50 h-fit text-center p-3 text-white absolute right-0'>
                                <ul class='flex flex-col  gap-7 '>
                                    <div class='bg-gradient-to-r hover:from-black hover:via-red-700 hover:to-white transition duration-500'>
                                        <Link to='/about'>
                                        <li>About</li>
                                        </Link>  
                                    </div>
                                    <div class='bg-gradient-to-r hover:from-black hover:via-red-700 hover:to-white transition duration-500'>
                                        <li>Profile</li>
                                    </div>
                                    <div class='bg-gradient-to-r hover:from-black hover:via-red-700 hover:to-white transition duration-500'>
                                        <li>Contact</li>
                                    </div>
                                    <div class='bg-gradient-to-r hover:from-black hover:via-red-700 hover:to-white transition duration-500'>
                                        <li>Support</li>
                                    </div>
                            </ul>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
            <div>
                {<Outlet />}
            </div>
        </>
    )
}