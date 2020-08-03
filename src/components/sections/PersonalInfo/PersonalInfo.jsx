import React from 'react'

import Section from '../../common/Section/Section'
import ContactInfoList from './ContactInfoList/ContactInfoList'

import { personalInfo } from '../../../data/resume.json'
import { icons } from '../../../icons/icons'

const { personalInfo: { section, contact } } = icons
const { labels, links } = personalInfo

export default () =>
    <Section title="personal info" icon={section}>
        <ContactInfoList labels={labels} 
                         links={links} 
                         icons={contact} />
    </Section>
