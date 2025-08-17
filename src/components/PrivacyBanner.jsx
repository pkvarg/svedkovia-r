import React, { useState, useEffect } from 'react'

const PrivacyBanner = ({ content, onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const userPreference = localStorage.getItem('sitePrefs')
    if (!userPreference) {
      setIsVisible(true)
    } else if (userPreference === 'analytics_ok') {
      onAccept()
    }
  }, [onAccept])

  const handleAccept = () => {
    localStorage.setItem('sitePrefs', 'analytics_ok')
    setIsVisible(false)
    onAccept()
  }

  const handleDecline = () => {
    localStorage.setItem('sitePrefs', 'analytics_no')
    setIsVisible(false)
    onDecline()
  }

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        background: '#492700',
        color: '#ffffff',
        padding: '20px',
        fontSize: '18px',
        textAlign: 'justify',
        zIndex: 9999,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ margin: '0 0 15px 0' }}>
          {content.cookiesText}
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
          <button
            onClick={handleDecline}
            style={{
              background: '#666',
              color: '#ffffff',
              fontSize: '20px',
              padding: '2.5px 15px',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            {content.cookiesDeclineButton}
          </button>
          <button
            onClick={handleAccept}
            style={{
              background: '#dddcd1',
              color: '#492700',
              fontSize: '20px',
              padding: '2.5px 15px',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer'
            }}
          >
            {content.cookiesButton}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PrivacyBanner