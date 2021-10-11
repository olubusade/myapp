cd frontend

npm install

npm start  // To start the frontend in dev mode

npm run build  //To create artifacts needed to be served by node.js and express.js

Frontend URL: http://localhost:4200

cd backend
npm install
npm run dev   //to start in dev mode
npm start    //to start in staging mode

Backend runs on http://localhost:3000


FEATURES
Using Angular, Bootstrap, Express.js, Node.js ffg features were included during the development effort of the CyberPatient take home app:
Frontend
- pages: Home, List of Medications
- searching / filtering of medications based on category or name
- pagination
- lazy loading of the entire application starting from home page to List of medications page
  and backend
- Decide list of mediations order from table heads i.e. either ascending or descending.
- Basic unit tests using Jasmine and Karma
Backend
- express.js server
- basic routing to serve the fronend.
- medication model
- Easy access for staging purpose after build (Running the app without starting the frontend)

