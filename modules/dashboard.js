import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  BellIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Icon from '@components/icon'
import RightColumn from '@components/dashboard/right-column'
import DashboardHome from '@components/dashboard/dashboard-home'
import CreateEvent from '@components/dashboard/create-event'

const user = {
  name: 'Jorge Zozaya',
  email: 'chelseahagon@example.com',
  role: 'Full Stack Developer',
  imageUrl:
    'https://cdn.sanity.io/images/491ykaiy/production/290da0d39092e973c7c3f48927e8072ef3e3d6c1-750x750.png',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  return (
    <div className="dashboard min-h-screen bg-gray-100">
      <Popover as="header" className="pb-24 bg-gradient-to-r from-indigo-600 to-indigo-900">
        {({ open }) => (
          <>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-4">
              <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                {/* Logo */}

                <Link href="/" scroll={false}>
                  <a className="logo--link" aria-label="Go Home">
                    <Icon name="Logo" id="header" viewBox="0 0 224 256" />
                  </a>
                </Link>

                {/* Right section on desktop */}
                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5">
                  <button
                    type="button"
                    className="flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-4 relative flex-shrink-0">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>

                <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                  <div className="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
                    {/* Left nav */}
                    <div className="hidden lg:block lg:col-span-2">
                      <nav className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? 'text-white' : 'text-cyan-100',
                              'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div className="px-12 lg:px-0">
                      {/* Search */}
                      <div className="max-w-xs mx-auto w-full lg:max-w-md">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-white focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <input
                            id="search"
                            className="block w-full text-white bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 focus:text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu button */}
                <div className="absolute right-0 flex-shrink-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-cyan-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
            </div>

            <Transition.Root show={open} as={Fragment}>
              <div className="lg:hidden">
                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay static className="z-20 fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                      <div className="pt-3 pb-2">
                        <div className="flex items-center justify-between px-4">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg"
                              alt="Workflow"
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 pb-2">
                        <div className="flex items-center px-5">
                          <div className="flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                          </div>
                          <div className="ml-3 min-w-0 flex-1">
                            <div className="text-base font-medium text-gray-800 truncate">{user.name}</div>
                            <div className="text-sm font-medium text-gray-500 truncate">{user.email}</div>
                          </div>
                          <button className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                          {userNavigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition.Child>
              </div>
            </Transition.Root>
          </>
        )}
      </Popover>
      <div className="-mt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-4">
          <h1 className="sr-only">Profile</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            
            {/* <CreateEvent/> */}

            <DashboardHome/>

            {/* Right column */}
            <RightColumn />
          </div>
        </div>
      </div>
      
    </div>
  )
}
