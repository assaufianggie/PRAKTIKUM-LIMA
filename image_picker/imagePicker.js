function change_pic(set) {
    var photo
    if(set == 'cat'){
        photo = "img/cat.jpg"
        alert("This is a cat")
    } else if(set == 'lion'){
        photo = "img/lion.jpg"
        alert("This is a lion")
    } else if(set == 'tiger'){
        photo = "img/tiger.jpg"
        alert("This is a tiger")
    } else if(set == 'dog'){
        photo = "img/dog.jpg"
        alert("This is a dog")
    } else if(set == 'pig'){
        photo = "img/pig.jpeg"
        alert("This is a pig")
    } else if(set == 'elephant'){
        photo = "img/elephant.jpg"
        alert("This is a elephant")
    } else if(set == 'giraffe'){
        photo = "img/giraffe.jpg"
        alert("This is a giraffe")
    }
    console.log(photo);
    document.getElementById("pic").src = photo
}