import { useTranslation } from 'react-i18next'
import { GraduationCap } from 'lucide-react/dist/cjs/lucide-react.js'
import { resumeContent } from '@content'

export default function Education () {
    const { t } = useTranslation()

    return (
        <div>
            <h2 className="text-md text-neutral-700 uppercase font-semibold pb-1 flex align-middle items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-neutral-500" />
                { t(resumeContent.education.titleKey) }
            </h2>
            <p className="font-bold text-neutral-700 text-sm" data-testid="resume-education-course">{ t(resumeContent.education.items[0].courseKey) }</p>
            <p className="font-light text-neutral-500 text-sm">{ t(resumeContent.education.items[0].schoolKey) }, { t(resumeContent.education.items[0].locationKey) }</p>
            <p className="text-neutral-500 text-sm">{ t(resumeContent.education.items[0].dateKey) }</p>
        </div>
    )
}
