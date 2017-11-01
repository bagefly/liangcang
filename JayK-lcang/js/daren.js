var url = "http://h6.duchengjiu.top/shop/api_goods.php";
$.get(url,{"page":"10","pagesize":"20"},function(str){
    console.log(str);
    console.log(str.data);
})




