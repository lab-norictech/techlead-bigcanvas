const admin = require('firebase-admin')

let serviceAccount = require('./bigcanvas-ef0e6-firebase-adminsdk-b05mh-8818f56ac1.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

let db = admin.firestore()

// add dummy data
let grid = db.collection('app').doc('grid')

data = {
    'name': 'Los Angeles',
    'state': 'CA',
    'country': 'USA',
}

let setApp = grid.set(data)