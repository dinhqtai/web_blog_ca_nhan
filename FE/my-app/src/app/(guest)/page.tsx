'use client'
import Link from "next/link"
import Image from "next/image"
export default function Home() {
    return (
        <div className="min-h-full">
            <main>
                <div className="flex flex-wrap mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 mt-10">
                    <div className="flex text-white items-center  ">
                        <span className="text-center w-[80%] "> Hi. I'm Đinh Quốc Tài. A Front-End Reactjs in Viet Nam</span>
                    </div>
                    <Image
                        src="https://res.cloudinary.com/dl9xvqwzi/image/upload/v1692361935/vit.jpg"
                        width={400}
                        height={400}
                        alt="Picture of the author"
                    />
                </div>
            </main>
        </div>

    )
}