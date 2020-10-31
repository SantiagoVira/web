//  ID : [file, img, name]
let P={

    'CobraKai':["Cobra Kai/home.html","I/ck.png", 'Cobra Kai Clone'], 
    'ShoppingList':['Shopping/shop.html',"I/sc.png", 'Shopping List App'],
    'MurderMystery':["Murder Mystery/home.html","I/mm.png", 'Murder Mystery Role Picker'],
    'Radish':["Radish Website/home.html","I/r.png", 'Radish Newspaper Website'], 

}

function loadup(){
    let left=true
    for(var key in P){
        let ID=key 
        let data=P[ID]
        let doc=data[0]
        let img=data[1]
        let name=data[2]

        let a=document.createElement('a');
        a.href=doc;
        a.className='pTitle'
        a.id=ID

        ///////////////
        a.target="_blank"
        ///////////////


        //img
        let image=document.createElement('img')
        image.src=img
        image.className='link'

        //Title
        let title = document.createElement("P");
        title.appendChild(
            document.createTextNode(name)
        );
        
        //Description

        
        a.appendChild(title);
        a.appendChild(image);

        if(left){
            left=false;
            
            a.className+=' l'
        }else{
            left=true;
            a.className+=' r'
        }

        let div=document.getElementById('projects')
        div.appendChild(a);
    }
}