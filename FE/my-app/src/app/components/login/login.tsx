'use client'
import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { UserOutlined } from '@ant-design/icons';
const LoginAdmin: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formRef = React.useRef<FormInstance>(null);
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        username?: string;
        password?: string;
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        formRef.current?.resetFields();
    };
    return (

        <>
            <Button onClick={showModal} icon={<UserOutlined />} />
            <Modal title="Đăng nhập" open={isModalOpen} onCancel={handleCancel} okButtonProps={{ hidden: true }} cancelButtonProps={{ hidden: true }}>
                <Form className='mr-[60px]'
                    name='formLogin'
                    ref={formRef}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button htmlType="submit">
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
};

export default LoginAdmin;