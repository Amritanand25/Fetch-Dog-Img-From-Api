let renderPlace = document.getElementById('renderImg');

 let submitBtn = document.getElementById('submitbtn');
submitBtn.addEventListener('click', () => {
    let inputValue = document.getElementById('inputvalue').value;
    let createImg = document.createElement("img");
    let url = 'https://dog.ceo/api/breed/hound/images';
    fetch(url)
        .then(response => response.json())
        .then(commits => {
            if(inputValue >= 1000)
            {
                alert("please enter less then 1000..");
            }else{
            createImg.setAttribute('src', `${commits.message[inputValue]}`);
            renderPlace.appendChild(createImg);
            }
        });

});

