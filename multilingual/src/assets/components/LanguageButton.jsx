import React from "react"


const LanguageButton = ({ languages, onLanguageChange }) => {
  return (
    <div>
      {languages.map((language) => (
        <button className="langButt" key={language.name} onClick={() => onLanguageChange(language.greeting)}>
          {language.name}
        </button>
      ))}
    </div>
  );
};




export default LanguageButton