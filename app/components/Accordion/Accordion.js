'use client'
import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </div>
        <div className="accordion-question">{question}</div>
      </div>
      <div className="accordion-content" style={{ height: isOpen ? 'auto' : '0px' }}>
        <div className="content-inner">{answer}</div>
      </div>
    </div>
  );
};
export default Accordion;