import Users from "./models/Users.js";

(async () => {
  await Users.sync({ alter: true })
  process.exit(0)
})()
