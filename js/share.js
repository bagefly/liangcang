window.onload=function(){
    $.get("http://h6.duchengjiu.top/shop/api_goods.php",{pagesize:3,page:8},function(obj){
        var brandArr=["Burj Al-Arab","Rolex","Chanel","Tiffany","Louis Vuitton","Hennessy","Ralph Lauren"];
        var picArr=["http://imgs-qn.iliangcang.com/ware/userhead/tmb/1/597.jpg?t=1509419469","http://imgs-qn.iliangcang.com/ware/userhead/tmb/3/893/851/893851309.jpg?t=1509414833","http://imgs-qn.iliangcang.com/ware/userhead/tmb/3/999/998/999998847.jpg?t=1509419469"]
        var oUl=document.createElement("ul");
        $("#Hot").append(oUl);
        for(i=0;i<obj.data.length;i++){
            var oA=document.createElement("a");
            oA.href="";
            var oLi=document.createElement("li");
            var brand=document.createElement("div");
            $(brand).addClass("grey");
            var oImg=document.createElement("img");
            $(oImg).css({float:"left"});
            var pC=parseInt(Math.random()*3);
            oImg.src=picArr[pC];
            var x=parseInt(Math.random()*7);
            var name=document.createElement("div");
            name.innerText=brandArr[x];
            $(name).css({font:"bold 13px/32px arail",float:"left"})            
            var y=parseInt(Math.random()*200+200);
            var star=document.createElement("div");
            star.innerText=y;
            $(star).css({color:"#666",font:"bold 13px/32px arail",float:"right"});
            var Simg=document.createElement("img");
            Simg.src="http://imgs-qn.iliangcang.com/images/default/xin_black.png";
            $(Simg).css({float:"right",marginTop:"10px"});            
            $(brand).append(oImg);
            $(brand).append(name);            
            $(brand).append(Simg);            
            $(brand).append(star);            
            $(oLi).append(brand);
            $(oA).append(oLi);
            $(oUl).append(oA);
            var box=document.createElement("div");
            $(box).css({position:"relative",width:"308px",height:"308px"});
            var hotImg=document.createElement("img");
            $(hotImg).css({width:"308px",height:"308px"})
            hotImg.src=obj.data[i].goods_thumb;
            box.appendChild(hotImg);
            oLi.appendChild(box);

            var text=document.createElement("div");
            $(text).addClass("text");
            box.appendChild(text);
            var price=document.createElement("span");
            price.innerText="￥"+obj.data[i].price;
            $(price).css({color:"white"})
            text.appendChild(price);

            var shareImg=document.createElement("img");
            shareImg.src="http://imgs-qn.iliangcang.com/images/default/icon_send.png";
            $(shareImg).css({float:"right",marginTop:"10px",marginRight:"10px"})
            text.appendChild(shareImg);

            var goodName=document.createElement("div");
            goodName.innerText=obj.data[i].goods_name;
            $(goodName).addClass("goodName");
            $(text).append(goodName);            

        }
    });

    var option=document.createElement("div");
    $(option).css({height:"150px",width:"95px",position:"absolute",display:"none"});
    var tri=document.createElement("div");
    $(tri).css({width:"0px",height:"0px",textAlign:"center",borderBottom:"10px solid rgba(0,0,0,0.0)",borderLeft:"10px solid rgba(0,0,0,0.0)",borderRight:"10px solid rgba(0,0,0,0.0)",borderBottom:"12px solid rgba(0,0,0,0.6)"});
    $(option).append(tri);
    var priceTab=document.createElement("div");
    
    $(priceTab).css({width:"100%",height:"145px",color:"white",textAlign:"center",background:"rgba(0,0,0,0.6)",borderRadius:"3%",position:"absolute",left:"-38px"})
    $(priceTab).html("<a><p>0-200元</p></a><a><p>201-500元</p></a><a><p>501-1000元</p></a><a><p>1001-3000元</p></a><a><p>3000元以上</p></a>");
    $(option).append(priceTab);
    $("#jiage").append(option);
    $("#jiage").mousemove(function(){
        $(option).show();
    })
    $(option).mouseout(function(){
        $(option).hide();
    })

    $.get("http://h6.duchengjiu.top/shop/api_goods.php",{cat_id:"69",pagesize:"28"},function(obj){
        console.log(obj)

    })
}