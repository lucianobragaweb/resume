import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'

export default function Translate () {
    const { i18n } = useTranslation()
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    const languages = [
        { code: 'pt_BR', route: '/br', label: 'Português do Brasil', countryCode: 'BR' },
        { code: 'en', route: '/en', label: 'English', countryCode: 'US' },
        { code: 'fr', route: '/fr', label: 'Français', countryCode: 'FR' },
        { code: 'de', route: '/de', label: 'Deutsch', countryCode: 'DE' },
        { code: 'es', route: '/es', label: 'Español', countryCode: 'ES' },
        { code: 'zh', route: '/zh', label: '中文（简体）', countryCode: 'CN' },
        { code: 'ar', route: '/ar', label: 'العربية', countryCode: 'SA' },
        { code: 'hi', route: '/hi', label: 'हिन्दी', countryCode: 'IN' },
        { code: 'ja', route: '/ja', label: '日本語', countryCode: 'JP' },
        { code: 'ru', route: '/ru', label: 'Русский', countryCode: 'RU' }
    ]

    const changeLanguage = (language, path) => {
        i18n.changeLanguage(language)
        history.push(path)
        setIsOpen(false)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (!dropdownRef.current) return
            if (!dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    const currentLanguage = languages.find((language) => language.code === i18n.language) || languages[0]

    return (
        <div className="flex justify-center w-full" ref={dropdownRef}>
            <div className="relative">
                <button
                    type="button"
                    onClick={ () => setIsOpen((prevState) => !prevState) }
                    className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                    aria-haspopup="menu"
                    aria-expanded={ isOpen }
                >
                    <ReactCountryFlag
                        countryCode={ currentLanguage.countryCode }
                        svg
                        style={{ width: '18px', height: '12px' }}
                        className="rounded-sm"
                        aria-label={ currentLanguage.label }
                    />
                </button>
                {isOpen ? (
                    <div className="absolute z-10 mt-2 w-48 rounded border border-gray-200 bg-white shadow">
                        {languages.map((language) => (
                            <button
                                key={ language.code }
                                type="button"
                                className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-x-2"
                                onClick={ () => changeLanguage(language.code, language.route) }
                            >
                                <ReactCountryFlag
                                    countryCode={ language.countryCode }
                                    svg
                                    style={{ width: '18px', height: '12px' }}
                                    className="rounded-sm"
                                    aria-label={ language.label }
                                />
                                <span>{ language.label }</span>
                            </button>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    )
}
