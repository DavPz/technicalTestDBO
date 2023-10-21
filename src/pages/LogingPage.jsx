import { LoginComponent } from "../components/login/LoginComponent"

export const LogingPage = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:flex lg:h-[100vh] h-[100vh] w-full bg-[url('/bg.jpg')] smd:bg-no-repeat smd:bg-center bg-cover">
                <div className='flex flex-col items-center justify-center h-full m-auto '>
                    <LoginComponent />
                </div>
            </div>
        </>
    )
}
