import Connection from "../../database/connection";
import { verify } from "jsonwebtoken";

async function GetUsers(req, res) {
  const { authorization } = req.headers;
  try {
    const [str, token] = await authorization.split(" ");
    const isAuth = await verify(token, process.env.SECRET);

    if (isAuth) {
      const users = await Connection("users").select("*");
      return res.json(users);
    }
    return res.status(403).json({ error: "token não autorizado" });
  } catch (error) {
    return res.status(403).json({ error: "token não autorizado" });
  }
}

export default GetUsers;
