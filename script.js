function nav_click1() {
    var tmp = document.getElementById("drop_list1")
    var tmp2 = document.getElementById("drop_list2")
    var tmp3 = document.getElementById("drop_list3")
    if(tmp.style.display !== 'none' )
        {tmp.style.display = "none";}
    else if (tmp2.style.display == 'block' || tmp3.style.display == 'block')
    {   
        tmp3.style.display = "none";
        tmp2.style.display = "none";
        tmp.style.display = "block";
    }
    else {
        tmp.style.display = "block";
    }

}

function nav_click2() {
    var tmp = document.getElementById("drop_list2")
    var tmp2 = document.getElementById("drop_list1")
    var tmp3 = document.getElementById("drop_list3")
    if(tmp.style.display !== 'none' )
        {tmp.style.display = "none";}
    else if (tmp2.style.display == 'block' || tmp3.style.display == 'block')
    {   
        tmp3.style.display = "none";
        tmp2.style.display = "none";
        tmp.style.display = "block";
    }
    else {
        tmp.style.display = "block";
    }
}

function nav_click3() {
    var tmp = document.getElementById("drop_list3")
    var tmp2 = document.getElementById("drop_list2")
    var tmp3 = document.getElementById("drop_list1")
    if(tmp.style.display !== 'none' )
        {tmp.style.display = "none";}
    else if (tmp2.style.display == 'block' || tmp3.style.display == 'block')
    {   
        tmp3.style.display = "none";
        tmp2.style.display = "none";
        tmp.style.display = "block";
    }
    else {
        tmp.style.display = "block";
    }
}

function nav_change_col(x) {
    var tmp = document.getElementById("main_nav1")
    var tmp2 = document.getElementById("main_nav2")
    var tmp3 = document.getElementById("main_nav3")
    var tmp4 = document.getElementById("main_nav4")
    console.log(x);
    if (x == "main_nav1"){
        tmp.style.color = "black";
        tmp2.style.color = "gray";
        tmp3.style.color = "gray";
        tmp4.style.color = "gray";
    }
    if (x == "main_nav2"){
        tmp.style.color = "gray";
        tmp2.style.color = "black";
        tmp3.style.color = "gray";
        tmp4.style.color = "gray";
    }
    if (x == "main_nav3"){
        tmp.style.color = "gray";
        tmp2.style.color = "gray";
        tmp3.style.color = "black";
        tmp4.style.color = "gray";
    }
    if (x == "main_nav4"){
        tmp.style.color = "gray";
        tmp2.style.color = "gray";
        tmp3.style.color = "gray";
        tmp4.style.color = "black";
    }
}

function nav_change_col_out() {
    var tmp = document.getElementById("main_nav1")
    var tmp2 = document.getElementById("main_nav2")
    var tmp3 = document.getElementById("main_nav3")
    var tmp4 = document.getElementById("main_nav4")
    tmp.style.color = "black";
    tmp2.style.color = "black";
    tmp3.style.color = "black";
    tmp4.style.color = "black";
}

let today = new Date();   

let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일

const week =  ["일","월","화","수","목","금","토"]

window.onload=function() {
    let x = document.getElementsByClassName("month")[0];
    x.innerText=month; 
    let y = document.getElementsByClassName("day")[0];
    y.innerText=date;
    let z = document.getElementsByClassName("days")[0];
    z.innerText=week[day];
};

