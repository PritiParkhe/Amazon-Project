const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Products = require("./Products");

const app = express();
const port = 3001;
// Mandatory to run project on Node.js
app.use(express.json());
app.use(cors());


// Ensure that the MongoDB connection URL includes the hostname, domain name, and top-level domain
const connection_url = `mongodb+srv://parkhepriti71:Preet@05@cluster0.gwjg7f6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

// Simple API
app.get("/", (req, res) => res.status(200).send("Home page"));

//add product // pass a data as request grab that dat stores in varible productDetails

app.post('/products/add', (req, res) => {
    const productDetail = req.body;
    console.log("product Detail", productDetail);
    productDetail.create(productDetail, (err,data) => {
        if(err){
            res.status(500).send(err.message);

        }else{
            res.status(201).send (data)
        }
    });
});
app.get('/product/get', (req,res) =>{
    Products.find((err,data)=>
    {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }          
    });
});

// api for PAYMENT
app.post("/payment/create",async(req,res) =>{
    const total = req.body.amount;
    console.log("Payment Request Received for this ruppes",total);

   
    
});

app.listen(port, () => console.log("Listening on port", port));
