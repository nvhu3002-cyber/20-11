// tạo nhiều trái tim ngẫu nhiên
    const numHearts = 30;
    for (let i = 0; i < numHearts; i++) {
      const h = document.createElement('div');
      h.classList.add('heart');
      // vị trí bắt đầu ngang ngẫu nhiên
      h.style.left = (Math.random() * 100) + 'vw';
      // time delay và duration khác nhau
      h.style.animationDelay = (Math.random() * 5) + 's';
      h.style.animationDuration = (5 + Math.random() * 5) + 's';
      document.body.appendChild(h);
    }