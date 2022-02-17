import compression from "compression";
import express, { json, urlencoded } from "express";

const app = express();

const appConfig = {
  port: 3000,
  hostname: "185.87.252.144",
};

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(compression());

app.use(express.static("client"));

app.listen(appConfig.port, appConfig.hostname, () => {
  console.log("Server started");
});
