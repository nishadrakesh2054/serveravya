'use client'
import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
// import Image from 'next/image'

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      style={{
        background: 'linear-gradient(to right, #174943,rgb(4, 170, 151))',

        display: 'flex',
        alignItems: 'center',
        padding: '10px 100px',
        color: 'white',
        fontWeight: '700',
        gap: '10px',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      {/* Left side: logo + title */}

      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Link href="/admin">
          <img
            src="/avyaclub.png"
            alt="NSFL Logo"
            width={100}
            height={50}
            style={{ height: '50px', width: 'auto' }}
          />
        </Link>
        <span
          style={{
            color: '#fffff',
            letterSpacing: '0.12em',
            fontWeight: '900',
            position: 'relative',
            paddingLeft: '5px',
            textDecoration: 'none',
            fontSize: '1.25rem',
          }}
        >
          AVYA CLUB <br />
          <small style={{ fontSize: '0.9rem', fontWeight: 400 }}>
            Under the management of Vyayam Fitness Pvt. Ltd.
          </small>{' '}
        </span>{' '}
      </div>

      {/* Right side: user icon + dropdown */}
      <div
        ref={dropdownRef}
        style={{ position: 'relative', cursor: 'pointer' }}
        onClick={() => setDropdownOpen((open) => !open)}
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            userSelect: 'none',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'white' }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <span style={{ color: 'white', fontWeight: 600 }}>Account ▼</span>
        </div>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 'calc(100% + 8px)',
              backgroundColor: 'white',
              color: '#333',
              boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
              borderRadius: '6px',
              minWidth: '150px',
              fontWeight: '500',
              zIndex: 1000,
            }}
          >
            <Link
              href="/admin/account"
              style={{
                display: 'block',
                padding: '10px 16px',
                color: ' #174943',
                textDecoration: 'none',
                borderBottom: '1px solid #eee',
              }}
              onClick={() => setDropdownOpen(false)}
            >
              Account Settings
            </Link>
            <Link
              href="/admin/logout"
              style={{
                display: 'block',
                padding: '10px 16px',
                color: ' #174943',
                textDecoration: 'none',
              }}
              onClick={() => setDropdownOpen(false)}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
