import React from 'react'

const Button = ({
    children,
    type = "button",
    bgColor = "bg-emerald-600",
    bgText = "text-white",
    className = "", 
    ...props
}) => {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${bgText}`}{...props}>{children}</button>
  )
}

export default Button