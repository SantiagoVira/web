function print(txt){
    console.log(txt);
}

let issues={
    'Radish Cover.jpg':'MARCH ISSUE FINAL.pdf',
    'Radish Cover1.jpg':'MARCH ISSUE FINAL.pdf',
    'Radish Cover2.jpg':'MARCH ISSUE FINAL.pdf',
    'Radish Cover3.jpg':'MARCH ISSUE FINAL.pdf',
}

function loadup(){
    for(var key in issues){
        let cov=key
        let pdf=issues[cov]

        let a=document.createElement('a');
        a.href=pdf;
        let i=document.createElement('img')
        i.src=cov
        i.className='column'
        a.appendChild(i);

        document.body.appendChild(a);
    }
}