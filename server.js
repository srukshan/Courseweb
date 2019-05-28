const Express       = require("express");
const BodyParser    = require("body-parser");
const Routes        = require("./Routes");
const Cors          = require("cors");

const app = Express();

app.use(Cors());

app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use('/', Routes);

const port = 5000;

app.listen(port, (err) => {
  if(err) {
      console.log(err);
      process.exit(-1);
  }
  console.log(`Server listen port ${port}`);
});