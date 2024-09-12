/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState, useEffect} from "react";
import Cookies from "js-cookie";
import axios from "axios";


function UserGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/getUserProfile", {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllUsers(response.data);
        setLoading(false);
        console.log(allUsers);

      } catch (error) {
        console.log("Error in userGetAllUsers: " + error);
      }
    };
    getUsers();
  }, []);
  return [allUsers, loading];
}


export default UserGetAllUsers;