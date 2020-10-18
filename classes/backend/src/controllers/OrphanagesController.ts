import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";
import orphanageView from "../views/orphanages_view";
import * as Yup from "yup";

export default {
  // Common methods: index, show, crete, update, delete

  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find({
      relations: ["images"]
    });

    return response.json(orphanageView.renderMany(orphanages));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = await orphanagesRepository.findOneOrFail(id, {
      relations: ["images"]
    });

    return response.json(orphanageView.render(orphanage));
  },

  async create(request: Request, response: Response) {
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

    // Getting the images array from te request
    // Instructing the code to identify that it is a multer uploader of many files
    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === "true",
      images
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string()
        .required()
        .max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required()
        })
      )
    });

    // AbortEarly sets the validation to not stop when an item has an error
    // It allows to continue going through all the items and then return all the items that were not validated (many)
    await schema.validate(data, {
      abortEarly: false
    });

    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);

    // 201 is the creation code (HTTP Request)
    return response.status(201).json(orphanage);
  }
};
