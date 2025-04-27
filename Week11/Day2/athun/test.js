const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt')
/**
 * jwt.sign()
 */

/**
('2 days')  // 172800000
('1d')   // 86400000
('10h')  // 36000000
('2.5 hrs') // 9000000
('2h')      // 7200000
('1m')      // 60000
('5s')      // 5000
('1y')      // 31557600000
('-3 days') // -259200000
('-1h')     // -3600000
*/

// const token = jwt.sign(
//   /** payload */
//   { userid: 111, name: "John Due", email: "john@gmail.com" },
//   /** token secret code */
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
//   /** expiration time */
//   { expiresIn: "60s" }
// );

// console.log(token);

const mytoken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjExMSwibmFtZSI6IkpvaG4gRHVlIiwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSIsImlhdCI6MTc0NTczNjg0NSwiZXhwIjoxNzQ1NzM2OTA1fQ.VTBi_h7ipv9cPkGTInrYPGf9RY5UzQ_tuJ5u8p_MH3I`;

/** jwt.verify */

// jwt.verify(
//   /** token */
//   token,
//   /** token secret code */
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
//   /** function to verify */
//   (err, decoded) => {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log(decoded);
//   }
// );


const salt = bcrypt.genSaltSync(5)
const hash = bcrypt.hashSync('123456', salt)
console.log(salt)
console.log(hash)

const hash1 = bcrypt.hashSync('123456', 10)
console.log(hash1)