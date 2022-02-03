


export const PopUp = (props) => {



    return (

        props.trigger ? <div className=' z-10 w-screen  overflow-auto h-screen fixed flex  justify-center bg-gray-800 bg-opacity-30'>
            {props.children}
        </div> : ''

    );
}