import Image from "next/image";
import Link from "next/link";
import QRcode from "../QRcode/QR";
import { type } from "os";
export interface IProjects {
    _id?: string
    name: string;
    description: string
    image: string
    linkGit: string
}
type Props = {
    data: IProjects
}
export default function ItemProject({ data }: Props) {
    return (
        <Link href={data?.linkGit} className="block rounded-lg p-4 shadow-sm shadow-indigo-100 text-white">
            < Image
                width={400}
                height={400}
                alt="Lỗi ảnh"
                src={data?.image}
                className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-2">
                <dl>
                    <div>
                        <dt className="sr-only">Tên dự án</dt>

                        <dd className="font-medium">{data.name}</dd>
                    </div>
                </dl>
                <div>
                    <p className="text-sm mt-2">{data.description}</p>
                </div>
                <div className="mt-3 flex justify-between gap-8 text-xs px-4">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Thời gian hoàn thành</p>

                            <p className="font-medium">2 spaces</p>
                        </div>
                    </div>
                    <div className="">
                        <QRcode key={data._id} data={data.linkGit} />
                    </div>
                </div>
            </div>
        </Link >
    );
}
