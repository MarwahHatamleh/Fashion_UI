const Navigation = () =>{

return (

    <>
   

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center ml-10 text-5xl font-semibold whitespace-nowrap dark:text-white">MLLA</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     <div className="flex space-x-4">
  <a href="https://facebook.com" className="text-[#939caf] hover:text-[#6e7380] transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987H7.898v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  </a>

  <a href="https://instagram.com" className="text-[#939caf] hover:text-[#6e7380] transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.13 4.632.366 3.68 1.318 2.728 2.27 2.492 3.409 2.434 4.69.014 5.97 0 6.379 0 12s.014 6.03.072 7.31c.058 1.281.294 2.42 1.246 3.372.952.952 2.091 1.188 3.372 1.246 1.281.058 1.69.072 7.31.072s6.03-.014 7.31-.072c1.281-.058 2.42-.294 3.372-1.246.952-.952 1.188-2.091 1.246-3.372.058-1.281.072-1.69.072-7.31s-.014-6.03-.072-7.31c-.058-1.281-.294-2.42-1.246-3.372C21.42.366 20.281.13 19 .072 17.719.014 17.309 0 12 0z"/>
    </svg>
  </a>

  <a href="https://twitter.com" className="text-[#939caf] hover:text-[#6e7380] transition-colors">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.39 4.49A13.978 13.978 0 0 1 1.671 3.149 4.924 4.924 0 0 0 3.195 9.72a4.902 4.902 0 0 1-2.23-.616v.061a4.926 4.926 0 0 0 3.946 4.827 4.996 4.996 0 0 1-1.294.172c-.316 0-.624-.03-.927-.088a4.927 4.927 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54a13.944 13.944 0 0 0 7.548 2.212c9.056 0 14.01-7.504 14.01-14.01 0-.213-.004-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
    </svg>
  </a>
</div>

  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 text-white bg-blue-700 text-base md:bg-transparent md:text-[#939caf] md:p-0 md:dark:text-blue-500" aria-current="page">About Us</a>
      </li>
       <li>
        <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#939caf] md:p-0 md:dark:text-blue-500" aria-current="page">Our Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:text-[#939caf] md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Our Works</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:text-[#939caf] md:p-0  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Appointments</a>
      </li>
       <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent   md:text-[#939caf] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Online Store</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  md:text-[#939caf] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
 
    </>
)


}
export default Navigation