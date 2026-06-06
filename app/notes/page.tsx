import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { fetchNotes } from '@/lib/api';

import NotesClient from './Notes.client';

export const dynamic = 'force-dynamic';

const initialNotesQuery = {
  queryKey: ['notes', 1, ''] as const,
  queryFn: () => fetchNotes({ page: 1, search: '' }),
};

export default async function Notes() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(initialNotesQuery);

  const queryState = queryClient.getQueryState(initialNotesQuery.queryKey);
  if (queryState?.status === 'error') {
    throw queryState.error;
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
