"use client"

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
    </div>
  );
};

export default TranslateBtn;
