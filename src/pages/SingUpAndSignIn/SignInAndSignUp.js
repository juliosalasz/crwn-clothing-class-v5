import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/signUp/signUp";
import "./SignInAndSignUp.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default SignInAndSignUp;
