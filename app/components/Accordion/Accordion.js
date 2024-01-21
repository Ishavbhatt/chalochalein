'use client';
import React, { useState } from 'react';
import styles from './Accordion.module.scss';

const Accordion = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        console.log('dfghj')
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
            <div className={styles.accordionHeader} onClick={toggleAccordion}>
                <h3 className={styles.accordionQuestion}>{1 + index} {question}</h3>
                <div className={`${styles.accordionIcon} ${isOpen ? styles.open : ''}`}>
                    {isOpen ? '-' : '+'}
                </div>
            </div>
            <div className={styles.accordionContent} style={{ height: isOpen ? 'auto' : '0px' }}>
                <p className={styles.contentInner}>{answer}</p>
            </div>
        </div>
    );
};

export default Accordion;
