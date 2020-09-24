import React from 'react'
import { getColorButton } from './utils'

interface Props {
  style?: Record<string, unknown>
  loadingButton?: boolean
  color: string
  onClick?: () => void
  prefix?: any
  children: React.ReactNode
}

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={getColorButton(props.color)}
      style={props.style}
    >
      {props.prefix}
      {props.loadingButton ? (
        <svg className="inline-block w-4 h-4 fill-current">
          <svg version="1.1" id="L9" x="0px" y="0px" viewBox="25 25 50 50">
            <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </svg>
      ) : (
        props.children
      )}
    </button>
  )
}

export default Button
