import  * as React from "react" 
import ".npm-project/src/index.css"

type PropsType = {
    children:React.ReactNode
}

const Button = ({children}:PropsType) => {
  return (
    <button className='btn'>{children}</button>
  )
}

export {Button}