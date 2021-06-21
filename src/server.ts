import express, { request } from "express";

// @types/express
const app = express();
/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover uma dado
 * PATCH  => Alrerar uma informação especifica
 */

app.get("/test", (request, response) => {
    //Request => Entrando
    //Reponse => Saindo
    return response.send("Olá NLW");
});


app.post("/test-post",(request, response) => {
    return response.send("olá NLW método POST");
})
//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));