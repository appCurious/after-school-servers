
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import fs from 'fs';


// const open = async (connection) => {
//   connection.db = await sqlite.open({
//     filename: connection.filename
//   });
  
//   return connection.db;
// };

// const close = async (connection) => {
//   if (connection.db)
//     return connection.db.close();
// };

const createDefaultDatabase = async (config) => {
    const db = await open({
        filename: config.filename,
        driver: sqlite3.Database
    });
    // add tables and data
    // we could have had a self referencing table:: PEOPLE - maybe in the future
    db.exec(
        `CREATE Table students (
            ID int primary key not null,
            FirstName text,
            LastName text,
            Age int,
            Grade int
        );

        INSERT INTO students (ID, FirstName, LastName, Age, Grade)
            VALUES 
                (1, 'Jayden', 'Animations', 10, 5),
                (2, 'Peyton', 'Willie', 11, 5),
                (3, 'Kaylah', 'Vandten', 11, 5),
                (4, 'Jasmon', 'Pierce', 11, 5),
                (5, 'Frankie', 'Flintstone', 10, 5);
                
        CREATE Table teachers (
            ID int primary key not null,
            FirstName text,
            LastName text
        );

        INSERT INTO teachers (ID, FirstName, LastName)
            VALUES 
                (1, 'Yolanda', 'Wondya'),
                (2, 'Wollomar', 'Niftaldi'),
                (3,  'Maltida', 'Hogan');

        CREATE Table schoolsubjects (
            ID int primary key not null,
            Name text,
            Subject text
        );

        INSERT INTO schoolsubjects (ID, Name, Subject)
            VALUES 
                (1, 'Mathmatical Addition', 'Math'),
                (2, 'Mathmatical Multiplication', 'Math'),
                (3, 'Mathmatical Algebra', 'Math'),
                (4, 'History of the World', 'History'),
                (5, 'American English', 'Language'),
                (6, 'Spanish 101', 'Language'),
                (7, 'Study Hall', 'Study');

        CREATE Table schoolclasses (
            SchoolSubject int,
            Teacher int,
            Student int,
            TimeOfDay text,
            ClassPeriod int,
            DayOfWeek text,
            SchoolDay int
            
        );

        INSERT INTO schoolclasses (SchoolSubject, Teacher, Student, TimeOfDay, ClassPeriod, DayOfWeek, SchoolDay)
            VALUES 
                (1, 1, 1, '8am', 8, 'M', 1),
                (1, 1, 2, '8am', 8, 'M', 1),
                (1, 1, 3, '8am', 8, 'M', 1),
                (1, 1, 4, '8am', 8, 'M', 1),
                (1, 1, 5, '8am', 8, 'M', 1),
                (2, 1, 1, '11am', 11, 'M', 1),
                (2, 1, 2, '11am', 11, 'M', 1),
                (2, 1, 3, '11am', 11, 'M', 1),
                (2, 1, 4, '11am', 11, 'M', 1),
                (2, 1, 5, '11am', 11, 'M', 1),
                (3, 3, 1, '1pm', 13, 'M', 1),
                (3, 3, 2, '1pm', 13, 'M', 1),
                (3, 3, 3, '1pm', 13, 'M', 1),
                (3, 3, 4, '1pm', 13, 'M', 1),
                (3, 3, 5, '1pm', 13, 'M', 1),
                (5, 1, 1, '3pm', 15, 'M', 1),
                (5, 1, 2, '3pm', 15, 'M', 1),
                (5, 1, 3, '3pm', 15, 'M', 1),
                (5, 1, 4, '3pm', 15, 'M', 1),
                (5, 1, 5, '3pm', 15, 'M', 1);

    `);
};

const init = async (config={}) => {
    // check if config.filename exists
    // otherwise create the default db
    // 'afterschool.db'
    config.filename = config.filename || 'afterschool.db';

    if (!fs.existsSync(config.filename)) {
        await createDefaultDatabase(config);
    }

    const connection = {
        db: null,
        filename: config.filename, // '/tmp/database.db',
        open: async () => {
            connection.db = await open({
                filename: connection.filename,
                driver: sqlite3.Database
            });

            return connection.db;
        },

        close: async () => {
            if (connection.db)
                return connection.db.close();
        }
    };

    return connection;
};

const destroy = async (connection) => {
  await connection.close();
  connection = null;
};


/**development */
const main = async () => {
    const connection = await init ();
};
main();


// const init = (config) => {

//   const connection = {
//     db: null,
//     filename: config.filename, // '/tmp/database.db',
//     // driver: sqlite3.Database
//     get: async (qry) => {
//       await open(connection);
//       const result = await connection.db.get(qry);
//       close(connection);
      
//       return result;
//     },
//     getMany: async (qry) => {

//     },
//     find: async (qry) => {
//       await open(connection);
//       const result = await connection.db.get(qry);
//       close(connection);
//     },
//     post: async (req, res, record) => {

//     },
//     postMany: async (req, res, records) => {

//     }
//   };

//   return connection;
// };

// const destroy = async (connection) => {
//   await close(connection);
//   connection = null;
// };

export default { init, destroy };