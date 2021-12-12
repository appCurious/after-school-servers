/**
 * Students
 *
 * interact with a list of students
 *
*/
import apiSettings from "./api-types.mjs";

/**
 * A person object with a name and age.
 * @typedef {Object<string, any>} Person
 * @property {string} id record id
 * @property {string} name The name of the person.
 * @property {number} age The age of the person.
 * 
*/

/**
 * 
 * @typedef {Object<string, any>} EducationSubject
 * @property {string} classSubject
 * @property {Person} teacher
*/
/**
 * 
 * @typedef {Object<string, any}Student
 * @property {EducationSubject[]} schoolClasses
 * @property {Person} aboutMe
*/

/**
 * @type {Person[]} teachers
 */
const teachers = [
    {
        id: '1',
        name: 'Mrs. Maltida Hogan',
        age: 52
    },
    {
        id: '2',
        name: 'Mr. Wollomar Niftaldi',
        age: 33
    }
];

/**
 * @type {Student[]} students
 */
const students = [
    {
        aboutMe: {
            id: '1',
            name: 'Stephan Stefania',
            age: 12,
        },
        schoolClasses: [
            {
                classSubject: 'Math',
                teacher: teachers[1]
            }
        ],
        
    },
    {
        aboutMe: {
            id: '2',
            name: 'Tina Stefania',
            age: 12,
        },
        schoolClasses: [
            {
                classSubject: 'Math',
                teacher: teachers[0]
            }
        ],
        
    },
    {
        aboutMe: {
            id: '3',
            name: 'Rolanda Peters',
            age: 12,
        },
        schoolClasses: [
            {
                classSubject: 'Math',
                teacher: teachers[1]
            },
            {
                classSubject: 'English',
                teacher: teachers[0]
            }
        ],
        
    }
];

const getterRoutes = [
    {
      path: "/afterschool/api/v1/student/:id",
      operation: (req, res) => {
          const id = req.params.id || null;
          const student = students.filter((s) => {
            return s.aboutMe.id === id;
          });
          if (student.length) {
              res.send({
                  success: true,
                  result: student[0]
              });
          } else {
              res.send({
                  err: `no student has the id ${id}`
              });
          }
      },
    },
    {
      path: "/afterschool/api/v1/students/:range",
      operation: (req, res) => {
          let range = req.params.range || null;
          if ( range && !isNaN(Number(range)) ) {
              range = Number(range);
              range = range < 0 ? 0 : range;              
              range = range <= students.length ? range : students.length;
              
              // first record
              if (range === 0) {
                  return res.send({ 
                    success: 'students found',
                    result: {
                        count: 1,
                        students: [students[0]]
                    }
                });
              }

              const studentResult = students.slice(0,range);
              
              res.send({ 
                  success: 'students found',
                  result: {
                      count: studentResult.length,
                      students: studentResult
                  }
              });
          } else {
              res.send({ err: `no more records for students ${range}` });
          }
          
      }
    }
  ];

/**
 *
 * @param app
 * @returns app
*/
const init = () => {
  apiSettings.get = [
    ...getterRoutes,
    ...apiSettings.get,
  ];

  return apiSettings;
};


export default { init, routesList: getterRoutes.map((r) => {return r.path})};
