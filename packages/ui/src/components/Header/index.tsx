import React, { ReactNode } from 'react'
import './styles.css'
interface Props {
  onClick: any
  children?: ReactNode
}

export const Header: React.FC<Props> = (props) => {
  return (
    <header className="fixed flex flex-row min-w-full bg-clrPrimary h-header z-10">
      <div className="flex items-center w-480 px-3 mx-auto text-white">
        <button
          className="mr-5 leading-none border-none focus:outline-none active:outline-none"
          onClick={props.onClick}
        >
          <span className="icon icon-arrow-left"></span>
        </button>
        <div>{props.children}</div>
      </div>
    </header>
  )
}
export default Header