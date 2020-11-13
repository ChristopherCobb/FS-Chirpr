import * as express from "express";
import chirpsMarket from "../db/chirps";
import db from "../db";

const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  let data = await chirpsMarket.GetChirps();
  res.json(data);
});

router.get("/:id", async (req: express.Request, res: express.Response) => {
  const data = await chirpsMarket.GetChirp(req.params.id);

  res.json(data[0]);
});

router.post("/", async (req: express.Request, res: express.Response) => {
  chirpsMarket.CreateChirp(req.body.userid, req.body.content);
  res.sendStatus(200);
});

router.put("/:id", async (req: express.Request, res: express.Response) => {
  try {
    res.json(await chirpsMarket.UpdateChirp(req.body.content, req.body.id));
  } catch (error) {
    console.log(error)
  }

  res.sendStatus(200);
});

router.delete("/:id", async (req: express.Request, res: express.Response) => {
  chirpsMarket.DeleteChirp(req.params.id);

  res.sendStatus(200);
});

interface chirp {
  id: number;
  userid: string;
  content: string;
}

export default router;
