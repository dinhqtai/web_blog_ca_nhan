'use client'
import React from 'react';
import { Card, ConfigProvider, QRCode, Space } from 'antd';
import Link from 'next/link';
import theme from '@/app/theme/themeConfig';
const Admin: React.FC = () => {
    return (
        <ConfigProvider theme={theme}>
            <div className='flex mx-auto gap-[10%]'>
                <Card className='mx-auto'
                    style={{ width: 300 }}
                    cover={<img alt="example" src="https://res.cloudinary.com/dl9xvqwzi/image/upload/v1692361935/vit.jpg" />}
                >
                    <div className='text-center font-medium text-2xl'>Đinh Quốc Tài</div>
                </Card>
                <Card className='mx-auto w-[80%] text-left' title="Thông tin admin" bordered={false} >
                    <div>
                        <p>Họ và tên : Đinh Quốc Tài</p>
                    </div>
                    <div className='flex gap-[20px]'>
                        <p>Link Git : </p>
                        <Link href={`https://github.com/dinhqtai`}>
                            <QRCode size={120} bgColor="#fff" value={`https://github.com/dinhqtai`} />
                        </Link>
                    </div>
                </Card>
            </div>
        </ConfigProvider>
    )
}

export default Admin;