import Logo from '../Assets/img/logo.png';

export default function Head(){
    return (
    <nav className='flex justify-between px-16 py-3 testblack shadow-md'>
        <div className='testpink flex items-center'>
            <img className='w-14 h-14 ' src={Logo} alt='logo'/>
            <h1 className='text-greenlogo font-bold mx-5'>Rick and Morty</h1>
        </div>
        <div className='testyellow'>
            <ul className='text-greenmenu font-bold h-full flex items-center'>
                <li className='mx-10'>Home</li>
                <li className='mx-10'>About</li>
                <li className='mx-10'>Contact</li>
            </ul>
        </div>
    </nav>
    )
};