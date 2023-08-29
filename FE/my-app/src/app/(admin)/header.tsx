'use client'

import { Button, Dropdown, MenuProps, Space } from "antd";
import Link from "next/link";
const HeaderAdmin: React.FC = () => {
    const LogOut = () => {
        console.log("ngu vl");

    }
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Button className="pb-10" onClick={LogOut}>
                    <div className="">Log out</div>
                </Button >
            ),
        },
    ];
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <Link href={`/`} className="text-dark">Đinh Quốc Tài</Link>
                </div>
                <div className="ml-10 flex items-baseline space-x-4 relative ">
                    <Space direction="vertical">
                        <Space wrap>
                            <Dropdown menu={{ items }} placement="bottom">
                                <p>UserName</p>
                            </Dropdown>
                        </Space>
                    </Space>
                </div>

            </div>
        </div>
    );
}
export default HeaderAdmin;
