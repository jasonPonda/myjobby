import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google from "../../../assets/google.png";
import "./Register.css";

const Student = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      familyName: "",
      email: "",
      password: "",
    },
  });
  return (
    <div className="contentBox">
      <h1>THESTUDENT</h1>
      <div className="Formcontent">
        <form className="values" onSubmit={handleSubmit(console.log)}>
          <input
            {...register("firstName", { required: true })}
            placeholder="First name"
          />

          <input
            {...register("familyName", { required: true })}
            placeholder="Family name"
          />

          <input
            {...register("email", { required: true })}
            placeholder="email"
          />

          <input
            {...register("password", { required: true })}
            placeholder="Password"
          />

          <input
            type="submit"
            value="Create your account"
            className="account"
          />
        </form>

        <div className="separed">
          <span className="right"></span>
          <p className="or">or</p>
          <span className="left"></span>
        </div>
        <img src={google} alt="" />
        <input type="submit" value="Continue with Google" className="google" />

        <p className="login">
          Already Regisered?{" "}
          <Link to="/login" className="link">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Student;
