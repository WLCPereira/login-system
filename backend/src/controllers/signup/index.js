import { hash, genSalt } from "bcryptjs";
import Connection from "../../database/connection";

async function SignUp(req, res) {
  const { name, email, password, phone, company } = req.body;
  if (email) {
    const salt = await genSalt(10);
    const crypt = await hash(password, salt);
    await Connection("users").insert({
      name,
      email,
      password: crypt,
      phone,
      company,
    });

    return res.status(201).json({ message: "Usuário criado com sucesso" });
  }
}

export default SignUp;
