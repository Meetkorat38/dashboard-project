"use client"
import Image from 'next/image'
import React from 'react'
import { DottedSeprator } from './dotted-separator'
import { ChartAreaIcon, Home, LogOutIcon, Table2Icon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const navLinks  = [
  {
    link : "/",
    name : "Home",
    icon : <Home/>
  },
  {
    link : "/analytics",
    name : "Analytics",
    icon : <ChartAreaIcon/>
  },
  {
    link : "/users",
    name : "Users",
    icon : <Table2Icon/>
  },

]

export const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className='p-2 relative h-full justify-between'>
      <div className='w-full px-3 pt-4'>

      <Link href={"/"} className='flex items-center'>
            <Image  src="/logo.svg" alt="Logo" width={35} height={35} />
            <span className='ml-2 text-lg font-medium dark:text-zinc-100 tracking-normal'>LogoIpsum</span>
        </Link>

      </div>
        <DottedSeprator className='my-4'/>
        {
          navLinks.map((route , index) => {
            const fullPath = `${route.link}`;
            const isActive = (fullPath === pathname);
            const Icon = React.cloneElement(route.icon, { className: 'size-5 text-neutral-500 dark:text-white' });
            return (
                <Link key={index} href={fullPath}>
                    <div className={cn(
                        "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                        isActive && "bg-white shadow-sm hover:opacity-100 text-primary dark:bg-zinc-800 dark:text-white"
                    )}>
                        {Icon}
                        {route.name}
                    </div>
                </Link>
            )
          })
        }
        <div className='absolute bottom-8  '>
          <Button variant={'outline'} className='w-full'>
            Log out
            <LogOutIcon className='size-4 ml-3'/>
          </Button>
        </div>
    </aside>
  )
}