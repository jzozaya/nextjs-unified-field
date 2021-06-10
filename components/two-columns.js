import Link from "next/link"

/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '5' },
  { label: 'Beta Users', value: '521' },
  { label: 'Raised', value: '$25M' },
]

export default function TwoColumns() {
  return (
    <div className="relative bg-blue-200 py-16 sm:py-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full bg-indigo-100 rounded-r-3xl lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://cdn.sanity.io/images/491ykaiy/production/475829a87a50b861a15825dff518421b4a814e00-900x500.png"
                alt="Cardano"
              />
              <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
              <div className="relative px-8">
                {/* <div>
                  <img
                    className="h-12"
                    src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                    alt="Workcation"
                  />
                </div> */}
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-400"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    {/* <p className="relative">
                      It is only through the confining act of writing that the immensity of the nonwritten becomes legible.
                    </p> */}
                    <p className="relative">
                      This system aims to be the most decentralized in the blockchain space. 
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">Italo Calvino, If on a Winter's Night a Traveler</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              What is the biggest question you have about the future?
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                Cardano is trying to differentiate itself from Bitcoin by being designed from the ‘ground up’ to deliver a secure 
                and sustainable blockchain that can protect user privacy whilst allowing for regulation. It also hypes up that its 
                been designed by academics and scientists who understand the needs of the marketplace.
              </p>
              <p className="text-lg">
                Cardano’s multi-layer protocol performs advanced functions, and has at its foundation a settlement layer that is 
                linked to a control layer. The settlement layer will have a unit of account, while the control layer will run smart 
                contracts and will be programmed to recognize identity, assisting compliance.
              </p>
              {/* <p className="text-lg">
                To fly is the opposite of traveling: you cross a gap in space, you vanish into the void, you accept 
                not being in a place for a duration that is itself a kind of void in time; then you reappear, in a place 
                and in a moment with no relation to the where and when in which you vanished.
              </p>
              <p className="text-base leading-7">
              You have with you the book you were reading in the cafe, which you are eager to continue, so that you can then 
              hand it on to her, to communicate again with her through the channel dug by others' words, which, as they are 
              uttered by an alien voice, by the voice of that silent nobody made of ink and typographical spacing, can become 
              yours and hers, a language, a code between the two of you, a means to exchange signals and recognize each other.
              </p> */}
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <div className="mt-10">
              <Link href="/admin">
                <a className="text-base font-medium text-indigo-600">
                  {' '}
                  Learn more about how we're changing the world <span aria-hidden="true">&rarr;</span>{' '}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
