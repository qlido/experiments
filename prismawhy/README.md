# prisma가 빠를까, typeORM이 빠를까?

### 2024/02/21~수정중

### 조건

서로 같은 쿼리를 일정 횟수 동기 처리를 통해 전송

console.time 명령어를 통해 밀리세컨드 단위로 측정

현재(02/21)는 post만 진행해본 상태

##

### 결과

**!! 컴퓨터 성능에 따라 전체적인 시간 소요는 달라질 수 있음 !!**

1000개의 post쿼리를 날려 본 결과:

![KakaoTalk_20240221_130213655](https://github.com/HUN1i/experiments/assets/102217780/b4da95bd-0105-42dd-adad-c696a09efe1a)
![KakaoTalk_20240221_130242648](https://github.com/HUN1i/experiments/assets/102217780/6b7b1d42-fc87-4fec-9a1f-47f37c81f6a0)

prisma: 136.631ms, typeORM: 104.02ms

typeORM이 32ms정도 빠른 것으로 측정됨
