import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-[#020528] py-10 px-4 sm:px-6 lg:px-10 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

        {/* Company Info */}
        <div className="lg:col-span-6 col-span-full">
          <h1 className="text-xl font-bold mb-4">Company Name</h1>
          <p className="text-sm leading-relaxed">
            Your one-stop shop for quality products at unbeatable prices. Discover top brands, trending deals, and fast delivery — all in one place.
          </p>

          {/* Social Icons */}
        <div className="flex flex-wrap items-center gap-4 mt-6 text-white">
  {/* WhatsApp */}
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-75"
  >
    <svg className="w-10 h-10 fill-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2C8.3 2 2 8.3 2 16c0 2.8.8 5.4 2.3 7.7L2 30l6.5-2.3c2.2 1.5 4.8 2.3 7.5 2.3 7.7 0 14-6.3 14-14S23.7 2 16 2zm0 25c-2.3 0-4.5-.7-6.4-2L6 26l1.5-3.4C5.3 20.4 4.5 18.3 4.5 16 4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27 16 27zm6.6-9.2c-.3-.1-1.9-.9-2.2-1s-.5-.2-.7.2c-.2.3-.8 1-.9 1.1s-.3.2-.6.1c-.3-.1-1.2-.4-2.3-1.3-.9-.8-1.3-1.8-1.4-2.1-.1-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.2 0-.3 0-.4s-.7-1.7-1-2.3c-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0s-.5.1-.7.3c-.2.2-.9.9-.9 2.1s1 2.4 1.1 2.5c.1.2 2 3.1 4.8 4.3 1.8.8 2.5.9 3.4.8.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.1-1.2-.1 0-.3-.1-.6-.2z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/yourProfile"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-75"
  >
    <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.4c.7-1 1.9-1.4 3-1.4 2.2 0 4 1.8 4 4v6z" />
    </svg>
  </a>

  {/* Telegram */}
  <a
    href="https://t.me/yourUsername"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-75"
  >
    <svg className="w-12 h-12 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.999 16.199L9.728 19.39c.374 0 .538-.159.734-.35l1.76-1.675 3.648 2.674c.668.37 1.15.175 1.323-.62l2.4-11.22c.245-1.119-.422-1.556-1.086-1.28L3.643 10.5c-1.1.432-1.089 1.044-.188 1.32l3.949 1.23 9.144-5.76c.43-.262.82-.122.5.166" />
    </svg>
  </a>
</div>

        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3 col-span-full md:col-span-1">
          <h1 className="text-lg font-semibold mb-4">Quick Links</h1>
          <ul className="space-y-3">
            {[{ name: 'Home', href: '/' },{ name: 'Product', href: '/product' },{ name: 'FAQ', href: '/faq' },{ name: 'About Us', href: '/about' },{ name: 'Contact Us', href: '/contact' },{ name: 'Terms & Conditions', href: '/terms' }].map((link) => (
              <li key={link.name}>
                <a href={link.href} className="flex items-center gap-2 text-sm hover:opacity-80">
                  <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2..." />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-3 col-span-full md:col-span-1">
          <h1 className="text-lg font-semibold mb-4">Contact Us</h1>
          <p className="text-sm mb-4">7890, MG Road Bangalore, Karnataka 560001 India</p>
          <div className="space-y-4 text-sm text-white">
  {/* Email with Envelope Icon */}
  <div className="flex items-center gap-2">
    <svg
      className="w-5 h-5 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v1.5l-10 6L2 5.5V4zm0 3.75l9.47 5.68a.75.75 0 00.81 0L22 7.75V20a2 2 0 01-2 2H4a2 2 0 01-2-2V7.75z" />
    </svg>

    <a href="mailto:test@gmail.com" className="hover:underline">test@gmail.com</a>
  </div>

  {/* Phone with Classic Phone Icon */}
  <div className="flex items-center gap-2">
    <svg
      className="w-5 h-5 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.51.73 3.83.73a1 1 0 011 1V20a1 1 0 01-1 1 17 17 0 01-17-17 1 1 0 011-1h3.5a1 1 0 011 1c0 1.32.25 2.63.73 3.83a1 1 0 01-.21 1.11l-2.2 2.2z" />
    </svg>
   
    <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a>
  </div>
</div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;