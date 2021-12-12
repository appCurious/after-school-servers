/**
 * initial api
 *
 * expect this module to grow
 * extract api's into their own modules and instantiate them here
 *
 */

import apiSettings from "./api-types.mjs";
import apiStudents from "./students-api.mjs";

const init = (app) => {
  apiStudents.init();

  // apply api paths to the app
  apiSettings.get.forEach((setting) => {
    // console.log('what is setting ', setting)
    app.get(setting.path, setting.operation);
  });

  return app;
};

export default { init };
