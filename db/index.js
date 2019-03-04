const db = require('mysql');

const persons = () => {
    db.query('select * person', (error, result))
        if(error)
             return error;
        return results[0].solution;
})


Object.defineProperty(exports'persons', {
        get: () => persons
})