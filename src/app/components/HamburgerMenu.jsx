'use client';
import { Fragment } from 'react'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import {
  HomeIcon,
  CursorArrowRaysIcon,
  WrenchScrewdriverIcon,
  IdentificationIcon,
  FolderOpenIcon,
} from '@heroicons/react/24/outline'

const solutions = [
{ name: 'Home', description: 'Homepage', href: '/', icon: HomeIcon },
  { name: 'Skills', description: 'See what skills I have', href: '/#skills', icon: WrenchScrewdriverIcon },
  { name: 'Projects', description: 'Check out my completed and ongoing projects', href: '/#projects', icon: CursorArrowRaysIcon },
  { name: 'About', description: "Learn a little more about me", href: '/#about', icon: IdentificationIcon },
  { name: 'Contact', description: 'Lets work together', href: '/#contact', icon: PhoneIcon },
]
const callsToAction = [
  { name: 'Full About Me', href: '/About', icon: UserCircleIcon },
  { name: 'All projects', href: '/projects', icon: FolderOpenIcon },
]

export default function HamburgerMenu() {
  return (
    <div class='logo flex flex-row justify-end'>

    <Popover className="">
      <Image
          className="inline relative"
          src="/logo.png"
          width={100}
          height={100}
          alt="Tech Sapote Logo Image"
        />       
      <Popover.Button type='button' className="inline-flex items-center gap-x-1 text-sm font-medium leading-6 secondary">
         <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover className="absolute popover z-10 mt-5 w-screen -translate-x-1/4 px-4 ">
          <div className="max-w-md overflow-hidden rounded-3xl accent-background text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4 ">
              {solutions.map((item) => (
                <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-natural-brown hover:text-accent">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:text-accent">
                    <item.icon className="h-6 max-w-6 primary hover:text-accent group-hover:text-secondary" aria-hidden="true" />
                  </div>
                  <div>
                    <a href={item.href} className="font-medium text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex hover:bg-natural-brown hover:text-accent items-center justify-center gap-x-2.5 p-3 font-medium text-gray-900 hover:bg-gray-100"
                >
                  <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div> */}
          </div>
        </Popover>
      </Transition>
    </Popover>
    </div>
  )
}
