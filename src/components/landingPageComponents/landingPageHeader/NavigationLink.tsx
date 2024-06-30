import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  to: string
  text: string
  onClick?: () => void
}

const NavigationLink: React.FC<Props> = ({ to, text, onClick }) => {
  return (
    <li className="mx-5">
      <Link to={to} className="text-customYellow" onClick={onClick}>
        {text}
      </Link>
    </li>
  )
}

export default NavigationLink
