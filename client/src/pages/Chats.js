import React, { useEffect, useState } from "react";
import axios from "axios";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("/chats");
    setChats(data.name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{chats}</div>;
};

export default Chats;
