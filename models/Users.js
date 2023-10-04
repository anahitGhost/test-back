import { DataTypes, Model } from 'sequelize';
import sequelize from '../services/sequelize';
import md5 from 'md5'

class Users extends Model {
}

Users.init({
  id: {
    type: DataTypes.BIGINT.UNSIGNED,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
    set(value){
      this.setDataValue('password', md5(md5(value)));
    }
  }
}, {
  sequelize,
  tableName: 'users',
  modelName: 'users',
});

export default Users;
