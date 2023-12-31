"use client"

import { FavoriteList, SelectedShopping } from "$components"
import { useAuth } from "$hooks/useAuth"
import { Logo } from "$layout"
import { buttonVariants } from "$ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment } from "react"
import { UserProfileCheck } from "./UserProfileCheck"

export const Nav = () => {
  const { isLoggedIn } = useAuth()
  const hiddenRoute = [
    "/dashboard",
    "/dashboard/order",
    "/dashboard/user",
    "/dashboard/wishlist",
    "/dashboard/products",
    "/dashboard/products",
    "/dashboard/settings",
    "/profile",
    "/profile/wishlist",
    "/profile/orders",
    "/profile/checkout",
    "/profile/products",
    "/profile/settings",
  ]

  const navItems = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Search",
      url: "/search",
    },

    {
      title: "Contact",
      url: "/contact",
    },
  ]
  const pathName = usePathname()

  return (
    <Fragment>
      {!hiddenRoute.includes(pathName) && (
        <Fragment>
          <nav className="glass-effect fixed left-0  right-0 top-3  z-10 mx-auto flex w-10/12 items-center justify-between rounded-lg px-6 py-4 xl:py-6 2xl:py-8">
            <Link href={"/"} className="h-10 w-10 ">
              <Logo className="h-full w-full " />
            </Link>
            <div className="hidden gap-x-6  md:flex ">
              {navItems?.map((item) => {
                const isActive = pathName === item.url
                return (
                  <Link
                    href={item.url}
                    defaultValue={"/"}
                    key={item.title}
                    className={`group relative flex items-center   `}>
                    <p className="  cursor-pointer font-kurale text-lg font-semibold text-gray-700  hover:text-gray-900 xl:text-xl 2xl:text-2xl">
                      {item.title}
                    </p>
                    <span
                      className={`absolute bottom-0 left-0 h-[0.15rem] w-0 bg-gray-900 transition-all duration-300 ease-in-out group-hover:w-full ${
                        isActive && "w-full"
                      } `}
                    />
                  </Link>
                )
              })}
            </div>
            <div className="flex  items-center gap-x-2">
              <FavoriteList />
              <SelectedShopping />
              {isLoggedIn ? (
                <UserProfileCheck />
              ) : (
                <Link
                  href={"/login"}
                  className={buttonVariants({
                    variant: "default",
                    className: " text-gray-700",
                    font: "playpenSans",
                  })}>
                  Log In
                </Link>
              )}
            </div>
          </nav>
        </Fragment>
      )}
    </Fragment>
  )
}
