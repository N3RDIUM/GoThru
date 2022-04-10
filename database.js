const DEFAULTNAME = "gothru-localdb";
var PouchDB = require('pouchdb');

export default class LocalDB {
    constructor(){
        this.db = new PouchDB(DEFAULTNAME);
    }

    get(id){
        return this.db.get(id);
    }

    put(doc){
        return this.db.put(doc);
    }

    remove(doc){
        return this.db.remove(doc);
    }
}
