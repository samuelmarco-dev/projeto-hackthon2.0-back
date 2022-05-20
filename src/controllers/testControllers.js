import { ObjectId } from "mongodb";

import db from "../mongoDB.js"

export async function getTest(req, res) {
  try {
        const tests = await db.collection('tests').find({}).toArray();
        res.send(tests).status(200);
  } catch (error) {
        console.log(error);
        res.sendStatus(500);
  }
}

export async function getTestId(req, res){
    const { id } = res.locals;
    try {
        const testsId = await db.collection('tests').findOne({_id: new ObjectId(id)});
        if(!testsId){
            return res.status(404).send('This test was not found');
        }

        res.status(200).send(testsId);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function postTest(req, res) {
    try {
        await db.collection('tests').insertOne(req.body);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
}
