import React, { useState } from 'react';
import { BsFillFlagFill } from 'react-icons/bs';
import { FiFlag } from 'react-icons/fi';



const TranslateBtn = () => {
  const [language, setLanguage] = useState('pt-BR');

  const handleLanguageChange = () => {
    const newLanguage = language === 'pt-BR' ? 'en' : 'pt-BR';
    setLanguage(newLanguage);
  };

  return (
    <div className="translate-btn">
      {language === 'pt-BR' ? (
        <BsFillFlagFill
          onClick={handleLanguageChange}
          className={`flag-icon ${language === 'pt-BR' ? 'active' : ''}`}
        />
      ) : (
        <FiFlag
          onClick={handleLanguageChange}
          className={`flag-icon ${language === 'en' ? 'active' : ''}`}
        />
      )}
    </div>
  );
};

export default TranslateBtn;
