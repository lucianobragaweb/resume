import Header from '@components/Header'
import Footer from '@components/Footer'
import { Sidebar, Timeline } from '../../features/resume/components'

export default function Resume () {
    return (
        <>
            <Header/>
            <section className="md:flex print:flex mx-auto max-w-screen-md">
                <Sidebar/>
                <Timeline/>
            </section>
            <Footer/>
        </>
    )
}
