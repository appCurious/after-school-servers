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
 */

/**
 * @type {ApiSettings} apiSettings
 */
const apiSettings = { get: [], post: [] };

export default apiSettings;
