//creating variables for the element (input field and button)

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!")
    }
    else{
        let li = document.createElement("li")//creating li element and storing it in li variable
        li.innerHTML = inputBox.value //li.innerhtml//text inside the li//whatever text we are adding in the input field that will be added in this li
        listContainer.appendChild(li)//as we have taken listcontainer variable above so here we have taken list container li so this li will be displayed under the list container
        let span = document.createElement("span")//will add the cross icon within the span tag
        span.innerHTML = "\u00d7"// to add content we have used span.innerHTML//cross icon code
        li.appendChild(span)//here we will display the span
    }
    
        inputBox.value="";//will clear the input field after adding the text
        saveData();//when ever we will add any task this save data will be called and it will save the updated content in the browser
    
}

//adding javascript for the click  function

listContainer.addEventListener("click",function(e){//whenever we will click on the container first it will check where we have clicked
    if(e.target.tagName === "LI"){// if we have clicked on LI then it should add the check class name
        e.target.classList.toggle("checked");//if the check class name is already there it will remove that (because we have added class list toggle from the target element if the clicked target element is li)
        saveData();//when we will check and uncheck the task then we will call the save data     
    }
    else if(e.target.tagName==="SPAN"){//if the clicked target element is span then it will delete the targeted element
        e.target.parentElement.remove();//the parent element is the li element so it will remove the li so the task will be deleted
        saveData();//will call it here also when the task is deleted//then again we will save the new data
    }
},false)


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)//whatever content is there in the list container will be stored in the browser with the name of data
}

// to display the data whenever we will open the website again

function showTask(){
     listContainer.innerHTML = localStorage.getItem("data")//it will give all the content in the browser with the name data
}

showTask()