import { setupServer } from 'msw/node';

import { apiHandlers } from './apiHandlers';

export const server = setupServer(...apiHandlers);
