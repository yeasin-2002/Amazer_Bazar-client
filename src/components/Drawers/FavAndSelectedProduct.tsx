import Image from "next/image"
import Link from "next/link"

interface FavoriteAndSelectedItemProps {
  _id: string
  name: string
  imgUrl: string
  price: number
  category: string
}

export const FavoriteAndSelectedItem = ({
  _id,
  //   category,
  imgUrl,
  name,
  price,
  ...rest
}: FavoriteAndSelectedItemProps) => {
  return (
    <Link
      href={`/shop/${_id}`}
      key={_id}
      className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      {...rest}>
      <Image
        className="h-16  w-16 rounded-t-lg object-cover md:h-auto  md:rounded-none md:rounded-s-lg"
        src={imgUrl}
        alt="product image"
        crossOrigin="anonymous"
        width={400}
        height={400}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {name} </h5>
        <p className="mb-3  text-xl font-semibold text-gray-700 dark:text-gray-400">{price} &#2547;</p>
      </div>
    </Link>
  )
}
