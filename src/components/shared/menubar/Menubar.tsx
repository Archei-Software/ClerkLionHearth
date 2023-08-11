'use client'

import {
    Dot
  } from "lucide-react";

import { UserButton } from "@clerk/nextjs";
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { BiSolidCartDownload } from 'react-icons/bi';
import { FaDiceD20, FaUserFriends } from 'react-icons/fa';
import { IoNotifications, IoSettings } from 'react-icons/io5'
import { MdPersonSearch } from 'react-icons/md'
import { HiUserAdd } from 'react-icons/hi'
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { useRouter, usePathname } from "next/navigation";


import logo from '../../../../public/assets/images/apple-touch-icon.png';

export default function Menubar() {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [contactOpen, setContactOpen] = useState(false);

    const handleIconClick = (iconName: any) => {
        if (iconName === selectedIcon && iconName === 'icon1') {

            setSelectedIcon(null);
            setContactOpen(false);
        } else {
            setSelectedIcon(iconName);
            setContactOpen(iconName === 'icon1');
        }
    };
    const location = usePathname();
    const isActive = (path: string) => {
        return location === path
            ? "text-white"
            : "text-gray-500";
    };

    const getDotColor = () => {
        switch (status) {
          case "Online":
            return "bg-emerald-500";
          case "Ocupado":
            return "bg-yellow-500";
          case "Não-Pertubar":
            return "bg-red-700";
          default:
            return "bg-emerald-500"; // Cor padrão, caso o status não corresponda a nenhum caso acima
        }
      };

    return (
        <>
            <main>
                <aside className="flex fixed ">
                    <nav className="flex flex-col items-center w-16 h-screen py-8 space-y-8 bg-zinc-900 dark:bg-gray-900 dark:border-gray-700">
                        <a href="#">
                            <Image className="w-12 h-auto" src={logo} alt="" />
                        </a>
                        <a href="onboarding" onClick={() => handleIconClick('icon2')} className={`p-1.5 hover:text-white focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${selectedIcon === 'icon2' ? 'text-white' : 'text-gray-500'} ${isActive("/onboarding")}`}>
                            <FaDiceD20 className='text-heading1-bold'></FaDiceD20>
                        </a>

                        <span onClick={() => handleIconClick('icon1')} className={`p-1.5 cursor-pointer hover:text-white  focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${selectedIcon === 'icon1' ? 'text-white' : 'text-gray-500'}`}>
                            <FaUserFriends className='text-heading1-bold'></FaUserFriends>
                        </span>

                        <a href="store" onClick={() => handleIconClick('icon3')} className={`p-1.5 hover:text-white focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${selectedIcon === 'icon3' ? 'text-white' : 'text-gray-500'} ${isActive("/pt-br/store")}`}>
                            <BiSolidCartDownload className='text-heading1-bold'></BiSolidCartDownload>
                        </a>

                        <span onClick={() => handleIconClick('icon4')} className={`p-1.5 cursor-pointer hover:text-white focus:outline-none transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 ${selectedIcon === 'icon4' ? 'text-white' : 'text-gray-500'}`}>
                            <IoNotifications className='text-heading1-bold'></IoNotifications>
                        </span>

                        <div className="relative top-[25rem] ">
                            <UserButton appearance={
                                {
                                    elements: {
                                        avatarBox  : "w-[3rem] h-[3rem]",
                                    },
                                    
                                }
                            }
                            afterSignOutUrl="/" />
                        </div>
             
                    </nav>
                    
                </aside>
                
            </main>
        </>
    )
}

