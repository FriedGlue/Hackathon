import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission

    // Basic authentication logic (use more secure methods in a real application)
    if (username.current?.value === 'johndoe@vcu.edu' && password.current?.value === 'password') {
      localStorage.setItem('userData', 'user');
      localStorage.setItem('passwordData', 'password');
      const getUsername = localStorage.getItem('userData');
      const getPassword = localStorage.getItem('passwordData');
      
      if (getUsername && getPassword) {
        navigate('/user-home');
      }
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center pt-20">
      <div className="bg-white p-16 rounded-lg shadow-md">
        <h2 className="text-2xl font-medium mb-4">Sign in with your school credentials</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700">Username:</label>
            <input
              type="text"
              ref={username}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              ref={password}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <button
            type="submit" // Add the type attribute to make it a submit button
            className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
