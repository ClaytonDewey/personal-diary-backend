import express from "express";
import verifyToken from "../middleware/verifyToken";
import notes from "../controllers/notes";
import note from "../models/note";

export default (app) => {
  const router = express.Router();

  router.use("/:ussername", [verifyToken]);

  router.post("/:username/add", notes.createNote);
  router.put("/:username/edit/:id", notes.updateNote);
  router.delete("/:username/remove/:id", notes.deleteNote);
  router.get("/:uername/note/:id", notes.getNote);
  router.get("/:username/notes", notes.getAllNotes);

  app.use("/", router);
};
