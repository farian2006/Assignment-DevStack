import Logo from '../assets/logo-text.png';

const Nav = () => {


    return (
        <nav className='flex justify-between items-center gap-4 my-2 container mx-auto sticky top-0 z-50'>
            <img src={Logo} alt= 'Logo Image'></img>

            <ul className='flex justify-between items-center gap-6 text-2xl'>
                <li className='text-pink-500'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

          <div className='flex gap-4'>
          <button className="btn btn-soft rounded-2xl">Sign In</button>
          <button className="btn btn-active btn-secondary rounded-2xl">Sign Up</button>
          </div>
        </nav>
    );
};

export default Nav;