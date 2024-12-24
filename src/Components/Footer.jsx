import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (

        <footer className="footer bg-blue-600 text-base-content p-20 mt-6 text-[#FFFFFFE6]">

            <div className="md:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex justify-between gap-10 lg:gap-0">
                <section className="flex flex-col space-y-4">
                    <h6 className="flex text-xl font-extrabold gap-2">

                        <span className="text-white">Artifacts Tracker</span>
                    </h6>
                    <a className="text-[#FFFFFF99] link link-hover">Location: av. Washington 165, NY CA 54003</a>
                    <a className="text-[#FFFFFF99] link link-hover">Phone: +31 85 964 47 25</a>
                    <a className="text-[#FFFFFF99] link link-hover">Email: info@yourdomain.com</a>
                    <div className="flex justify-start space-x-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 text-white"
                            aria-label="Facebook"
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 text-white"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 text-white"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn size={24} />
                        </a>

                    </div>

                </section>
                <nav className="flex flex-col space-y-4">
                    <h6 className="text-xl text-white font-extrabold">Useful Links</h6>
                    <a className="text-[#FFFFFF99] link link-hover">Home</a>
                    <a className="text-[#FFFFFF99] link link-hover">About us</a>
                    <a className="text-[#FFFFFF99] link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col space-y-4">
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                    <aside>
                    <p className='text-[#FFFFFF99]'>Copyright ©  - All right reserved by Shahriar Ratul</p>
                </aside>

                </nav>
            </div>

           

        </footer >

    );
};

export default Footer;