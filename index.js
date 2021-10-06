let container = document.getElementById("container");
let inputEle = document.getElementById("searchInput");
let noresultsFound = document.getElementById("noresultsFound");
let isSearchFound = false;

function render(obj,parent,searchKey){


    if(Object.keys(obj).length == 0){
        parent.classList.add("tree__child--leaf")
        return 
    }
     

    for(let key in obj){

        let div = document.createElement("div");
        div.classList.add("tree__child")
        let txt = document.createTextNode(key);
        div.appendChild(txt);

        render(obj[key],div,searchKey);

        if(searchKey){
            if(key === searchKey){
                div.classList.add("tree__child--search");
                isSearchFound = true
            }
        }
        
        parent.appendChild(div)

    }

}


inputEle.addEventListener("input",function(event){
    isSearchFound = false;
    let searchKey = event.target.value;
    container.innerHTML = "";
    render(treeObject,container,searchKey);
    
    if(!isSearchFound && searchKey.length > 0 ){
        noresultsFound.style.display = "block"
    }else{
        noresultsFound.style.display = "none"
    }



})



const treeObject = {root: 
    {
        child1: {
            child11:{ 
                child111: {}, 
                child112: {}
            }, 
            child12: {
                child121: {}
            }
        }, 
        child2: {}
    }
}
render(treeObject,container)