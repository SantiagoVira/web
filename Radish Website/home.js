function print(txt){
    console.log(txt);
}


//Be sure to add to the top of ISSUES!!!
let issues={
    'Quarantine Cover.jpg':'5.20.pdf',
    'Bernie Cover.jpg':'3.20.pdf',
}

function loadup(){
    for(var key in issues){
        let cov=key
        let pdf=issues[cov]

        let a=document.createElement('a');
        a.href=pdf;
        a.target="_blank"
        let i=document.createElement('img')
        i.src=cov
        i.className='column'
        a.appendChild(i);

        let div=document.getElementById('frame')

        div.appendChild(a);
    }
}


function Scroll(){
    document.getElementById("frame").scrollIntoView({behavior: 'smooth'});
    
}

window.onbeforeunload = function () {
    window.scrollTo(0,0);
};