
const SERVER = "http://localhost:8000";

export class URL {
    static category = {
        manage : SERVER + "/category/getAll",
        add : SERVER + "/category/add",
        update : SERVER + "/category/update",
        delete : SERVER + "/category/delete"
    }

}