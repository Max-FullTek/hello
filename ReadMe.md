# 第二週語法-購物車
```
<html>

<head>
  <title>購物車</title>
</head>

<body>

  <!-- 請在下方加入本週的HTML語法 -->









  <!-- 請在上方加入本週的HTML語法 -->

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
