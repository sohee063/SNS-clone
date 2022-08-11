import fs from "fs";
import { resolve } from "path";

const basePath = resolve();

const filenames = {
  messages: resolve(basePath, "src/db/messages.json")
  users: resolve(basePath, "src/db/messages.json")
};
