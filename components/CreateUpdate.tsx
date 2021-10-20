import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";
import { UpdatesAPI } from "../pages/api/update/updates.api";

interface Values {
    img: string;
    title: string;
    subtitle: string;
    url: string;
    // modifier: string;
}

interface CollectionCreateFormProps {
    visible: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
}


function CreateUpdate() {
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [url, setUrl] = useState('');

    const onCreate = async (values: any) => {
        // setImg(values.img);
        // setImg(values.title);
        // setImg(values.subtitle);
        // setImg(values.url);

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
                console.log("Received values of form: ", values);
                
            }

      
          } catch (error) {
            console.log(error);
          }
        setVisible(false);
    };

    const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
        visible,
        onCreate,
        onCancel,
    }) => {
    
        return (
            <Modal
                visible={visible}
                title="Create a new update"
                okText="Create"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then((values) => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch((info) => {
                            console.log("Validate Failed:", info);
                        });
                }}
            >
                {/* <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    // initialValues={{ modifier: "public" }}
                > */}
                    {/* <input id="input_product" onChange={(e) => setImg(e.target.value)} type="text" name="img" placeholder="Image Url" required/>
                    <input id="input_product" onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Title" required/>
                    <input id="input_product" onChange={(e) => setSubtitle(e.target.value)} type="text" name="subtitle" placeholder="Subtitle" required/>
                    <input id="input_product" onChange={(e) => setUrl(e.target.value)} type="text" name="url" placeholder="Content Url" required/> */}
    
                    {/* <Form.Item
                        name="img"
                        label="Image Url"
                        rules={[
                            {
                                required: true,
                                message: "Please input the Image Url!",
                            },
                        ]}
                    >
                        <Input type="text"/>
                    </Form.Item>
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[
                            {
                                required: true,
                                message: "Please input the title!",
                            },
                        ]}
                    >
                        <Input type="text"/>
                    </Form.Item>
                    <Form.Item
                        name="subtitle"
                        label="Subitle"
                        rules={[
                            {
                                required: true,
                                message: "Please input the subtitle!",
                            },
                        ]}
                    >
                        <Input type="text"/>
    
                    </Form.Item>
                        <Form.Item
                        name="url"
                        label="Content Url"
                        rules={[
                            {
                                required: true,
                                message: "Please input the Url of the Content!",
                            },
                        ]}
                    >
                        <Input type="text"/>
                    </Form.Item> */}
    
                    {/* <Form.Item
                        name="modifier"
                        className="collection-create-form_last-form-item"
                    >
                        <Radio.Group>
                            <Radio value="public">OPEN</Radio>
                            <Radio value="private">CLOSE</Radio>
                        </Radio.Group>
                    </Form.Item> */}
                {/* </Form> */}
            </Modal>
        );
    };

    return (
        <div>
            <form onSubmit={onCreate}>
                <input id="input_product" onChange={(e) => setImg(e.target.value)} type="text" name="img" placeholder="Image Url" required/>
                <input id="input_product" onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Title" required/>
                <input id="input_product" onChange={(e) => setSubtitle(e.target.value)} type="text" name="subtitle" placeholder="Subtitle" required/>
                <input id="input_product" onChange={(e) => setUrl(e.target.value)} type="text" name="url" placeholder="Content Url" required/>
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
