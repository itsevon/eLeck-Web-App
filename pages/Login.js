import { Input,Button, Checkbox, Typography } from "@material-tailwind/react";
import '../styles/globals.css';
 
export default function Login() {
  return (
    <section className="font-source-sans-pro">
    <div className="flex flex-col items-center h-screen">
     <div className="relative z-10">
      <form className="w-80">
        <p className="flex flex-col items-center justify-center mb-8 text-eleck-primary text-3xl font-bold">Sign In</p>
        <p className="flex flex-col items-center justify-center mb-12 text-blue-gray-300">Hi, Please login to your account</p>
        <div className="text-white mb-6">
          <Input variant="standard" label="Username"/>
        </div>
        <div className="text-white mb-6">
          <Input variant="standard" label="Password"/>
        </div>
        <div>
          <Checkbox 
            id="ripple-off" 
            label={
              <Typography className="text-eleck-primary">Remember me</Typography>
            }
            ripple={false}/>
          <a href="" className="ml-6 text-eleck-primary"> Forgot Password</a>
        </div>
        <div className="text-white mb-6 mt-6">
           <Button size="md" className="w-full rounded mr-6 bg-eleck-primary">Login</Button>
           {/* <Button size="md" className="w-36 rounded text-eleck-primary bg-white outline-eleck-primary">Sing up</Button> */}
        </div>
      </form>
    </div>
  </div>
  </section>
  )
}