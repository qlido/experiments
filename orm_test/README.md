# Prisma TypeORM Performance Comparison

## Introduction
Prisma와 TypeORM의 성능을 비교해보기 위한 프로젝트입니다.
같은 테이블에 대해 Prisma와 TypeORM을 사용하여 성능을 비교해보고자 합니다.
1000개의 데이터를 Insert하는 시간을 비교합니다. * 10
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

### Mysql 결과 분석

총 Bulk Insert, Default Array Insert(단일 Transaction), Default Insert(1000 of Transactions)
순으로 속도가 빠른 것으로 나타났습니다.
그중에서 TypeORM이 Prisma보다 빠른 것으로 나타났습니다.  
> ### 왜 그런 걸까요?
> #### Prisma Engine And Select Query when Insert
> Prisma는 Mysql에서 Insert를 하고 난후 객체 상태의 업데이트를 위해 무조건 Select Query를 호출합니다
> 이는 Prisma의 특징이기도 하지만, 이로 인해 Insert 속도가 느려지는 것으로 보입니다.
> 또한 Prisma의 Engine과의 레이턴시에 대한 이슈도 있을것 같습니다(확실치 않음)

## Result Postgres
| Metric                     | Minimum   | Maximum   | Average   |
|----------------------------|-----------|-----------|-----------|
| typeormBulkInsert          | 14.257ms  | 24.33ms   | 17.122ms  |
| typeormDefaultArrayInsert  | 16.475ms  | 37.227ms  | 18.127ms  |
| prismaBulkInsert           | 20.572ms  | 23.298ms  | 21.477ms  |
| prismaDefaultArrayInsert   | 220.192ms | 252.759ms | 233.571ms |
| typeormDefaultInsert       | 536.993ms | 900.441ms | 646.424ms |
| prismaDefault              | 547.371ms | 645.345ms | 589.318ms |

### Result Postgres with Logging
| Metric                     | Minimum   | Maximum   | Average   |
|----------------------------|-----------|-----------|-----------|
| prismaBulkInsert           | 18.782ms  | 25.085ms  | 21.010ms  |
| prismaDefaultArrayInsert   | 233.619ms | 284.964ms | 254.694ms |
| prismaDefault              | 536.381ms | 657.999ms | 573.377ms |
| typeormBulkInsert          | 31.891ms  | 66.368ms  | 39.828ms  |
| typeormDefaultArrayInsert  | 35.987ms  | 57.198ms  | 40.767ms  |
| typeormDefaultInsert       | 963.113ms | 1.332s    | 1.130s    |

### Postgres 결과 분석
다양한 이유가 있겠지만 typeORM이 prisma보다 빠른 것으로 나타났습니다.
하지만 Logging을 같이 진행할 때에 TypeORM의 시간이 더 걸리는 것으로 나타났습니다.

> ### TypeORM의 DefaultArrayInsert가 BulkInsert보다 빠른 이유는 무엇일까요?
> #### TypeORM의 DefaultArrayInsert
> TypeORM에서 여러개의 Insert를 하나의 트랜잭션으로 묶어서 Insert했을때 
> BulkInsert처럼 동작합니다. 이때 하나의 Bulk로 바꾸는 과정에서 시간이 소요되는 것으로 보입니다.
> ### Prisma의 DefaultArrayInsert가 Mysql에 비해 빨라진 이유
> #### Prisma의 DefaultArrayInsert
> Prisma의 DefaultArrayInsert는 Mysql에 비해 Postgres에서 더 빠른 것으로 나타났습니다.
> Prisma에서 5.1.0 이후 Postgres에 대한 성능 최적화가 이루어졌다고 합니다. 
> 아까 나타났던 Select Query를 하나의 Insert쿼리로 묶어 성능을 개선하였습니다 [링크](https://github.com/prisma/prisma/releases/tag/5.1.0)


## 최종 결론
Insert와 하나에 대한 방법만 비교하였을때 **TypeORM에서 로깅을 하지 않는 것**이 *제일 빠른 방법*으로 보이고
자동완성과 타입스크립트 최적화 prisma Studio와 같은 기능을 사용하고 싶다면 Prisma를 사용하는 것이 좋을 것으로 보입니다.

이유는 모르겠지만 차이가 있긴하다는 것을 알 수 있었습니다.

### 참고
데이터 베이스 상에서 실행되는 쿼리의 시간은 각 타입에 따라 차이가 없어 라이브러리 최적화에 대한 차이일 수도 있겠다는 생각이 듭니다






