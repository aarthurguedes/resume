import React from 'react'

import Section from '../../common/Section/Section'
import LanguagesList from './List/List'

import { icons } from '../../../icons/icons'
import { languages } from '../../../data/resume.json'

const { MdLanguage } = icons

export default () =>
    <Section title="languages" icon={MdLanguage}>
        <LanguagesList languages={languages} />
    </Section>
