const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors")

const stripe = require("stripe")('sk_test_51ICe2rAKtdfBTvv7GiSdPQGlMk4l0FVVWfAEnY8Lz21M2WjA8Jn46YIj4bOHl96J5D0p7CCxDetJ2ghLFluc1GNT00DnRJ83r1')

//app config
const app = express();
//middlewares
app.use(cors({origin:true}))
app.use(express.json())
//api routes
app.get('/',(request,response)=>response.status(200).send("hello world"))
app.post('/payments/create',async(request,response)=>{
    const total = request.query.total
    console.log("payment request received",total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"INR",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client
    })
})


//listen command
exports.api = functions.https.onRequest(app)