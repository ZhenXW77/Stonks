export default function doQuery(type, stock = null, extradata = null){
    //window.alert("Hello");
    let returndata = null;
    let queryString = "http://localhost:5000/query?q=" + type;
    if (stock != null){
        queryString = queryString + "&stock=" + stock;
    }
    if (extradata != null){
        queryString = queryString + "&extradata=" + extradata; 
    }
    queryString = "http://localhost:5000/query?q=count";
    fetch(queryString, {
        method: "post",
        headers: {'Content-Type': 'application/json'},
        body: ""
    }).then(response=>response.json()).then(data=>{
        window.alert()
        console.log(data);
        console.log(data.metaData)
        console.log(data.rows)
        console.log("aaaa")
        returndata = data;
        return returndata;
    })

}

