import express, { response } from "express";
import { request } from "http";

// @types/express = biblioteca com as tipagens do express por conta dos ... no import
const app = express();

/** 
 * GET => Buscar uma informação
 * POST => Inserir(criar) uma informação
 * PUT => Alterar uma informação
 * DELETE => Remover um dado ou documento
 * PATCH => Alterar uma informação especifica
*/

app.get("/test", (request, response) => {
  //Request => Entrando
  //Response => Saindo
  return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW Método POST");
});

//http://localhost:3000
app.listen(3000, () => console.log("Server is Running"));

#together