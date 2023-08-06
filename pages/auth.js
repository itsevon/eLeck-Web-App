import { useCallback, useState, useContext } from 'react';
import { Input,Button, Checkbox, Typography, Card } from "@material-tailwind/react";
import AccountContext from '@/Context/AccountContext';


const Auth = () => {
  // const [registered, setRegistered] = useState(false)

  const [email, setEmail] = useState('')
  // const [first_name, setfirst_name] = useState('')
  // const [last_name, setlast_name] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')

  // const {signup} = useContext(AccountContext);
  // const {signup, authenticate} = useContext(AccountContext);

  let [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login'? 'register' : 'login')
  }, [])


  //user registration

  const handleRegistration = (event) => {
    event.preventDefault();
    signup(email, password)
      .then(data => {
        console.log("Register Successfully", data);
      })
      .catch(err => {
        console.log("Failed to register", err.message);
      })
  }

  //login functionality

  const handleLogin = (event) => {
    event.preventDefault();
    authenticate(email, password)
    .then(data => {
      console.log("Register Successfully", data)
    })
    .catch(err => {
      console.log("Failed to register", err.message);
    })
  }


  return (
  //  <section className="font-source-sans-pro">
    <Card className="flex flex-col items-center h-screen">
        <p className="flex flex-col items-center justify-center mb-8 text-eleck-primary text-3xl font-bold">{variant === 'login'? 'Sign In': 'Register'}</p>
        <p className="flex flex-col items-center justify-center mb-8 text-blue-gray-300">
        {variant === 'login'? 'Hi, Please log into your account': 'Hi, Please rigister your account'}
        </p>

      <form className='w-80'>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            {/* {variant === 'register' && (
            <Input 
              className='grow'
              containerProps={{ className: "min-w-[72px]" }}
              maxLength={5}
              variant="standard" 
              label="First Name"
              id="first_name"
              onChange={(ev) => setfirst_name(ev.target.value)}
              value={first_name}
              required
              />
            )}
            {variant === 'register' && (
            <Input
              className='grow'
              containerProps={{ className: "min-w-[72px]" }}
              maxLength={5}
              variant="standard" 
              label="Last Name"
              id="last_name"
              onChange={(ev) => setlast_name(ev.target.value)}
              value={last_name}
              required
              />
            )} */}
          </div>

          <Input 
            className='w-full'
            variant="standard" 
            label="Email"
            id="email"
            onChange={(ev) => setEmail(ev.target.value)}
            value={email}
            required
            />

          <Input 
            variant="standard" 
            label="Password"
            type='password'
            pattern='.*'
            onChange={(ev) => setPassword(ev.target.value)}
            value={password}
            required
            />

            {variant === 'register' && (
             <Input 
            variant="standard" 
            label="Confirm Password"
            type='password'
            onChange={(ev) => setConfirmPassword(ev.target.value)}
            value={confirm_password}
            required
            />
            )} 
        </div>

        {variant === 'login' && (     
        <div>
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                className="text-eleck-primary font-source-sans-pro mt-4"
              >
                Remember me
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5 mt-4" }} 
        />
        <Typography
          variant="small"
          className="text-blue-gray-300 float-right font-source-sans-pro mt-7 cursor-pointer"
        >Forget password</Typography>
        </div> 
        )}


        {variant === 'register' && (      
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-source-sans-pro mt-4"
              >
                I agree with
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5 mt-4" }}
        />
        )}
        
        <div className="mb-6 mt-6">
           <Button size="md" color="white" className="text-md w-full rounded mr-6 bg-eleck-primary text-white hover:bg-eleck-secondary hover:shadow-lg font-source-sans-pro"
            onClick={handleRegistration}
           >
            {variant=== 'login'? 'LOGIN' : 'SIGN UP'}
            </Button>
        </div>
        <div className='text-eleck-primary mt-6 flex justify-center'>
          {variant === 'login' ? 'First time using eLeck?': 'Already have an account?'}
          <span onClick={toggleVariant} className='text-blue-gray-300 ml-1 cursor-pointer'>
          {variant === 'login' ? 'Create a new account': 'Login'}   
          </span>
        </div>
      </form>
        
      <div class="flex justify-center">
        <div class="text-gray-500 text-s absolute bottom-0"> &copy;2023 eLeck. All rights reserved.</div>
      </div> 
    </Card>
  )
}

export default Auth