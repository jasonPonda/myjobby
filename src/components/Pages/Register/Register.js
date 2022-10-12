import React from "react";
import { Link } from "react-router-dom";
/* import Compagny from "./Company"; */
import "./Register.css";
/* import Student from "./Student"; */

const Register = () => {
  return (
    <section className="regis">
      <div className="job">
        <h1>THESTUDENT</h1>
        <form>
          <Link to="/student">
            <input type="button" className="searcher" value="Job searcher" />
          </Link>

          <Link to="/company">
            <input type="button" className="applier" value="Job applier" />
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
