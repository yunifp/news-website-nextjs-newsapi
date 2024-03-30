import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <ul className='py-2 border-b border-white'>
            <li className='space-x-6 text-xs'>
                <Link href="/world">World</Link>
                <Link href="/politics">Politics</Link>
                <Link href="/education">Education</Link>
                <Link href="/science">Science</Link>
                <Link href="/health">Health</Link>
                <Link href="/sports">Sports</Link>
                <Link href="/prabowo">Prabowo</Link>
                <Link href="/lifestyle">Lifestyle</Link>
                <Link href="/food">Food</Link>
                <Link href="/travel">Travel</Link>
                <Link href="/esports">E-Sports</Link>
                <Link href="/indonesia">Indonesia</Link>
            </li>
        </ul>
        <div className='w-full h-[1px] bg-white mb-1'/>
        <div className='w-full h-[1px] bg-white mb-1'/>
    </nav>
  )
}

export default Navbar