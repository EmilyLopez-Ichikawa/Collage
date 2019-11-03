window.onload = function() {
    let url = new URL(window.location.href);
    let user = url.searchParams.get("user");

    var username = this.document.getElementById("name");
    var container = this.document.getElementById("container");
    let encodedImageString = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

    const apiUrl = './api/userImages?user=' + user;
    this.console.log("about to make fetch call to " + apiUrl);
    fetch(apiUrl, {
        method: "GET",
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(function(responses){
        // console.log('Success:', JSON.stringify(responses))
        let nameText = document.createTextNode(user);
        username.appendChild(nameText);
        for(var i = 0; i < responses.length; i++){
            let latText = document.createTextNode(responses[i].lat);
            let longText = document.createTextNode(responses[i].long);
            let encodedImageString = document.createTextNode(responses[i].image);

            // var imageElement = document.createElement("div");
            // imageElement.appendChild(latText);
            // imageElement.appendChild(longText);
            // imageElement.appendChild(imageIdText);

            var imageElement = document.createElement("img");
            imageElement.setAttribute("src", 'data:image/png;base64, ' + encodedImageString);

            container.appendChild(imageElement);
        }
    })
    .catch(error => console.error('Error:',error))
};
