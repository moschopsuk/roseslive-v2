import {bootstrapMicroframework} from "microframework";

bootstrapMicroframework({
    config: {
        logo: "RosesLive",
        showBootstrapTime: true,
        bootstrapTimeout: 10
    }, 
    loaders: [
    ]
})
    .then(() => console.log("Application is up and running."))
    .catch(error => console.log("Application is crashed: " + error));