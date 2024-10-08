import i18n from "i18next";
import { type DatePickerDomRef, DatePicker } from "@ui5/webcomponents-react";
import { useTranslation } from 'react-i18next';
import './App.css'

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage (lng);
  };

  return (
    <>
    <h2>{t('Welcome to React')}</h2>
      <div className="card">
        <DatePicker
          ref={(ref: DatePickerDomRef) => {
            console.log(ref);
          }} />


      </div>
      <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pl')}>Polish</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
    </div>
    </>
  )
}

export default App
