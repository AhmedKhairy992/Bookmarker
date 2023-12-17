
var btn=document.getElementById('btn');
var sitName=document.getElementById('SiteName');
var sitUrl=document.getElementById('SiteUrl');
var talbeRow=document.getElementById('talbeRow');

btn.onclick = function(){
    addsite()
}
var sitadd=[]

function addsite(){
    var addSite={
        websiteName:sitName.value,
        siteUrl: sitUrl.value,
    }
if( addSite.siteUrl.includes('https://') || addSite.siteUrl.includes('http://') || addSite.siteUrl.includes('www.')  ){
    sitadd.push(addSite);
}
else{
    alert('please enter url valid')
}
display();
clearItem()

}

function display(){
    var box ='';
    for(var i=0 ; i<sitadd.length ; i++){
        
        box +=`
        <tr>
        <td>${i+1}</td>
        <td>${sitadd[i].websiteName}</td>
        <td>
        <button class="btn  btn-success mt-3" type="button"
        onclick="visitPage('${sitadd[i].siteUrl}');" >
        <i class="fa-solid fa-eye"></i>
        visit
        </button>
        </td>
        <td>
        <button class="btn btn-danger mt-3" type="button" onclick='deleteItem(${i})'>
        <i class="fa-solid fa-trash"></i>
                Delete
        </button>
        </td>
    </tr>
        `
    }
    talbeRow.innerHTML=box;
}
function clearItem(){
    sitName.value='';
    sitUrl.value=''
    display()
}

function deleteItem(index){
    sitadd.splice(index,1);
    display()
}


function visitPage(index){
    window.location.href=index;

}


