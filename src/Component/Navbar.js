import { useState, Fragment } from "react";
import { Menu, Transition, Popover, Dialog } from "@headlessui/react";
import logo from "../assets/Logo-new.png";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogedin, setIsLogedin] = useState(true);
  const currentPath = window.location.pathname;
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
    setIsLogedin(false);
  };

  return (
    <header
      id="main-header"
      className={`bg-white border-b-[1px] border-[#D7D9E4] ${
        !mobileMenuOpen && "z-50"
      }`}
    >
      <nav
        className="2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto flex  items-center justify-between p-6 lg:py-[18px] lg:px-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 z-[1]">
          <Link to="/home" className="-m-1.5 p-1.5">
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
            to="/home"
            className={`text-base font-semibold leading-normal ${currentPath === "/home"
            ?'text-[#6F4F9F]':'text-[#0C0F14]' } flex items-center`}
          >
            Market
          </Link>

          <Link
            to="#"
            className="text-base font-semibold leading-normal text-[#0C0F14] flex items-center"
          >
            Favorites
          </Link>
          <Link
            to="#"
            className="text-base font-semibold leading-normal text-[#0C0F14] flex items-center"
          >
            ODR
          </Link>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-4">
          <div className="p-2 border-[1px] border-[#D7D9E4] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03324 14.1334 2.75 10.0833 2.75C6.03324 2.75 2.75 6.03324 2.75 10.0833C2.75 14.1334 6.03324 17.4167 10.0833 17.4167Z"
                stroke="#0C0F14"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.2502 19.25L15.2627 15.2625"
                stroke="#0C0F14"
                strokeWidth="1.83333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="p-2 border-[1px] border-[#D7D9E4] rounded-lg">
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
          {isLogedin ? (
            <>
              <div className="relative flex p-2 border-[1px] border-[#D7D9E4] rounded-lg">
                <Menu>
                  {({ open }) => (
                    <>
                      <Menu.Button>
                        <div className="flex items-center justify-center gap-x-3">
                          <div className="flex items-center">
                            <img
                              className="w-6 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt="prifile icon"
                            />
                          </div>
                          <div>Jane Doe</div>
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
                                    className={`${
                                      active
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
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-primaryPurple text-white"
                                        : "text-black"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-base font-semibold`}
                                    onClick={() => navigate("/profile")}
                                  >
                                    <img
                                      className="w-6 rounded-full mr-2"
                                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                      alt="prifile icon"
                                    />
                                    Profile
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
            <Link
              to="/sign-in"
              className="text-sm font-bold whitespace-nowrap text-white bg-primaryPurple hover:bg-opacity-[0.9] px-[32px] py-[14px] rounded-3xl z-[1]"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                  className="h-6 w-6 text-[#0C0F14]"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div class="border-t border-gray-700 pb-3 pt-4">
                <div class="flex items-center px-5">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <div class="text-base font-medium leading-none text-white">
                      Tom Cook
                    </div>
                    <div class="text-sm font-medium leading-none text-gray-400">
                      tom@example.com
                    </div>
                  </div>
                  <button
                    type="button"
                    class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span class="absolute -inset-1.5"></span>
                    <span class="sr-only">View notifications</span>
                    <svg
                      class="h-6 w-6"
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
                <div class="mt-3 space-y-1 px-2">
                  <a
                    href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
export default NavBar;
