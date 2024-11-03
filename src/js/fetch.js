window.onload = function() {
// ../../res/json/posts.json
    
    //fetch('https://api.jsonsilo.com/demo/2c479ed1-7c9c-464f-9967-c7a919108dc6')

    fetch('../WAD2024-2025-Group3-O/res/json/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for(i = 0; i < json.length; i++){
                let post = document.createElement("div");
                let postHead = document.createElement("div");
                let date = document.createElement("p");
                let postMessage = document.createElement("p");
                let img = document.createElement("img")

                let defaultPic = document.createElement("img");
                let likePic = document.createElement("img");

                defaultPic.src = "../../images/default_profile.jpg";
                likePic.src = "../../images/likeIcon.png";
                likePic.className = "like"

                post.className = "post";
                postHead.className = "postHead";

                date.className = "date";
                date.innerText = json[i].postDate

                postMessage.className = "postMessage";
                postMessage.innerText = json[i].message

                postHead.appendChild(defaultPic);
                postHead.appendChild(date)

                post.appendChild(postHead);
                if(json[i].image != null){
                    img.src = json[i].image
                    post.appendChild(img);
                }
                post.appendChild(postMessage);
                post.appendChild(likePic);

                document.getElementById("posts").appendChild(post)
            }
        })
}