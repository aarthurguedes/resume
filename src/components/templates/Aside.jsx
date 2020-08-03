import React from 'react'

import './Aside.css'
import PersonalInfo from '../sections/PersonalInfo/PersonalInfo'
import Education from '../sections/Education/Education'
import Languages from '../sections/Languages/Languages'

export default () =>
    <aside className="aside flex-column">
        <PersonalInfo />
        <Education />
        <Languages />
    </aside>
