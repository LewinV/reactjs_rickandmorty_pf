import Logo from '../Assets/img/logo.png';
import { Outlet, Link, NavLink } from 'react-router-dom';

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
                        <NavLink className={({isActive, isPending}) => isActive ? 'hover:text-[#569441] mx-10 underline' : 'hover:text-[#569441] mx-10'} to="/">
                            Home
                        </NavLink>
                        <NavLink className={({isActive, isPending}) => isActive ? 'hover:text-[#569441] mx-10 underline' : 'hover:text-[#569441] mx-10'} to="/about">
                            About
                        </NavLink>
                        <NavLink className={({isActive, isPending}) => isActive ? 'hover:text-[#569441] mx-10 underline' : 'hover:text-[#569441] mx-10'} to="/contact">
                            Contact
                        </NavLink>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </div>
    )
};