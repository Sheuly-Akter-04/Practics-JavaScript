/// API calling 
///XMLHttpRequest() = used for xml api calling 
/// get data
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https....');///default surver
    
    xhr.onload = () => {
        let data = xhr.response;
        document.write(JSON.parse(data),"<br>");
    }
    xhr.onerror = () => {
        document.write('xml error is here, <br>');
    }
    xhr.send();
}
getData();

/// for call several api
const makeRequest = (mmethod, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(mmethod, url);///default surver
    
    xhr.onload = () => {
        let data = xhr.response;
        document.write(JSON.parse(data),"<br>");
    }
    xhr.onerror = () => {
        document.write('xml error is here, <br>');
    }
    xhr.send();
}
const ggetData = () => {
   makeRequest('GET', 'https....');///here use different url
}
ggetData();

//// sent  data
const mmakeRequest = (mmethod, url, ddata) => {
    const xhr = new XMLHttpRequest();
    xhr.open(mmethod, url);///default surver

    xhr.setRequestHeader('Content-Type', 'appication/json')
    
    xhr.onload = () => {
        let data = xhr.response;
        document.write(JSON.parse(data),"<br>");
    }
    xhr.onerror = () => {
        document.write('xml error is here, <br>');
    }
    xhr.send(JSON.stringify(ddata));
}
const gggetData = () => {
   mmakeRequest('GET', 'https....');///here use different url
}
const sendData = () => {
    makeRequest('POST', 'https://', {
        title: 'foo',
        body: 'bar',
        userId: 55,
    });
}
const updateData = () => {
    makeRequest('PUT', 'https://', {/// put = update data
        title: 'hii',
        body: 'carry',
        userId: 505,
    });
}
const updateSingleData = () => {
    makeRequest('PATCH', 'https://', {// PATCH = only change 1 thing not full body 
        title: 'Wait',
    });
}
const deleteData = () => {
    makeRequest('DELETE', 'https://', {// PATCH = only change 1 thing not full body 
    });
}

gggetData();
updateData();
updateSingleData();
deleteData();
