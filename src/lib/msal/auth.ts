import { PublicClientApplication } from "@azure/msal-browser";
import { loginRequest, msalConfig } from "./authConfig";

export const msalInstance = new PublicClientApplication(msalConfig);

export const acquireToken = async (scopes?: string[]) => {
  const account = msalInstance.getAllAccounts()[0];
  let scopes_ = [...loginRequest.scopes];
  if (account) {
    try {
      if (scopes !== undefined) {
        scopes_ = [...scopes];
      }
      const response = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        scopes: scopes_,
        account: account,
      });
      return response.accessToken;
    } catch (error) {
      console.error("Error acquiring token:", error);
    }
  }
  return null;
};
export const logoutApplication = async () => {
  return await msalInstance.logoutRedirect();
};
