import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import Connection from "../../database/connection";

async function SignIn(req, res) {
  const { email, password } = req.body;

  const secret = await Connection("users")
    .where("email", email)
    .select("password")
    .first();

  if (!email || !password || !secret) {
    return res.status(400).json({ error: "E-mail ou senha inválidos" });
  }
  
  const isValid = await compare(password, secret.password);

  if (!isValid) {
    return res.status(400).json({ error: "Senha incorreta" });
  }

  const token = sign({ email }, process.env.SECRET, { expiresIn: 3600 });
  return res.status(200).json({ token });
}
export default SignIn;
