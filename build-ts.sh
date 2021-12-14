#!/usr/bin/env sh
node app.js
mv typescript/index.d.ts typescript/index.ts
npx tsc typescript/index.ts
mv typescript/index.ts typescript/index.d.ts
