"use client"

import Link from "next/link"
import React from "react"
import { AiFillBug } from "react-icons/ai"
import { usePathname } from "next/navigation"

const NavBar = () => {
  const currentPath = usePathname()
  console.log()

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ]

  return (
    <nav
      className={`flex space-x-6 border-b mb-5 px-5 h-14 items-center ${
        currentPath === "/issues" && "hidden"
      }`}
    >
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ label, href }) => (
          <li>
            <Link
              key={href}
              href={href}
              className={`${
                currentPath === href ? "text-zinc-900" : "text-zinc-500"
              }   hover:text-zinc-800 transition-colors`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
