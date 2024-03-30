"use client"
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { BiSearch } from 'react-icons/bi'

const SearchInput = () => {
    const [keywords, setKeywords] = useState<string>("")
    const router = useRouter()

    const searchKeywords = (e: FormEvent) => {
        e.preventDefault()
        if (!keywords) {
            router.push('/')
        }
        else {
            router.push(`/search?q=${keywords}`)
        }
    }

    return (
        <form className='flex space-x-2 items-center' onSubmit={searchKeywords}>
            <input type="text" placeholder='e.g. banyumas, ump' className='px-2 py-1 outline-none border rounded-md bg-zinc-600 border-[#0e0e0e] text-sm' onChange={(e) => setKeywords(e.target.value)} />
            <button type="submit">
                <BiSearch className="text-zinc-200 text-xl" />
            </button>
        </form>
    )
}

export default SearchInput