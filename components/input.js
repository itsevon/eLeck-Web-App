import {Button, Checkbox, Typography } from "@material-tailwind/react";
import '../styles/globals.css';

const Input = () => {
  return (
    <div className="relative">
      <input
        variant="standard"
        className="
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
        text-gray-700
        bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-2
        peer
        "
        placeholder=" "
      />
      <label 
        className="
        absolute
        text-md
        text-zinc-400
        duration-150
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:translate-y-3
        "
        htmlFor="email">
          Email
      </label>
     </div>
  )
}

export default Input