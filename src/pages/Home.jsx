import React, { useState, useEffect } from 'react'
import HeaderHome from '../components/HeaderHome'
import PrivacyBanner from '../components/PrivacyBanner'
import axios from 'axios'
import Translation from '../Home.json'
import { useStateContext } from '../context/StateContext'
import LanguageBar from '../components/LanguageBar'
import Footer from '../components/Footer'

const Home = () => {
  const { language, setLanguage } = useStateContext()
  const [content, setContent] = useState({})

  const [cookieAccept, setCookieAccept] = useState(false)

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else {
      setContent(Translation.czech)
    }
  }, [language])

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const apiUrl = 'https://hono-api.pictusweb.com/api/visitors/sv/increase'
  //const apiUrl = 'http://localhost:3013/api/visitors/sv/increase'

  const increaseVisitors = async () => {
    try {
      const { data } = await axios.put(apiUrl, {}, config)
    } catch (error) {
      console.error('Error tracking declined visitors:', error)
    }
  }

  const loadUmamiScript = () => {
    if (!document.querySelector('script[data-website-id="8cf00e2b-81ce-48f5-93c3-82753097abaf"]')) {
      const script = document.createElement('script')
      script.defer = true
      script.src = 'https://umami-p00gs00gwcwo00s4k4c4kgg8.pictusweb.com/script.js'
      script.setAttribute('data-website-id', '8cf00e2b-81ce-48f5-93c3-82753097abaf')
      document.head.appendChild(script)
    }
  }

  const handleCookieAccept = () => {
    setCookieAccept(true)
    loadUmamiScript()
    increaseVisitors()
  }

  const handleCookieDecline = () => {
    setCookieAccept(false)
  }

  // const increaseVisitorsCount = async () => {
  //   const { data } = await axios.put(
  //     `https://api.pictusweb.com/api/visitors/svedkovia/increase`,
  //     // `http://localhost:2000/api/visitors/svedkovia/increase`,
  //     config
  //   )
  // }

  return (
    <>
      <header className="hero-bg h-[100vh]">
        <div className="flex lg:flex absolute top-2 right-8 lg:right-20">
          <LanguageBar language={language} setLanguage={setLanguage} />
        </div>{' '}
        {/* <HeaderHome language={language} setLanguage={setLanguage} /> */}
        <h1 className="text-[32.5px] lg:text-[45px] leading-[40px] lg:leading-[50px] text-brown3 text-center pt-[70%] lg:pt-[5%] lg:mx-[5%]">
          {content.heroTitle}
          {/* Svedok je ten, kto mal osobnú skúsenosť a o nej vypovedá */}
        </h1>
        <h2 className="text-center text-[25px] lg:text-[35px] mt-4 lg:mt-0">
          {content.heroSub}
          {/* Nespoliehaj sa na výklady organizácie, poď do Božieho Slova! */}
        </h2>
      </header>
      <main className=" bg-white px-4  lg:px-[5%] pb-8 lg:pb-16">
        <h3 className="text-brown3 text-center p-8">
          {content.homeTitle1}
          {/* Kto je v Božom Slove kľúčový pre nás pohanov? */}
        </h3>
        <p>
          {content.homeText1}
          {/* Ježiš Kristus umožnil spasenie nás pohanov skrze Jeho obeť za naše
          hriechy a daroval spásu tým, ktorí v Neho veria. */}
          <span className="italic">
            {' '}
            {content.homeVerse1}{' '}
            {/* A nieto spasenia v nikom inom, lebo nebolo dané pre ľudí iné meno
            pod nebom (než meno Ježiš Kristus), v ktorom by sme mali dôjsť
            spasenia.{' '} */}
          </span>
          <span id="verse-ref">
            {content.homeRef1}
            {/* Skutky apoštolov 4:12 */}
          </span>
          <span className="italic">
            {' '}
            {content.homeVerse2}
            {/* Lebo jedinou obeťou navždy zdokonalil tých, čo sa dajú posvätiť. */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef2} {/* Židom 10:14 */}
          </span>
        </p>
        <p className="mt-2">
          {content.homeText2}
          {/* Takže všetko čo robil a čo hovoril je pre nás smerodajné, pretože bez
          Neho by Nová zmluva neexistovala a Starý Zákon by tak ostal platný len
          pre Židov. A tí by boli až dodnes odkázaní na systém obetí, ktorý ale
          nikdy hriech neodstránil, len ho prikryl. */}
          <span className="italic">
            {' '}
            {content.homeVerse3}{' '}
            {/* A potom, každý kňaz tam stojí každý deň, koná bohoslužbu, znovu a
            znovu prináša tie isté obete, ktoré nikdy nemôžu zahladiť hriechy.{' '} */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef3} {/* Židom 10:11 */}
          </span>
        </p>
        <h3 className="text-brown3 text-center p-8">
          {content.homeTitle2}
          {/* Naše poslanie */}
        </h3>
        <p>
          {content.homeText3}
          {/* Aký príkaz Ježiš zanechal krátko pred Jeho nanebovstúpením? */}
          <span className="italic">
            {' '}
            {content.homeVerse4}{' '}
            {/* Budete mi svedkami aj v Jeruzaleme, aj po celom Judsku, aj v Samárii
            a až do posledných končín zeme.{' '} */}
          </span>
          <span id="verse-ref">
            {content.homeRef4} {/* Skutky apoštolov 1:8 */}
          </span>
        </p>
        <p className="mt-2">
          {content.homeText4}
          {/* Sám Boh prikázal poslúchať Ježiša. */}
          <span className="italic">
            {' '}
            {content.homeVerse5}
            {/* Toto je môj milovaný Syn, v ktorom sa mi zaľúbilo; Jeho poslúchajte.{' '} */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef5} {/* Matthew 17:5 */}
          </span>
        </p>
        <p className="mt-2">
          {content.homeText5}
          {/* Ktorí Mu mali byť svedkami? Bol tento príkaz len pre tam prítomných
          jedenástich apoštolov? Pavol apoštol evanjelizoval pohanom, hoci v
          čase nanebovstúpenia Ježiša Krista ešte nebol Jeho nasledovník. Tak
          podobne Apollo, Barnabáš, Filemón a iní. Nevideli Ho, no
          evanjelizovali a tak poslúchali jeho príkaz. Ak by príkaz platil len
          pre tam prítomných apoštolov, potom storočia po nich by nebol nik, kto
          by mal šíriť zvesť o Ježišovi Kristovi až po dnes. */}
        </p>
        <p className="mt-2">
          {content.homeText6}
          {/* Kde všade povedal Ježiš, že Mu budú svedkami? Až do posledných končín
          zeme. Pavol apoštol a ďalší evanjelizovali v krajinách okolo
          Stredozemného mora avšak to ani zďaleka nepokrylo končiny zeme. Ako to
          myslel geograficky? */}
          <span className="italic">
            {' '}
            {content.homeVerse6}
            {/* Toto evanjelium o kráľovstve bude sa zvestovať po celom svete na
            svedectvo všetkým národom, a potom príde koniec. */}{' '}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef6} {/* Matúš 24:14 */}
          </span>
          {content.homeText7}
          {/* Keďže celý svet nepokryli ani tam prítomní apoštoli, ani Pavol
          apoštol, ani ostatní evanjelisti Novej Zmluvy, tento príkaz sa týka
          všetkých, ktorí v Neho veria, keďže koniec ešte neprišiel. */}
        </p>
        <p className="mt-2">
          {content.homeText8}
          {/* Čo to znamená byť svedkom? */}
          <span className="italic">
            {' '}
            {content.homeVerse7}
            {/* Čo vieme, hovoríme, a čo sme videli, svedčíme. */}{' '}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef7} {/* Ján 3:11 */}
          </span>
          {content.homeText9}
          {/* Svedok je ten, kto niečo videl alebo ten kto mal osobnú skúsenosť.
          Videli ho tam prítomní jedenásti apoštoli a aj Pavol apoštol ho počul
          na ceste do Damasku. My sme ale Ježiša fyzickým zrakom nevideli tak
          ako ani tisíce iných po minulé stáročia. */}
          <span className="italic">
            {' '}
            {content.homeVerse8}
            {/* A Ježiš mu riekol: Pretože si ma videl, uveril si; blahoslavení,
            ktorí nevideli, a predsa uverili. */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef8} {/* Ján 20:29 */}
          </span>
          {content.homeText10}
          {/* Môžeme Mu teda byť svedkami len skrze vieru. */}
        </p>
        <h3 className="text-brown3 text-center p-8">
          {content.homeTitle3}
          {/* Viera mení človeka zvnútra navonok */}
        </h3>
        <p>
          {content.homeText11}
          {/* Aké postavenie získavame vierou v Ježiša Krista? */}
          <span className="italic">
            {' '}
            {content.homeVerse9}
            {/* Lebo milosťou ste spasení skrze vieru. A to nie sami zo seba; je to
            dar Boží. */}{' '}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef9} {/* Efezským 2:8 */}
          </span>
          <span className="italic">
            {' '}
            {content.homeVerse10}
            {/* Ale tým, čo Ho prijali, dal moc stať sa deťmi Božími, tým, čo veria
            v Jeho meno. */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef10} {/* Ján 1:12 */}
          </span>
        </p>
        <p className="mt-2">
          {content.homeText12}
          {/* Čo to znamená veriť v Ježiša Krista? Je to veriť v to, v čo videli a
          verili apoštoli, teda v Jeho smrť, že zomrel za hriechy sveta, v Jeho
          vzkriesenie, v Jeho nanebovstúpenie. Zároveň “tým, čo Ho prijali”
          deklaruje skutočnosť, že Ho prijali za svojho Pána a Spasiteľa. Pán je
          ten, kto určuje pravidlá a príkazy a ten, kto Ho nasleduje, je ten,
          kto ich poslúcha. */}
        </p>
        <p className="mt-2">
          {content.homeText13}
          {/* Čo sa v nás udialo, keď sme boli spasení a stali sme sa deťmi Božími?
          Vstúpil do nás Boží Duch: */}
          <span className="italic">
            {' '}
            {content.homeVerse11}{' '}
            {/* A ja budem prosiť Otca, a dá vám iného Radcu, aby bol s vami až
            naveky - Ducha pravdy, ktorého svet nemôže prijať, pretože Ho
            nevidí, ani nepozná. Vy Ho poznáte, pretože pri vás ostáva a bude vo
            vás. Neopustím vás ako siroty, prídem k vám. Ešte máličko, a svet ma
            viac neuvidí, ale vy ma uvidíte; pretože ja žijem, aj vy budete žiť.
            V ten deň poznáte, že ja som vo svojom Otcovi, a vy ste vo mne, ako
            ja som vo vás.{' '} */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef11} {/* Ján 14:16-20 */}
          </span>
          <span className="italic">
            {' '}
            {content.homeVerse12}
            {/* A ak prebýva vo vás Duch Toho, ktorý Ježiša vzkriesil z mŕtvych, tak
            Ten, ktorý Krista Ježiša vzkriesil z mŕtvych, aj vaše smrteľné telá
            oživí svojím Duchom, prebývajúcim vo vás. */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef12} {/* Rimanom 8:11 */}
          </span>
        </p>
        <p className="mt-2">
          {content.homeText14}
          {/* Byť v Kristovi je chodiť podľa ducha: */}
          <span className="italic">
            {' '}
            {content.homeVerse13} {/* Veď Pán je Duch. */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef13} {/* Druhý Korinťanom 3:17 */}
          </span>
          <span className="italic">
            {' '}
            {content.homeVerse14}
            {/* Vy však nie ste v tele, ale v Duchu, ak Duch Boží prebýva vo vás.
            Ale ak niekto nemá Ducha Kristovho, nie je Jeho. */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef14}
            {/* Rimanom 8:9 */}
          </span>
        </p>
        <p className="mt-2">
          {content.homeText15}
          {/* Duch Ježiša Krista ťa oslobodil: */}
          <span className="italic">
            {' '}
            {content.homeVerse15}{' '}
            {/* Zákon životodarného Ducha v Kristovi Ježišovi oslobodil ťa totiž od
            zákona hriechu a smrti.{' '} */}
          </span>
          <span id="verse-ref">
            {content.homeRef15}
            {/* Rimanom 8:2 */}
          </span>
          <span className="italic">
            {' '}
            {content.homeVerse16}{' '}
            {/* Nieto teda teraz už odsúdenia tých, čo sú v Kristovi Ježišovi [a
            nechodia podľa tela, ale podľa ducha]. */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef16}
            {/* Rimanom 8:1 */}
          </span>
        </p>
        <p className="mt-2">
          {content.homeText16}
          {/* Tento Duch vedie človeka: */}
          <span className="italic">
            {' '}
            {content.homeVerse17}{' '}
            {/* Lebo všetci, ktorých Duch Boží vedie, sú synovia Boží.{' '} */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef17} {/* Rimanom 8:14 */}
          </span>
        </p>
        <p className="mt-2">
          {content.homeText17}
          {/* Sme chrám Ducha Svätého: */}
          <span className="italic">
            {' '}
            {content.homeVerse18}{' '}
            {/* Alebo či neviete, že vaše telo je chrámom Ducha Svätého, ktorý je vo
            vás, ktorého máte od Boha, a že nie ste sami svoji?{' '} */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef18} {/* Prvý Korinťanom 6:19 */}
          </span>
        </p>
        <h3 className="text-brown3 text-center p-8">
          {content.homeTitle4}
          {/* Slepá viera je na nič */}
        </h3>
        <p>
          {content.homeText18}
          {/* Ale, čo v tele umožňuje komunikovať s Božím Duchom? Fyzickými ušami
          počuje tak veriaci aj neveriaci vonkajšie zvuky. Aj dušou pociťuje
          veriaci aj neveriaci radosť, či smútok. Je to duch človeka, do ktorého
          môže vstúpiť Boží Duch a tak nadviazať spojenie s Ním: */}
          <span className="italic">
            {' '}
            {content.homeVerse19} {/* Pán s tvojím duchom! */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef19} {/* Druhý Timotejovi 4:22 */}
          </span>
        </p>
        <p className="mt-2">
          {content.homeText19}
          {/* Preto aj keď Ho nevidíme, môžeme Ho vnútorne vnímať skrze Jeho Ducha.
          Máme teda osobnú skúsenosť hoci sme Ho nikdy nevideli a tak môžeme byť
          svedkami Ježiša Krista, že skutočne žije. Lebo žije v nás a to sa nedá
          nepociťovať. */}
        </p>
        <p className="mt-2">
          {content.homeText20}
          {/* Aký by to malo zmysel veriť a zároveň byť bez osobného vzťahu s Bohom?
          Veriť v Boha, ktorý sedí tam hore v nebi a ja len verím, že On to tu
          všetko stvoril, no nemám s Ním žiadnu bližšiu interakciu by bolo pre
          človeka osobne na čo? Ak viera v Boha nemá pre mňa praktický zmysel,
          prečo by som mal počas života veriť? Potom by to bolo len mŕtve
          náboženstvo a strata času. Preto súčasťou viery v Ježiša Krista je
          skutočnosť, že On prebýva v živote veriaceho a zvnútra navonok Ho
          ovplyvňuje v jeho správaní a postojoch. */}
        </p>

        <h3 className="text-brown3 text-center p-8">
          {content.homeTitle5}
          {/* Božie Slovo ti udá správny smer */}
        </h3>
        <p className="mt-2">
          <span className="italic">
            {' '}
            {content.homeVerse20}{' '}
            {/* Saul, Saul, prečo ma prenasleduješ? A on povedal: Kto si, Pane?
            Odpovedal mu: Ja som Ježiš, ktorého ty prenasleduješ.{' '} */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef20} {/* Skutky apoštolov 9:4-5 */}
          </span>
          {content.homeText21}
          {/* Saul prenasledoval veriacich, no Pán Ježiš mu hovorí, že prenasleduje
          Jeho. Pán Ježiš sa tu priznával ku kresťanom. Čo ich spájalo? */}
          <span className="italic">
            {' '}
            {content.homeVerse21}
            {/* Pane, od mnohých som počul o tom mužovi, koľko zlého narobil Tvojim
            svätým v Jeruzaleme; aj tu má moc od veľkňazov, aby poviazal
            všetkých, ktorí vzývajú Tvoje meno.{' '} */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef21} {/* Skutky apoštolov 9:13-14 */}
          </span>
          {content.homeText22}
          {/* Spájalo ich to, že kresťania vzývali, teda uctievali meno Pána Ježiša.
          Kresťania už v prvom storočí za to platili životom. Uctievaš aj ty */}
          <span className="font-bold">
            {' '}
            {content.homeBold1}
            {/* Jeho Meno? */}
          </span>
        </p>
        <p className="mt-2">
          <span className="italic">
            {' '}
            {content.homeVerse22}
            {/* Riekol mu Pán: Len choď, lebo on mi je vyvolenou nádobou, aby niesol
            moje meno pred pohanov, aj pred kráľov a pred synov izraelských. */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef22} {/* Skutky apoštolov 9:15 */}
          </span>

          <span className="italic">
            {' '}
            {content.homeVerse23}
            {/* Odišiel teda Ananiáš a vojdúc do toho domu, položil ruky na neho a
            povedal mu: Brat Saul, Pán Ježiš, ktorý sa ti ukázal na ceste, po
            ktorej si prišiel, poslal ma, aby si zase videl a bol naplnený
            Duchom Svätým. */}
          </span>
          <span id="verse-ref">
            {' '}
            {content.homeRef23}
            {/* Skutky apoštolov 9:17 */}
          </span>
          <span className="font-bold">
            {' '}
            {content.homeBold2} {/* Nesieš aj ty pred pohanov Jeho Meno?{' '} */}
          </span>
        </p>
      </main>
      <Footer />

      <PrivacyBanner
        content={content}
        onAccept={handleCookieAccept}
        onDecline={handleCookieDecline}
      />
    </>
  )
}

export default Home
