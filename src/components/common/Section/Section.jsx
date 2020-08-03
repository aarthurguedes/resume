import React from 'react'

import './Section.css'

export default ({ icon, iconSize, title, className, children }) => {
    const Icon = icon
    const firstNameSection = title.split(' ')[0]
    const contentClassName = className ? `${firstNameSection}__content ${className}` : `${firstNameSection}__content`

    return (
        <section className="section">
            <div className="section__title">
                <Icon size={iconSize || 28} />
                <span>{title}</span>
            </div>
            <div className={contentClassName}>
                {children}
            </div>
        </section>
    )
}
