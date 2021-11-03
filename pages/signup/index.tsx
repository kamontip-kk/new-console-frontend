import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Modal } from "antd";
import { useRouter } from "next/router";
import { SignupProps } from '../../service/auth/auth.model';
import { userSignup } from "../../service/auth/auth.service";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onFinish = async (values: any) => {

    const signinProps: SignupProps = {
      username: username,
      password: password,
    };

    userSignup(signinProps)
    .then((res:any) => {
      router.push('/signin');
    })
    .catch(e => {
      const title = {e} instanceof Error ? e.toString() : e?.response?.data?.message || null;
      // console.log(title);
      // const title = e instanceof Error
      //   ? e.toString() : e?.response?.data?.message || null;
      // Modal.error({ title: title || 'Server Error', });
    })
    // try {
    //   const response = await AuthAPI.signUp({
    //     username,
    //     password,
    //   });

    //   if (response.error) {
    //     alert(response.message);
    //     console.log(response); 
    //   } else {
    //     alert("Success");
    //     router.push("/signin");
    //   }

    // } catch (error) {
    //   console.log(error);
    // }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h3>Sign Up</h3>
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
          <Input onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUp;
