import React, { useState,useEffect } from "react";
import { Form, Input, Button, Checkbox, Modal } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { SigninProps } from '../../service/auth/auth.model';
import { userSignin } from "../../service/auth/auth.service";
import axios from 'axios';

// const { useForm } = Form;

const SignIn = () => {
  // const [form] = useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token && token !== undefined){
      router.push('/update');
    }
  }), [];

  const onFinish = async (allvalues: any) => {
    // form.validateFields().then(async (values) =>{
      const signinProps: SigninProps = {
        username: username,
        password: password,
      };

      // try {
      //   const res = await userSignin(username,password)
      //   console.log(res);
        
      //   // return (res);

      // } catch (err) {
      //   console.log('Server Error' + err);
      // }
      
      userSignin(signinProps)
      .then((res:any) => {
        localStorage.setItem('token', res?.data?.token);
        if(!localStorage.getItem('token')) return
        router.push('/update');
      })
      .catch((e) => {
        const title = e instanceof Error ? e.toString() : e?.response?.data?.message || null;
        // alert(title);
        // Modal.error({ title: title || 'Server Error', });
      })
    // })
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

      // try {
    //   const response = await AuthAPI.signIn({
    //     username,
    //     password,
    //   });

      // if (response.error) {
      //   alert(response.message);
      //   console.log(response);
      // } else {
      //   if (response.accessToken) {
      //     console.log(response.accessToken)
      //     // localStorage.setItem('token',response.accessToken)
      //     // router.push("/");
      //   } else {
      //     return null;
      //   }
      // }

      // console.log(response.token);
      // localStorage.setItem('token',response.token)
      // router.push("/");

    // } catch (error) {
    //   console.log(error);
    // }


  return (
    <div className={styles.signin}>
      <h3>Sign In</h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input 
          onChange={(e) => setUsername(e.target.value)} 
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password 
          onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Signin
          </Button>
        </Form.Item>
      </Form>
      <span className={styles.account}>Don't have an account? <Link href="/signup"><a>register here</a></Link> </span>
    </div>
  );
};

export default SignIn;
