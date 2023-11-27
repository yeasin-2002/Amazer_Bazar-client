import empty from "$assets/illustration/3D/empty-cart.png"
import demoProductImg from "$assets/temp/products/electronic2.jpg"
import { DetailedHTMLProps, FC, Fragment, HTMLAttributes } from "react"

import { useFavoriteProductStore } from "$store/favoriteProduct.store"
import { Image } from "$ui"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "$ui/sheet"
import { Heart } from "lucide-react"

type FavoriteListProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const FavoriteList: FC<FavoriteListProps> = ({ ...rest }) => {
  const { favoriteProduct } = useFavoriteProductStore()
  const Table = (
    <Fragment>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(10).keys()).map((_, index) => {
              return (
                <Fragment>
                  <tr
                    className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                    key={index}>
                    <td className="p-4">
                      <img src={demoProductImg} className="h-24 max-h-full w-16 max-w-full md:w-32" alt="Apple Watch" />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Apple Watch</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <button
                          className="me-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                          type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <div>
                          <input
                            type="number"
                            id="first_product"
                            className="block w-14 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            required
                          />
                        </div>
                        <button
                          className="ms-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                          type="button">
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18">
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">$599</td>
                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
                        Remove
                      </a>
                    </td>
                  </tr>
                </Fragment>
              )
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  )

  // const mainComponent = (
  //   <div>
  //     {favoriteProduct.map((item) => {
  //       return (
  //         <FavoriteProductItem
  //           key={item._id}
  //           _id={item._id}
  //           name={item.name}
  //           img={item.img}
  //           price={item.price}
  //           category={item.category}
  //           discount={item.discount}
  //           isFeature={item.isFeature}
  //         />
  //       )
  //     })}
  //   </div>
  // )
  const NoProductComponent = (
    <div>
      <Image src={empty} alt="empty card" className="mt-32" />
      <p className="mt-10 text-center text-2xl font-bold">No Item Selected</p>
    </div>
  )
  return (
    <div {...rest}>
      <Sheet>
        <SheetTrigger className="group relative">
          <Heart />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>Selected shopping Item</SheetTitle>
          {favoriteProduct.length === 0 ? NoProductComponent : Table}
        </SheetContent>
      </Sheet>
    </div>
  )
}
