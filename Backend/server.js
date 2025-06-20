import { config } from "dotenv";
import app from "./src/app.js";

config();

app.listen(786, () => {
    console.log("✅ Server is Running  on http:/localhost:786")
})