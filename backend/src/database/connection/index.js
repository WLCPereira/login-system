import Knex from "knex";
import { development } from "../../../knexfile";

const Connection = Knex(development);

export default Connection;
