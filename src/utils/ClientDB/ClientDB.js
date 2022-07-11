import PouchDB from "pouchdb";
export var db;

export var ClientDB = () => {
    var DB = sessionStorage.getItem('token');
    db = new PouchDB(DB);

    return db;
}
