import {prismaBulkInsert, prismaClient, prismaDefaultArrayInsert, prismaDefaultInsert} from "./prisma/prismaService";
import {typeormBulkInsert, typeormDefaultArrayInsert, typeormDefaultInsert} from "./typeorm/typeormService";
import {AppDataSource} from "./typeorm/data-source";

async function init() {
    await AppDataSource.initialize()
    await prismaClient.$connect()
}

async function destroy() {
    await AppDataSource.destroy()
    await prismaClient.$disconnect()
}

async function main() {
    console.time('main')
    await init()

    console.time('prismaDefault')
    await prismaDefaultInsert()
    console.timeEnd('prismaDefault')

    // console.time('prismaDefaultArrayInsert')
    // await prismaDefaultArrayInsert()
    // console.timeEnd('prismaDefaultArrayInsert')
    //
    // console.time('prismaBulkInsert')
    // await prismaBulkInsert()
    // console.timeEnd('prismaBulkInsert')


    // console.time('typeormDefaultInsert')
    // await typeormDefaultInsert()
    // console.timeEnd('typeormDefaultInsert')
    //
    // console.time('typeormDefaultArrayInsert')
    // await typeormDefaultArrayInsert()
    // console.timeEnd('typeormDefaultArrayInsert')

    // console.time('typeormBulkInsert')
    // await typeormBulkInsert()
    // console.timeEnd('typeormBulkInsert')


    await destroy()
    console.timeEnd('main')
}
// async function repeatMain() {
//     for (let i = 0; i < 10; i++) {
//         await main()
//     }
// }
main().then(() => {
    console.log('done')
})