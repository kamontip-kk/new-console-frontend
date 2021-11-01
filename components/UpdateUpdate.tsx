import React, { useState } from 'react'
import { UpdateStatus } from '../pages/api/update/update-status.enum';
import { UpdatesAPI } from '../pages/api/update/updates.api';
import styles from "../styles/Home.module.css";
import { Select } from 'antd';
import { UpdateUpdateDto } from '../pages/api/update/dto/update-update.dto';

const { Option } = Select;

function UpdateUpdate(){
    const [id, setId] = useState('');
    const [status, setStatus] = useState(UpdateStatus.OPEN);

    
    const onSubmit = async () =>{

        try {
            const response = await UpdatesAPI.updateUpdate(id,{status});
      
            if (response.error) {
              console.log(response.message); 
            } else {
                console.log(`Status ID : ${id} is updated`);          
            }
      
          } catch (error) {
            console.log(error);
          }
    }

    function handleChange(value:any) {
        setStatus(value);
        console.log(`selected ${value}`);
        console.log(status);
    }

    return (
        <div>
            <div className={styles.title}>Update Status by ID</div>
            <form onSubmit={onSubmit}>
                <input onChange={(e) => setId(e.target.value)} type="text" name="id" placeholder="ID" required/>
                {/* dropdown */}

                <Select defaultValue="OPEN" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="OPEN">OPEN</Option>
                    <Option value="CLOSE">CLOSE</Option>
                </Select>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UpdateUpdate;