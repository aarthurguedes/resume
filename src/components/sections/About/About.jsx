import React from 'react'

import './About.css'
import Section from '../../common/Section/Section'

import { icons } from '../../../icons/icons'
import { about } from '../../../data/resume.json'

const { MdPerson } = icons

export default () =>
    <Section title="about" icon={MdPerson}>
        <p>{about}</p>
    </Section>
