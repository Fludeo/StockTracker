


export const PopUp = (props) => {



    return (

        props.trigger ? <div className=' z-10 w-screen h-screen fixed flex items-center justify-center bg-gray-800 bg-opacity-30'>
            {props.children}
        </div> : ''

    );
}