const app = require("./app");
const { logger } = require("./utils/logger");

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  logger.info(`Server Started on PORT ${PORT}`);
});
