import React,{useState} from "react";
import axios from "axios"
const book=()=>{
const[title,setTitle]=useState();
const[author,setAuthor]=useState();
const[status,setStatus]=useState();

return(<div>

<input type="text" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
    <input type="text" placeholder="author"  onChange={(e)=>{setAuthor(e.target.value)}}/>
    <button onclick={()=>{
        axios.post("localhost:5000/library/create_book",{title,author}).then((result)=>{
    setStatus(<div>Successful</div>)
        }).catch((err)=>{
            setStatus(<div>Wrong</div>)
        })
    }}  >Submit</button>


    <button onclick={()=>{
        axios.delete("localhost:5000/library").then((result)=>{
            setStatus(<div>Successful</div>)
                }).catch((err)=>{
                    setStatus(<div>Wrong</div>)
                })
    }}   > delete</button>




   {status}

</div>)
    
}
export default book