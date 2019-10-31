import { useLocalStorage } from "./hooks/useLocalStorage";

const [localStorage, setLocalStorage] = useLocalStorage();

type User = {
  username: string;
  password: string;
};

const users: User[] = [
  {
    username: "Safiye",
    password: "93c58fd44c8e57a9c07c2705b62667c6fcaae6ee8a6b62ae77bff052ad650840" // Ah-HaHa
  },
  {
    username: "Naz",
    password: "b28f6c253f56082a4f8182fd18f6f715dfd530d5ca727ee9bc6a967ea28ab849" // Gravity!
  }
];

const userLoggedIn = (): boolean => {
  if (localStorage("userId") && localStorage("userId") !== "undefined") {
    return true;
  }

  return false;
};

export { users, userLoggedIn, localStorage, setLocalStorage };
