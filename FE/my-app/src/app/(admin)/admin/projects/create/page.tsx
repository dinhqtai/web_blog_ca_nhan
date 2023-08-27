'use client'
import React, { useState } from 'react';
import { Button, Form, Input, Modal, Upload } from 'antd';
import type { FormInstance } from 'antd/es/form';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
const CreateAdmin: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formRef = React.useRef<FormInstance>(null);
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        name?: string;
        description?: string;
        image?: string
        linkGit?: string
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

            <Button onClick={showModal}>Thêm mới dự án</Button>
            <Modal title="Tạo dự án mới" open={isModalOpen} onCancel={handleCancel} okButtonProps={{ hidden: true }} cancelButtonProps={{ hidden: true }}>
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
                        label="Tên dự án"
                        name="name"
                        rules={[{ required: true, message: 'Vui lòng nhập tên !' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Mô tả"
                        name="description"
                        rules={[{ required: true, message: 'Vui lòng nhập mô tả !' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Ảnh"
                        name="image"
                        rules={[{ required: true, message: 'Vui lòng nhập ảnh !' }]}
                    >
                        <Upload>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Link Git"
                        name="description"
                        rules={[{ required: true, message: 'Vui lòng nhập link Git !' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button htmlType="submit">
                            Tạo mới
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
};

export default CreateAdmin;