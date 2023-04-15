// import { async } from "@firebase/util";
import SignUpForm from "../../Components/sign-up-form/sign-up-form.component";
import SignInForm from "../../Components/sign-in-form/sign-in-form.component";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <>
      <div className="authentication-container">
        {/* <h1>Sign In Page</h1> */}
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
