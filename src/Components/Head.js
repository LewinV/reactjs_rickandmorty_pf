import Logo from '../Assets/img/logo.png';
import { Outlet, NavLink } from 'react-router-dom';

export default function Head() {
    return (
        <div>
            <nav className='flex justify-between px-16 py-3 shadow-md mb-12'>
                <div className='flex items-center'>
                    <img className='w-14 h-14 ' src={Logo} alt='logo' />
                    <h1 className='text-greenlogo font-bold mx-5'>Rick and Morty</h1>
                </div>
                <div className=''>
                    <ul className='text-greenmenu font-bold h-full flex items-center'>
                        {/* <Link className={(isActive) => (isActive ? 'mx-10 text-[#db3d3d]' : 'mx-10 text-greenmenu')} to="/">Home</Link> */}
                        <NavLink className={({isActive, isPending}) => isActive ? 'hover:text-[#569441] mx-10 underline transform transition duration-100 hover:scale-105' : 'hover:text-[#569441] mx-10 transform transition duration-100 hover:scale-105'} to="/">
                            Home
                        </NavLink>
                        <NavLink className={({isActive, isPending}) => isActive ? 'hover:text-[#569441] mx-10 underline transform transition duration-100 hover:scale-105' : 'hover:text-[#569441] mx-10 transform transition duration-100 hover:scale-105'} to="/about">
                            About
                        </NavLink>
                        <NavLink className={({isActive, isPending}) => isActive ? 'hover:text-[#569441] mx-10 underline transform transition duration-100 hover:scale-105' : 'hover:text-[#569441] mx-10 transform transition duration-100 hover:scale-105'} to="/contact">
                            Contact
                        </NavLink>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};