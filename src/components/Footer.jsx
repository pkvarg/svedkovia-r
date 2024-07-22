import React, { useState, useEffect } from 'react'
import Translation from '../Home.json'
import { useStateContext } from '../context/StateContext'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const { language } = useStateContext()
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
    <footer className={path === '/' ? 'homegradient' : 'halftransparent'}>
      <section className='mx-4 pt-4 pb-4'></section>
      <section
        className={
          path === '/'
            ? 'mx-4 text-brown3 text-[20px] pb-8'
            : 'mx-4 text-white text-[20px] pb-8'
        }
      >
        {/* <section className='mx-4 text-white text-[20px] pb-8'> */}
        <div>
          <ul className='flex flex-col lg:flex-row justify-center items-center  text-[20px] gap-2 lg:gap-6 font-bolder'>
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
          </ul>
        </div>
        <div className='flex flex-row gap-2 items-center justify-center mt-8 lg:mt-4 font-bold'>
          <a href='https://cestazivota.sk' target='_blank'>
            cestazivota.sk
          </a>
          {/* <p className='hidden lg:flex pb-4'>|</p> */}

          {/* {language === 'slovak' && (
            <a href='https://jwfakty.sk' target='_blank'>
              jwfakty.sk
            </a>
          )} */}

          {/* {language === 'czech' && (
            <a href='https://jwfakty.sk' target='_blank'>
              jwfakty.sk
            </a>
          )} */}
          {/* {language === 'english' && (
            <a href='https://jwfacts.com' target='_blank'>
              jwfacts.com
            </a>
          )} */}
        </div>
        <div className='flex justify-center mt-2'>
          <a href='https://pictusweb.sk'>
            &#60;&#47;&#62; PICTUSWEB development
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
