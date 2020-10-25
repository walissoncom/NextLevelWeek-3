import { Router } from "express";
import multer from "multer";

import uploadConfig from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";

/* SUMMARY */
// Route = The whole code block
// Resource = user

// HTTP Methods = GET, POST, PUT, DELETE
// Params

/* DETAIL */
// GET = Search for information (list, item)
// POST = Create information
// PUT = Editing information
// DELETE = Delete information

// Query Params: http://localhost:333/user?search=walisson (To filter data. Ex: ?param=value&city=sydney)
//console.log(request.query);

// Route Params: http://localhost:333/users/1 (Identify a resource - PUT & DELETE)
// console.log(request.params);

// Body: http://localhost:333/users (Data - Ex: user data (first nam, surname, phone, email, address, etc))
// console.log(request.body);

const routes = Router();
const upload = multer(uploadConfig);

// MVC

// Model
// View
// Controller

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create); // When creating a orphanage item, it also can upload images to it

export default routes;
