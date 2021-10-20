import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";

function Navbar(){

    const [isLogin, setisLogin] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            setisLogin(true);
        }
    }, [])


    const logout = () =>{
        localStorage.removeItem('token');
    }

    const show = () =>{
        

        if(isLogin){
            return(
                <div className={styles.Navbar}>
                    <Link href="/"><a>Home</a></Link>
                    <button onClick={logout}><Link href="/signin">LogOut</Link></button>
                </div>
            )
        } else {
            return(
                <div className={styles.Navbar}>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/signin"><a>LogIn</a></Link>
                </div>
            )
        }
    }

    return(
        <>
            {show()}
        </>
        
    )
}

export default Navbar;