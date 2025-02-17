/**
 * Configuration object to be passed to MSAL instance on creation.
 */
export const loginRequest = {
  scopes: [
    import.meta.env.VITE_AZURE_ENTRA_SCOPES,
  ],
};
export const msalConfig = {
  auth: {
    clientId:
      import.meta.env.VITE_AZURE_ENTRA_CLIENT_ID,
    usePkceWithAuthorizationCodeGrant: true,
    authority:
      import.meta.env.VITE_AZURE_ENTRA_AUTHORITY,
    redirectUri: import.meta.env.VITE_AZURE_ENTRA_REDIRECT_UI,
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage", // "sessionStorage" or"localStorage"
    storeAuthStateInCookie: false,
  },
  system: {
    allowNativeBroker: false,
  },
};

/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
export const silentRequest = {
  scopes: ["openid", "profile"],
  loginHint: "example@domain.net",
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me", //e.g. https://graph.microsoft.com/v1.0/me
  graphMePhotEndpoint:
    "https://graph.microsoft.com/v1.0/me/photos/64x64/$value",
};
