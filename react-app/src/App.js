import React, { useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch, useParams } from 'react-router-dom'
import './App.css'
import Resume from './pages/resume'
import i18n from './i18n'

const languageByRoute = {
  ar: 'ar',
  br: 'pt_BR',
  de: 'de',
  en: 'en',
  es: 'es',
  fr: 'fr',
  hi: 'hi',
  ja: 'ja',
  ru: 'ru',
  zh: 'zh'
}

function ResumeRoute() {
  const { lang } = useParams()

  useEffect(() => {
    const targetLanguage = languageByRoute[lang] || 'pt_BR'
    i18n.changeLanguage(targetLanguage)
  }, [lang])

  return <Resume />
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:lang(br|en|fr|de|es|ar|hi|ja|ru|zh)">
            <ResumeRoute />
          </Route>
          <Redirect to="/br" />
        </Switch>
      </Router>
    </div>
  )
}
