import functions from 'firebase-functions'
import express from 'express';
import cors from 'cors'
import { getMain, createUser, getUser } from './src/functions.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get("/pointcounter", getMain)
app.get("/pointcounter/frank", getUser)
app.get("/pointcounter/signup", createUser)

app.post("/pointcounter/signup", createUser)



export const api = functions.https.onRequest(app)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
