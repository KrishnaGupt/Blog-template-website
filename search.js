let searchBtn = document.getElementById('sBtn')

searchBtn.addEventListener('click' , ()=>{
    let search = document.getElementById('search')
    let localSearch =  localStorage.getItem("result")
    if (localSearch == null) {
        resultObj = []
    }
    else{
        resultObj.parse(localSearch)
    }
    let searchObj = {
        searched: search.value
    }
    resultObj.push(searchObj)
    localStorage.setItem("locals", JSON.stringify(resultObj));
    showResult();
    
    
    function showResult() {
        let result = localStorage.getItem("locals")
    if (result == null) {
        resultObj = [];
    }
    else {
        resultObj = JSON.parse(result);
    }
    let object = '';
    resultObj.forEach(function (element){
        object = `<h1 class="head" id="blog">Search result for ${element.searched}</h1>`;
    })
    let head = document.getElementById('s-blog')
    head.innerHTML = object;
}
})

let backBtn = document.getElementById('back')

backBtn.addEventListener('click', goBack)

function goBack() {
    history.go(-1)
}