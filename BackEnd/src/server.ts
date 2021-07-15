
// console.log("server file");


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const path = require('path');
const dotenv = require("dotenv");
dotenv.config({
    path: path.join(__dirname,'..', process.env.NODE_ENV+'.env')
});

var Routes=require('./routes/app');

class App {
    expressApp: any;
    constructor() {
        this.expressApp = express()
        // this.configs = {
        //     get port() {
        //         return process.env.PORT || 5090
        //     }
        // }
        console.log("Loading Env from file : "+path.join(__dirname,'..')+" => "+process.env.NODE_ENV+'.env')
    }
    applyMiddleware() {
        this.expressApp.use(express.static(path.join(__dirname, 'dist/osg')))
        this.expressApp.use(cors())
        new Routes (this.expressApp);
        this.expressApp.get('/', (req:any,res:any) => {
            res.sendFile(process.cwd()+"/dist/osg/index.html")
          });
    }

    run() {
        this.expressApp.listen(4080,() => {console.log("The port running successfully at 4080")
        })
    }
}

//Runs the thing
const app = new App()
app.applyMiddleware()
app.run()
