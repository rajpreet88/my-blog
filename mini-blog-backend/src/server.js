const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const { json } = require('body-parser');
const app = express();

app.use(bodyParser.json());

//connecting to DB
const withDB = async (operations, res)=>{
    try{
        const client =await MongoClient.connect('mongodb+srv://preetamaol:Jaigurudev8@cluster0.cnmbqu2.mongodb.net/?retryWrites=true&w=majority',
        {
            useUnifiedTopology:true,
            useNewUrlParser:true
        });

        const db = client.db('my-blog');
        await operations(db);
        console.log("Connection Established. All set!")
        client.close();

    }catch(error){
        res.status(500).json({message: "Error connecting to DB", error})
    }
}

// app.get('/api/articles/:name/cors', (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     res.send({ "msg": "This has CORS enabled 🎈" })
//     })

app.get('/api/articles/:name', async (req,res)=>{
    
    withDB(async(db)=>{
        const articleName = req.params.name;
        const articleInfo = await db.collection('articles').findOne({name: articleName});
        res.status(200).json(articleInfo);
        // res.status(200).text(articleInfo);
    },res)
})

app.post('/api/articles/:name/add-comments', async (req,res)=>{
    const {username, text } = req.body;
    const articleName = req.params.name;
    withDB(async (db)=>{   
        const articleInfo = await db.collection('articles').findOne({name: articleName})
        // if(articleInfo.comments.includes(" "))
        // {
            
        //     articleInfo.comments = articleInfo.comments.filter(Boolean);//remove empty string in the comments arrray
        // }
        // else if(req.body.username !== " " && req.body.text !== " "){

        //     await db.collection('articles').updateOne({name:articleName},
        //         {
        //             $set:{
        //                 comments: articleInfo.comments.concat({username,text}) // adding comments 
        //             }
        //         })
        //     const updatedArticleInfo = await db.collection('articles').findOne({name: articleName})
        //     res.status(200).json(updatedArticleInfo);
        // }
        // else{
        //     res.status(200).json({message: "Comments cannot be empty"})
        // }
        articleInfo.comments = articleInfo.comments.filter(Boolean);//remove empty string in the comments arrray
        await db.collection('articles').updateOne({name:articleName},
                    {
                        $set:{
                            comments: articleInfo.comments.concat({username,text}) // adding comments 
                        }
                    })
                const updatedArticleInfo = await db.collection('articles').findOne({name: articleName})
                res.status(200).json(updatedArticleInfo);
                // res.status(200).text(updatedArticleInfo);
    },res)
});

app.listen(8800, ()=>{
    console.log("Server is listening on port 8800")
})

// const articlesInfo = {
//     'navratri-day1': {
//       comments: [], // no comments yet
//     },
//     'navratri-day2': {
//       comments: [], // no comments yet
//     },
//     'navratri-day3': {
//       comments: [], // no comments yet
//     },
//     'navratri-day4': {
//       comments: [], // no comments yet
//     },
//     'navratri-day5': {
//       comments: [], // no comments yet
//     },
//     'navratri-day6': {
//       comments: [], // no comments yet
//     },
//     'navratri-day7': {
//       comments: [], // no comments yet
//     },
//     'navratri-day8': {
//       comments: [], // no comments yet
//     },
//     'navratri-day9': {
//       comments: [], // no comments yet
//     },
//   };
