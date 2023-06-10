const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser({urlencoded:true}))

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Master",
  password: "*gp_Yb_[Wpte8J3I",
  database: "hockey-data"
});


con.connect((error) => {
  if (error) {
    console.error('Error conectando a la base de datos: ', error);
    return;
  }
  console.log('Conexión con la base de datos establecida');
});

app.get('/api/jugadores', (req, res) => {
  con.query("SELECT * FROM jugadores", (error, results) => {
    if (error) throw error;

    res.json(results);
  });
});

app.delete('/api/jugadores', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM jugadores WHERE id = ${id}`;

  con.query(sql, (error, result) => {
    if (error) throw error;
    console.log(`Deleted ${result.affectedRows} row(s)`);
    res.send(`El jugador con el ID ${id} ha sido eliminado`);
  });
});

app.put('/api/jugadores', (req, res) => {
  const { nombre, Ult_equipo, dorsal, imagen } = req.body;
  const { id } = req.params;
  const sql = `UPDATE jugadores SET nombre = ?, Ult_equipo = ?, dorsal = ?, imagen = ? WHERE id = ?`;
  const values = [nombre, Ult_equipo, dorsal, imagen, id];

  con.query(sql, values, (error, result) => {
    if (error) throw error;
    console.log(`Updated ${result.affectedRows} row(s)`);
    res.send(`El jugador con el ID ${id} ha sido actualizado`);
  });
});

app.post('/api/jugadores', (req, res) => {
  const { id, nombre, Ult_equipo, dorsal, imagen } = req.body;
  const sql = `INSERT INTO jugadores (id, nombre, Ult_equipo, dorsal, imagen) VALUES (?, ?, ?, ?, ?)`;
  const values = [id, nombre, Ult_equipo, dorsal, imagen];

  con.query(sql, values, (error, results, fields) => {
    if (error) throw error;
    res.json({ message: 'Se agregó un jugador' });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});