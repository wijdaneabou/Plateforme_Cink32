import React, { useState } from 'react';
import FAQItem from './FAQItem'; // Assure-toi que le chemin est correct
import '../styles/FAQPage.css'; // Ton fichier CSS pour ce composant

const faqData = [
  {
    question: 'What is CINK?',
    answer: 'CINK is a leading digital innovation platform that offers educational courses, interactive workshops, and networking opportunities for individuals and professionals in the tech industry. We empower our members with the skills and knowledge needed to excel in the digital era.'
  },
  {
    question: 'How can I join?',
    answer: 'Joining CINK is easy! Simply visit our website and sign up for a membership. Once youre a member, youll have access to our courses, workshops, and community.'
  },
  {
    question: 'What courses are available?',
    answer: 'CINK offers a wide range of courses covering various aspects of digital technology, including programming, data analytics, artificial intelligence, and cybersecurity. Our courses are designed to cater to different skill levels, from beginners to advanced learners.'
  }
  // Ajoute plus de questions ici
];

function FAQPage() {
    return (
      <div className="faq-page">
        <h1>FAQs</h1>
        <h4>Find answers to commonly asked questions about CINK and our services.</h4>
        {faqData.map((faq, index) => {
          // Détermine la classe basée sur l'index
          let className = "faq-item";
          if (index === 0) {
            className += " first-item"; // Classe supplémentaire pour le premier
          } else if (index === faqData.length - 1) {
            className += " last-item"; // Classe supplémentaire pour le dernier
          }
  
          return (
            <FAQItem
              key={index}
              className={className} // Passe la classe calculée
              question={faq.question}
              answer={faq.answer}
            />
          );
        })}
      <div className="additional-help">
        <h2 style={{textAlign:"left"}}>Still have questions?</h2>
        <h5>Reach out to us for further assistance.</h5>
       <button className="contact-button">Contact</button>

      </div>
      </div>
    );
  }
  
      
 
  

export default FAQPage;
