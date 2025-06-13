import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const bookApi = createApi({
reducerPath: 'bookApi',
baseQuery: fetchBaseQuery({ baseUrl: 'https://api.itbook.store/1.0/' }),
endpoints: (builder) => ({
searchBooks: builder.query({
query: ({ query, page }) => `search/${query}/${page}`,
}),
getBookByIsbn: builder.query({
query: (isbn13) => `books/${isbn13}`,
}),
getNewBooks: builder.query({
query: () => `new`,
}),
}),
});

export const {
useSearchBooksQuery,
useGetBookByIsbnQuery,
useGetNewBooksQuery,
} = bookApi;

