import { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface ManageOrderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ManageOrder: FC<ManageOrderProps> = ({ ...rest }) => {
  return <div {...rest}>Mange Orders</div>
}
