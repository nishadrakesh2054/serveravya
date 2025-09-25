'use client'
import React, { useState } from 'react'
import { Link } from '@payloadcms/ui'
import '../style/custom.css'

const Nav: React.FC = () => {
  const [openGroups, setOpenGroups] = useState<{ [key: string]: boolean }>({
    communication: true,
    content: true,
    teams: true,
    matches: true,
  })

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  return (
    <nav className="side-nav">
      {/* Nav Groups */}
      <div className="nav-content">
        {/* COMMUNICATION */}
        <div className="nav-group">
          <div className="nav-group-header" onClick={() => toggleGroup('communication')}>
            <span>Communication</span>
            <span className={`nav-arrow ${openGroups.communication ? 'open' : ''}`}>▼</span>
          </div>
          {openGroups.communication && (
            <ul className="nav-links">
              <li>
                <Link href="/admin/collections/membership">
                  <span className="nav-icon">💌</span>
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/admin/collections/contacts">
                  <span className="nav-icon">📞</span>
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="/admin/collections/cta">
                  <span className="nav-icon">📧</span>
                  CTA
                </Link>
              </li>
              <li>
                <Link href="/admin/collections/faqs">
                  <span className="nav-icon">❓</span>
                  F.A.Q
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* CONTENT */}
        <div className="nav-group">
          <div className="nav-group-header" onClick={() => toggleGroup('content')}>
            <span>Content</span>
            <span className={`nav-arrow ${openGroups.content ? 'open' : ''}`}>▼</span>
          </div>
          {openGroups.content && (
            <ul className="nav-links">
              <li>
                <Link href="/admin/collections/blogs">
                  <span className="nav-icon">📝</span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/admin/collections/services">
                  <span className="nav-icon">🛠️</span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/admin/collections/banners">
                  <span className="nav-icon">🖼️</span>
                  Banner
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* personnel */}
        <div className="nav-group">
          <div className="nav-group-header" onClick={() => toggleGroup('teams')}>
            <span>Personnel</span>
            <span className={`nav-arrow ${openGroups.teams ? 'open' : ''}`}>▼</span>
          </div>
          {openGroups.teams && (
            <ul className="nav-links">
              <li>
                <Link href="/admin/collections/feedbacks">
                  <span className="nav-icon">💬</span>
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/admin/collections/trainers">
                  <span className="nav-icon">🏋️‍♂️</span>
                  Trainers
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* MEDIA */}
        <div className="nav-group">
          <div className="nav-group-header">
            <span>Media</span>
          </div>
          <ul className="nav-links">
            <li>
              <Link href="/admin/collections/media">
                <span className="nav-icon">🖼️</span>
                Media
              </Link>
            </li>
            <li>
              <Link href="/admin/collections/notice">
                <span className="nav-icon">📢</span>
                Notice
              </Link>
            </li>
            <li>
              <Link href="/admin/collections/photos">
                <span className="nav-icon">📸</span>
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* AUTHENTICATION */}
        <div className="nav-group">
          <div className="nav-group-header">
            <span>Authentication</span>
          </div>
          <ul className="nav-links">
            <li>
              <Link href="/admin/collections/users">
                <span className="nav-icon">👤</span>
                Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
