import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <div className='flex justify-between items-center py-4'>
        <Link href="/">
            <div className='relative w-[200px] h-[50px]'>
                <Image src="/img/logo.jpg" alt="logo" fill sizes="(max-width:768px) 50vw, (max-width:1200px) 100vw, 100vw" className='object-contain'/>
            </div>
        </Link>
        <SearchInput/>

    </div>
  )
}

export default Header