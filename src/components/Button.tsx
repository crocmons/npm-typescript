import  * as React from "react" 

type PropsType = {
    children:React.ReactNode,
    type?: "button" | "submit" | "reset",
    onClick?:()=> void
}

const Button = ({children, onClick, type}:PropsType) => {
  return (
    <button type={type} onClick={onClick} className='btn'>{children}</button>
  )
}

export {Button}