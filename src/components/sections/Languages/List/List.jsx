import React, { Fragment } from 'react'

export default ({ languages }) =>
    languages.map(lang =>
        <Fragment key={lang.language}>
            <span className="span--big">{lang.language}: </span>
            <span>{lang.level}</span>
            <br/>
        </Fragment>
    )
