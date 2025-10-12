import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherUser = 'ali hazma';

// function Myapp(){
//   return(
//    <>
//     <div>
//     <h1>custom app!</h1>
//      </div>
//    </>
//   )
// }

const ReactElement = {
  type:'a',
  props:{
  href:'https://google.com',
  traget:'_blank'
},
children:'click me to vist google'
}
// const anotherelement = (
//   <a href='https://google.com'target='_blank'>Vist google</a>
// )
const ReactElementTwo = React.createElement(
  'a',
  {href: 'https//:google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
) 

createRoot(document.getElementById('root')).render(
   ReactElementTwo
)
