const book=require("../../db")

const  createBooks=(req,res)=>{
    const Book={title , author, pages, publisher, published_at}=req.body
     const  newBook= new book({
        title :title,
        author:author,
         pages:pages,
        publisher:publisher,
         published_at:published_at
     }).save().then((result)=>{
         res.json({success:true,book:result})
     }).catch((err)=>{
         res.json({success:false})
     })
}


const getAllBooks=(req,res)=>{
    book.find({}).then((result)=>{
        res.json({success:true,book:result})
    }).catch((err)=>{
        res.json({success:false})
    })
}

const getBookById=(req,res)=>{
    const _id=req.params._id
    book.find({_id:_id}).then((result)=>{
        res.json({success:true,book:result})
    }).catch((err)=>{
        res.json({success:false})
    })
}





module.exports={createBooks,getAllBooks,getBookById}