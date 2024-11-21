const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports=(sequelize,DataTypes)=>{
    const User = sequelize.define('User',{
        user_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        email:{
            type:DataTypes.STRING,
            // unique:true,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });

    //function to hash password

    user.beforeCreate(async (user)=>{
        try{
            const salt = await bcrypt.genSalt(12);
            // user.password = await bcrypt.hash(user.password, salt);
            const hashedPwd = await bcrypt.hash(user.password , salt);
            user.password = hashedPwd;
        } catch (error){
            // console.log(error);
            throw new Error('Erroe encrypting password');
        }
    });

    //function to compare the entered password with the saved hashed password
    user.prototype.comparePassword = async function(password){
        try{
            return await bcrypt.compare(password,this.password);
            } catch (error){
                // console.log(error);
                // throw new Error('Error comparing password');
                // return false;
                throw error;
            }
    }
}