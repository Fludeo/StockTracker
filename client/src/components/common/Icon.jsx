



export const Icon = (props) => {



    return (<svg onClick={props.onclick} xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke={props.color}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={props.type} />
    </svg>)
}