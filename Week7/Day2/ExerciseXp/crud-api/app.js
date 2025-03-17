const express = require("express");
const app = express();
const  {fetchPosts}=require( "./data/dataService.js");
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/api/posts", async (req, res) =>{
        try {
                const post=await fetchPosts();
                if(!post){
                        res.status(500).json({ message: "Failed to fetch posts" });
                        return;
                }
                res.json(post); 
                console.log("Done work with API PLSHLDR");
                
        } catch (error) {
                res.status(500).json({ message: "Internal Server Error" });
                
        }
});

app.get("/", (req, res) => {
  res.send("Hello World!EX3");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});