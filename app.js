import express from "express";
import { notFoundErr } from "./middlewar/errorHandler.js";

export const app = express();

// 404 error handler ---
app.use(notFoundErr);
