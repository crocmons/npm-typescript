import  * as React from "react" 

type PropsType = {
    children:React.ReactNode
}

const Button = ({children}:PropsType) => {
  return (
    <button className='btn'>{children}</button>
  )
}

export {Button}