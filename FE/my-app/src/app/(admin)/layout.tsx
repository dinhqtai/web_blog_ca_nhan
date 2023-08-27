'use client'
import './admin.css'
import React, { useState, Suspense } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProjectOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { StyleProvider } from '@ant-design/cssinjs';
import { Layout, Menu, Button, theme } from 'antd';
import Link from 'next/link';
import HeaderAdmin from './header';
import Loading from '../components/loading/loading';
import { ConfigProvider } from 'antd';
const { Header, Sider, Content, Footer } = Layout;

export default function ContainerAdmin({
    children,
}: {
    children: React.ReactNode

}) {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
            <Suspense fallback={<Loading />}>
                <HeaderAdmin />
                <Layout style={{ minHeight: '90vh' }}>
                    <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
                        <div className='' />
                        <Menu
                            theme="light"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={[
                                {
                                    key: '1',
                                    icon: <UserOutlined />,
                                    label: (
                                        <Link href={"/admin"}>
                                            Thông tin admin
                                        </Link>
                                    ),
                                },
                                {
                                    key: '2',
                                    icon: <ProjectOutlined />,
                                    label: (
                                        <Link href={"/admin/projects"}>
                                            Danh sách dự án
                                        </Link>
                                    ),
                                },
                            ]}
                        />
                    </Sider>
                    <Layout>
                        <Header style={{ padding: 0, background: colorBgContainer }}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                background: colorBgContainer,
                            }}
                        >
                            <StyleProvider>{children}</StyleProvider>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>@2023 by Đinh Quốc Tài  </Footer>
                    </Layout>
                </Layout>
            </Suspense>
    )
}