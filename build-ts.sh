#!/usr/bin/env sh
npx tsc app.ts
node app.js
mv typescript/index.d.ts typescript/index.ts
npx tsc typescript/index.ts
mv typescript/index.ts typescript/index.d.ts
