# Welcome to Star Pack - A way to manage influencer sponsored content submissions.

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

### To view the database
mongosh "mongodb://127.0.0.1:27017/dummyApp"
db.influencers.find({}, { username: 1, submissions: 1, _id: 0 });

Giving you an overview to my workflow and providing a method to my madness!

OVERVIEW: 
- Influencers can upload images of the boards that they are going to be using.
- UI for both admin and influencer.
- Login feature (initDummyDatabase.js for the different logins) and logout feature
- API made
- Database made with dummy data inserted  


I took data from the table in the csv file provided to create a dummy database filled with data so that we can test out our database. 
Within the entities.js you can see the various mediums I hoped to add over time (Admin could message the influencer and influencers could submit data).

Built in javascript, node, express and react.

I have commented throughout all the files for readability. Please let me know if it’s enough or if there is any folder that requires further labelling.

I used MongoDB and Postman to build my API and database.
This can all be found in the Database folder.
Within the ‘initDummyDatabase.js’ you can see how I would insert Influencer/admin note submissions as a stretch goal so that they could more easily communicate with the admin/those reviewing the influencers submissions (Line 126 onwards).

‘uploads’ folder allows us to save images to users in the database. You can see where the link is made in the server.js, line 12.

**Additionally** 
My .gitIgnore holds the following files:
#### Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

node_modules
dist
dist-ssr

#### Editor directories and files
.vscode/*
!.vscode/extensions.json
package-lock.json
.idea
.DS_Store