





export const LoginForm = (props) =>{

    return( 
    <form className='self-center' >
    <div className=' bg-gray-700 rounded-md flex flex-col gap-5 w-42 relative -left-14  md:w-96 md:m-16 md:p-8 m-0 p-4 '>
    <p className = "text-yellow-500 font-bold md:text-2xl text-xl">Iniciar sesión</p>
    <label className= "font bold text-gray-300" htmlFor="username">Usuario</label>
    <input className='rounded-md md:p-2 focus:outline-none border-2  focus:border-blue-500' onChange={props.onChangeUsername} type="text" name="username" id="username" placeholder="Usuario" />
    <label className= "font bold text-gray-300" htmlFor="password">Contraseña</label>
    <input className='rounded-md md:p-2 focus:outline-none border-2  focus:border-blue-500' onChange={props.onChangePassword} name="password" id ="password" type="password" placeholder="Contraseña" />
    <input className= " h-9 my-6 font-bold text-gray-700 rounded-md bg-yellow-500  hover:bg-blue-500" type="button" value="Iniciar" onClick={props.onSubmitForm} />
    </div>
</form>
)
}

export default LoginForm;