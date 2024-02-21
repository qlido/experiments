import "reflect-metadata"
import {DataSource, Entity} from "typeorm"
import {Test} from "./entity/test";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "ormtest",
    synchronize: true,
    logging: true,
    entities: [Test],
    migrations: [],
    subscribers: [],
})

