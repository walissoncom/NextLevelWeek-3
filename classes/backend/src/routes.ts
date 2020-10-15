import { Router } from "express";
import { getRepository } from "typeorm";
import Orphanage from "./models/Orphanage";

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

routes.post("/orphanages", async (request, response) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  });

  await orphanagesRepository.save(orphanage);

  // 201 is the creation code (HTTP Request)
  return response.status(201).json(orphanage);
});

export default routes;
