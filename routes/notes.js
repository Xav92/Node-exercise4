import express from "express";
import { addNote, removeNote,editNote } from "../persistence.js";
import { v4 as uuidv4} from "uuid"

const router = express.Router();



router.post("/",function(req,res) {
  const {noteText} = req.body;
    if(noteText) {
        const id = uuidv4();
        addNote(id, noteText);
    }
  
   res.redirect("/")
});

router.delete("/:id",(req,res) => {
    const {id} = req.params;
    if(id) {
        removeNote(id);
        res.status(200).send();
    }
    else{
        res.status(400).send("could not delete");
    }
  
})

router.put("/:id", (req,res)=>{
    const {id} = req.params;
    const {text} = req.body;
    console.log(req.body)
    if(id && text) {
        res.status(200).send();
    }
    else{
        res.status(400).send("could not edit");
    }
    
})

export default router;