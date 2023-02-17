        //---EXPRESS--
const express = require('express');
const app = express();
        //---CORS--
const cors = require('cors');
        //---BODY-PARSER--
const bodyParser = require('body-parser');
        //---PATH--
const path = require('path');
        //---CONFIG--
const sql = require('./config');
        //--PORT--
app.set('port', process.env.PORT || 4000);
        //---ROUTE
let route = express.Router();
app.use(express.json(), route, bodyParser.urlencoded({extended: false}));
app.use(cors());


route.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, './view/index.html'));
})


route.get('/users', (req,res)=>{
    try{
        sql.query(`SELECT * FROM users`, (err,result)=>{
            if(err) throw err
            res.status(200).send(result)
        })

    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
});

route.get('/bagels/:id', (req,res)=>{
    try{
        sql.query(`SELECT * FROM bagels WHERE bagelId=${req.params.id}`, (err,result)=>{
            if(err) throw err
            res.status(200).send(result)
        })
    } catch(error){
        console.log(error);
        res.status(400).send(error)
    }

 })

 route.get('/bagels', (req,res)=>{
    try{
        sql.query(`SELECT * FROM bagels`, (err,result)=>{
            if(err) throw err
            res.status(200).send(result)
        })

    } catch(error){
        console.log(error);
        res.status(400).send(error);
    }
});


    //---UPDATE--
route.put('/bagels/:id', bodyParser.json(), (req, res) => {
let info = req.body;
const strQry = `
UPDATE bagels SET ? WHERE bagelId = ?;`;

sql.query(strQry, [info, req.params.id], (err) => {
    if (err) {
        res.status(400).json({err});
    } else {
        res.status(200).json({msg: 'Updated!!'}) 
    }
})
}
)

//--post--

route.post('/register', bodyParser.json(), (req,res)=>{
    let detail = req.body;
    console.log(detail);
    //sql query
    const strQty =
    `
    INSERT INTO users
    SET ?;
    `;
    sql.query(strQty, [detail], (err)=> {
        if(err) {
            res.status(400).json({err});
        }else {
            res.status(200).json({msg:'A user record was saved'})
        }
    })
})

//put--users

route.put('/users/:userId', bodyParser.json(), (req, res) => {
    let info = req.body;
    const strQry = `
    UPDATE users SET ? WHERE userId = ?;`;
    
    sql.query(strQry, [info, req.params.userId], (err) => {
        if (err) {
            res.status(400).json({err});
        } else {
            res.status(200).json({msg: 'Updated!!'}) 
        }
    })
    }
    )


//patch

route.patch('/login', bodyParser.json(), (req, res)=>{
    const {emailAdd, userPass} = req.body;
    const strQry =
    `
    SELECT firstName, lastName, emailAdd, userPass,
    country
    FROM users
    WHERE emailAdd = '${emailAdd}';
    `;
    sql.query(strQry, (err, data)=>{
        if(err) throw err;
        if((!data.length) || (data == null)) {
            res.status(401).json({err:
                "You provided a wrong email address"});
        }else {
            let {firstName, lastName} = data[0];
            if(userPass === data[0].userPass) {
                res.status(200).json({msg:
                    `Welcome back, ${firstName} ${lastName}`});
            }else {
                res.status(200).json({err:
                    `You provided a wrong password`});
            }
        }
    })
})

//--delete--

route.delete('/users/:userId', bodyParser.json(), (req, res) => {
    const strQry = `
    DELETE FROM users WHERE userId = ?;`;
    
    sql.query(strQry, [ req.params.userId], (err) => {
        if (err) {
            res.status(400).json({err});
        } else {
            res.status(200).json({msg: 'DELETED SUCCESSFULLY'}) 
        }
    })
    }
    )



    //---ADD DATA--


module.exports = route;


app.listen(app.get('port'), function(){
    console.log("Server is running on Port 4000")
})
