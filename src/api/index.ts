import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RICK_AND_MORTY_API_URL } from '../constants';
import { ApiResponse, Character } from 'types';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMorty',
  baseQuery: fetchBaseQuery({ baseUrl: RICK_AND_MORTY_API_URL }),
  endpoints: (builder) => ({
    getCharactersByNameQuery: builder.query<ApiResponse<Character>, string>({
      query: (name = '') => `character?name=${name}`,
    }),
  }),
});

export const { useGetCharactersByNameQueryQuery } = rickAndMortyApi;
