import React, { useEffect, useState } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";
import FriendForm from "./FriendForm";

const FriendList = () => {
  const [friends, setFriends] = useState([]);
  const fetchFriends = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    fetchFriends();
  }, []);
  return (
    <div>
    <FriendForm setFriends={setFriends} />
      {friends.map(friend => {
        return <div key={friend.id}>{friend.name}</div>;
      })}
      <button onClick={fetchFriends}>Push Me</button>
    </div>
  );
};
export default FriendList;
