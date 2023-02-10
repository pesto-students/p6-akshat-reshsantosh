async function asyncfunction() {
    const dotask1 = await new Promise((resolve) =>
      setTimeout(() => resolve("1"),1000)
       
    );
    const dotask2 = await new Promise((resolve) =>
      setTimeout(() => resolve("2"),1000)
    );
    const dotask3 = await new Promise((resolve) =>
    setTimeout(() => resolve("3"),1000)
  );
  console.log("completed all three tasks after 3 seconds")
  }
  asyncfunction();


// above this comment is ASYNC function and below is generator function (comment out any one funciton before you run it)

function* generator() {
 
    yield "task1"
    yield "task2"
    yield "task3"
    
}
 let generatorobj =  generator();
  setTimeout(() => {
    console.log(generatorobj.next().value)
  }, 1000);

  setTimeout(() => {
    console.log(generatorobj.next().value)
  }, 2000);

  setTimeout(() => {
    console.log(generatorobj.next().value)
  }, 3000);
 
 
