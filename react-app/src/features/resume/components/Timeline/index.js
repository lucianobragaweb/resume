import { useTranslation } from 'react-i18next'
import { MapPin } from 'lucide-react/dist/cjs/lucide-react.js'
import { resumeContent } from '@content'

function ExperienceItem({ experience, t }) {
    return (
        <article className="flex" key={experience.key}>
            <div className={experience.leftClassName}>
                <div className="bg-neutral-700 w-2 h-2 rounded-full absolute -right-[0.27rem] border-2 border-neutral-400"></div>
                <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t(experience.roleKey) }</h3>
                <span className="bg-neutral-200 text-xs text-neutral-400 py-1 px-2 rounded-sm uppercase">{ t(experience.periodKey) }</span>
            </div>
            <div className="grow p-4 pl-6 pt-0 relative">
                <h3 className="text-neutral-600 font-bold mb-0 text-sm">{ t(experience.companyKey) }</h3>
                <span className="absolute top-0 right-4 text-xs flex bg-neutral-200 px-1 py-0.5 text-neutral-400 rounded-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    { t(experience.locationKey) }
                </span>
                <p className="text-xs text-justify">
                    { t(experience.descriptionKey) }
                    {experience.skillsKey ? (
                        <>
                            {' '}
                            <br />
                            <span className="text-[10px] text-neutral-700">{ t(experience.skillsKey) }</span>
                        </>
                    ) : null}
                </p>
            </div>
        </article>
    )
}
export default function Timeline () {
    const { t } = useTranslation()

    return (
        <main className="grow py-2 px-4 print:px-0 md:px-0">
            <h2 className="text-xl text-neutral-700 uppercase font-semibold pb-2 mb-4">{ t("resume.experiences.title") }</h2>
            <section>
                {resumeContent.experiences.map((experience) => (
                    <ExperienceItem key={experience.key} experience={experience} t={t} />
                ))}
            </section>
        </main>
    )
}
