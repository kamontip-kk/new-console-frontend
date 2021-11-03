import React, { useState } from 'react'
import styles from "../styles/Home.module.css";
import { deleteUpdate } from "../service/update/update.service";

function DeleteUpdate () {
    const [id, setId] = useState('');

    const onSubmit = async () =>{
        
        deleteUpdate(id)
        .then((res:any) => {
            console.log(res?.data)
        })
        .catch((e) => {
            const title = e instanceof Error ? e.toString() : e?.response?.data?.message || null;
        })

        // try {
        //     const response = await UpdatesAPI.deleteUpdateById(id);
      
        //     if (response.error) {
        //       console.log(response.message); 
        //     } else {
        //         console.log(`An Update with ID : ${id} is deleted`);          
        //     }
      
        //   } catch (error) {
        //     console.log(error);
        //   }
    }

    return (
        <div className={styles.deleteupdate}>
            <div className={styles.title}>Delete Update by ID</div>
            <form onSubmit={onSubmit}>
                <input onChange={(e) => setId(e.target.value)} type="text" name="id" placeholder="ID" required/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default DeleteUpdate;
