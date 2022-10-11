import React from "react";

import "./Register.css";

const Register = () => {
  function handleSubmit(e) {
    console.log("you clicked something");
  }

  return (
    <section className="register">
      <div className="job">
        <h1>THESTUDENT</h1>
        <form onClick={handleSubmit}>
          <button type="button" className="searcher">
            Job searcher
          </button>
          <button type="button" className="applier">
            Job applier
          </button>
          <input type="submit" value="Next" className="sign" />
        </form>
      </div>
    </section>
  );
};

export default Register;
