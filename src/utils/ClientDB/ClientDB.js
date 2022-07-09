import * as PouchDB from "pouchdb";

var db = new PouchDB(sessionStorage.getItem('userID'));

export default db;