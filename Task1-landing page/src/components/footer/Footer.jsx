import React from 'react'
import './footer.css'

function Footer() {

    return (
        <footer className=' grid md:grid-cols-3 grid-cols-1 gap-10 mx-10 py-10'>
            <div>
                <h1 className='text-xl font-bold mb-2'>ABOUT THE SHOP</h1>
                <p>At Savor, we believe food should be more than just sustenance. We are passionate about crafting culinary experiences that nourish your body and soul, all while being kind to your wallet.Explore our diverse menu, discover new favorites, and share the joy of food with loved ones. Join us at Savor and embark on a delightful culinary journey.

                </p>
            </div>
            <div className='md:ml-5'>
                <h1 className='text-xl font-bold mb-2 '>More </h1>
                <ul>
                    <li>About Us</li>
                    <li>Menu</li>
                    <li>Locations</li>
                    <li>Order Online</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li>Gift Cards</li>
                    <li>News & Events</li>
                </ul>
            </div>
            <div>
                <h1 className='mb-2 text-xl font-bold'>Contact us</h1>
                <p>For any hindrance in using our services hit us up</p>
                <form action="" className='flex flex-col gap-3 mt-6' id="contactform">
                    <input type="email" placeholder='Enter your email' />
                    <textarea name="" id="" cols="40" rows="5" placeholder='Enter your query'></textarea>
                    <button className=' my-6 bg-black text-white py-1.5 px-4 w-fit '>Submit</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer