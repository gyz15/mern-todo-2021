import axios from "../axios-config";

// Register User
export const registerUser = (registerData, history) => {
  axios.post("/api/user/register").then((res) => {
    history.push("/login");
  });
};
// Login User
// Delete User
