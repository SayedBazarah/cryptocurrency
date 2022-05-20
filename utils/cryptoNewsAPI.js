import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "https://bing-news-search1.p.rapidapi.com/";

const cryptoNewsHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  "X-RapidAPI-Key": "efd0ba719fmsh862b5bc1058fe0cp1147fdjsncd587f9cd288",
};

const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeaders,
});

export const createNewsAPI = createApi({
  reducerPath: "cryptoNewsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = createNewsAPI;
