import React from 'react'

type Props = {}

const Socials = (props: Props) => {
  return (
    <div>Socials</div>
  )
}

export default Socials


// interface SocialItem {
//   link: string
//   icon: JSX.Element
// }

// const Socials = () => {
//   return (
//     <div>
//       <ul className="flex flex-row items-center space-x-4">
//         {SOCIALS.map((item: SocialItem, idx: number) => {
//           return (
//             <li key={idx}>
//               <a href={item.link} target="_blank" rel="noreferrer" >
//                 {item.icon}
//               </a>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// export default Socials