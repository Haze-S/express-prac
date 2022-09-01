import express from 'express';
import bodyParser from 'body-parser';

import { handleError } from "./middlewares/errorHandler";
import { logTime } from "./middlewares/logTime";
import router from "./router";

const app = express();
const port = 3000;

app.use(bodyParser());
app.use(logTime);

app.use(router);

app.use(handleError);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});