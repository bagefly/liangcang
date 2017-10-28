var x=$("#Banner ul li").innerWidth();
console.log(x)
var index=0;
var timer=setInterval(move,2000)
function move(){
  index++;
  $("#Banner #img").animate({"left":-index*x},300,function(){
        if(index>=5){
            $("#Banner #img").css({left:0})
            index=0;
        }
    $("#bLine li").removeClass("current");
    $("#bLine li").eq(index).addClass("current");
  });
}
$("#bLine li").click(function(){
    clearInterval(timer);
    $("#Banner #img").animate({left:-$(this).index()*x});
    index=$(this).index();
    console.log(index)
    $("#bLine li").removeClass("current");
    $("#bLine li").eq(index).addClass("current");
    timer=setInterval(move,2000);
})