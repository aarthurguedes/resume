import React from 'react'

import Section from '../../common/Section/Section'
import ExperienceList from './List/List'

import { experience } from '../../../data/resume.json'
import { icons } from '../../../icons/icons'

const { MdWork } = icons

export default () => 
    <Section className="flex-column" title="experience" icon={MdWork}>
        <ExperienceList experiences={experience} />
    </Section>
