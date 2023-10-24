import { UUIDV4 } from "sequelize";

export const uuidPrimaryKey = () => ({
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    })