/**
 * @typedef {Object <string, string | function>} ApiSetting
 * @property {string} path the url path or route
 * @property {Function} operation (request, response) { }
 */

/**
 * @typedef ApiSettings
 * @type {Object<string, ApiSetting[]>}
 * @property {Array [ApiSetting]} get
 * @property {Array [ApiSetting]} post
 * @property {Array [string] }  routesList
 */

/**
 * @type {ApiSettings} apiSettings
 */
const apiSettings = { get: [], post: [], routesList: [] };

export default apiSettings;
