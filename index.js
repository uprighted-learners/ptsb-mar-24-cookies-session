const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("ABC")); // "ABC" is our secret. This will be applied to our signed cookies
app.use(express.static("public"));

const port = 3001;

// GET Route. Use this route to check the cookies that exist on the application
app.get("/api", function (req, res) {
    // Cookies that have not been signed
    console.log("Cookies: ", req.cookies);

    // Cookies that have been signed
    console.log("Signed Cookies: ", req.signedCookies);

    res.json(req.cookies);
});

// GET Route. Use this route to add a "cohort" cookie that is signed.
app.get("/add/cohort", (req, res) => {
    res.cookie("cohort", "mar-24", { signed: true });
    res.json("Cohort Cookied Added");
})

// GET Route. Use this route to add a "cohort" cookie that is signed.
app.get("/add/cart", (req, res) => {
    res.cookie("cart", ["milk", "cheese", "dog food"]);
    res.json("Cart Cookie Added");
})

// GET Route. Use this route to remove the "cart" cookie
app.get("/remove/cart", (req, res) => {
    res.clearCookie("cart");
    res.json("Cart Cookie Removed");
})

// GET Route. Use this route to remove the "cohort" cookie
app.get("/remove/cohort", (req, res) => {
    res.clearCookie("cohort");
    res.json("Cookie Removed");
})


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})