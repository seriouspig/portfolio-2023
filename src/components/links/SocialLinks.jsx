import React from 'react'
import { socialLinks } from '../data'
import SocialLink from './SocialLink'

const SocialLinks = () => {
  return (
    <ul className="nav-icons">
        {socialLinks.map((icon) => {
            return (
                <SocialLink key={icon.id} href={icon.href} icon={icon.icon} itemClass="nav-icon"/>
            )
        })}
    </ul>
  )
}

export default SocialLinks