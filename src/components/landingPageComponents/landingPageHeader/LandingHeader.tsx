import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import HeaderLogo from './HeaderLogo'
import NavigationLink from './NavigationLink'
import DropdownMenu from './DropdownMenu'
import LanguageButton from './LanguageButton'
import MobileMenuToggle from './MobileMenuToggle'
import { CustomButton } from '../../generalComponents/CustomButton'
// import { Link } from 'react-router-dom';
import fr from '../../../assets/fr.png'
import en from '../../../assets/en.png'
import rw from '../../../assets/rw1.png'
import Modal from '../../modal/Modal'

interface MenuItem {
  label: string
  path: string
}

export const LandingHeader: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng)
    setMenuOpen(false)
  }

  const dropdownItems: MenuItem[] = [
    { label: t('about'), path: '/about' },
    { label: t('about.ourLeaders'), path: '/leaders' },
    { label: t('about.ourChorales'), path: '/chorales' },
    { label: t('about.catholicAction'), path: '/catholic-action' },
  ]

  return (
    <header className="bg-custom-blue text-customYellow py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Site Title */}
          <HeaderLogo />

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center space-x-4">
            <ul className="flex">
              <NavigationLink to="/" text={t('home')} />
              <li className="relative mx-5">
                <span
                  className="text-customYellow cursor-pointer dropdown-toggle"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {t('about')}
                  {/* Dropdown menu */}
                  <DropdownMenu
                    items={dropdownItems}
                    isOpen={dropdownOpen}
                    onClose={() => setDropdownOpen(false)}
                  />
                </span>
              </li>
              <NavigationLink to="/services" text={t('Service')} />
              <NavigationLink to="/publication" text={t('Publication')} />
              <NavigationLink to="/gallery" text={t('Gallery')} />
              <NavigationLink to="/faq" text={t("Faq's")} />
              <li className="mx-5">
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-customYellow"
                >
                  <CustomButton translationKey={t('donate')} />
                </button>
              </li>
            </ul>

            {/* Language selection */}
            <div className="mt-4 md:mt-0 md:ml-auto md:flex md:items-center space-x-4">
              <LanguageButton
                onClick={() => changeLanguage('en')}
                imageSrc={en}
                altText={t('lang')}
              />
              <LanguageButton
                onClick={() => changeLanguage('fr')}
                imageSrc={fr}
                altText={t('lang')}
              />
              <LanguageButton
                onClick={() => changeLanguage('es')}
                imageSrc={rw}
                altText={t('lang')}
              />
            </div>
          </nav>

          {/* Mobile menu button */}
          <MobileMenuToggle
            onClick={() => setMenuOpen(!menuOpen)}
            isOpen={menuOpen}
          />
        </div>

        {/* Mobile navigation menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <NavigationLink to="/" text={t('home')} />
              <li className="relative mx-5">
                <span
                  className="text-customYellow cursor-pointer dropdown-toggle"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {t('about')}
                  <DropdownMenu
                    items={dropdownItems}
                    isOpen={dropdownOpen}
                    onClose={() => setDropdownOpen(false)}
                  />
                </span>
              </li>
              <NavigationLink to="/services" text={t('service')} />
              <NavigationLink to="/publication" text={t('publication')} />
              <NavigationLink to="/gallery" text={t('gallery')} />
              <NavigationLink to="/faq" text={t('faq')} />
              <li className="mx-5">
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-customYellow"
                >
                  <CustomButton translationKey={t('donate')} />
                </button>
              </li>

              {/* Language selection */}
              <div className="flex flex-col space-y-4">
                <LanguageButton
                  onClick={() => changeLanguage('en')}
                  imageSrc={en}
                  altText={t('lang')}
                />
                <LanguageButton
                  onClick={() => changeLanguage('fr')}
                  imageSrc={fr}
                  altText={t('lang')}
                />
                <LanguageButton
                  onClick={() => changeLanguage('rw')}
                  imageSrc={rw}
                  altText={t('lang')}
                />
              </div>
            </ul>
          </nav>
        )}

        {/* Modal */}
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </header>
  )
}

export default LandingHeader
