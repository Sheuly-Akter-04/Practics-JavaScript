///  API calling = ajax jquery from = jquery cdn (cdnjs)
/// get method 
const doingReq = async(urll, formula, datum) => {
try{// to handle error
        const outcome =await $.ajax({
        urll : urll,
        formula: formula,
        datum : datum,
    });
    return outcome;
}catch(eer){
    console.log(eer)
}
};

const holdData = () => {
    doingReq("https://jsonplaceholder.typicode.com/posts/1", "GET")
    .then((res) => document.write(res))
};
/// create data = post
const cretData = () => {
    doingReq("https://jsonplaceholder.typicode.com/posts", "POST", {
    title: 'ool',
    body: 'big',
    userId: 1,
    })
    .then((res) => document.write(res))
};
/// put method = update 
const upPData = () => {
    doingReq("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
    id : 2,
    title: 'lazy',
    body: 'active',
    userId: 1,
    })
    .then((res) => document.write(res))
};
/// delete 
const dellData = () => {
    doingReq("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
    .then((res) => document.write(res))
};
holdData();
cretData();
upPData();
dellData();


