import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div className='container mx-auto mt-40'>
        <div className='flex justify-between items-center  mt-10 mb-10'>
            <div>
                <img src={Logo} alt='Logo Image'></img>
                 <p className='mt-3 mb-3 text-2xl text-gray-400'>
                    Curated tools, technologies, and resources for developers building modern software.
                 </p>
              <ul className='flex gap-5 text-3xl'>
                <li>GitHub</li>
                <li>Twitter</li>
                <li>Linkedin</li>
              </ul>
            </div>
            <div className='flex justify-between gap-12'>
                <ul>
                    <li className='text-2xl font-bold'>PRODUCT</li>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
                <ul>
                    <li className='text-2xl font-bold' >COMPANY</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Careers</li>
                </ul>
                <ul>
                    <li className='text-2xl font-bold' >LEGAL</li>
                    <li>PrivacyPolicy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
        </div>

        <div className='flex justify-between items-center mt-40 mb-10'>
             <p className='text-gray-400 text-2xl'>
                  © 2026 Dev Stack. All rights reserved.  
            </p>


            <ul className='flex gap-6 text-3xl text-gray-400'>
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
</div>

    );
};

export default Footer;