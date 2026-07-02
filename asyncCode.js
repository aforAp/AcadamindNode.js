const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
      resolve('Done');
    }, 1500);
    });
    return promise;
}

setTimeout(() => {
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
    console.log('Timer is done');

}, 2000);


//async code it will take 2 sec to execute the code.
console.log("hello!");
console.log("Hi!!!");