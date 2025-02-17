import { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/lib/msal/authConfig.ts";

export default function Unauthenticated() {
  const { instance } = useMsal();
  const initializeSignIn = () => {
    instance.loginRedirect(loginRequest);
  };
  
  useEffect(() => {
    initializeSignIn();
  }, []);
  
  return <></>;
}
