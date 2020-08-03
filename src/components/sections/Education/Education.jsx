import React from 'react'

import './Education.css'
import Section from '../../common/Section/Section'
import Link from '../../common/Link/Link'

import { education } from '../../../data/resume.json'
import { icons } from '../../../icons/icons'

const { MdSchool } = icons
const { course, institution, institutionPage, duration } = education

export default () =>
    <Section className="flex-column" title="education" icon={MdSchool}>
        <span className="span--big">{course}</span>
        <Link href={institutionPage}
              className="link">
            {institution}
        </Link>
        <span className="span--light">{duration}</span>
    </Section>
