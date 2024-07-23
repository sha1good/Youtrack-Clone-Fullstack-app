import { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import { Button } from "@/components/ui/button";
import "./Auth.css";

const Auth = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="loginContainer">
      <div className="box h-[32rem] w-[25rem]">
        <div className="minContainer login">
          <div className="loginBox w-full px-10 space-y-5">
            {active ? <Register /> : <Login />}
            <div>
              <span>Already have an account? </span>
              <Button onClick={() => setActive(!active)}>
                {active ? "Signin" : "SignUp"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
