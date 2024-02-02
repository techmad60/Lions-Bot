import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="relative mb-4">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              required
              className='pl-4 w-[232px] h-[53px] rounded-[10px] placeholder:text-black mt-6 mb-4 md:w-[270px]'
            />
            <span
              className="password-toggle absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePassword}
            >
              {showPassword ? <FaEyeSlash className="text-primary-green" /> : <FaEye className="text-primary-green" />}
            </span>
          </div>

    );
}

export default Input