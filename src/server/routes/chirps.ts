import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const data = await db.Chirps.GetChirps();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const id: number = Number(req.params.id);
    const data = await db.Chirps.GetChirp(id);
    res.send(data[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/", async (req: express.Request, res: express.Response) => {
  try {
    const newUserName = req.body.name;
    const newChirpContent = req.body.content;

    const newUser = await db.Users.User(newUserName);
    const newUserId = newUser.insertId;

    const newChirp = await db.Chirps.CreateChirp(newUserId, newChirpContent);
    res.status(200).send(`
      user created with id: ${newUserId}
      chirp created with id: ${newChirp.insertId}
      `);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const id: number = Number(req.params.id);
    const newChirpContent = req.body.content;

    await db.Chirps.UpdateChirp(newChirpContent, id);

    res.status(200).send(`Updated chirp ${id}`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const id: number = Number(req.params.id);

    await db.Mentions.destroy(id);
    await db.Chirps.DeleteChirp(id);

    res.send(`chirp ${id} was deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

interface chirp {
  id: number;
  userid: string;
  content: string;
}

export default router;
