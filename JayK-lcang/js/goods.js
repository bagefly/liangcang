// 缓冲运动
var Content = document.querySelector(".content");
Content.innerHTML +=  Content.innerHTML;
var idx = 1;

function ImgMove(){

    animate(Content,{"left":-355*idx},1000,"Linear",function(){
        for(i=0;i<Li.length;i++){
            LiImg[i].className = "";    
        }
        LiImg[idx].className = "imgborder";
        idx++;
        if(idx>=5 ){
            idx=0;
        };
    });
}
var t = setInterval(ImgMove,3000);

// 点击收藏 再点击取消收藏
var Heart = document.querySelector(".heart");
var Like = document.querySelector(".like");

var abc = 0;
Heart.onclick = function(){
    abc++;
    if(abc%2 != 0 ){
        Like.innerHTML = "151";
        this.className = "redheart";
    }else{
        Like.innerHTML = "150";
        this.className = "heart";
    }
}
// 点击切换图片
var ImgList = document.querySelector(".img-list");
var LiImg = ImgList.getElementsByTagName("li");
var Left = ImgList.querySelector(".left");
var Right = ImgList.querySelector(".right");
var Img = ImgList.getElementsByTagName("img");
console.log(Img);
var order = 0;

// 点击右按钮,图片显示边框
Right.onclick = function(){
    for(i=0;i<Li.length;i++){
        LiImg[i].className = "";    
    }
    LiImg[idx].className = "imgborder";
    idx++;
    if(idx > 4){
        idx = 0;
    }
}

// 点击左按钮,图片显示边框
Left.onclick = function(){
    for( k = 0; k < Li.length; k++ ){
        LiImg[k].className = "";
    }
    LiImg[idx].className = "imgborder";
    idx--;
    if( idx < 0 ){
        idx = 4;
    }
}

// 点击图片显示该图片的边框
for( k = 0; k < Img.length; k++ ){
    
    Img[k].xxx = k;
    Img[k].onclick = function(){    
        for( j = 0; j < Img.length; j++ ){
            LiImg[j].className = "";
        }
        LiImg[this.xxx].className = "imgborder";
    }
}

// 点击图片显示对应的轮播图里的图片




// 点击修改数量
var But = document.querySelector(".but");
var Reduce = document.querySelector(".reduce");
var Plus = document.querySelector(".plus");
var quantity = But.value;
But.disabled = true;
But.style.backgroundColor = "#fff";
// 点击数量增加
Plus.onclick = function(){
    quantity++;
    But.value = quantity;
}
// 点击数量减少
Reduce.onclick = function(){
    quantity--;
    But.value = quantity;
    if( quantity == 1 ){
        return;
    }
}

// 点击不同型号 显示边框
var Type = document.querySelector(".type");
var Li = Type.getElementsByTagName("li");
for( i = 0; i < Li.length; i++ ){
    Li[i].onclick = function(){
        for( i = 0; i < Li.length; i++){
            Li[i].className = "";
        }
        this.className = "on";
        But.value = 1;
    }
}
