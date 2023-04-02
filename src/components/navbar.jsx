import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#home" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="#about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#experience" className="text-sm font-semibold leading-6 text-gray-900">
            Experience
          </a>
          <a href="#projects" className="text-sm font-semibold leading-6 text-gray-900">
            Projects
          </a>
        </div>
      </nav>
    </header>
  )
}