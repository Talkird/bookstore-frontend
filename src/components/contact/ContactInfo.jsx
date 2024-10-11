import React from 'react'
import PropTypes from 'prop-types'

function ContactInfo({ title, info }) {
  return (
    <div className="border p-4 rounded-md">
            <h4 className="text-md font-bold uppercase">{title}</h4>
            <p className="text-lg">{info}</p>
          </div>
  )
}
ContactInfo.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
    }

    
export default ContactInfo