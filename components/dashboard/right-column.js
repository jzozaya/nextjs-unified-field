const recentHires = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Floyd Miles',
    handle: 'floydmiles',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  // {
  //   name: 'Emily Selman',
  //   handle: 'emilyselman',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   href: '#',
  // },
  // {
  //   name: 'Kristin Watson',
  //   handle: 'kristinwatson',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  //   href: '#',
  // },
]
const announcements = [
  {
    id: 1,
    title: 'Tesla Inc. stock falls Wednesday, underperforms market',
    href: '#',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'Johnson & Johnson stock outperforms market on strong trading day',
    href: '#',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Bank of America Corp. stock falls Wednesday, underperforms market',
    href: '#',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
]

const RightColumn = () => {
  
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Announcements */}
      <section aria-labelledby="announcements-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="p-6">
            <h2 className="text-base font-medium text-gray-900" id="announcements-title">
              Market News 
            </h2>
            <div className="flow-root mt-6">
              <ul className="-my-5 divide-y divide-gray-200">
                {announcements.map((announcement) => (
                  <li key={announcement.id} className="py-5">
                    <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                      <h3 className="text-sm font-semibold text-gray-800">
                        <a href={announcement.href} className="hover:underline focus:outline-none">
                          {/* Extend touch target to entire panel */}
                          <span className="absolute inset-0" aria-hidden="true" />
                          {announcement.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{announcement.preview}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Hires */}
      <section aria-labelledby="recent-hires-title">
        <div className="rounded-lg bg-white overflow-hidden shadow">
          <div className="p-6">
            <h2 className="text-base font-medium text-gray-900" id="recent-hires-title">
              Economic Release Calendar
            </h2>
            <div className="flow-root mt-6">
              <ul className="-my-5 divide-y divide-gray-200">
                {recentHires.map((person) => (
                  <li key={person.handle} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img className="h-8 w-8 rounded-full" src={person.imageUrl} alt="" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                        <p className="text-sm text-gray-500 truncate">{'@' + person.handle}</p>
                      </div>
                      <div>
                        <a
                          href={person.href}
                          className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RightColumn
