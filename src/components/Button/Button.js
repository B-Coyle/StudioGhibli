import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button() {
  return (
    <section className="mainBtns"  >
      <button className="button">Films</button>
      <button className="button">Characters</button>
      <button className="button">Location</button>
    </section>
  );
}
