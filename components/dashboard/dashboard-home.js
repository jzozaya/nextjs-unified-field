import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/outline'

const user = {
  name: 'Jorge Zozaya',
  email: 'chelseahagon@example.com',
  role: 'Full Stack Developer',
  imageUrl:
    'https://cdn.sanity.io/images/491ykaiy/production/290da0d39092e973c7c3f48927e8072ef3e3d6c1-750x750.png',
}

const stats = [
  { label: 'High Quality Momentum', value: 12 },
  { label: 'Low Quality Momentum', value: 4 },
  { label: 'All', value: 16 },
]
const actions = [
  { icon: CashIcon, 
    name: 'Stripe Setup', 
    href: '#', 
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    icon: ClockIcon,
    name: 'Request time off',
    href: '#',
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    icon: BadgeCheckIcon,
    name: 'Benefits',
    href: '#',
    iconForeground: 'text-light-blue-700',
    iconBackground: 'bg-light-blue-50',
  },
  {
    icon: UsersIcon,
    name: 'Schedule a one-on-one',
    href: '#',
    iconForeground: 'text-light-blue-700',
    iconBackground: 'bg-light-blue-50',
  },
  {
    icon: ReceiptRefundIcon,
    name: 'Submit an expense',
    href: '#',
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    icon: AcademicCapIcon,
    name: 'Training',
    href: '#',
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardHome() {
  
  return (
    <div className="grid grid-cols-1 gap-4 lg:col-span-2">
      {/* Welcome panel */}
      <section aria-labelledby="profile-overview-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <h2 className="sr-only" id="profile-overview-title">
            Profile Overview
          </h2>
          <div className="bg-white p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:space-x-5">
                <div className="flex-shrink-0">
                  <img className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p className="text-sm font-medium text-gray-600">Welcome back,</p>
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
                  <p className="text-sm font-medium text-gray-600">{user.role}</p>
                </div>
              </div>
              <div className="mt-5 flex justify-center sm:mt-0">
                <a
                  href="#"
                  className="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  View profile
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-5 text-sm font-medium text-center">
                <span className="text-gray-900">{stat.value}</span>{' '}
                <span className="text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions panel */}
      <section aria-labelledby="quick-links-title">
        <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
          <h2 className="sr-only" id="quick-links-title">
            Quick links
          </h2>
          {actions.map((action, actionIdx) => (
            <div
              key={action.name}
              className={classNames(
                actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href={action.href} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at
                  blanditiis et quo et molestiae.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

