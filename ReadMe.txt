---------------Setup for a MEAN Stack------------------------

Step #1 - create seprate repo/folders

Step #2 - Installing Angular cli in the ui repo
            npm i @angular/cli

Step #3 - create new Angular app
            ng new data2modler-ui

Step #4 - verify if app is up and running
            ng serve --open

Step #5 - install bootstrap framework
            npm i bootstrap --save

Step #6 - install jqeury 
            npm i jqeury --save

Step #7 - add bootstrap and jqeury to the scripts and bootstrap to styles as well in angular.json.
            In styles
            for bootstrap : node_modules/bootstrap/dist/css/bootstrap.min.css
            In scripts
            for bootstrap : "node_modules/bootstrap/dist/js/bootstrap.min.js"
            for jqeury : node_modules/jqeury/dist/jqeury.min.js

Step #8 - add below import in styles.css
            @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

Step #9 - go to data2modler-api and run below command to generate express layout
            npx express-generate

Step #10 - now run the layout with "npm run start" to check go to http://localhost:3000



------------------Creating common components like header and footer--------------------------

Step #1 - create component in data2modler-ui
            ng g c header
            ng g c footer

Step #2 - do html, cs and ts as u want in the component.

Step #3 - import model in app.component.ts if you want use it in it.
        import {HeaderComponent} from './header/header.component';



--------------------Making models in data2modler-api---------------------------------------

Step #1 - create models folder and add files of the model you want with following syntax : 
            modelName.model.js

Step #2 - 'npm i mongoose' for mongodb driver. run this command in data2modler-api folder

Step #3 - after installing mongoose you will have to write code for making model for example : 
            const mongoose = require("mongoose");

            const usersSchema = mongoose.Schema({
                UserName : {type: String, required: true},
                Password : {type: String, required: true},
                Email : {type: String, required: true},
                Name : {type: String, required: true}
            });
            
            const usersModel = mongoose.model("Users", usersSchema);
            
            module.exports = usersModel;
