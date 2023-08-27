import './guest.css'
import Navbar from "../components/navbar/navbar"
import { Suspense } from 'react'
import Loading from '../components/loading/loading'
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </body>
        </html>
    )
}   