import * as express from "express";
// import chirpsMarket from "../db/chirps";
import db from "../db";
import users from "../db/users"

const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  let data = await db.Chirps.GetChirps();
  res.json(data);
});

router.get("/:id", async (req: express.Request, res: express.Response) => {
  const data = await db.Chirps.GetChirp(req.params.id);

  res.json(data[0]);
});

// router.post("/", async (req: express.Request, res: express.Response) => {
//   chirpsMarket.CreateChirp(req.body.userid, req.body.content);
//   res.sendStatus(200);
// });
router.post("/", async (req, res) => {
  try {
    const name = req.body.name;
    let newUser = await users.User(name);
    console.log(newUser);
    res.json(await db.Chirps.CreateChirp(req.body.userid, req.body.content)[0]);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put("/:id", async (req: express.Request, res: express.Response) => {
  try {
    res.json(await db.Chirps.UpdateChirp(req.body.content, req.body.id));
  } catch (error) {
    console.log(error)
  }

  res.sendStatus(200);
});

router.delete("/:id", async (req: express.Request, res: express.Response) => {
  db.Chirps.DeleteChirp(parseInt(req.params.id));

  res.sendStatus(200);
});

interface chirp {
  id: number;
  userid: string;
  content: string;
}

export default router;
