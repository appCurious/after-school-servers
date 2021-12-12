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
        id:1,
        name: 'Mrs. Maltida Hogan',
        age: 52
    },
    {
        id: 2,
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
            id: 1,
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
            id: 1,
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
            id: 1,
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

/**
 *
 * @param app
 * @returns app
*/
const init = () => {
  apiSettings.get = [
    ...[
      {
        path: "/afterschool/api/v1/student/:id",
        operation: (req, res) => {
            const id = req.params.id || null;
            if (students[id]) {
                res.send({
                    success: true,
                    result: students[id]
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
            const range = req.params.range || null;
            if (range && Number(range) ) {
                let last = range - 1;
                last < 0 ? 0 : range;
                last = last < students.length ? last : students.length -1;
                const result = students.slice(0,last);
                res.send({ 
                    success: 'students found',
                    result
                });
            } else {
                res.send({ err: `no more records for students ${range}` });
            }
            
        }
      },
    ],
    ...apiSettings.get,
  ];

  return apiSettings;
};


export default { init };
