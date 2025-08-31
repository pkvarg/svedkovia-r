import React, { createContext, useContext, useState, useEffect } from 'react'
const Context = createContext()

export const StateContext = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const LocalStorageLanguage = window.localStorage.getItem('language')
    return LocalStorageLanguage ? JSON.parse(LocalStorageLanguage) : 'slovak'
  })

  useEffect(() => {
    window.localStorage.setItem('language', JSON.stringify(language))
  }, [language])

  return (
    <Context.Provider
      value={{ language, setLanguage }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
