function create_option(option_value,inner_html,start,limit){
    let x ="";
    for(let i=start;i<limit+1;i++){
        let a = '<option value="'+String(option_value+i)+'">'+inner_html+i+'</option>';
        x += a;
    }
    return x;
}
function create_pr(std,limit){
    let x="";
    let m = 1;
    let n=30;
    for(let i=1;i<limit+1;i++){
        let mn = m+'-'+n;
        let a = '<option value="std_'+std+'_pr_'+mn+'">'+mn+'</option>';
        x+=a;
        m+=30;n+=30;
    }
    x+='<option value="all'+std+'">All</option>';
    return x;
}
function x(){
    var s = document.querySelector("#standard").value;
    var t = document.querySelector("#page_range");
    switch(s){
        case 'std1':
            tg("true");
            t.innerHTML = create_pr(1,3);
            break;
        case 'std2':
            tg("true");
            t.innerHTML = create_pr(2,3);
            break;
        case 'std3':
            tg("true");
            t.innerHTML = create_pr(3,4);
            break;
        case 'std4':
            tg("true");
            t.innerHTML = create_pr(4,4);
            break;
        case 'std5':
            tg("true");
            t.innerHTML = create_pr(5,4);
            break;
        case 'std6':
            tg("true");
            t.innerHTML = create_pr(6,4);
            break;
        case 'std7':
            tg("true");
            t.innerHTML = create_pr(7,4);
            break;
        case 'std8':
            tg("true");
            t.innerHTML = create_pr(8,5);
            break;
        case 'std9-1':
            tg("true");
            t.innerHTML = create_pr(9,5);
            break;
        case 'std9-2':
            tg("true");
            t.innerHTML = create_pr(9,5);
            break;
        case 'std10-1':
            tg("true");
            t.innerHTML = create_pr(10,7);
            break;
        case 'std10-2':
            tg("true");
            t.innerHTML = create_pr(10,6);
            break;
        case 'std11-1s':
            tg("true");
            t.innerHTML = create_pr(11,9);
            break;
        case 'std11-2s':
            tg("true");
            t.innerHTML = create_pr(11,8);
            break;
        case 'std11-1c':
            tg("true");
            t.innerHTML = create_pr(11,5);
            break;
        case 'std11-2c':
            tg("true");
            t.innerHTML = create_pr(11,6);
            break;
        case 'std12-1s':
            tg("true");
            t.innerHTML = create_pr(12,10);
            break;
        case 'std12-2s':
            tg("true");
            t.innerHTML = create_pr(12,10);
            break;
        case 'std12-1c':
            tg("true");
            t.innerHTML = create_pr(12,7);
            break;
        case 'std12-2c':
            tg("true");
            t.innerHTML = create_pr(12,7);
            break;
        case 'download':
            tg("false");
            break;
        default:
            tg("true");
            t.innerHTML = create_pr(8,3);
            break;
    }
    z();
}

function z(){
    var n = document.querySelector("#page_range").value;
    var y = document.querySelector("#frame");
    let lang = "Maths";
    let m="";
    for(let i=0;i<n.length;i++){
        if(n[i]=='p'){
            for(let z=i;z<n.length;z++){
                m+=n[z];
            }
            break;
        }
        else if(n[i]=='a'){
            m="main";
            break;
        }
    }
    let x = document.querySelector("#standard").value;
    let std ="";
    for(let i=3;i<x.length;i++){
        std += x[i];
    }
    switch(x){
        case 'std9-1':
            y.src = 'Maths Std 9/Maths Part-1/'+m+'.html';
            break;
        case 'std9-2':
            y.src = 'Maths Std 9/Maths Part-2/'+m+'.html';
            break;
        case 'std10-1':
            y.src = 'Maths Std 10/Maths Part-1/'+m+'.html';
            break;
        case 'std10-2':
            y.src = 'Maths Std 10/Maths Part-2/'+m+'.html';
            break;
        case 'std11-1s':
            y.src = 'Maths Std 11/Maths & Statistics Part-1 (Arts & Science)/'+m+'.html';
            break;
        case 'std11-2s':
            y.src = 'Maths Std 11/Maths & Statistics Part-2 (Arts & Science)/'+m+'.html';
            break;
        case 'std11-1c':
            y.src = 'Maths Std 11/Maths & Statistics Part-1 (Commerce)/'+m+'.html';
            break;
        case 'std11-2c':
            y.src = 'Maths Std 11/Maths & Statistics Part-2 (Commerce)/'+m+'.html';
            break;
        case 'std12-1s':
            y.src = 'Maths Std 12/Maths & Statistics Part-1 (Arts & Science)/'+m+'.html';
            break;
        case 'std12-2s':
            y.src = 'Maths Std 12/Maths & Statistics Part-2 (Arts & Science)/'+m+'.html';
            break;
        case 'std12-1c':
            y.src = 'Maths Std 12/Maths & Statistics Part-1 (Commerce)/'+m+'.html';
            break;
        case 'std12-2c':
            y.src = 'Maths Std 12/Maths & Statistics Part-2 (Commerce)/'+m+'.html';
            break;
        default:
            y.src = lang+' Std '+std+'/'+m+'.html';
    }
    //y.src = lang+' Std '+std+'/'+m+'.html';
}

function tg(v){
    if(v=="true"){
        document.querySelector("#standard").style.display="inline-block";
        document.querySelector("#page_range").style.display="inline-block";
        document.querySelector("#frame").style.display="block"
    }
    else{
        document.querySelector("#frame").style.display="none";
        document.querySelector(".download").style.display="block";
        document.querySelector("#page_range").style.display="none";
    }
}
