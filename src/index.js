import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';
// import path from 'node:path';
// import { createDirIfNotExists } from './utils/createDirIfNotExists.js';

const startApp = async () => {
  await initMongoConnection();
  setupServer();
};

startApp();

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

// export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
// export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
