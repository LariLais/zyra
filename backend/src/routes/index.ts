import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.json("Rota de teste funcionando!");
});

export { router };
