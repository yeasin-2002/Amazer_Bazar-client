"use client"

import { Tag } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react"

import { kurale, pt_sans_narrow } from "@/font"
import { categoryData } from "@/interface"
import { useFilterProduct } from "@/store"
import { getImgSrc } from "@/utils"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { FreeMode, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categoryData: categoryData[] | null
}

export const ShowCategoryItems = ({ categoryData, ...rest }: Props) => {
  const router = useRouter()
  const { setSelectedCategory, setResetFilter } = useFilterProduct()
  return (
    <Fragment>
      <section className="eachSection space-y-3 px-4 py-6" {...rest}>
        <div>
          <div className="flex items-center gap-x-2">
            <span className="grid place-items-center   rounded-full bg-brand-900 p-2  text-white">
              <Tag className="text-gray-700" />
            </span>
            <p className={"  text-2xl font-bold text-gray-800" + kurale.className}>Categories</p>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              600: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 5,
              },
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper !cursor-grab">
            {categoryData?.map((val) => {
              const img = getImgSrc({
                imgType: "category-img",
                img: val.icon,
              })

              return (
                <SwiperSlide key={val._id}>
                  {/* <CategoryItem categoryName={val.name} icon={val.icon} key={val._id} /> */}
                  <div
                    className=" into-center group aspect-square cursor-pointer flex-col "
                    {...rest}
                    onClick={() => {
                      setResetFilter()
                      setSelectedCategory(val.name)
                      router.push("/search")
                    }}>
                    <span className="into-center h-28 w-28 rounded-full bg-gray-300/50 ">
                      <Image
                        src={img}
                        alt={val.name}
                        className="h-full w-full  object-cover p-4 transition-all group-hover:scale-105"
                        width={500}
                        height={500}
                        crossOrigin="anonymous"
                      />
                    </span>
                    <h2 className="mb-2    mt-4  text-xl font-bold text-slate-900">{val.name}</h2>
                    <p className={" text-base font-medium text-slate-600" + pt_sans_narrow.className}>{val.name}</p>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
    </Fragment>
  )
}
