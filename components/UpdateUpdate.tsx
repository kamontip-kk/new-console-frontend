import React, { useState } from 'react'
import { UpdateStatus } from '../service/update/update-status.enum';
import styles from "../styles/Home.module.css";
import { Select } from 'antd';
import { UpdateUpdateProps } from '../service/update/create.model';
import { updateUpdate } from "../service/update/update.service";

const { Option } = Select;

function UpdateUpdate(){
    const [id, setId] = useState('');
    const [status, setStatus] = useState(UpdateStatus.OPEN);

    const updateUpdateProps: UpdateUpdateProps = {
        status: status,
    };

    
    const onSubmit = async () =>{

        updateUpdate(id,updateUpdateProps)
        .then((res:any) => {
            console.log(res?.data)
        })
        .catch((e) => {
            const title = e instanceof Error ? e.toString() : e?.response?.data?.message || null;
        })

        // try {
        //     const response = await UpdatesAPI.updateUpdate(id,{status});
      
        //     if (response.error) {
        //       console.log(response.message); 
        //     } else {
        //         console.log(`Status ID : ${id} is updated`);          
        //     }
      
        //   } catch (error) {
        //     console.log(error);
        //   }
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