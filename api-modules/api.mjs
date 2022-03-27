/**
 * initial api
 *
 * expect this module to grow
 * extract api's into their own modules and instantiate them here
 *
 */

import ApiSettings from './api-types.mjs';
import ApiStudents from './students-api.mjs';
import apiSqlite    from '../database-connectors/sqlite/sqlite-api.mjs';


const init = async (app, path) => {
  // const dbconnection = await apiSqlite.init({filename: `${path}/afterschool.db`});
  const dbconnection = await apiSqlite.init({filename: `afterschool.db`});
  const apiStudents = ApiStudents.init(dbconnection);

  // for each of the api's collect the routeLists for display
  ApiSettings.routesList = [
    '/afterschool/api/v1/list',
    ...apiStudents.routesList
  ];


  // for each api action add them to the ApiSettings
  ApiSettings.get = [
    ...apiStudents.get
  ];
  ApiSettings.post = [
    ...apiStudents.post
  ];

  /// apply api paths to the app
  // list of available routes
  app.get('/afterschool/api/v1/list', (req, res) => {
    res.send({
        success: 'api routes',
        result: routesList
    });
  });
  // activate api routes
  ApiSettings.get.forEach((setting) => {
    // console.log('what is setting ', setting)
    app.get(setting.path, setting.operation);
  });

  return { app, routesList: ApiSettings.routesList, dbconnection };
};

export default { init };
