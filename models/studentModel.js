// const { DataTypes } = require("sequelize");
// const { sequelize } = require("./indexStart");

// module.exports= (sequelize, DataTypes) =>{


//     const Student = sequelize.define("student",{
//         student_id: {
//             type: DataTypes.INTEGER,
//             primarykey: true,
//             // autoIncrement: true
//         },
//         firstname:{
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         lastname:{
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         gender:{
//             type: DataTypes.STRING,
//             allowNull: true
//         }
//     });

//     return Student

// }

module.exports=(sequelize, DataTypes)=>{

    const Student = sequelize.define('student', {
        student_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false,
          },

          gender: {
            type: DataTypes.TEXT,
            allowNull: true,
          },
          course_id:{
            type:DataTypes.INTEGER,
            allowNull:true
          },
      });
      Student.associate = (models) => {
        Student.belongsTo(models.Course, {
          foreignKey: 'course_id',
          as: 'course', // Alias for the relation
        });
      };
      
  return Student;
}