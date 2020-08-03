import React from 'react'

import './Header.css'
import { name, occupation } from '../../data/resume.json'

export default () =>
    <header className="header">
        <h1>{name}</h1>
        <h2>{occupation}</h2>
    </header>
