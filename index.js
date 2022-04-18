const express = require('express');
const nodemailer = require("nodemailer");
const {graphqlHTTP} = require('express-graphql');
const BodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors');
const dotenv =  require("dotenv");
const schema = require('./schema');
const connectDB = require('./db');
const {authenticate} = require('./middleware/auth');


dotenv.config();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    exposedHeaders: ['authorization']
    
}

const app = express();
app.use(cors(corsOptions))
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

connectDB();

app.use(authenticate)

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });
  
  
  app.post("/send", function (req, res) {
  
    let mailOptions = {
        from: process.env.EMAIL ,
        to: req.body.email, cc:process.env.EMAIL,
        subject: "Welcome to CaringHands",
        text:`${req.body.message}`
        
          
        
        
        
        
    };
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json(
                {
                    status: "fail"
                }
            );
        } else {
            console.log("Email sent successfully");
            res.json({
                status: "Success",
            });
        }
    });
  });
  
  transporter.verify((err, success) => {
    err
        ? console.log(err)
        : console.log(`=== Server is ready to take messages: ${success} ===`);
  });
    

app.use('/graphql',
 graphqlHTTP ({
    schema,
    graphiql:true,
    headerEditorEnabled: true
    
})
);

app.listen(process.env.PORT, () => {
    console.log(`App running on PORT ${process.env.PORT}`);

});
