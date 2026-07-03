import express from "express";

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.listen(3000, () => {
    console.log("Website is live at 3000!");
});