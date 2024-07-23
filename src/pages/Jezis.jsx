import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Translation from '../JesusGod.json'
import { useStateContext } from '../context/StateContext'

const Jezis = () => {
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
      <div className='bg-[#6dc3dd] text-[113945]'>
        <div className='Boh h-[1000px] lg:h-[1100px] -mt-[25%]  lg:-mt-[8%]'></div>
        <h1 className='text-center text-[32.5px] leading-[40px] -mt-[700px]  lg:-mt-[500px] xl:-mt-[700px]  2xl:-mt-[570px] pb-8'>
          {content.jTitle}
          {/* Je Ježiš Boh? */}
        </h1>
        <div className='py-8 px-4 lg:px-[5%]'>
          <p>
            {content.jText1}
            {/* Byť Bohom znamená mať jedinečné božské vlastnosti, ktoré nemá žiadna
            stvorená bytosť. Božie Slovo vymedzuje rôzne oblasti, ktoré
            prislúchajú len Bohu a ktoré má človek zakázané prisudzovať
            ktorejkoľvek stvorenej bytosti. */}
          </p>
          <h3 className='text-center my-8'>
            {content.jSub2}
            {/* Len Boh môže stvoriť{' '} */}
          </h3>
          <p>
            <span className='italic'>
              {content.jVerse1}
              {/* Na počiatku stvoril Boh nebo a zem. */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef1} {/* Genesis 1:1 */}
            </span>
          </p>

          <p className='mt-2'>
            <span className='italic'>
              {' '}
              {content.jVerse2}
              {/* Ním (Slovom, ktoré sa stalo telom) povstalo všetko a bez Neho
              nepovstalo nič, čo povstalo.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef2} {/* Ján 1:3 */}
            </span>
            <span className='italic'>
              {' '}
              {content.jVerse3}
              {/* Bolo vo svete a svet Ním povstal, ale svet Ho nepoznal. Do svojho
              vlastného prišiel, a Jeho vlastní Ho neprijali.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef3} {/* Ján 1:10-11 */}
            </span>
            {content.jText2}
            {/* Svet Ježišom povstal, bol Ním stvorený. */}
          </p>

          <h3 className='text-center my-8'>
            {content.jSub4}
            {/* Len Boha máme uctievať */}
          </h3>

          <p>
            <span className='italic'>
              {' '}
              {content.jVersex5}
              {/* Lebo nesmieš sa klaňať inému bohu, pretože Hospodin, ktorého meno
              je Žiarlivý, je naozaj žiarlivý Boh.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRefx5} {/* Exodus 34:14  */}
            </span>
          </p>

          <p className='mt-2'>
            <span className='italic'>
              {' '}
              {content.jVersexx5}
              {/* A Otec ani nesúdi nikoho, ale celý súd odovzdal Synovi, aby všetci
              ctili Syna tak, ako ctia Otca. Kto nectí Syna, nectí ani Otca,
              ktorý Ho poslal. */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRefxx5} {/* Ján 5:22-23 */}
            </span>
            {content.jText5}
            {/* Máme vzdať česť a slávu Ježišovi, inak si nectíme Boha. */}
          </p>

          <h3 className='text-center my-8'>
            {content.jSub5}
            {/* Len Bohu sa má klaňať Jeho stvorenie */}
          </h3>
          <p>
            <span className='italic'>
              {' '}
              {content.jVerse5}
              {/* Keď som to počul a videl, padol som k nohám anjelovi, ktorý mi to
              ukázal, a klaňal som sa mu. On mi však povedal: Pozri, nie tak!
              Som spoluslužobníkom tvojím, tvojich bratov, prorokov a tých,
              ktorí zachovávajú slová tejto knihy. Bohu sa klaňaj!{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef5} {/* Zjavenie Jána 22:8-9  */}
            </span>
          </p>

          <p className='mt-2'>
            <span className='italic'>
              {' '}
              {content.jVerse6}
              {/* A keď zase uvedie Prvorodeného na svet, hovorí: Nech padnú pred
              Ním na kolená všetci anjeli Boží! */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef6} {/* Židom 1:6 */}
            </span>
            {content.jText6}
            {/* Božie stvorenie sa má klaňať Ježišovi. */}
          </p>

          <h3 className='text-center my-8'>
            {content.jSub6}
            {/* Len Boh môže vládnuť nad všetkým */}
          </h3>

          <p>
            <span className='italic'>
              {' '}
              {content.jVerse7}
              {/* Najvyšší vládne nad kráľovstvom ľudí a dáva ho, komu chce. */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef7} {/* Daniel 4:29 */}
            </span>
          </p>

          <p className='mt-2'>
            <span className='italic'>
              {' '}
              {content.jVerse8}
              {/* Ježiš pristúpil a povedal im: „Daná mi je všetka moc na nebi aj na
              zemi. */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef8} {/* Matúš 28:18 */}
            </span>
            {content.jText7}
            {/* Boh zveril Ježišovi všetku vládu.{' '} */}
          </p>

          <h3 className='text-center my-8'>
            {content.jSub7}
            {/* Ježiš nie je anjel */}
          </h3>

          <p>
            <span className='italic'>
              {' '}
              {content.jVerse9}
              {/* O toľko je dôstojnejší ako anjeli, o koľko ich prevyšuje menom,
              ktoré zdedil. Veď kedy ktorému anjelovi povedal Boh: Syn môj si
              Ty, ja som ťa splodil dnes? A inde: Ja Mu budem otcom a On mi bude
              synom.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef9} {/* Židom 1:4-5  */}
            </span>
          </p>

          <p className='mt-2'>
            <span className='italic'>
              {' '}
              {content.jVerse10}
              {/* Lebo nie anjelom podriadil Boh budúci svet, o ktorom hovoríme.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef10} {/* Židom 2:5 */}
            </span>
          </p>

          <h3 className='text-center my-8'>
            {content.jSub8}
            {/* Prorok Izaiáš ho predpovedá ako Boha */}
          </h3>

          <p>
            <span className='italic'>
              {' '}
              {content.jVerse11}
              {/* Lebo dieťa sa nám narodilo, syn nám je daný; na jeho pleciach
              spočinie kniežatstvo, jeho meno bude: Predivný radca, Mocný Boh,
              Otec večnosti, Knieža pokoja.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef11} {/* Izaiáš 9:5  */}
            </span>
          </p>

          <h3 className='text-center my-8'>
            {content.jSub9}
            {/* Slovo, ktoré sa stalo telom je Boh */}
          </h3>

          <p>
            <span className='italic'>
              {' '}
              {content.jVerse12}
              {/* Na počiatku bolo Slovo a Slovo bolo u Boha a Boh bol to Slovo. */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef12} {/* Ján 1:1 */}
            </span>
            {content.jText8}
            {/* Grécky originál označuje Boha slovom theón a theós: */}
            <span className='italic font-thin'>
              {' '}
              {/* “Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν (theón), καὶ
              θεὸς (theós) ἦν ὁ λόγος.” */}
            </span>
          </p>

          <p className='mt-2'>
            <span className='italic'>
              {' '}
              {content.jVerse13}
              {/* A to Slovo stalo sa telom, prebývalo medzi nami, a my sme hľadeli
              na Jeho slávu ako na slávu jednorodeného od Otca, (bolo) plné
              milosti a pravdy.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef13} {/* Ján 1:14  */}
            </span>
            {content.jText9}
            {/* Ježiš prišiel v tele na svet, takže On je tým Slovom. */}
          </p>

          <h3 className='text-center my-8'>
            {content.jSub10}
            {/* Ježiš vyznáva Seba za Boha */}
          </h3>

          <p>
            <span className='italic'>
              {' '}
              {content.jVerse14}
              {/* Boh riekol Mojžišovi: SOM, KTORÝ SOM. Riekol ďalej: Tak povedz
              Izraelcom: Poslal ma k vám SOM.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef14} {/* Exodus 3:14  */}
            </span>
          </p>

          <p className='mt-2'>
            <span className='italic'>
              {' '}
              {content.jVerse15}
              {/* Hovorím vám to už teraz, skôr, ako sa to stane, aby ste uverili,
              keď sa to stane, že ja SOM.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef15} {/* Ján 13:19  */}
            </span>
            <span className='italic'>
              {' '}
              {content.jVerse16}
              {/* Ježiš im riekol: Veru, veru, hovorím vám: Skôr, ako bol Abrahám,
              ja SOM. Ján 8:58 Preto som vám povedal, že umriete v hriechoch,
              lebo ak neuveríte, že ja SOM, umriete v hriechoch.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef16} {/* Ján 8:24 */}
            </span>
            <span className='italic'>
              {' '}
              {content.jVerse17}
              {/*  Preto som vám povedal, že umriete v hriechoch,
              lebo ak neuveríte, že ja SOM, umriete v hriechoch.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef17} {/* Ján 8:24 */}
            </span>
          </p>

          <h3 className='text-center my-8'>
            {content.jSub11}
            {/* Učeník dosvedčuje, že Ježiš je Boh */}
          </h3>

          <p>
            <span className='italic'>
              {content.jVerse18}
              {/* A prišiel Ježiš, hoci dvere boli zatvorené, a postaviac sa do
              prostriedku, riekol im: Pokoj vám! Potom hovorí Tomášovi: Daj sem
              prst a pozri sa na moje ruky; daj sem ruku a vlož ju do môjho boku
              a nebuď neveriaci, ale veriaci. Tomáš mu povedal: Pán môj a Boh
              môj!{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef18} {/* Ján 20:26-28 */}
            </span>
          </p>
          <h3 className='text-center my-8'>
            {content.jSub12}
            {/* Pavol apoštol označuje Ježiša za Boha */}
          </h3>

          <p>
            <span className='italic'>
              {content.jVerse19}
              {/* Ich sú otcovia a z nich je Kristus podľa tela, Boh nad všetkým,
              požehnaný naveky.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef19} {/* Rimanom 9:5 */}
            </span>
            {content.jText10}
            {/* Rovnako aj grécky originál nerozdeľuje túto vetu na dve, ale
            pokračuje v nej čiarkou pred slovom Boh (theós) bez prerušenia: */}
            <span className='italic font-thin'>
              {' '}
              {/* “ὧν οἱ πατέρες, καὶ ἐξ ὧν ὁ χριστὸς τὸ κατὰ σάρκα, ὁ ὢν ἐπὶ
              πάντων, θεὸς (theós) εὐλογητὸς εἰς τοὺς αἰῶνας· ἀμήν.” */}
            </span>
          </p>

          <h3 className='text-center my-8'>
            {content.jSub13}
            {/* Sám Boh oslovuje Ježiša ako Boha */}
          </h3>

          <p>
            <span className='italic'>
              {content.jVerse20}
              {/* Ale k Synovi (Boh hovorí): Tvoj trón, ó Bože, je naveky vekov a:
              žezlo spravodlivosti je žezlom Jeho kráľovstva; miloval si
              spravodlivosť a nenávidel si neprávosť; preto pomazal Ťa, ó Bože,
              Tvoj Boh olejom veselia nad Tvojich druhov.{' '} */}
            </span>
            <span id='verse-ref'>
              {' '}
              {content.jRef20} {/* Židom 1:8-9 */}
            </span>
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Jezis
