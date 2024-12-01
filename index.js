require("dotenv").config();
const express = require("express");
const server = require("./api/server");

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
