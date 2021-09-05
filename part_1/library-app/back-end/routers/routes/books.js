const express=require("express")
const {createBooks,getAllBooks,getBookById}=require("../controllers/books")

const bookRouter=express.Router()
bookRouter.post("/",createBooks)
bookRouter.get("/",getAllBooks)
bookRouter.get("/:book_id",getBookById)
module.exports=bookRouter