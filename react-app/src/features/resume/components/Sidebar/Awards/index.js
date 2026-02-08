import { useTranslation } from 'react-i18next'
import { Award } from 'lucide-react/dist/cjs/lucide-react.js'
import { resumeContent } from '@content'

export default function Awards () {
    const { t } = useTranslation()

    return (
        <div>
            <h2 className="text-md text-neutral-700 uppercase font-semibold pb-1 flex align-middle items-center">
                <Award className="h-5 w-5 mr-2 text-neutral-500" />
                { t("resume.awards.title") }</h2>
            <p className="text-neutral-700 text-sm" data-testid="resume-award-title">{ resumeContent.awards[0].title }</p>
            <p className="font-light text-neutral-500 text-sm">
                { resumeContent.awards[0].school } - <span className="text-neutral-400 text-italic font-medium text-sm">{ resumeContent.awards[0].year }</span>
            </p>

        </div>
    )
}
