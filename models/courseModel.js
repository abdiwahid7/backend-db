module.exports = (sequelize, DataTypes) => {

    const Course = sequelize.define('course', {
      course_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      credits: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Course;
  };