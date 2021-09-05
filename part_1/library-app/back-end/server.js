const express = require("express");
const cors = require("cors");
const db=require("./db")
const bookRouter=require("./routers/routes/books")
const app = express();

app.use(express.json())
app.use(cors());

app.use("/books",bookRouter)






const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
