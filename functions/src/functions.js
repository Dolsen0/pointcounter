import { user } from 'firebase-functions/v1/auth';
import dbConnect from './dbConnect.js';


export function getMain(req, res) {
  return (
    
    res.send("hello world")
    )
    ;
}

export function createUser(req, res) {
  return (res.send("hello there"));
}

export async function  getUser(req, res){

    const db = dbConnect();
    const collection = await db.collection('users').get()
        .catch(err => res.status(500).send(err))
    const users = collection.docs.map( doc => {
        let user = doc.data();
        user.id = doc.id;
        return user
    })   
    return(
        res.send(users[0]) 
    )
}
