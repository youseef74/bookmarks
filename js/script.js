
var bookmarkNameInput = document.getElementById("bookmarkName")
var bookmarkUrlInput = document.getElementById("bookmarkUrl")


var bookList=[];
function addBook(){
    var book={
        name:bookmarkNameInput.value,
        url:bookmarkUrlInput.value
    }
    bookList.push(book);
    displayData();
    clearForm();
}




function displayData(){
    var cartona="";

    for(var i=0;i<bookList.length;i++){
        cartona+=
        `<tr>
        <td>${i+1}</td>
        <td>${bookList[i].name}</td>
        <td>
        <a href="${bookList[i].url}" target="_blank"><button class="border-0 rounded-2 py-2 px-4 btn-visit text-center"><i class="fa-solid fa-eye"></i>  Visit</button></a>
        </td>
        <td>
            <button onclick="deleteItem(${i})"class="border-0 rounded-2 py-2 px-4 btn-delete text-center"><i class="fa-solid fa-trash"></i>  Delete</button>
        </td>
        </tr>
        `
        
    }
    document.getElementById("tableDAta").innerHTML=cartona;
}

function clearForm(){
    bookmarkNameInput.value=null
    bookmarkUrlInput.value=null

}

function deleteItem(index){
    bookList.splice(index,1)
    displayData();
    console.log(bookList);
}
var box=`
<div 
        class="box-info position-absolute start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center d-none">
        <div class="box-conent bg-white p-4 rounded-2 shadow-lg">
          <header
            class="box-header w-100 d-flex justify-content-between align-items-center mb-4"
          >
            <div class="circles d-flex">
              <span class="rounded-circle c-1 me-2"></span>
              <span class="rounded-circle c-2 me-2"></span>
              <span class="rounded-circle c-3 me-2"></span>
            </div>
            <button class="btn border-0" id="closeBtn">
              <i class="fa-solid fa-xmark close fs-3"></i>
            </button>
          </header>
          <p class="m-0 pb-2">
            Site Name or Url is not valid, Please follow the rules below :
          </p>
          <ol class="rules list-unstyled m-0">
            <li>
              <i class="fa-regular fa-circle-right p-2"></i>Site name must
              contain at least 3 characters
            </li>
            <li>
              <i class="fa-regular fa-circle-right p-2"></i>Site URL must be a
              valid one
            </li>
          </ol>
        </div>
      </div>
`
function addSite(){
    var site={
        name:bookmarkNameInput.value,
        url:bookmarkUrlInput.value
    };
    
    if(site.name.length>3&&isvalidUrl(site.url)){

    }
    else{
        
    }
}