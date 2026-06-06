# NoteHub

A multi-page notes application built with Next.js App Router, TypeScript,
TanStack Query, Axios, and CSS Modules.

## Setup

1. Install dependencies with `npm install`.
2. Create `.env.local` and add:

   ```env
   NEXT_PUBLIC_NOTEHUB_TOKEN=your_notehub_token
   ```

3. Start the development server with `npm run dev`.

## Routes

- `/` - application overview
- `/notes` - searchable notes list with pagination and note creation
- `/notes/[id]` - note details
