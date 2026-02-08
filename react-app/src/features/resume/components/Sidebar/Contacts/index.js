import { useTranslation } from 'react-i18next'
import { Github, Globe, Linkedin, Mail, MessageSquare, Phone } from 'lucide-react/dist/cjs/lucide-react.js'
import { resumeContent } from '@content'

export default function Contacts () {
    const { t } = useTranslation()

    return (
        <div>
            <h2 className="text-md text-neutral-700 uppercase font-semibold pb-3 flex align-middle items-center">
                <MessageSquare className="h-6 w-6 mr-2 text-neutral-500" />
                { t(resumeContent.contacts.titleKey) }
            </h2>
            <ul className="text-xs flex flex-col gap-y-3" data-testid="resume-contacts">
                <li className="flex align-middle gap-x-1">
                    <Mail className="h-4 w-4" />
                    { resumeContent.contacts.email }
                </li>
                <li className="flex align-middle gap-x-1">
                    <Github className="h-4 w-4" />
                    <a href={ resumeContent.contacts.github.href } target="_blank" rel="noreferrer">{ resumeContent.contacts.github.label }</a>
                </li>
                <li className="flex align-middle gap-x-1">
                    <Globe className="h-4 w-4" />
                    <a href={ resumeContent.contacts.website.href } target="_blank" rel="noreferrer">{ resumeContent.contacts.website.label }</a>
                </li>
                <li className="flex align-middle gap-x-1 font-semibold text-emerald-600">
                    <Phone className="h-4 w-4" />
                    { resumeContent.contacts.phone }
                </li>
                <li className="flex align-middle gap-x-1">
                    <Linkedin className="h-4 w-4" />
                    <a href={ resumeContent.contacts.linkedin.href } target="_blank" rel="noreferrer">{ resumeContent.contacts.linkedin.label }</a>
                </li>
            </ul>
        </div>
    )
}
