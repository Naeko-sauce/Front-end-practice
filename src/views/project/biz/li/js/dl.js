function submitForm(){
    console.log(22);
    //获取用户名和密码的对象
    var userEle = document.getElementById('username');
    var pwdEle = document.getElementById('pwd');
    //获取消息提示框的对象
   var divEle = document.getElementById("div1");

   //获取用户名和密码的值
   var userVal = userEle.value;
   var pwdVal = pwdEle.value;

   //判断
   if(userVal == ""){
       //消息提示框显示
       divEle.style.visibility = 'visible';
       divEle.innerHTML = "<span style='color:red'>用户名不能为空！</span>";
        //    focus()  获取焦点
        userEle.focus();
       //阻止表单提交
       return false;
   
   }

   if(pwdVal == ''){
       //消息提示框显示
       divEle.style.visibility = 'visible';
       divEle.innerHTML = "<span style='color:red'>密码不能为空！</span>";
       //    focus()  获取焦点
       pwdEle.focus();
       //阻止表单提交
       return false;
   }

//    用户名和密码都填写了，表单提交
   return true;
}