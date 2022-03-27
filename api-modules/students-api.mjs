/**
 * Students
 *
 * interact with a list of students
 *
*/

/**
 * A person object with a name.
 * @typedef {Object<string, any>} Person
 * @property {string} ID record id
 * @property {string} FirstName The name of the person.
 * @property {string} LastName The name of the person.
 * 
*/


/**
 * A person object with a name.
 * @typedef {Object<string, any>} Teacher
 * @property {string} ID record id
 * @property {string} FirstName The name of the person.
 * @property {string} LastName The name of the person.
 * 
*/
// teachers should have classroom / students / maybe a schedule

/**
 * Class room has a SchoolSubject Teacher Students [] ClassPeriod SchoolDay
 * (SchoolSubject, Teacher, Student, TimeOfDay, ClassPeriod, DayOfWeek, SchoolDay)
 * @typedef {Object<string, any>} ClassRoom
 * @property {int} ID record id
 * @property {Person} Teacher teacher for the classroom
 * @property {Student[]} Students list of students in the classroom
 * @property {string} TimeOfDay textual display
 * @property {int} ClassPeriod numeric hour ( easy to sort )
 * @property {string} DayOfWeek textual display 
 * @property {int} SchoolDay numeric day of the week ( easy to sort )
*/
/**
 * A person with an age and scoolclasses / maybe a schedule
 * (ID, FirstName, LastName, Age, Grade)
 * @typedef {Object<string, any}Student
 * @property {string} ID record id
 * @property {string} FirstName The name of the person.
 * @property {string} LastName The name of the person.
 * @property {int} Age The age of the student
 * @property {int} Grade numeric grade the student is in
 * 
*/
// students should have classes
// * @property {EducationSubject[]} schoolClasses
//  * @property {Person} aboutMe

const buildRoutes = (connection) => {
        
    const getterRoutes = [
        {
            path: '/afterschool/api/v1/students/:id',
            operation: async (req, res) => {
                const id = req.params.id || null;

                try {
                    const db = await connection.open();
                    const student = await db.get(`
                        SELECT 
                            ID,
                            FirstName,
                            LastName,
                            Age,
                            Grade
                        FROM students WHERE ID = ?
                    `, id);

                    if (student?.ID) {
                        res.send({
                            success: true,
                            result: student
                        });
                    } else {
                        res.send({
                            err: `no student has the id ${id}`
                        });
                    }

                    await connection.close();
                    
                } catch (e) {
                    await connection.close();
                    res.send({
                        err: `woopsie. something went wrong ${e}`
                    });
                }
                
            },
        },
        {
            path: '/afterschool/api/v1/students',
            operation: async (req, res) => {
                const {age, firstname, lastname, grade} = req.query;
 
                try {

                    let whereClause = '';
                    const vals = [];

                    if (!isNaN(Number(age))) {
                        whereClause = ' Age = ? ';

                        vals.push(age);
                    }

                    if (firstname) {
                        whereClause += whereClause.length ? ' OR FirstName = ? ' : ' FirstName = ? ';
                        vals.push(firstname);
                    }

                    if (lastname) {
                        whereClause += whereClause.length ? ' OR LastName = ? ' : ' LastName = ? ';

                        vals.push(lastname);
                    }

                    if (grade) {
                        whereClause += whereClause.length ? ' OR Grade = ? ' : ' Grade = ? ';
                        vals.push(grade);
                    }

                    whereClause = vals.length ? ` WHERE ${whereClause} `  : '';

                    const db = await connection.open();
                    const students = await db.all(`
                        SELECT 
                            ID,
                            FirstName,
                            LastName,
                            Age,
                            Grade
                        FROM students ${whereClause}
                    `, vals);

                    if (students.length) {
                        res.send({ 
                            success: 'students found',
                            result: {
                                count: students.length,
                                students: students
                            }
                        });
                    } else {
                        res.send({ err: `no more records for students ${firstname} ${lastname} ${age}` });
                    }

                    await connection.close();

                } catch (e) {

                    await connection.close();
                    // woopsie
                    res.send({
                        err: `woopsie. something went wrong ${e}`
                    });
                }
                
            }
        }
    ];

    return {
        get: getterRoutes,
        post: [],
        put: [],
        delete: []
    };
};

const init = (dbconnection) => {
    const routes = buildRoutes(dbconnection);
    const settings = {
        get: routes.get,
        post: [], // no posts yet
        routesList: [...routes.get.map((r) => {return r.path})] // no post routes at this time
    };
  

    return settings;

    // apiSettings.get = [
    //     ...getterRoutes,
    //     ...apiSettings.get,
    //   ];
};


export default { init };
