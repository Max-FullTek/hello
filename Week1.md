# 第一週語法
```
<html>

<head>
  <title>你好世界</title>
</head>

<body>
  <h1>測試標題</h1>
  <p>你好</p>
  <label for="name">請輸入名稱</label>
  <input
    id="name"
    type="text"
  />
  <button onclick="sayHello()">加入</button>
  <ul>
    <li>清單項目1</li>
    <li>清單項目2</li>
    <li>清單項目3</li>
  </ul>
  <ol>
    <li>有序清單項目1</li>
    <li>有序清單項目2</li>
    <li>有序清單項目3</li>
  </ol>

  <script>
    function sayHello() {
      alert(document.querySelector('#name').value + '您好！');
    }
  </script>
</body>

</html>
```
