import React from "react";
import axiosWithAuth from "./utils/axiosWithAuth";

const Login = props => {
  const [input, setInput] = React.useState({
    username: "",
    password: ""
  });
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", input)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/");
      })

      .catch(err => {
        console.log(err.response);
        setInput({ username: "", password: "" });
      });
  };
  return (
    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={input.name}
        />
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={input.password}
        />
        <button type="subit">submit</button>
      </form>
    </div>
  );
};
export default Login;
