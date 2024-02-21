 # Prisma TypeORM Performance Comparison

## Introduction
Prisma와 TypeORM의 성능을 비교해보기 위한 프로젝트입니다.
같은 테이블에 대해 Prisma와 TypeORM을 사용하여 성능을 비교해보고자 합니다.
1000개의 데이터를 Insert하는 시간을 비교합니다.
단일 Insert, 단일 트랜잭션, Bulk Insert에 대하여 테스트를 하였습니다

## Result Mysql
| Metric                     | Minimum   | Maximum   | Average   |
|----------------------------|-----------|-----------|-----------|
| typeormBulkInsert          | 16.941ms  | 24.463ms  | 19.889ms  |
| prismaBulkInsert           | 25.082ms  | 27.83ms   | 26.026ms  |
| typeormDefaultArrayInsert  | 219.893ms | 295.876ms | 246.318ms |
| prismaDefaultArrayInsert   | 441.325ms | 508.355ms | 460.312ms |
| prismaDefault              | 1.637s    | 1.878s    | 1.738s    |
| typeormDefaultInsert       | 1.180s    | 1.667s    | 1.358s    |

총 Bulk Insert, Default Array Insert(단일 Transaction), Default Insert(1000 of Transactions)
순으로 속도가 빠른 것으로 나타났습니다.
그중에서 TypeORM이 Prisma보다 빠른 것으로 나타났습니다.  
> 왜 그런 걸까요?
> ### Prisma Engine And Select Query when Insert
> Prisma는 Insert를 하고 난후 객체 상태의 업데이트를 위해 무조건 적으로 Select Query를 호출합니다
> 이는 Prisma의 특징이기도 하지만, 이로 인해 Insert 속도가 느려지는 것으로 보입니다.
> 또한 Prisma의 Engine과의 레이턴시에 대한 이슈도 있을것 같습니다(확실치 않음)


