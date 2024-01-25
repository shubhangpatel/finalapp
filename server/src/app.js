const express =require('express')
const cors = require('cors')
const mysqlconnection = require('./dbops')
const app = express()

app.use(cors())
app.use(express.json())
app.get("/getData",(req,res)=>{
   querystr="select * from useri"
   mysqlconnection.conn.query(querystr,(err,data)=>{
     if(err){
        console.log(err)
        res.send(err)
     }
     else if(data.length===0)
          {
             res.send("No Data Found")
          }
    else {
           res.send(data)
        }
     })

   })
 
   app.post('/postData', (req, res) => {
      const formData = req.body;
    
      const querystr = 'INSERT INTO useri (firtName, lastName, email, age) VALUES (?, ?, ?, ?)';
      const values = [formData.firstName, formData.lastName, formData.email, formData.age];
    
      mysqlconnection.conn.query(querystr, values, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        } else {
          console.log('Data inserted successfully');
          res.status(200).json({ message: 'Data inserted successfully' });
        }
      });
    });
    app.post('/login', (req, res) => {
      const { email, firstName } = req.body;
      const selectQuery = 'SELECT * FROM useri WHERE email = ? AND firtName = ?';
      mysqlconnection.conn.query(selectQuery, [email, firstName], (err, results) => {
          if (err) {
              console.error('Error executing MySQL query:', err);
              res.status(500).json({ error: 'Internal Server Error' });
              return;
          }
          if (results.length === 0) {
              res.json({ error: 'Invalid credentials' })
          } else {
              const user = results[0];
              res.send({ message: 'Login successful', user })
          }
      });
  });
  app.delete('/deleteuser', (req, res) => {
   const emailToDelete = req.query.email
    console.log(emailToDelete)
   const deleteQuery = 'DELETE FROM useri WHERE email = ?';
   mysqlconnection.conn.query(deleteQuery, [emailToDelete], (err, result) => {
     if (err) {
       console.log(err);
       res.status(500).send(err);
     } else {
       console.log('Data deleted successfully');
       res.status(200).json({ message: 'Data deleted successfully' });
     }
   });
 });
 app.put('/updateData/:email', (req, res) => {
  const userEmail = req.params.email;
  const updatedData = req.body;

  const updateQuery = 'UPDATE useri SET firstName=?, lastName=?, email=?, age=? WHERE email=?';
  const updateValues = [updatedData.firstName, updatedData.lastName, updatedData.email, updatedData.age, userEmail];

  mysqlconnection.conn.query(updateQuery, updateValues, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log('Data updated successfully');
      res.status(200).json({ message: 'Data updated successfully' });
    }
  });
});

 
app.listen(8000,()=>{
    console.log(`server is running in port no 8000`)
})