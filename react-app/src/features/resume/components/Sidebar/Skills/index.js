import { useTranslation } from 'react-i18next'
import { Lightbulb } from 'lucide-react/dist/cjs/lucide-react.js'
import { resumeContent } from '@content'

export default function Skills () {
    const { t } = useTranslation()

    return (
        <div>
            <h2 className="text-md text-neutral-700 uppercase font-semibold pb-2 flex align-middle items-center">
                <Lightbulb className="h-6 w-6 mr-2 text-neutral-500" />
                { t("resume.expertise.title") }
            </h2>

            { resumeContent.skills.map((skill) => (
                <div className="pr-2 mb-2" key={ skill.id }>
                    <div className="text-xs mb-1 text-neutral-600">{ skill.name }</div>
                    {/* <div className="w-full bg-gray-200 h-1">
                        <div className="bg-neutral-600 h-1" style={ { width: skill.percent } }></div>
                    </div> */}
                </div>
            )) }
        </div>
    )
}
