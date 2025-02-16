import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
  tagTypes: ['User', 'Auth'],
  endpoints: () => ({}), // Extended in feature-specific APIs
});
