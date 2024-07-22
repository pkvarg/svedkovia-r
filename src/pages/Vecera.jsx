import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Translation from '../Supper.json'
import { useStateContext } from '../context/StateContext'

const Vecera = () => {
  const { language, setLanguage } = useStateContext()
  const [content, setContent] = useState({})

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
    <>
      <Header language={language} setLanguage={setLanguage} />
      <div className='bg-[#8e562d] text-white'>
        <div className='vecera h-[1100px] -mt-[25%]  lg:-mt-[8%]'></div>
        <div>
          <h1 className='text-center text-[32.5px] leading-[40px] -mt-[700px] lg:-mt-[700px] xl:-mt-[600px]  2xl:-mt-[550px] pb-8'>
            {content.sTitle}

            {/* Večer Pánova */}
          </h1>
          <div className='py-8 mx-4 lg:mx-8'>
            <h3 className='text-center my-8'>
              {content.sSub1}
              {/* Chceš si uctiť pamiatku Ježiša Krista? */}
            </h3>

            <p>
              <span className='italic'>
                {' '}
                {content.sVerse1}
                {/* Nato vzal chlieb, dobrorečil, lámal a dával im, hovoriac: Toto je
              moje telo, ktoré sa vydáva za vás; to čiňte na moju pamiatku. A
              podobne (vzal) po večeri kalich a hovoril: Tento kalich je nová
              zmluva v mojej krvi, ktorá sa vylieva za vás. */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef1} {/* Lukáš 22:19-20 */}
              </span>
              {content.sText1}
              {/* Telo sa vydalo za všetkých ľudí. Aj krv tiekla za všetkých ľudí. */}
              <span className='italic'>
                {' '}
                {content.sVerse2}
                {/* Isteže preto sa unúvame a zápasíme, lebo máme nádej v živom Bohu,
              ktorý je Spasiteľom všetkých ľudí, najmä veriacich. */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef2} {/* Prvý Timotejovi 4:10 */}
              </span>
            </p>

            <h3 className='text-center my-8'>
              {content.sSub2}
              {/* Chceš svedčiť o Jeho smrti? */}
            </h3>

            <p>
              <span className='italic'>
                {' '}
                {content.sVerse3}
                {/* Lebo kedykoľvek by ste jedli tento chlieb a pili z kalicha,
              zvestujete smrť Pánovu, kým nepríde! */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef3} {/* Prvý Korintským 11:26 */}
              </span>
              {content.sText2}
              {/* Kto je svedkom smrti a vzkriesenia Ježiša Krista? Každý, kto Ho
            prijal. Preto prijímať chlieb a víno má každý, v ktorom Duch Pánov
            prebýva. */}
              <span className='italic'>
                {' '}
                {content.sVerse4}
                {/* Kto vyznáva Syna, má aj Otca. */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef4} {/* Prvý Jánov 2:23 */}
              </span>
            </p>

            <h3 className='text-center my-8'>
              {content.sSub3}
              {/* Chceš mať večný život?  */}
            </h3>
            <p>
              <span className='italic'>
                {' '}
                {content.sVerse5}
                {/* Riekol im Ježiš: Veru, veru, hovorím vám: Ak nejete telo Syna
              človeka a nepijete Jeho krv, nemáte života v sebe. Kto je moje
              telo a pije moju krv, má večný život, a ja ho vzkriesim v posledný
              deň. Lebo moje telo je pravý pokrm a moja krv je pravý nápoj.{' '} */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef5} {/* Ján 6:53-55 */}
              </span>
            </p>
            <h3 className='text-center my-8'>
              {content.sSub4}
              {/* Chceš byť v duchovnom spojení s Ježišom? */}
            </h3>
            <p>
              <span className='italic'>
                {' '}
                {content.sVerse6}
                {/* Kto je moje telo a pije moju krv, zostáva vo mne a ja v ňom. Ako
              mňa poslal živý Otec a ja žijem skrze Otca, aj ten, kto mňa je,
              bude žiť skrze mňa.{' '} */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef6} {/* Ján 6:56-57  */}
              </span>
            </p>
            <h3 className='text-center my-8'>
              {content.sSub5}
              {/* Chceš mať podiel na Ježišovi?{' '} */}
            </h3>
            <p>
              <span className='italic'>
                {' '}
                {content.sVerse7}
                {/* Potom nalial vodu do umývadla, začal umývať učeníkom nohy a
              utierať zásterou, ktorou bol opásaný.{' '} */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef7} {/* Ján 13:5 */}
              </span>
              <span className='italic'>
                {' '}
                {content.sVerse8}
                {/* Povedal Mu Peter: Pane, nikdy mi nebudeš umývať nohy! Odpovedal mu
              Ježiš: Ak ťa neumyjem, nemáš so mnou podiel. */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef8} {/* Ján 13:8 */}
              </span>
              {content.sText4}
              {/* Tento úkon je nariadením Pána a podmienkou toho, aby s Ním mal
            veriaci podiel. */}
            </p>

            <p className='mt-2'>
              <span className='italic'>
                {' '}
                {content.sVerse10}
                {/* Keď teda ja, Pán a Majster, umyl som vám nohy, aj vy ste povinní
              navzájom si umývať nohy.{' '} */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef10} {/* Ján 13:14 */}
              </span>
              {content.sText5}

              {/* Každý, kto má Ježiša Krista za svojho Pána, má povinnosť konať tento
            úkon svojmu spolubratovi. */}
            </p>
            <h3 className='text-center my-8'>
              {content.sSub6}
              {/* Nezriekaj sa blahoslavenstva{' '} */}
            </h3>

            <p>
              <span className='italic'>
                {content.sVerse11}
                {/* Keď to viete, blahoslavení ste, ak podľa toho aj konáte. Nehovorím
              o všetkých vás, ja viem, ktorých som si vyvolil, ale aby sa
              naplnilo Písmo: Ten, čo jedol môj chlieb, pozdvihol pätu proti
              mne.{' '} */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef11} {/* Ján 13:17-18 */}
              </span>
              {content.sText6}
            </p>
            <p className='mt-2'>
              {content.sText7}{' '}
              {/* Ten, koho Ježiš Kristus je Pánom, si pripomína Jeho smrť a umýva
            nohy spolubratom, je blahoslavený. Avšak nie ten, koho Ježiš Kristus
            nie je Pánom, je vo vzbure ako bol aj Judáš alebo ten, kto
            neprichádza k večeri Pánovej s čistým srdcom alebo vníma večeru
            Pánovu ako obyčajnú večeru: */}
              <span className='italic'>
                {content.sVerse12}
                {/* Preto ktokoľvek by nehodne jedol chlieb alebo pil z kalicha
              Pánovho, previní sa proti telu a krvi Pánovej. Skúmaj sa teda,
              človeče, a tak jedz z chleba a pi z kalicha; lebo kto nehodne je a
              pije, odsúdenie si je a pije, lebo nerozoznáva telo Pánovo.{' '} */}
              </span>
              <span id='verse-ref'>
                {' '}
                {content.sRef12}
                {/* Prvý Korintským 11:27-29 */}
              </span>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Vecera
