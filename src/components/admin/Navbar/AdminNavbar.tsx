"use client";
import CustomImage from '@/components/common/CustomImage/CustomImageComponent';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const AdminNavbar = () => {
    const router = useRouter();
    const logout = () => {
        router.push('/admin')
        localStorage.removeItem('isLoggedIn');

    }

    return (
        <header className="container mx-auto mb-[5rem] border-4 border-indigo-200 border-l-indigo-500">
            <nav className="flex justify-between md:justify-around bg-black/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 px-8 md:px-3">
                <div className="flex items-center">
                    <a className="cursor-pointer">
                        <h3 className="text-2xl font-medium text-blue-500">
                            <CustomImage
                                src=""
                                alt="${src} Logo"
                                width={300}
                                height={50}
                                priority
                            />
                        </h3>
                    </a>
                </div>

                <div className="items-center md:space-x-8 justify-end justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
                    <a href={'#'} onClick={logout}
                        className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                        Logout
                    </a>
                </div>
            </nav>
        </header>

    )
}

export default AdminNavbar
// import Image from 'next/image'
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// const AdminNavbar = () => {
//     const router = useRouter();

//     return (
//         <header className="container mx-auto mb-[5rem] border-4 border-indigo-200 border-l-indigo-500">
//             <nav className="flex justify-between md:justify-around bg-white/80 backdrop-blur-md shadow-md w-full px-10 fixed top-0 left-0 right-0 z-10 px-8 md:px-3">
//                 <div className="flex items-center">
//                     <a className="cursor-pointer">
//                         <h3 className="text-2xl font-medium text-blue-500">
//                             <Image
//                                 src="/overstock-monuments-logo.png"
//                                 alt="Sprung Monuments"
//                                 width={300}
//                                 height={50}
//                                 priority
//                             />
//                         </h3>
//                     </a>
//                 </div>

//                 <div className="items-center md:space-x-8 justify-end justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0">
//                     <a href={'#'} onClick={() => router.push('/admin/login')}
//                         className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
//                         Logout
//                     </a>
//                 </div>
//             </nav>
//         </header>

//     )
// }

// export default AdminNavbar