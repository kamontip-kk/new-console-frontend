import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { AuthAPI } from "../api/auth/auth.api";
import { useRouter } from "next/dist/client/router";
import { redirect } from "next/dist/server/api-utils";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await AuthAPI.signUp({
        username,
        password,
      });

      if (response.error) {
        alert(response.message);
        console.log(response); 
      } else {
        alert("Success");
        router.push("/signin");
      }

    } catch (error) {
      console.log(error);
    }
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
