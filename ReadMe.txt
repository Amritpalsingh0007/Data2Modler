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

Step #3 - after installing mongoose you will have to write code for making model inside nameofmodel.model.js in models folders (if folder is not created then just create and add files for model) for example : 
            const mongoose = require("mongoose");

            const usersSchema = mongoose.Schema({
                UserName : {type: String, required: true},
                Password : {type: String, required: true},
                Email : {type: String, required: true},
                Name : {type: String, required: true}
            });
            
            const usersModel = mongoose.model("Users", usersSchema);
            
            module.exports = usersModel;
Step #4 -  after creating the model.js files now create corresponding files in routes folder for each model add the users.js code to this files for the time being.

Step #5 - Now go to app.js and add routes for each model to it as shown below : 
            var modelNamesRouter = require('./routes/modelfileName');

Step #6 - now each model file import the corresponding model


------------------Lazy loading modules and routing------------------------
inside data2modler-ui

Step #1 - run the command "ng g module modelName" this will generate module

Step#2 - add routing , to add routes go to app.routes.ts and in the const routes list add routes as shown below
            {path: 'pathurl', component: NameOfComponent} //this is normal loading routing 
            {path: 'pathurl', loadChildren: () => import('./pathofthecomponent/NameOfComponent.module').then(m => m.NameOfComponent)} //this is lazy loading

            Note : same syntax for the routing of modules

Step#3 - now go to the module folder and generate the component that you want related to that module. Note "you must add component in the declaration of the module.ts file of the module"


------------------------------------API-connecting to the backend------------------------------

Step#1 - first we need to install the mongoose in data2modler-api if it is not already installed just run this command anyway
            "npm i mongoose"

Step#2 - now in app.js we will make connection to the db.
        var mongoose = require('mongoose');
        mongoose.connect("mongodb://localhost:Data2Modler);

Step#3 - 