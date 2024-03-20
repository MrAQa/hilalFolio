import { useState, Fragment, useEffect } from "react";
import { Menu, Transition, Popover, Dialog } from "@headlessui/react";
import logo from "../assets/Logo-new.png";
import { UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { SearchIcon, SunIcon } from "../assets/custom-icon";
import img from "../assets/image 4.png"
const NavBar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogedin, setIsLogedin] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userData, setuserData] = useState({})
  const currentPath = window.location.pathname;
  useEffect(() => {
    const UserData = JSON.parse(localStorage.getItem('user_Data'))
    const token = localStorage.getItem('user_token');
    if (token) {
      setIsLogedin(true)
      setuserData(UserData)
    }
    else {
      setIsLogedin(false)
    }
  }, [])

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  function SignOutIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>
    );
  }

  const handleSignOut = () => {
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_Data');
    setIsLogedin(false);
    navigate('/')
  };

  return (
    <>
      <div className='bg-white hidden lg:block'>
        <div>
          <img src={img} alt="banner" />
        </div>
      </div>
      <header
        id="main-header"
        className={`bg-white border-y-[1px] border-[#D7D9E4] ${!mobileMenuOpen && "z-50"
          }`}
      >
        <nav
          className="2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md  mx-auto flex  items-center justify-between p-6 lg:py-[18px] lg:px-0"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 z-[1]">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Shariah</span>
              <img className="h-auto  w-[137px]" src={logo} alt="Shariah" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-primaryPurple text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                viewBox="0 0 25 20"
                fill="none"
              >
                <rect
                  width="18.4868"
                  height="2.77302"
                  rx="1.38651"
                  fill="#F9F9F9"
                />
                <rect
                  x="6.47021"
                  y="8.31982"
                  width="17.5624"
                  height="2.77302"
                  rx="1.38651"
                  fill="#F9F9F9"
                />
                <rect
                  y="16.6382"
                  width="18.4868"
                  height="2.77302"
                  rx="1.38651"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-5 xl:gap-x-8 px-4">
            <Link
              to="/"
              className={`text-base font-semibold leading-normal ${currentPath === "/"
                ? 'text-[#6F4F9F]' : 'text-primaryDark'} flex items-center`}
            >
              Market
            </Link>
            <Link
              to="/favorites"
              className={`text-base font-semibold leading-normal ${currentPath === "/favorites"
                ? 'text-[#6F4F9F]' : 'text-primaryDark'} flex items-center`}
            >
              Favorites
            </Link>
            <Link
              to="/hilalbot"
              className={`text-base font-semibold leading-normal ${currentPath === "/hilalbot"
                ? 'text-[#6F4F9F]' : 'text-primaryDark'} flex items-center`}
            >
              HilalBot
            </Link>

            <Link
              to="#"
              className="text-base font-semibold leading-normal text-primaryDark flex items-center"
            >
              ODR
            </Link>
          </Popover.Group>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-2 mr-4">
            <div className="p-2 ">
              <SearchIcon />
            </div>
            <div className="p-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M16.5 7.33337C16.5 5.87468 15.9205 4.47574 14.8891 3.44429C13.8576 2.41284 12.4587 1.83337 11 1.83337C9.54131 1.83337 8.14236 2.41284 7.11091 3.44429C6.07946 4.47574 5.5 5.87468 5.5 7.33337C5.5 13.75 2.75 15.5834 2.75 15.5834H19.25C19.25 15.5834 16.5 13.75 16.5 7.33337Z"
                  stroke="#0C0F14"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5857 19.25C12.4246 19.5278 12.1933 19.7584 11.9149 19.9187C11.6366 20.079 11.3211 20.1634 10.9999 20.1634C10.6787 20.1634 10.3632 20.079 10.0849 19.9187C9.80654 19.7584 9.57522 19.5278 9.41406 19.25"
                  stroke="#0C0F14"
                  strokeWidth="1.83333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 cursor-pointer">
              {
                isDarkMode ?

                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path d="M5.56851 16.3984C7.11418 17.9441 8.99759 18.7169 11.2187 18.7169C13.125 18.7169 14.8085 18.1171 16.2695 16.9176C17.7304 15.7181 18.6273 14.1965 18.9603 12.3528C19.0035 12.1701 18.9972 12.0111 18.9413 11.8759C18.8854 11.7407 18.7999 11.6341 18.6848 11.5559C18.5812 11.4778 18.4561 11.4288 18.3094 11.409C18.1628 11.3892 18.0126 11.4129 17.8587 11.4802C17.5438 11.634 17.1766 11.7693 16.7572 11.8858C16.3377 12.0024 15.8978 12.0607 15.4375 12.0607C13.901 12.0607 12.595 11.5229 11.5195 10.4474C10.4439 9.3719 9.90618 8.0659 9.90618 6.52943C9.90618 6.11063 9.95306 5.71147 10.0468 5.33193C10.1406 4.95239 10.2842 4.58654 10.4777 4.23438C10.5726 4.06852 10.6117 3.90236 10.5949 3.73589C10.578 3.56942 10.5228 3.4279 10.429 3.31132C10.3353 3.19474 10.2133 3.107 10.063 3.04809C9.91279 2.9892 9.73911 2.9844 9.54199 3.03368C7.63695 3.44955 6.11203 4.37684 4.96722 5.81554C3.82241 7.25423 3.25 8.89844 3.25 10.7482C3.25 12.9693 4.02284 14.8527 5.56851 16.3984Z" fill="#0E0A14" />
                  </svg>
                  :
                  <SunIcon />
              }
            </div>
          </div>
          <div className="relative hidden lg:flex p-2 border-[1px] border-[#D7D9E4] rounded-lg mr-4">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button>
                    <div className="flex items-center justify-center gap-x-3">
                      <div className="flex items-center">
                        {t('Languages')}

                      </div>
                      {/* <div>{userData?.fullName}</div> */}
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                        >
                          <path
                            d="M5.57253 6.69703L9.3327 2.1221C9.38457 2.05899 9.42542 1.98853 9.45525 1.91071C9.48508 1.83287 9.5 1.74947 9.5 1.66052C9.5 1.48262 9.45056 1.32806 9.35168 1.19684C9.25281 1.06561 9.1225 1 8.96073 1L1.03927 1C0.877501 1 0.747186 1.06624 0.648323 1.19872C0.549439 1.33123 0.499999 1.4858 0.499999 1.66245C0.499999 1.70663 0.555843 1.85995 0.667534 2.12239L4.42746 6.69707C4.5139 6.80223 4.60324 6.87901 4.6955 6.92741C4.78779 6.9758 4.88928 7 5 7C5.11072 7 5.21221 6.9758 5.30449 6.92741C5.39675 6.87901 5.4861 6.80222 5.57253 6.69703Z"
                            fill="#0C0F14"
                          />
                        </svg>
                      </div>
                    </div>
                  </Menu.Button>

                  {open && (
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="z-10 bgWhite border bg-white w-56 border-gray-300 absolute right-0 top-8 mt-2 rounded-md shadow-lg focus:outline-none"
                      >
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${active
                                  ? "bg-primaryPurple text-white"
                                  : "text-black"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-base font-semibold`}
                                onClick={() => changeLanguage('en')}
                              >

                                <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#071b65"></rect><path d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z" fill="#fff"></path><path d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z" fill="#b92932"></path><path d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z" fill="#b92932"></path><path d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z" fill="#fff"></path><rect x="13" y="4" width="6" height="24" fill="#fff"></rect><rect x="1" y="13" width="30" height="6" fill="#fff"></rect><rect x="14" y="4" width="4" height="24" fill="#b92932"></rect><rect x="14" y="1" width="4" height="30" transform="translate(32) rotate(90)" fill="#b92932"></rect><path d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z" fill="#b92932"></path><path d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z" fill="#b92932"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                                {/* <UserCircleIcon className="h-6 w-6 mr-2 text-primaryDark" /> */}

                                {t('English')}

                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${active
                                  ? "bg-primaryPurple text-white"
                                  : "text-black"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-base font-semibold`}
                                onClick={() => changeLanguage('fr')}
                              >

                                <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.847H30.362c-.711-1.108-1.948-1.847-3.362-1.847H5c-1.415,0-2.651,.739-3.362,1.847Z" fill="#bc271a"></path><path d="M1.031,7.692c-.008,.103-.031,.202-.031,.308v1.539H31v-1.539c0-.105-.023-.204-.031-.308H1.031Z" fill="#bc271a"></path><path fill="#bc271a" d="M1 11.384H31V13.231H1z"></path><path fill="#bc271a" d="M1 15.077H31V16.924H1z"></path><path fill="#bc271a" d="M1 18.769H31V20.616H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#bc271a"></path><path d="M30.362,26.153H1.638c.711,1.108,1.948,1.847,3.362,1.847H27c1.415,0,2.651-.739,3.362-1.847Z" fill="#bc271a"></path><path d="M16,4H5c-2.209,0-4,1.791-4,4v10.769h15V4Z" fill="#010062"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path><path fill="#f6cd46" d="M11.639 8.108L11.931 10.106 13.061 8.432 12.455 10.36 14.2 9.342 12.818 10.816 14.833 10.655 12.949 11.384 14.833 12.113 12.818 11.952 14.2 13.427 12.455 12.408 13.061 14.336 11.931 12.662 11.639 14.661 11.346 12.662 10.216 14.336 10.822 12.408 9.077 13.427 10.459 11.952 8.444 12.113 10.328 11.384 8.444 10.655 10.459 10.816 9.077 9.342 10.822 10.36 10.216 8.432 11.346 10.106 11.639 8.108z"></path><path d="M10,8.189c-1.764-.783-3.829,.013-4.612,1.777-.783,1.764,.013,3.829,1.777,4.612,.903,.4,1.932,.4,2.835,0-1.764,1.266-4.221,.862-5.487-.903s-.862-4.221,.903-5.487c1.37-.983,3.214-.983,4.584,0Z" fill="#f6cd46"></path></svg>

                                {t('Bahasa')}

                              </button>
                            )}
                          </Menu.Item>

                        </div>
                      </Menu.Items>
                    </Transition>
                  )}
                </>
              )}
            </Menu>
          </div>
          {isLogedin ? (
            <>
              <div className="relative hidden lg:flex p-2 border-[1px] border-[#D7D9E4] rounded-lg">

                <Menu>
                  {({ open }) => (
                    <>
                      <Menu.Button>
                        <div className="flex items-center justify-center gap-x-3">
                          <div className="flex items-center">
                            {
                              userData?.image ?

                                <img
                                  className="w-6 h-6 rounded-full object-cover"
                                  src={userData?.image}
                                  alt="prifile icon"
                                />
                                :
                                <UserCircleIcon className="h-6 w-6 text-primaryDark" />
                            }
                          </div>
                          {/* <div>{userData?.fullName}</div> */}
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="8"
                              viewBox="0 0 10 8"
                              fill="none"
                            >
                              <path
                                d="M5.57253 6.69703L9.3327 2.1221C9.38457 2.05899 9.42542 1.98853 9.45525 1.91071C9.48508 1.83287 9.5 1.74947 9.5 1.66052C9.5 1.48262 9.45056 1.32806 9.35168 1.19684C9.25281 1.06561 9.1225 1 8.96073 1L1.03927 1C0.877501 1 0.747186 1.06624 0.648323 1.19872C0.549439 1.33123 0.499999 1.4858 0.499999 1.66245C0.499999 1.70663 0.555843 1.85995 0.667534 2.12239L4.42746 6.69707C4.5139 6.80223 4.60324 6.87901 4.6955 6.92741C4.78779 6.9758 4.88928 7 5 7C5.11072 7 5.21221 6.9758 5.30449 6.92741C5.39675 6.87901 5.4861 6.80222 5.57253 6.69703Z"
                                fill="#0C0F14"
                              />
                            </svg>
                          </div>
                        </div>
                      </Menu.Button>

                      {open && (
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="z-10 bgWhite border bg-white w-56 border-gray-300 absolute right-0 top-8 mt-2 rounded-md shadow-lg focus:outline-none"
                          >
                            <div className="px-1 py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${active
                                      ? "bg-primaryPurple text-white"
                                      : "text-black"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-base font-semibold`}
                                    onClick={() => navigate("/profile")}
                                  >


                                    <UserCircleIcon className="h-6 w-6 mr-2 text-primaryDark" />

                                    Profile
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${active
                                      ? "bg-primaryPurple text-white"
                                      : "text-black"
                                      } group flex w-full items-center rounded-md px-2 py-2 text-base font-semibold`}
                                    onClick={handleSignOut}
                                  >
                                    {active ? (
                                      <SignOutIcon
                                        className="mr-2 h-5 w-5 text-white"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <SignOutIcon
                                        className="mr-2 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                    Sign Out
                                  </button>
                                )}
                              </Menu.Item>

                            </div>
                          </Menu.Items>
                        </Transition>
                      )}
                    </>
                  )}
                </Menu>
              </div>
            </>
          ) : (
            <div className='hidden lg:flex gap-4 justify-end text-base h-10'>
              <Link
                to="/sign-in"
                className="text-primaryPurple border-primaryPurple border-[1px] font-semibold flex justify-center items-center hover:bg-opacity-90 py-3 px-8 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
              >
                Sign in
              </Link>
              <Link
                to="/sign-up"
                className="bg-primaryPurple text-white font-semibold flex justify-center items-center hover:bg-opacity-90 py-3 px-8 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
              >
                Sign up
              </Link>


            </div>
          )}

        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Shariah</span>
                <img className="h-10 w-auto" src={logo} alt="Shariah" />
              </Link>
              <div className="flex items-center xs:gap-3">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon
                    className="h-6 w-6 text-primaryDark"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to='/'
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${currentPath === "/"
                      ? 'text-[#6F4F9F]' : 'text-primaryDark'} hover:bg-gray-50`}
                  >
                    Market
                  </Link>
                  <Link
                    to=''
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Favorites
                  </Link>
                  <Link
                    to=''
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    ODR
                  </Link>

                </div>
                {
                  isLogedin ?

                    <div className="border-t border-gray-700 pb-3 pt-4">
                      <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                          {
                            userData?.image ?

                              <img
                                className="h-10 w-10 rounded-full"
                                src={userData?.image}
                                alt="avatar"
                              />
                              :
                              <UserCircleIcon className="h-10 w-10 text-gray-500" />
                          }

                        </div>
                        <div className="ml-3">
                          <div className="text-base font-medium leading-none text-primaryDark">
                            {userData?.fullName}
                          </div>
                          {/* <div className="text-sm font-medium leading-none text-primaryDark">
                      tom@example.com
                    </div> */}
                        </div>
                        <button
                          type="button"
                          className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <span className="absolute -inset-1.5"></span>
                          <span className="sr-only">View notifications</span>
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-3 space-y-1 px-2">
                        <Link
                          to='/profile'
                          className="block rounded-md px-3 py-2 text-base font-medium text-primaryDark hover:bg-gray-700 hover:text-white"
                        >
                          Your Profile
                        </Link>

                        <Link
                          to=''
                          className="block rounded-md px-3 py-2 text-base font-medium text-primaryDark hover:bg-gray-700 hover:text-white"
                        >
                          Sign out
                        </Link>
                      </div>
                    </div>
                    :
                    <div className="space-y-4">
                      <Link
                        to="/sign-in"
                        className="text-primaryPurple h-10  border-primaryPurple border-[1px] font-semibold flex justify-center items-center hover:bg-opacity-90 py-3 px-8 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
                      >
                        Sign in
                      </Link>
                      <Link
                        to="/sign-up"
                        className="bg-primaryPurple h-10 text-white font-semibold flex justify-center items-center hover:bg-opacity-90 py-3 px-8 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
                      >
                        Sign up
                      </Link>
                    </div>
                }
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};
export default NavBar;
