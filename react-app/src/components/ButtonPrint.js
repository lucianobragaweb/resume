import { Printer } from 'lucide-react/dist/cjs/lucide-react.js'

export default function ButtonPrint (props) {
    function print () {
        window.print()
    }

    return (
        <button onClick={ print } id={ props.id } className={`${ props.id } print:hidden absolute right-0 p-1 hover:bg-neutral-700 text-neutral-700 hover:text-white focus:outline-none border-2 border-neutral-700 rounded-full`}>
            <span className={`${ props.id } absolute -top-1 -right-1 h-3 w-3`} id={ `${ props.id}-ping` }>
                <span id={ `${ props.id }-pulse` } className={`${ props.id } animate-ping absolute -right-1 -top-0 inline-flex h-5 w-5 rounded-full bg-green-400 opacity-75`}></span>
                <span id={ `${ props.id }-dot` } className={ `${ props.id } relative inline-flex -top-4 rounded-full h-3 w-3 bg-green-500`}></span>
            </span>
            <span id={ `${ props.id }-icon-container` } className={ props.id }>
                <Printer id={ `${ props.id }-icon` } className={ `${ props.id } w-6 h-6`} />
            </span>
        </button>
    )
}
