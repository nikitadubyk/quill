import { router, publicProcedure } from './trpc';

export const appRouter = router({
  test: publicProcedure.query(() => 'hello'),
});

export type AppRouter = typeof appRouter;
