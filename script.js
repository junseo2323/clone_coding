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
