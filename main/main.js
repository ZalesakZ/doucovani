const obrazek_1 = "https://ms1.ostium.cz/instance/web-recepty/j7RowdSE/h389w574t.jpg";
const obrazek_2 = "https://zahradyprodeti.cz/wp-content/uploads/2019/05/waffle2.jpg";
const obrazek_3 = "https://www.womanonly.cz/wp-content/uploads/2022/01/americke-livance.jpg";

function obrazek1()
{
    let img = document.getElementById("img");

    if(img.src == obrazek_1)
    {
        alert("Palačinky tam už jsou");
    }
    else
    {
        img.src=obrazek_1;
    }
}

function obrazek2()
{
    let img = document.getElementById("img");

    if(img.src == obrazek_2)
    {
        alert("Wafle tam už jsou");
    }
    else
    {
        img.src=obrazek_2;
    }
}

function obrazek3()
{
    let img = document.getElementById("img");

    if(img.src == obrazek_3)
    {
        alert("Lívance tam už jsou");
    }
    else
    {
        img.src=obrazek_3;
    }
}

function change()
{
    vstup = document.getElementById("vstup");

    if(vstup.value == "palacinky")
    {
        obrazek1();
    }
    else if(vstup.value == "wafle")
    {
        obrazek2();
    }
    else if(vstup.value == "livance")
    {
        obrazek3();
    }
    else
    {
        alert("Zadal si to špatně");
    }
    

}