const findJudge = (N, trust) => {
    let likesCountList = {}
    let beingLikedCountList = {}
    for(let i = 1; i <= N; i++){
        likesCountList[i] = 0
        beingLikedCountList[i] = 0
    }
    
    for(let ele of trust){
        likesCountList[ele[0]]++
        beingLikedCountList[ele[1]]++
    }
    
    
    let judge = 0
    for(key in likesCountList){
        if(likesCountList[key] === 0) judge = key
    }
    
    
    if(beingLikedCountList[judge] === N - 1) return judge
    else return -1
};
const N = 3;
const trust = [[1,3],[2,3]]
const jud = findJudge(N, trust)

console.log(jud);