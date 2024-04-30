function Footer() {
  return (
    <footer className="mt-24 mb-5 lg:mx-52 sm:mx-12 mx-4">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-12 gap-6">
        <div className="footer-items">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="footer-items">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="footer-items">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="footer-items">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-12">
        <div className="flex items-center">
          <span className="text-blue-600 font-bold text-2xl">Shopy-Store</span>
          <span className="ml-5 text-sm text-[gray]">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div>
          <img src="/images/payment.png" alt="" className="h-12" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
