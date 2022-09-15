# 第二週語法
```
<html>

<head>
  <title>購物車</title>
</head>

<body>
  <h1>我的購物車</h1>
  <p>您可以將下拉選單的項目，加入到購物車中！</p>
  <label for="product">商品清單</label>
  <select id="product">
    <option>維力炸醬麵</option>
    <option>可口可樂350ml</option>
    <option>辛拉麵</option>
    <option>巧克力</option>
    <option>棉花糖</option>
    <option>蛋炒飯</option>
  </select>
  <button>加入</button>
  <ul></ul>

  <button id="pay">結帳</button>

  <!-- 以下請勿更改 -->
  <script>
    const addBtn = document.querySelector('button');
    const payBtn = document.querySelector('#pay');
    const cart = document.querySelector('ul');
    const product = document.querySelector('select');
    addBtn.addEventListener('click', () => {
      const li = document.createElement('li');
      li.textContent = product.value;
      cart.appendChild(li);
    });
    payBtn.addEventListener('click', () => {

      if (cart.children.length === 0) {
        alert('購物車是空的');
        return;
      }

      let cartListString = '感謝您的購買，您本次購買的商品如下：';
      document.querySelectorAll('ul li').forEach((li) => cartListString += '\n' + li.textContent);
      alert(cartListString);
      document.location.reload();
    });

  </script>
  <!-- 以上請勿更改 -->

</body>

</html>
```
