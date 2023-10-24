import db from '../database/db.js';
import { DataTypes , UUIDV4} from 'sequelize';
import bcrypt from 'bcrypt';

const CustomerModel = db.define("customers", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4(), // Use UUIDV4() to generate a UUIDv4
        primaryKey: true,
    },
    user_name:{type:DataTypes.STRING}, 
    user_email:{type:DataTypes.STRING}, 
    user_password:{type:DataTypes.STRING}, 
    user_address:{type:DataTypes.STRING}, 
},{
    timestamps: false
})

CustomerModel.addHook('beforeCreate', async (admin) => {
    const saltRounds = 10; // higher numbers hash the password harder
    const hashedPassword = await bcrypt.hash(admin.user_password, saltRounds);
    admin.user_password = hashedPassword;
});


export default CustomerModel;