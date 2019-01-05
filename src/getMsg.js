var btn = document.getElementsByClassName('btn')[0];
window.addEventListener('click', function () {
  var xhr = new window.XMLHttpRequest();
  xhr.open('GET', '/api/hello', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = xhr.responseText;
      var msgBox = document.getElementsByClassName('msg')[0];
      msgBox.innerHTML = data;
    }
  }
  xhr.send(null);
});
