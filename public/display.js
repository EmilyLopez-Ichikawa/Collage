window.onload = function() {
    let url = new URL(window.location.href);
    let user = url.searchParams.get("user");

    var username = document.getElementById("name");
    var container = document.getElementById("container");

    const apiUrl = './api/userImages?user=' + user;

    fetch(apiUrl, {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(function(responses){
        let nameText = document.createTextNode(user);
        username.appendChild(nameText);

        var rowElements = [];
        for(var i = 0; i < responses.length; i++){
            if(i%3 == 0){
                rowElement = document.createElement("div");
                rowElement.setAttribute("class", "row");
                rowElements.push(rowElement);
            }
            var gridElement = document.createElement("div");
            gridElement.setAttribute("class", "col-4");
            
            let encodedImageString = responses[i].image;
            var imageElement = document.createElement("img");
            imageElement.setAttribute("src", 'data:image/png;base64, ' + encodedImageString);

            gridElement.appendChild(imageElement);
            rowElement.appendChild(gridElement);
        }
        for(var j = 0; j < rowElements.length; j++){
            container.appendChild(rowElements[j]);
        }
    })
    .catch(error => console.error('Error:',error))
};

