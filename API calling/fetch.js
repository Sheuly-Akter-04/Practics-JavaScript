//// fetch API calling 
// by default return promise only network error 
fetch("https://jsomplaceholder.typicode.com/posts/101")
.then((res)=> res.json())
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr));

/// get method for 100 times 
fetch("https://jsomplaceholder.typicode.com/posts/101")
.then((res)=> {
    if(!res.ok){
        const publish= 'Error of fetch get api : ${res.status}';
        throw new Error(publish);
    }return res.json();
})
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr));

/// put method 
fetch("https://jsomplaceholder.typicode.com/posts/1",{
    method: "POST",
    headers: {
        "Content-type": "appication/json; charset=UTF-8",
    },
    body: JSON.stringify({
        id: 1,
        title: "fetch",
        body: "barr",
        userId: 1,
    }),
})
.then((res)=> {
    if(!res.ok){
        const publish= 'Error of fetch get api : ${res.status}';
        throw new Error(publish);
    }return res.json();
})
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr)); 

/// patch method 
fetch("https://jsomplaceholder.typicode.com/posts/1",{
    method: "PATCH",
    headers: {
        "Content-type": "appication/json; charset=UTF-8",
    },
    body: JSON.stringify({
        title: "fetch PATCH",

    }),
})
.then((res)=> {
    if(!res.ok){
        const publish= 'Error of fetch get api : ${res.status}';
        throw new Error(publish);
    }return res.json();
})
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr)); 

/// delete  method 
fetch("https://jsomplaceholder.typicode.com/posts/1",{
    method: "DELETE",
})
.then((res)=> {
    if(!res.ok){
        const publish= 'Error of fetch get api : ${res.status}';
        throw new Error(publish);
    }return res.json();
})
.then((res)=> document.write(res))
.catch((errr)=> document.write(errr)); 

/// async await 
const makeeRequest = async (urrl, confg) => {
    const ress = await fetch(urrl)
    .then((ress)=> {
        if(!ress.ok){
            const ppublish= 'Error of fetch async: ${ress.status}';
            throw new Error(ppublish);
        }
    })
    const daata = await ress.json();
    return daata;
}
const gettdata = () => {
    makeeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((ress) => document.write(ress))
    .catch((errr) => document.write(errr))
};///make request 
gettdata();

//// send data 
const makkeRequest = async (urrl, confg) => {
    const ress = await fetch(urrl, confg)
    .then((ress)=> {
        if(!ress.ok){
            const ppublish= 'Error of fetch send data: ${ress.status}';
            throw new Error(ppublish);
        }
    })
    const daata = await ress.json();
    return daata;
}
const seenddata = () => {
    makkeRequest("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body: JSON.stringify({
        title: "fetch senddata",
        body: "barr",
        userId: 101,
    }),
    headers: {
        "Content-type": "appication/json; charset=UTF-8",
    },
})
    .then((ress) => document.write(ress))
    .catch((errr) => document.write(errr))
};
seenddata();

/// update data

const updata = () => {
    makkeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: "PUT",
        body: JSON.stringify({
            id: 1,
        title: "fetch update data",
    }),
    headers: {
        "Content-type": "appication/json; charset=UTF-8",
    },
})
    .then((ress) => document.write(ress))
    .catch((errr) => document.write(errr))
};
updata();

//// delete data 
const dedata = () => {
    makkeRequest("https://jsonplaceholder.typicode.com/posts/1",{
        method: "DELETE",
    })
    .then((ress) => document.write(ress))
    .catch((errr) => document.write(errr))
};
dedata();
