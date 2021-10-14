






export const errorMessage = (props) => {

    return (props.trigger ? <div className='container fixed w-screen h-1/6 bg-red-400'>
        <h1>{props.trigger}</h1>
    </div> : '')


}