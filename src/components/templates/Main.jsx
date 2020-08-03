import React from 'react'

import './Main.css'
import About from '../sections/About/About'
import Experience from '../sections/Experience/Experience'
import Skills from '../sections/Skills/Skills'

export default () => {
    return (
        <main className="main flex-column">
            <About />
            <Experience />
            <Skills />
        </main>
    )
}
