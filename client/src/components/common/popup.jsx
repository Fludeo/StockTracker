import ReactDOM  from "react-dom"


export const PopUp = (props) => {



    return (
        props.trigger ?  ReactDOM.createPortal(
        <div className=' z-10 w-screen   h-screen  fixed flex  justify-center bg-gray-800 bg-opacity-30'>
            {props.children}
        </div> , window.document.getElementById('popup')):''

    );
}