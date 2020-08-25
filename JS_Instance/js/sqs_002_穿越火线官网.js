/**
 * 轮播图的逻辑:
 *      ·将所有的图片路径封装到数组里
 *      ·获取所有的li节点（遍历数组）
 *      ·获取img节点
 *      ·给li绑定事件
 *      ·事件绑定函数，执行切换img的src属性
 *      ·每隔两秒换图：触发函数
 */


//  将所有的图片路径封装到数组里
var arr_img = ["//ossweb-img.qq.com/upload/adw/image/20200814/608e2deb549163a0370250cb72699e9a.jpeg",
            "//ossweb-img.qq.com/upload/adw/image/20200801/98b78c142bbcb48aa13dec6ff5fcc927.jpeg",
            "//ossweb-img.qq.com/upload/adw/image/20200804/e1d54fc161fa01ff309f147d6966c129.jpeg",
            "//ossweb-img.qq.com/upload/adw/image/20200817/690b4cb09286989e57d0d2f3fe7ff7c4.jpeg",
            "//ossweb-img.qq.com/upload/adw/image/20200731/e5c5e7a2ea8a99edc5ec96d9f36002a5.jpeg",
            "//ossweb-img.qq.com/upload/adw/image/20200801/8372bcb8c041cf99eafa1d8d86154915.jpeg",
            "//ossweb-img.qq.com/upload/adw/image/20200804/f15457b1d68aef4831b1f8b5246088a3.jpeg",
            "//ossweb-img.qq.com/upload/adw/image/20200815/9f8d11be08e906136a22e89b0db5eecc.jpeg"
]

// 获取img节点
var img = document.getElementsByClassName("scroll_img")[0].firstElementChild.firstElementChild;
console.log(img);

// 获取所有的li节点
var list = document.getElementById("list").children;

var index = 0;

// 鼠标移入切换图片F
function scrollFun(){
    for(var i=0;i<list.length;i++){
        
        // 鼠标经过的事件
        list[i].onmouseover=function(){
            index = this.getAttribute('data-index');

            // 改变图片的src
            img.setAttribute("src",arr_img[index]);

            // 清除其他元素变红
            for(var j=0;j<list.length;j++){
                list[j].setAttribute("style","background-color: ");
            }

            // 使该li变红
            list[index].setAttribute("style","background-color: #f54027");

            }
        }

}

// 每隔一段时间切换图片
function autoFun(){

        console.log(index);
        console.log(list.length);
        if(index>=list.length-1){
            index=0;
            console.log("停");
        }
        img.setAttribute("src",arr_img[index]);
        index++;
        
   
}




setInterval("autoFun();",2000); 
scrollFun();



