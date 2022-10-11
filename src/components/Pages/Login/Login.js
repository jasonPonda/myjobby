import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google from "../../../assets/google.png";
import "./Login.css";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <section className="log">
      <div className="contentBx">
        <h1>THESTUDENT</h1>

        <div className="Formcontent" onSubmit={handleSubmit}>
          <form className="values">
            <input
              {...register("email", { required: true })}
              placeholder="email"
            />

            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />

            <input type="checkbox" value="Remember password" />
            <p className="remember">Remember password</p>
            <input type="submit" value="SIGN IN" className="account" />
          </form>

          <div className="separed">
            <span className="right"></span>
            <p className="or">or</p>
            <span className="left"></span>
          </div>
          <img src={google} alt="" />
          <input type="submit" value="Sign with Google" className="google" />

          <p className="login">
            Not yet Regisered?{" "}
            <Link to="/register" className="link">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
