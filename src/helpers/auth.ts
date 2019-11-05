import { useLocalStorage } from "./hooks/useLocalStorage";
import sha256 from "sha256";

const [localStorage, setLocalStorage] = useLocalStorage();

type User = {
  username: string;
  password: string;
};

const users: User[] = [
  {
    username: "Safiye",
    password: "93c58fd44c8e57a9c07c2705b62667c6fcaae6ee8a6b62ae77bff052ad650840"
  },
  {
    username: "Naz",
    password: "b28f6c253f56082a4f8182fd18f6f715dfd530d5ca727ee9bc6a967ea28ab849"
  }
];

const userLoggedIn = (): boolean => {
  if (localStorage("userId") && localStorage("userId") !== "undefined") {
    return true;
  }

  return false;
};

const userValid = (): boolean => {
  const userName = localStorage("userName");
  const userId = localStorage("userId");

  let userFound = false;
  if (!userId || !userName) {
    return false;
  } else {
    users.forEach(u => {
      if (sha256(u.password) === userId) {
        userFound = true;
      }
    });
  }

  return userFound;
};

const getUserDetails = () => {
  return {
    userName: localStorage("userName") ? localStorage("userName") : "",
    userId: localStorage("userId") ? localStorage("userId") : ""
  };
};

export { users, userLoggedIn, localStorage, setLocalStorage, userValid, getUserDetails };
