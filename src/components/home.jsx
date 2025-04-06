import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import useMenuToggle from '.';


function Home() {
  const { isMenuOpen, toggleMenu } = useMenuToggle();
  return (
    <div className='text-gray-600 md:grid grid-cols-3'>
      <div className='md:col-span-1'>
        <div className='md:flex md:justify-end '>
        <nav className='text-right'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
              <Link to="/" className='text-gray-500 hover:text-gray-700'>Food Ninja</Link>
            </h1>

            <div className='px-4 cursor-pointer md:hidden id="burger' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

            </div>
          </div>
          <ul className={`text-sm mt-6 md:block ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
            <li className='text-gray-700 font-bold py-1'>
              <Link to="/" className='px-4 flex justify-end border-r-4 border-red-600'> 
                <span>Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

              </Link>
            </li>
            <li className='py-1'>
              <Link to="/about" className='px-4 flex justify-end border-r-4 border-white'> 
                <span>About</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 w-5 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>

              </Link>
            </li>
            <li className='py-1'>
              <Link to="/contact" className='px-4 flex justify-end border-r-4 border-white'> 
                <span>Contact</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

              </Link>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    
      <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
        <div className='flex justify-center md:justify-end text-red-600'>
          <Link to="/login" className='md:border-red-600 md:border-2 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:bg-red-400 hover:text-white transition ease-out duration-500'>Log in</Link> 

          <Link to="/signup" className='font-primary-100 ml-2  md:border-red-600 md:border-2 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:bg-red-400 hover:text-white transition ease-out duration-500'>Sign up</Link> 
        </div>

        <header>
          <h2 className='text-gray-700 text-6xl font-semibold font-serif'>Recipes</h2>
          <h3 className='text-2xl font-semibold'>For Ninjas</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
    
          <div className='mt-8 grid lg:grid-cols-3 gap-5'>
            {/* cards go here */}
            <div className='bg-white-100 rounded overflow-hidden shadow-md relative hover:shadow-lg'> 
              <img src="/stew.png" alt="stew" className='w-full h-32 sm:48 object-cover' />
              <div className='m-4'>
                <span className='font-bold'>5 Bean Chili Stew</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

                <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
              </div>
              <div className='bg-stone-300 text-stone-400 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
                <span>25 Mins</span>
              </div>
            </div>

            <div className='bg-white-100 rounded overflow-hidden shadow-md relative hover:shadow-lg '> 
              <img src="/noodles.png" alt="noodles" className='w-full h-32 sm:48 object-cover' />
              <div className='m-4'>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

                <span className='font-bold'>Veg Noodles</span>
                <span className='block text-gray-500 text-sm'>Recipe by Mario</span>

              </div>
              <div className='bg-stone-300 text-stone-400 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
                <span>25 Mins</span>
              </div>
            </div>

            <div className='bg-white-100 rounded overflow-hidden shadow-md relative hover:shadow-lg'> 
              <img src="/curry.png" alt="curry" className='w-full h-32 sm:48 object-cover' />
              <div className='m-4'>
                <span className='font-bold'>Tofu Curry</span>
                <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
              
              </div>
              <div className='bg-stone-300 text-stone-400 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 w-5 inline-block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            
             <span>25 Mins</span>
              </div>
            </div>
              
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

          <div className='mt-8'>
            {/* cards go here */}
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='bg-gray-200 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>Load more
          </div>
        </div>    
      </main>
    </div>
  );
}

export default Home;
