import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
// import path from "node:path";

const startApp = async () => {
  await initMongoConnection();
  setupServer();
};

startApp();

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};
