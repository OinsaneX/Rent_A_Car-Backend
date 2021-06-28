const app = require('./app')

function main() {
    app.listen(process.env.PORT || 4000,()=>{
        console.log("server on port 4000");
    })
}

main();