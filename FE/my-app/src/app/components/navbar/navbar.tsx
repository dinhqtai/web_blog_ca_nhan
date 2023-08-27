import * as React from 'react';
import Container from '../container';
import Link from "next/link"
import Image from 'next/image';
import LoginAdmin from '@/app/components/login/login';
export default function Navbar() {
    return (
        <div>
            <nav className="">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link href={`/`} className="text-white">Đinh Quốc Tài</Link>
                        </div>
                        <div className="ml-10 flex items-baseline space-x-4 relative ">
                            <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Blog</Link>
                            <Link href="projects" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</Link>
                            <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Liên hệ</Link>
                            <Link href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Nothing</Link>
                            <LoginAdmin />
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
}
