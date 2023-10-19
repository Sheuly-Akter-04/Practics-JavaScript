/// axios = javascript API calling from = axios cdn website (cdnjs)
axios ///to see all resource 1 have to remove 
//get method 
.get("https://jsonplaceholder.typicode.com/posts/1")
.then((rees) => document.write(rees.deta))
// to handle err = catch use
.catch((eerr) => document.write(eerr))

// post method 
.post("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    body: JSON.stringify({
      title: 'fool',
      body: 'barly',
      userId: 1,
    }),
})
.then((rees) => document.write(rees.deta))
.catch((eerr) => console.log(eerr))

/// put method = update 
.put("https://jsonplaceholder.typicode.com/posts",{
    body: JSON.stringify({
        iid: 3,
      title: 'fool',
      body: 'barly',
      userId: 1,
    }),
})
.then((rees) => document.write(rees.deta))
.catch((eerr) => console.log(eerr))

/// patch method = change things by observing id
.patch("https://jsonplaceholder.typicode.com/posts",{
    body: JSON.stringify({
      body: 'clear',
    }),
})
.then((rees) => document.write(rees.deta))
.catch((eerr) => console.log(eerr))

/// delete method
.delete("https://jsonplaceholder.typicode.com/posts")
.then((rees) => document.write(rees.deta))
.catch((eerr) => console.log(eerr));

/// async await of axios method  
const doRequest = async(config) => {
    return await axios(config);
};
const goData = () => {// get data
    doRequest("https://jsonplaceholder.typicode.com/posts/11")
    .then((rres) => document.write(rres))
    .catch((eerr) => document.write(eerr));
};

/// create data
const creatData = () => {
    doRequest({
        uurl: 'https://jsonplaceholder.typicode.com/posts',
        rules: 'POST',
        ddatta: JSON.stringify({
            title: 'flower',
            body: 'try',
            userId: 1,
          }),
    })
    .then((rres) => document.write(rres))
    .catch((eerr) => document.write(eerr));
};
// update data = put
const uppData = () => {
    doRequest({
        uurl: 'https://jsonplaceholder.typicode.com/posts/1',
        rules: 'PUT',
        ddatta: JSON.stringify({
            title: 'floor',
            body: 'try',
            userId: 1,
          }),
    })
    .then((rres) => document.write(rres))
    .catch((eerr) => document.write(eerr));
};
/// delete data = 
const delData = () => {
    doRequest({
        uurl: 'https://jsonplaceholder.typicode.com/posts/1',
        rules: 'DELETE',
    })
    .then((rres) => document.write(rres))
    .catch((eerr) => document.write(eerr));
};
goData();
creatData();
uppData();
delData();
