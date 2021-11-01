import React, { useState } from "react";
import { Button, Modal, Form, Input, Upload, message, Select } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { UpdatesAPI } from "../pages/api/update/updates.api";
import styles from "../styles/Home.module.css";
import  storage  from '../firebase/firebase'
// import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";

const { Option } = Select;

interface Values {
    img: any;
    title: string;
    subtitle: string;
    url: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}



function CreateUpdate() {
    // const [visible, setVisible] = useState(false);
    // const [form] = Form.useForm();
    // const [imgName, setImgName] = useState();
    // const [image, setImage] = useState();
    const [imgUrl, setImgUrl] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [url, setUrl] = useState('');

    // const props = {
    //     name: 'file',
    //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     headers: {
    //       authorization: 'authorization-text',
    //     },
    
    //     // onChange(info:any) {
    //     //   if (info.file.status !== 'uploading') {
    //     //     console.log(info.file, info.fileList);
    //     //   }
    //     //   if (info.file.status === 'done') {
    //     //     message.success(`${info.file.name} file uploaded successfully`);
    //     //     setImgName(info.file.name);
    //     //   } else if (info.file.status === 'error') {
    //     //     message.error(`${info.file.name} file upload failed.`);
    //     //   }
    //     // },
    // };

    const handleChange = async (e:any) =>{
        const file = e.target.files[0]
        const uploadTask = storage.ref();
        const fileRef = uploadTask.child(file.name);
        await fileRef.put(file)
        setImgUrl(await fileRef.getDownloadURL())
        
    }

    const onCreate = async () => {
        // if(image) {
        //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
        //     uploadTask.on(
        //     "state_changed",
        //     snapshot => {},
        //     error => {
        //         console.log(error);
        //     },
        //     () => {
        //         storage
        //         .ref("images")
        //         .child(image.name)
        //         .getDownloadURL()
        //         .then(url =>{
        //             console.log(url);
        //             setImgUrl(url);
        //         })
        //     }
        // )
        // }
        
        const img = imgUrl
        // const title = values.title
        // const subtitle = values.subtitle
        // const url = values.url

        try {
            const response = await UpdatesAPI.createUpdate({
                img,
                title,
                subtitle,
                url,
            });
      
            if (response.error) {
              console.log(response.message); 
            } else {
                // console.log("Received values of form: ", values);          
            }
            
      
          } catch (error) {
            console.log(error);
          }
        // setVisible(false);
    };

    // const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    //     visible,
    //     onCreate,
    //     onCancel,
    // }) => {
    
    //     return (
    //         <Modal
    //             visible={visible}
    //             title="Create a new update"
    //             okText="Create"
    //             cancelText="Cancel"
    //             onCancel={onCancel}
    //             onOk={() => {
    //                 form
    //                     .validateFields()
    //                     .then((values) => {
    //                         form.resetFields();
    //                         onCreate(values);
    //                     })
    //                     .catch((info) => {
    //                         console.log("Validate Failed:", info);
    //                     });
    //             }}
    //         >
    //             <Form
    //                 form={form}
    //                 layout="vertical"
    //                 name="form_in_modal"
    //                 // initialValues={{ modifier: "OPEN" }}
    //             >
    //                 {/* <Form.Item
    //                     name="img"
    //                     label="Image"
    //                     rules={[
    //                         {
    //                             required: true,
    //                             message: "Please upload image!",
    //                         },
    //                     ]}
    //                 > */}
    //                     <Upload {...props}>
    //                         <Button icon={<UploadOutlined />}>Click to Upload</Button>
    //                     </Upload>
    //                     {/* <Input type="text"/> */}
    //                 {/* </Form.Item> */}

    //                 <Form.Item
    //                     name="title"
    //                     label="Title"
    //                     rules={[
    //                         {
    //                             required: true,
    //                             message: "Please input the title!",
    //                         },
    //                     ]}
    //                 >
    //                     <Input type="text"/>
    //                 </Form.Item>
    //                 <Form.Item
    //                     name="subtitle"
    //                     label="Subitle"
    //                     rules={[
    //                         {
    //                             required: true,
    //                             message: "Please input the subtitle!",
    //                         },
    //                     ]}
    //                 >
    //                     <Input type="text"/>
    
    //                 </Form.Item>
    //                 <Form.Item
    //                     name="url"
    //                     label="Content Url"
    //                     rules={[
    //                         {
    //                             required: true,
    //                             message: "Please input the Url of the Content!",
    //                         },
    //                     ]}
    //                 >
    //                     <Input type="text"/>
    //                 </Form.Item>
    
    //                 {/* <Form.Item
    //                     name="modifier"
    //                     className="collection-create-form_last-form-item"
    //                     label="Status"
    //                 >

    //                     <Select defaultValue="OPEN" style={{ width: 120 }} onChange={handleChange}>
    //                         <Option value="OPEN">OPEN</Option>
    //                         <Option value="CLOSE">CLOSE</Option>
    //                     </Select>

    //                 </Form.Item> */}
    //             </Form>
    //         </Modal>
    //     );
    // };

    return (
        <div>
            <div className={styles.title}>Create an update</div>
            <form onSubmit={onCreate}>
                {/* <input onChange={(e) => setImgUrl(e.target.value)} type="text" name="img" placeholder="Image Url" required/> */}

                <input onChange={handleChange} type="file" name="img" placeholder="Image Url" required/>
                <input onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Title" required/>
                <input onChange={(e) => setSubtitle(e.target.value)} type="text" name="subtitle" placeholder="Subtitle" required/>
                <input onChange={(e) => setUrl(e.target.value)} type="text" name="url" placeholder="Content Url" required/>
                <input type="submit"/>
            </form>

            {/* <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                Add New Update
            </Button> */}
            {/* <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            /> */}
        </div>
    );
}

export default CreateUpdate;
