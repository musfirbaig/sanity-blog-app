import React from 'react'

const NavBar = () => { 
  
  return (
    <div className='bg-gray-800'>
      <div>
        <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div className="container flex items-center justify-between mx-auto">
            <div className=' '>
              <a href="/">
              <h2 className='text-white text-2xl font-bold'>BLOGIFY</h2>
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">

                <li className="group pl-6">

                  <a href="/#about"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">About</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#services"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Authors</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>




                <li className="group pl-6">

                  <a href="/#blogs"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Blogs</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">

                  <a href="/#contact"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Contact</a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" />

      </div>

    </div>
  )
}

export default NavBar