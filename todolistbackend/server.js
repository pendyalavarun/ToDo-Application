const exp = require('express');
const app = exp();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');


//connecting to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'varundb'
});


//checking if connection is successful or not  
connection.connect((error) => {
    if (error) {
        console.log('Error connecting to database:', error);
    } else {
        console.log('Database connection successful!');
    }
});

//middleware
app.use(cors());
app.use(exp.json())
app.use(bodyParser.json())

//post request
app.post("/api/insert-task", (req, res) => {

    let Task = req.body.Task;
    let Priority = req.body.Priority;
    const sql = "INSERT INTO todolist (Task,Priority) VALUES (?,?)";
    connection.query(sql, [Task, Priority], (error, result) => {
        if (error) {
            console.log('Error inserting data:', error);
        } else {
            console.log(result.affectedRows + ' record(s) inserted');
        }
    })
})

//get request to all tasks
app.get("/api/get-all-tasks", (req, res) => {
    const sql = "SELECT * FROM todolist";
    connection.query(sql, (error, result) => {
        if (error) {
            console.log('Error in getting data:', error);
        } else {
            res.send(result);
        }
    })
})


//delete request
app.delete("/api/delete-task/:id", (req, res) => {
    let id1 = parseInt(req.params.id, 10);
    console.log("The id is", id1);
    const sql = "DELETE FROM todolist WHERE id = ?";
    connection.query(sql, [id1], (error, result) => {
        if (error) {
            console.log('Error in deleting data:', error);
        } else {
            console.log(result.affectedRows + ' record(s) deleted');
        }
    })
})


//pustatus0
app.put("/api/update-task-status-0/:id", (req, res) => {
    let id = parseInt(req.params.id, 10);
    const sql = "UPDATE todolist SET Completestatus=0 WHERE id = ?";
    connection.query(sql, [id], (error, result) => {
        if (error) {
            console.log('Error in updating data:', error);
        } else {
            console.log(result.affectedRows + ' record(s) updated');
        }
    })
})

//pusstatus1
app.put("/api/update-task-status-1/:id", (req, res) => {
    console.log("inside put-status-1");
    let id = parseInt(req.params.id, 10);
    const sql = "UPDATE todolist SET Completestatus = 1 WHERE id = ?";
    connection.query(sql, [id], (error, result) => {
        if (error) {
            console.log('Error in updating data:', error);
        } else {
            console.log(result.affectedRows + ' record(s) updated');
        }
    })
})

app.listen(3500, () => console.log("Server listening in port 3500"));