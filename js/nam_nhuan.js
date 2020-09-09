function kiemTra(){
    let n=parseInt(document.getElementById("nhapnam").value);
    if( n%4==0 ){
        if( n%100==0 && n%400!=0){
            alert("nam "+n+" ko phai la nam nhuan");
        }else{
            alert("nam "+n+" la nam nhuan");
        }
    }else{
        alert("nam "+n+" ko phai la nam nhuan");
    }
}