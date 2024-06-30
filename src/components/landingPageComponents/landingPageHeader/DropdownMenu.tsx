import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

interface MenuItem {
  label: string
  path: string
}

interface Props {
  items: MenuItem[]
  isOpen: boolean
  onClose: () => void
}

const DropdownMenu: React.FC<Props> = ({ items, isOpen, onClose }) => {
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen || !event.target) return

      const target = event.target as HTMLElement
      if (
        !target.closest('.dropdown-menu') &&
        !target.closest('.dropdown-toggle')
      ) {
        onClose()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, onClose])

  // Close menu on item click
  const handleItemClick = () => {
    onClose()
  }

  return (
    <ul
      className={`absolute left-0 mt-1 bg-custom-blue text-customYellow p-2 rounded shadow-lg ${isOpen ? 'block' : 'hidden'} dropdown-menu z-50`}
      onClick={(e) => e.stopPropagation()}
    >
      {items.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path}
            className="block px-4 py-2 hover:bg-gray-700"
            onClick={handleItemClick}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DropdownMenu
