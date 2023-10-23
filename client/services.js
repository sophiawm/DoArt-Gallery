

const getData =()=>{

    fetch('')
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })
}


const postData =(url, data)=>{

    fetch(`${url}`,{
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(data)
    })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })
}


const deleteData =(url)=>{

    fetch(`${url}`,{
        method: 'DELETE',
        headers: {'content-type':'application/json'},
        body: JSON.stringify()
    })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })
}


const putData =(url)=>{

    fetch(`${url}`,{
        method: 'PUT',
        headers: {'content-type':'application/json'},
        body: JSON.stringify()
    })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch((error)=>{
            console.log(error)
        })
}