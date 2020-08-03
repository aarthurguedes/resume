import React from 'react'

export default ({ href, className, children }) => {
    return (
        <a href={href} 
           target="_blank" 
           rel="noopener noreferrer"
           className={className}>
            {children}
        </a>
    )
}
