import { api } from '@/app/api';
import { graphConfig } from '@/lib/msal/authConfig'
import { User } from '@/types/User'


export const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAccountMe: builder.query<User, void>({
      query: () => ({
        url: graphConfig.graphMeEndpoint,
        headers: { scopes: [import.meta.env.VITE_AZURE_ENTRA_SCOPES] },
      }),
      providesTags: ['Account'],
    }),
    getAccountPhoto: builder.query<User, void>({
      query: () => ({
        url: graphConfig.graphMePhotEndpoint,
        headers: { scopes: [import.meta.env.VITE_AZURE_ENTRA_SCOPES] },
        responseHandler: (response) => response.blob(), // Handle Blob response
      }),
      providesTags: ['Account'],
    }),
  }),
});

export const {
  useGetAccountMeQuery,
  useGetAccountPhotoQuery,
} = accountApi;
