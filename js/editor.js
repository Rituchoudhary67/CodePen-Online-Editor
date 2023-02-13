let htmlCode = document.querySelector("#html-code") ;
let cssCode = document.querySelector("#css-code");
let jsCode = document.querySelector("#js-code");
// console.log(htmlCode)
function run() {
    let htmlCode = document.querySelector("#html-code").value;
    let cssCode = "<style>"+document.querySelector("#css-code").value+"</style>";
    let jsCode = document.querySelector("#js-code").value;
    let output = document.querySelector("#output");
    // console.log(htmlCode,cssCode,jsCode,output)  
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);

}
htmlCode.addEventListener("keyup",run);
cssCode.addEventListener("keyup",run);
jsCode.addEventListener("keyup",run);