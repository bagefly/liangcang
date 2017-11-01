if(localStorage.getItem("username")!=""&&localStorage.getItem("password")!=""){
    $.post("http://h6.duchengjiu.top/shop/api_user.php",{status:"login",username:localStorage.getItem("username"),password:localStorage.getItem("password")},function(obj){
        $.post("http://h6.duchengjiu.top/shop/api_cart.php?token="+obj.data.token,function(obj){
            if(obj.code==0){
                var oUl=document.createElement("ul");
                var oNumber={};
                $("#goods").append(oUl);
                for(i=0;i<obj.data.length;i++){
                    var oLi=document.createElement("li");
                    var oImg=document.createElement("img");
                    var oInput=document.createElement("input");
                    $(oInput).css({position:"absolute",top:"0px",left:"20px"})
                    oInput.type="checkbox";
                    oInput.name="goods";
                    oImg.src=obj.data[i].goods_thumb;
                    $(oLi).append(oInput);
                    $(oLi).append(oImg);
                    $(oUl).append(oLi);

                    var detail=document.createElement("div");
                    $(detail).css({width:"300px",height:"100%",fontSize:"13px",color:"#999",marginLeft:"20px"});
                    detail.innerText=obj.data[i].goods_name;
                    $(oLi).append(detail);

                    var shuliang=document.createElement("div");
                    $(shuliang).css({color:"#444",marginLeft:"60px"});                    
                    var plus=document.createElement("span");
                    plus.innerText="+";
                    var shu=document.createElement("span");
                    oNumber.number=obj.data[i].goods_number;
                    shu.innerText=oNumber.number;
                    var min=document.createElement("span");
                    min.innerText="-";
                    $(shuliang).append(min);
                    $(shuliang).append(shu);
                    $(shuliang).append(plus);
                    $(oLi).append(shuliang);
                    $(plus).click(function(){
                        oNumber.number= parseInt(oNumber.number)+1;
                        shu.innerText=oNumber.number;                  
                    })
                    

                    

                }


            }

        })
    })
}