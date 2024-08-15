import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';
const Footer = () => {
  return (
    <div className=' pt-20'>
      <footer className="bg-gray-200 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src="/assets/images/logo.png" className="h-14 me-3" alt="Shoe Store Logo" />
              </a>
              <h2 className='text-xl font-semibold font-heading max-w-md mt-4'>Monday to Friday from 09:00 to 17:00.
              Call Us+31 (0) 123 456 789</h2>
              <div className=' pt-6 flex gap-10 pb-10  '>
                <Facebook className='bg-gray-200 p-2 rounded-full' size={45} />
                <Instagram className='bg-gray-200 p-2 rounded-full' size={45}  />
                <Twitter className='bg-gray-200 p-2 rounded-full' size={45}  />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-md font-bold font-heading  text-Text uppercase dark:text-white">Shop</h2>
                <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                  <li className="">
                    <a href="/men" className="hover:underline">Snikers</a>
                  </li>
                  <li>
                    <a href="/women" className="hover:underline">Moccasin</a>
                  </li>
                  <li>
                    <a href="/kids" className="hover:underline">Hiking boot</a>
                  </li>
                  <li>
                    <a href="/kids" className="hover:underline">Oxford shoe</a>
                  </li> <li>
                    <a href="/kids" className="hover:underline">Wellington boot</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-bold font-heading  text-Text uppercase dark:text-white">Customers</h2>
                <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                  <li className="">
                    <a href="/size-guide" className="hover:underline">Contact Us</a>
                  </li>
                  <li>
                    <a href="/shipping-policy" className="hover:underline">Sign In</a>
                  </li>
                  <li>
                    <a href="/shipping-policy" className="hover:underline">Create Account</a>
                  </li>  <li>
                    <a href="/shipping-policy" className="hover:underline">Shopping</a>
                  </li>  <li>
                    <a href="/shipping-policy" className="hover:underline">Checkout</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-md font-bold font-heading  text-Text uppercase dark:text-white">Follow Us</h2>
                <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium">
                  <li className="">
                    <a href="https://github.com/shoe-haven" className="hover:underline">Facebook</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/shoehaven" className="hover:underline">Instagram</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/shoehaven" className="hover:underline">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Shoe Haven. All Rights Reserved.</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  {/* Facebook icon */}
                  <path d="M10 0a10 10 0 100 20A10 10 0 0010 0zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm3 8H11v7H9v-7H8V9h2V7.5c0-1.2.4-2 1.5-2h1.5v2h-1c-.5 0-.5.5-.5 1V9h3l-.5 3z" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  {/* Twitter icon */}
                  <path d="M10 .333A9.911 9.911 0 006.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 00-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 011.518 1.021 2.11 2.11 0 002.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 014.7 7.068a3.56 3.56 0 01.095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 014.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 011.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 01.673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0010 .333z" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  {/* Instagram icon */}
                  <path d="M10 0a10 10 0 100 20A10 10 0 0010 0zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm3 8H11v7H9v-7H8V9h2V7.5c0-1.2.4-2 1.5-2h1.5v2h-1c-.5 0-.5.5-.5 1V9h3l-.5 3z" />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
