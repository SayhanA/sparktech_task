import express from "express";
import cookieParser from "cookie-parser";
import { globalErrorHandler, notFoundErr } from "./middlewar/errorHandler.js";

export const app = express();

app.use(express.json());
app.use(cookieParser());




// 404 error handler ---
app.use(notFoundErr);

// global error handler --
app.use(globalErrorHandler);
