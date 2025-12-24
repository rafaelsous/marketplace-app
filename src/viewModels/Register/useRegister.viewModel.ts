import { useState } from "react";

export function useRegisterViewModel() {
  const [userData, setUserData] = useState({
    name: "Rafael Sousa",
  });

  return {
    userData,
    setUserData,
  };
}
