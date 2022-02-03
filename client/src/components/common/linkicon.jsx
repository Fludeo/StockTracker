import { Link } from "react-router-dom";







export const LinkWithIcon = (props) => {






    return (<div className='flex flex-row gap-4 justify-start position relative md:left-10 '>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 position relative top-0" fill="none" viewBox="0 0 24 24" stroke={props.icon.color}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={props.icon.type} />
        </svg>
        <Link className='md:w-6' to={props.url}>
            {props.text}
        </Link>
    </div>)
}
