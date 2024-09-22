import { Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch} from 'react-icons/ai';

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center text-sm font-semibold whitespace-nowrap sm:text-xl dark:text-white'>
            <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Sidd's</span>
            Blog
        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={<AiOutlineSearch />} />
        </form>
    </Navbar>
  )
}
