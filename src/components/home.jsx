import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='text-gray-600'>
      <div>
        <nav>
          <div>
            <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
              <Link to="/">Food Ninja</Link>
            </h1>
          </div>
          <ul>
            <li className='text-gray-700 font-bold'>
              <Link to="/"> {/* Corrected here */}
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about"> {/* Corrected here */}
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact"> {/* Corrected here */}
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    
      <main className='px-16 py-6'>
        <div>
          <Link to="/login">Log in</Link> {/* Corrected here */}
          <Link to="/signup">Sign up</Link> {/* Corrected here */}
        </div>

        <header>
          <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
          <h3 className='text-2xl font-semibold'>For Ninjas</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
    
          <div className='mt-8'>
            {/* cards go here */}
            <div> 
              <img src="/stew.png" alt="stew" />
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Most Popular</h4>

          <div className='mt-8'>
            {/* cards go here */}
          </div>
        </div>

        <div>
          <div>Load more</div>
        </div>    
      </main>
    </div>
  );
}

export default Home;
