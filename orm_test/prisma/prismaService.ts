import {PrismaClient} from "@prisma/client";

export const prismaClient = new PrismaClient({
    log: ['query']
});

export async function prismaDefaultInsert() {
    for (let i = 0; i < 1000; i++) {
        await prismaClient.test.create({
            data: {
                name: `primsa ${i}`
            }
        });
    }
}

export async function prismaDefaultArrayInsert() {
    const array = [];
    for (let i = 0; i < 1000; i++) {
        array.push(
            prismaClient.test.create({
                data: {
                    name: `primsa ${i}`
                }
            })
        )
    }
    await prismaClient.$transaction(array)
}

export async function prismaBulkInsert() {
    const data = [];
    for (let i = 0; i < 1000; i++) {
        data.push({
            name: `primsa Bulk ${i}`
        });
    }
    await prismaClient.$transaction([
        prismaClient.test.createMany({data})
    ])
}