function reset(){
    //gets rid of the lists
    localStorage.setItem('storedItem', JSON.stringify([]));
    //gets rid of the stuff on the screen
    ClearLabels()
}

function ClearLabels(){
    document.getElementById('buttons').innerHTML=''
}

function AddItem(item){
    let Label=document.createElement('p');
    Label.appendChild(document.createTextNode(item))
    Label.className='buttons'

    let final=document.getElementById('buttons')
    console.log(final)
    final.appendChild(Label, document.createElement("br"))          

}

function AddAll(){
    let Item=JSON.parse(localStorage.getItem('storedItem'));
    for (index = 0; index < Item.length; index++) { 
        AddItem(Item[index]); 
        console.log(Item[index])
    } 
}

function Add(){
    
    let storedItem=JSON.parse(localStorage.getItem('storedItem'));
    let NewItem=document.getElementById('item').value;

    let all =storedItem
    all.push(NewItem)

    localStorage.setItem('storedItem', JSON.stringify(all));

    ClearLabels()
    AddAll()

    document.getElementById('item').value = ''
    }

function remove(){
    //for the buttons to mark it as gotten
    null;
}
