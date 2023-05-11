function getNumber(params) {
 let URL="http://localhost:8080/get-number"
 const initDetails = {
    method: 'get',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    mode: "cors"
}
    fetch(URL,initDetails )
        .then(response => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                response.status);
                return;
            }
    
            console.log(response.headers.get("Content-Type"));
            return response.json();
            }
        )
        .then(number => {
            console.log(JSON.stringify(number));
            document.getElementById("age").innerHTML = number.age +" Years Old";
        })
        .catch(err => {
            console.log('Fetch Error :-S', err);
        });
}