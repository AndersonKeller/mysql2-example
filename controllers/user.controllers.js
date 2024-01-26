import { createUserModel } from "../models/user.models.js";

export async function createUserController(req, res) {
  const userData = req.body;
  const user = await createUserModel(userData);

  return res.status(200).json(user);
}
