import React from 'react';
import PropTypes from 'prop-types';

function ContactInfo({ title, info }) {
  return (
    <div className="border p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:bg-zinc-100 hover:shadow-xl hover:text-zinc-700 hover:border-zinc-400">
      <h4 className="text-lg font-bold uppercase mb-2">{title}</h4>
      <p className="text-md">{info}</p>
    </div>
  );
}

ContactInfo.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
};

export default ContactInfo;