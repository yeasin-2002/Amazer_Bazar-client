import DefaultAvatar from "$assets/illustration/3D/avatar.webp"
import { PencilLine } from "lucide-react"
import Image, { StaticImageData } from "next/image"
import { ChangeEvent, FC, Fragment, useState } from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface AvatarProps {
  register: UseFormRegisterReturn
  className?: string
  error: string | undefined
}

export const Avatar: FC<AvatarProps> = ({ register }) => {
  const { ref, onChange, ...registerRest } = register
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(DefaultAvatar)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]))
    }
  }

  const combinedOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(event)
    onChange(event)
  }

  return (
    <Fragment>
      <div className="relative h-16  w-16 cursor-pointer rounded-full bg-gray-300 ">
        <Image src={selectedImage} alt="avatar" className="h-full w-full rounded-full" />
        <label
          htmlFor="avatar"
          className="absolute -bottom-2 -right-2 cursor-pointer rounded-full border border-gray-800/40 bg-gray-100 p-1">
          <PencilLine size={20} />

          <input
            type="file"
            accept="image/*"
            area-label="avatar"
            className="hidden"
            id="avatar"
            {...registerRest}
            ref={ref}
            onChange={combinedOnChange}
          />
        </label>
      </div>
    </Fragment>
  )
}
