import React from 'react'

import './ContactInfo.css'
import Link from '../../../../common/Link/Link'

export default ({ icon: Icon, iconSize, className, link, label }) =>
    <Link className={`contact-info link ${className}`}
            href={link}>
        <Icon size={iconSize || 20} />
        <span>{label}</span>
    </Link>
