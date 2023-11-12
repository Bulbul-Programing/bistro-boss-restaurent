
const Footer = () => {
    return (
        <footer>
            <div className="footer px-10 pt-10 pb-4 bg-base-200 text-base-content">
                <aside>
                    <img className="w-[60px] ml-5" src="https://i.ibb.co/CMN787c/logo.png" alt="" />
                    <p className="text-lg font-bold">Bistro Boss Restaurant</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className="footer footer-center pb-4 bg-base-200 text-gray-500">
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;