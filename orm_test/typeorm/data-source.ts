import "reflect-metadata"
import {DataSource, Entity} from "typeorm"
import {Test} from "./entity/test";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "1234",
    database: "ormtest",
    synchronize: true,
    logging: true,
    entities: [Test],
    migrations: [],
    subscribers: [],
})

