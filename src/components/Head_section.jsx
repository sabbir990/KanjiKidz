import React from 'react'

export default function Head_section({heading, subheading}) {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 text-center">{heading}</h1>
            <p className="text-sm text-gray-500 text-center mb-6">
                {subheading}
            </p>
        </div>
    )
}
