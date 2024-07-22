import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'
import { useLocation } from 'react-router-dom'

const Header = ({ language, setLanguage }) => {
  const [navbar, setNavbar] = useState(false)
  const [content, setContent] = useState({})
  const location = useLocation()
  const path = location.pathname

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else {
      setContent(Translation.czech)
    }
  }, [language])

  return (
    // <header className='homegradient'>
    <header
      className='bg-[#9c948e]
      '
    >
      <nav className='w-full text-white nav-font'>
        <div className='justify-between px-4 mx-auto md:items-center md:flex md:px-8'>
          <div className='mb-0'>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              <a className='text-[25px] font-medium text-white' href='/'>
                {content.headerTitle}
                {/* Svedkovia */}
              </a>
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-10 h-10'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-10 h-10'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 h-[300px] lg:h-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className='justify-center text-white lg:text-white text-[20px] gap-3 lg:gap-6 font-bolder flex flex-col lg:flex-row'>
                <li>
                  <a href='/co-hlasali-apostoli'>
                    {content.ftLi1}
                    {/* Čo hlásali apoštoli */}
                  </a>
                </li>
                <li>
                  <a href='/je-jezis-boh'>
                    {content.ftLi2}
                    {/* Je Ježiš Boh? */}
                  </a>
                </li>
                <li>
                  <a href='/koho-panom-je-jezis'>
                    {content.ftLi3}
                    {/* Koho Pánom je Ježiš? */}
                  </a>
                </li>

                <li>
                  <a href='/vecera-panova'>
                    {content.ftLi4}
                    {/* Večera Pánova */}
                  </a>
                </li>
                <li className=''>
                  {/* <LanguageBar language={language} setLanguage={setLanguage} /> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
