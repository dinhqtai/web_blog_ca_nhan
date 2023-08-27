import React from 'react';
import { QRCode, Space } from 'antd';
import { IProjects } from '../itemProjects/item';
import Link from 'next/link';
type Props = {
    data: string
}
const QRcode: React.FC<Props> = ({ data }) => {
    return (
        <Space>
            <Link href={data}>
                <QRCode size={120} bgColor="#fff" value={data} />
            </Link>
        </Space>
    );
};

export default QRcode;