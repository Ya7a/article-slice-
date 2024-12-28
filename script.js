document.getElementById("btn").addEventListener("click" , function(){
    var article = document.getElementById("article").value;
    var outPut= document.getElementById("outPut");
    var articlrString= article.slice(0,20);

    outPut.innerHTML=`<strong>your post </strong> <br>  ${articlrString}`;

    document.getElementById("article").value='';
})