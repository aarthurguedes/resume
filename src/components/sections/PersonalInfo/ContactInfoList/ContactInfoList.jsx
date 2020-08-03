import React from 'react'

import ContactInfo from './ContactInfo/ContactInfo'

const getMBClass = (currentIndex, listLength) => currentIndex !== listLength - 1 ? 'contact-info--mb' : ''

export default ({ labels, links, icons }) =>
    labels.map((label, index) =>
        <ContactInfo key={label} 
                     label={label} 
                     link={links[index]} 
                     icon={icons[index]}
                     className={getMBClass(index, labels.length)} />
    )
