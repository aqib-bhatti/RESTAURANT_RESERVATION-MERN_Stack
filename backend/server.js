import app from "./app.js";

const PORT =process.env.PORT 

app.listen(PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
})
