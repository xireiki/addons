function welcome(){
  console.log(`%cWelcome to %c禾煦\n\
%c _\n\
| |\n\
| |__   _____  ___   _\n\
| \'_ \\ / _ \\ \\/ / | | |\n\
| | | |  __/>  <| |_| |\n\
|_| |_|\\___/_/\\_\\\\__,_|\n\
  `, `
    font-size: 20px;
  `, `
    color: rgb(241, 141, 0, 255);
    font-size: 20px;
  `, `
    font-size: 16px;
    color: rgb(241, 141, 0, 255);
  `);
}
function submitBackground(){
  files = $("input[name='background']").prop("files");
  if(files.length != 0){
    reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function(){
      $("html").css("background-image", "url(" + this.result + ")");
      imagelen = this.result.length;
      if(imagelen < 1024 * 1024 * 2){
        localStorage.setItem("backgroundImage", this.result);
      } else {
        alert("文件大小 > " + 1024 * 1024 * 2 + "，将不保存，刷新失效");
      }
    }
  } else {
    alert("请选择文件.");
  }
}
function clearBackground(){
  if(localStorage.getItem("backgroundImage")){
    localStorage.removeItem("backgroundImage");
    location.reload();
  } else {
    alert("请手动刷新，勿重复点击");
  }
}
function setting(){
  //获取或者设置设置信息
  var info = {"bg": true, "bgOptimize": false};
  if(localStorage.getItem("settingInfo")){
    Info = localStorage.getItem("settingInfo");
    info = $.parseJSON(Info);
  } else {
    Info = JSON.stringify(info);
    localStorage.setItem("settingInfo", Info);
  }
  //执行设置
  if(localStorage.getItem("backgroundImage") && info["bg"]){
    $("html").css("background-image", "url(" + localStorage.getItem("backgroundImage") + ")");
  } else if(info["bg"] && !localStorage.getItem("backgroundImage")){
    $("html").addClass("bg");
  }
  if(info["bgOptimize"]){
    $("html").css("background-position", "center 0");
  }
  //在设置中显示设置
  for (name in info){
    $("input[name=\"" + name + "\"]").prop("checked", info[name]);
  }
  //监听设置选项变化
  $("input[type=\"checkbox\"]").click(function(){
    info[this.name] = $(this).prop("checked");
    Info = JSON.stringify(info);
    localStorage.setItem("settingInfo", Info);
    location.reload();
  });
}
function 禾煦(){
  if(item("backgroundImage")){
    downDataUrl(item("backgroundImage"), "bg.jpg");
  } else {
    downUrl("./img/phone.jpg", "bg.jpg");
  }
}
(function(){
  $("head").append("<script scr=\"tool.js\"></script>");
  welcome();
})();
