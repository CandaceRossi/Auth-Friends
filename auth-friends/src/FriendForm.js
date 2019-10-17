import React from "react";
import axiosWithAuth from "./utils/axiosWithAuth";

const FriendForm = props => {
  const [input, setInput] = React.useState({
    name: "",
    age: "",
    email: ""
  });
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", input)
      .then(res => {
        console.log(res);
        props.setFriends(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={addFriend}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={input.name}
        />
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={input.age}
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={input.email}
        />
        <button type="subit">submit</button>
      </form>
    </div>
  );
};
export default FriendForm;
