import { useState } from "react";
import {
  Typography,
  Input,
  Button,
  Navbar,
  MobileNav,
  IconButton,
} from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { StickyNavbar } from "../Components/StickyNavbar";

// Function SimpleNavbar is no longer needed, we can remove it

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown(!passwordShown);

  return (
    <div className="h-screen">
      <StickyNavbar />
      <section className="grid text-center items-center pt-32">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Log In
          </Typography>
          <Typography className="mb-8 text-gray-600 font-normal text-[18px]">
            Enter your email and password to log in
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Your Email
                </Typography>
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name@mail.com"
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Password
                </Typography>
              </label>
              <Input
                size="lg"
                placeholder="********"
                labelProps={{
                  className: "hidden",
                }}
                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisibility}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
              />
            </div>
            <Button color="gray" size="lg" className="mt-6" fullWidth>
              Sign In
            </Button>
            <div className="!mt-4 flex justify-end">
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                variant="small"
                className="font-medium"
              >
                Forgot password
              </Typography>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
