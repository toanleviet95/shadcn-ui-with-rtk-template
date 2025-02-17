import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { acquireToken } from "@/lib/msal/auth";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL_API,
  prepareHeaders: async (headers: any) => {
    let scopes: string[] | undefined;
    if (headers.get("scopes")) {
      scopes = headers.get("scopes") as string[];
    }
    const token = await acquireToken(scopes);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  // if (result.error && result.error.status === 401) {
  //   await logoutApplication();
  // }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Auth", "Account"],
  endpoints: () => ({}), // Extended in feature-specific APIs
});
