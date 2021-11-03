import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/dist/client/link";
import { TOKEN } from "../service/auth/auth.model";
import { getAuthToken } from '../service/auth/auth.service';

function Navbar(){

    const [isLogin, setisLogin] = useState(false);
    
    useEffect(() => {
        const token = getAuthToken();
        if(token){
            setisLogin(true);
        }
    }, [])

    const logout = () =>{
        localStorage.removeItem(TOKEN);
    }

    const show = () =>{
        

        if(isLogin){
            return(
                <div className={styles.Navbar}>
                    <Link href="/update"><a>Home</a></Link>
                    <button onClick={logout}><Link href="/signin">LogOut</Link></button>
                </div>
            )
        } else {
            return(
                <div className={styles.Navbar}>
                    <Link href="/update"><a>Home</a></Link>
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