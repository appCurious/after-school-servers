/**
 * initial api
 * 
 * expect this module to grow
 * extract api's into their own modules and instantiate them here
 * 
 */

/**
 * @type ApiSetting
 * @param {path} string controller path
 * @param {operation} function (request, response) { }
   
 }
 */

 /**
  * @type {dict} object[string: ApiSetting]
  */
const apiSettings = {
  get: [
    {
      path: '/afterschool/api/v1/student/:id',
      operation: (req, res) => mainOp(req, res)
    },
    {
      path: '/afterschool/api/v1/students/:range',
      operation: (req, res) => res.send({success: 'students'})
    }

  ],
  post: [

  ]
}
const init = (app) => {
  // console.log('did we init api app', app)
  // apply api paths to the app
  apiSettings.get.forEach((op) => {
    // console.log('what is op ', op)
    app.get(op.path, op.operation);
  });

  return app;
};

function mainOp (req, resp) {
  console.log('received it')
  resp.send({err: '', value: 'you got it' })
}



module.exports = { init, apiSettings }