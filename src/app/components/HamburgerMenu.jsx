"use client";
import { Fragment } from "react";
import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid" ;

import { menuLinks } from "../data.js"


export default function HamburgerMenu() {
  return (
    <div class="logo flex flex-row justify-end">
      <Popover className="">
        {/*  if you don't have a logo, you can use this instead, or substitute with your own icon. Just put it under public folder*/}
        <Image
          className="inline relative"
          src="/opensourcelogo.png"
          width={100}
          height={100}
          alt="your logo image"
        />
        <Popover.Button
          type="button"
          className="inline-flex items-center gap-x-1 text-sm font-medium leading-6 secondary"
        >
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
                {menuLinks.map((link) => (
                  <div
                    key={link.name}
                    className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-natural-brown hover:text-accent"
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg  group-hover:text-accent">
                      <link.icon
                        className="h-6 max-w-6 primary hover:text-accent group-hover:text-secondary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <a href={link.href} className="font-medium text-gray-900">
                        {link.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{link.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Popover>
        </Transition>
      </Popover>
    </div>
  );
}
