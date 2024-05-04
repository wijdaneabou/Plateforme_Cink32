import React, { useState } from 'react';
import '../styles/FAQItem.css'; // S'assurer que ce fichier contient les styles nécessaires

// Le composant FAQItem reçoit maintenant question, answer et un index pour des styles uniques
function FAQItem({ question, answer, className }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={className} onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <button className="toggle-button">{isOpen ? '−' : '+'}</button>
        {isOpen && <p className="faq-answer">{answer}</p>}
      </div>
    );
  }
  


export default FAQItem;
