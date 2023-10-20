import { LoginComponent } from "../components/login/loginComponent"

export const LogingPage = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:flex lg:h-[100vh] h-[100vh]">
                <div className='flex flex-col items-center justify-center h-full m-auto'>
                    <LoginComponent />
                </div>
            </div>
        </>
    )
}