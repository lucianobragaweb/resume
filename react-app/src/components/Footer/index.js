import { useTranslation } from 'react-i18next'
import GitHubButton from 'react-github-btn'
import { resumeContent } from '@content'
export default function Footer () {
    const { t } = useTranslation()

    return (
        <footer className="py-2 print:py-2 px-4 flex flex-col md:flex-row print:flex-row text-xs justify-center space-x-4  align-middle mx-auto max-w-screen-md border-t border-neutral-200">
            <div className='text-neutral-400 justify-center align-middle py-4 print:py-2 text-center'>
                { t("resume.footer.available_in") } <a href={ resumeContent.links.onlineResumeUrl } className='text-blue-500'>lucianobragaweb.github.io/resume</a>
            </div>
            <div className='flex space-x-1 md:py-4 print:py-2'>
                <GitHubButton href={ resumeContent.links.github.profile } data-show-count="true" aria-label="Follow @lucianobragaweb on GitHub">@lucianobragaweb</GitHubButton>
                <GitHubButton href={ resumeContent.links.github.fork } data-icon="octicon-repo-forked" aria-label="Fork lucianobragaweb/resume on GitHub">Fork</GitHubButton>
                <GitHubButton href={ resumeContent.links.github.issues } data-icon="octicon-issue-opened" aria-label="Issue lucianobragaweb/resume on GitHub">Issue</GitHubButton>
                <GitHubButton href={ resumeContent.links.github.repo } data-icon="octicon-star" aria-label="Star lucianobragaweb/resume on GitHub">Star</GitHubButton>
            </div>
        </footer>
    )
}
