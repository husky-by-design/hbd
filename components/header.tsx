/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Company', href: '#' },
]


export default function Header() {
  return (
    <header className="bg-purple-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-purple-500 lg:border-none">
          <div className="flex items-center">
            <a className='hover:cursor-pointer hover:animate-pulse' href="#">
              <img src="hbd-text-logo.png" className="w-40 max-h-10" />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-purple-50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">

            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-purple-600 hover:bg-purple-50"
            >
              Join the Pack
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-purple-50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
