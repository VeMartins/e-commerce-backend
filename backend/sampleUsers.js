import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Vera",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Mafaldinha",
      email: "test@test.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
};

export default data;
