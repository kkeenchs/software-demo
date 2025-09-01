import express from "express";
import tripsRouter from "./routes/trips.js"
import usersRouter from "./routes/user.js"

const app = express();
app.use(express.json());

app.use("/api/trips", tripsRouter)
app.use("/api/users", usersRouter)

app.get("/", (req, res) => {
    res.send("เข้าได้ละไอพวกโง่");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));