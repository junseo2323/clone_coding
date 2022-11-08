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
        tmp2.style.color = "red";
        tmp3.style.color = "red";
        tmp4.style.color = "red";
    }
    if (x == "main_nav2"){
        tmp.style.color = "red";
        tmp2.style.color = "black";
        tmp3.style.color = "red";
        tmp4.style.color = "red";
    }
    if (x == "main_nav3"){
        tmp.style.color = "red";
        tmp2.style.color = "red";
        tmp3.style.color = "black";
        tmp4.style.color = "red";
    }
    if (x == "main_nav4"){
        tmp.style.color = "red";
        tmp2.style.color = "red";
        tmp3.style.color = "red";
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