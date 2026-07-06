import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejsMate from "ejs-mate";
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


const MONGO_URL = "mongodb://127.0.0.1:27017/annam";
async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => [
    console.log("DB is connected")
]).catch((err) => {
    console.log(err)
})
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(
  "/aos",
  express.static(path.join(__dirname, "node_modules", "aos", "dist"))
);
app.engine('ejs', ejsMate);

app.get("/", (req, res) => {
    res.render("./data/home.ejs");
});

app.listen(3000, () => {
    console.log("Website is live at 3000!");
});
// ADMIN PAGE
// ADD THIS CODE
app.get("/admin", (req, res) => {

    res.render("admin");

});
