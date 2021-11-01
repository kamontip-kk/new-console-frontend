import React, { useState } from 'react'
import { UpdatesAPI } from '../pages/api/update/updates.api';
import styles from "../styles/Home.module.css";

function DeleteUpdate () {
    const [id, setId] = useState('');

    const onSubmit = async () =>{
        try {
            const response = await UpdatesAPI.deleteUpdateById(id);
      
            if (response.error) {
              console.log(response.message); 
            } else {
                console.log(`An Update with ID : ${id} is deleted`);          
            }
      
          } catch (error) {
            console.log(error);
          }
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
