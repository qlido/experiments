import {AppDataSource} from "./data-source";
import {Test} from "./entity/test";

export async function typeormDefaultInsert() {
    const test = AppDataSource.getRepository(Test);
    for (let i = 0; i < 1000; i++) {
        await test.save({
            name: `typeorm ${i}`
        });
    }

}

export async function typeormDefaultArrayInsert() {
    const data = [];
    for (let i = 0; i < 1000; i++) {
        data.push({
            name: `typeorm Array ${i}`
        });
    }
    await AppDataSource.transaction(async (manager) => {
        await manager.getRepository(Test).save(data);
    })
}

export async function typeormBulkInsert() {

    const data = [];
    for (let i = 0; i < 1000; i++) {
        data.push({
            name: `typeorm Bulk ${i}`
        });
    }
    await AppDataSource.transaction(async (manager) => {
        await manager.createQueryBuilder()
            .insert()
            .into(Test)
            .values(data)
            .execute();
    })
}