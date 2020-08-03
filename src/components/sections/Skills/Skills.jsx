import React from 'react'

import { skills } from '../../../data/resume.json'

import Section from '../../common/Section/Section'

import { FaCode } from 'react-icons/fa'

export default () =>
    <Section title="skills" icon={FaCode}>
        <p>{skills}</p>
    </Section>
