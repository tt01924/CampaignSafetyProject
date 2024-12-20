## Install node
brew install node

## Install dependencies
rm -rf node_modules package-lock.json
npm install
npm install cors **allows us work across posts**
npm install multer **allows us to submit images for the boards**

### Once complete run
node database/server.js
**And on a new terminal**
npm start