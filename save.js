const admin = require('firebase-admin')
const fs = require('fs')
const readline = require('readline')

let serviceAccount = require('./bigcanvas-ef0e6-firebase-adminsdk-b05mh-8818f56ac1.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

let db = admin.firestore()

// read tmp data
let key = process.argv[2] + ',' + process.argv[3]
let filename = 'tmp/' + key;

let value = fs.readFileSync(filename)

let data = {}
data[key] = JSON.parse(value)

// save to db
let grid = db.collection('app').doc('grid')
let setApp = grid.set(data)