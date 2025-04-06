import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full'>
        <nav className=" w-full container p-2 md:px-2 flex items-baseline mx-auto bg-slate-300 rounded-md mt-2">
            <span className="navbar-brand capitalize font-bold text-xl text-green-500">slogon</span>
            <ul className='capitalize font-semibold tracking-sm flex gap-4 ml-auto'>
                <li className='cursor-pointer hover:text-green-400 transition-all'>acceuil</li>
                <li className='cursor-pointer hover:text-green-400 transition-all'>notre pillulier</li>
                <li className='cursor-pointer hover:text-green-400 transition-all'> boutique</li>
                <li className='cursor-pointer hover:text-green-400 transition-all'>blog</li>
                <li className='cursor-pointer hover:text-green-400 transition-all'>contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar