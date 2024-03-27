async function EmailRoutes(server){

server.get("/", () => {
    return "Hello world"

})
}

 module.exports = EmailRoutes;