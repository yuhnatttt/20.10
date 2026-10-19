    /* =========================
       3. CHỈNH LỜI CHÚC TẠI ĐÂY
       ========================= */
    const CONFIG = {
      tenNguoiNhan: "người đặc biệt",
      loiChuc: "Chúc em một ngày 20/10 thật rạng rỡ, luôn được yêu thương, trân trọng và có thật nhiều lý do để mỉm cười.\n\nDù hôm nay hay bất cứ ngày nào, mong em luôn hạnh phúc theo cách riêng của mình! 💗",
      nguoiGui: "Từ Huy, với tất cả yêu thương ♡"
    };

    const scene = document.getElementById("scene");
    const actionBtn = document.getElementById("actionBtn");
    const actionText = document.getElementById("actionText");
    const actionIcon = document.getElementById("actionIcon");
    const story = document.getElementById("story");
    const status = document.getElementById("status");
    const bubble = document.getElementById("bubble");
    const dialog = document.getElementById("giftDialog");
    const stars = document.getElementById("stars");
    let stage = 0; // 0: Huy đang ngủ, 1: thức giấc, 2: mở quà

    // Tạo những ngôi sao bằng JavaScript.
    for (let i = 0; i < 75; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.setProperty("--s", (Math.random() * 2.8 + 1) + "px");
      star.style.setProperty("--o", (Math.random() * .65 + .22).toFixed(2));
      star.style.setProperty("--d", (Math.random() * 3 + 2).toFixed(2) + "s");
      stars.appendChild(star);
    }

    function celebrate(amount = 30) {
      const icons = ["💗", "🌸", "✨", "💖", "✿"];
      for (let i = 0; i < amount; i++) {
        const item = document.createElement("span");
        item.className = "heart";
        item.textContent = icons[Math.floor(Math.random() * icons.length)];
        item.style.setProperty("--left", (20 + Math.random() * 60) + "%");
        item.style.setProperty("--top", (45 + Math.random() * 35) + "%");
        item.style.setProperty("--size", (14 + Math.random() * 16) + "px");
        item.style.setProperty("--dx", (Math.random() * 550 - 275) + "px");
        item.style.setProperty("--dy", (-140 - Math.random() * 380) + "px");
        item.style.setProperty("--rot", (Math.random() * 540 - 270) + "deg");
        document.body.appendChild(item);
        item.addEventListener("animationend", () => item.remove(), { once: true });
      }
    }

    function openGift() {
      document.getElementById("cardTitle").textContent = "Gửi " + CONFIG.tenNguoiNhan + " 💗";
      document.getElementById("wishText").textContent = CONFIG.loiChuc;
      document.getElementById("signature").textContent = CONFIG.nguoiGui;
      if (!dialog.open) dialog.showModal();
      celebrate(50);
      stage = 2;
      status.textContent = "✧ Huy đã trao món quà cho bạn rồi!";
    }

    function wakeUp() {
      stage = 1;
      scene.classList.add("awake");
      scene.setAttribute("aria-label", "Huy đã thức giấc và đang mỉm cười");
      bubble.textContent = "Chào emm! ♡";
      story.textContent = "Huy đã thức dậy rồi! Hôm nay không phải ngày bình thường đâu. Có một lá thư nhỏ đang đợi em mở ra...";
      status.textContent = "✧ Huy đang háo hức chờ em mở quà!";
      actionText.textContent = "Mở lời chúc 20/10";
      actionIcon.textContent = "💌";
      celebrate(23);
    }

    actionBtn.addEventListener("click", () => {
      if (stage === 0) wakeUp();
      else openGift();
    });

    document.getElementById("closeBtn").addEventListener("click", () => dialog.close());
    document.getElementById("againBtn").addEventListener("click", () => {
      dialog.close();
      stage = 0;
      scene.classList.remove("awake");
      scene.setAttribute("aria-label", "Huy, một thằng nhỏ đang ngủ dưới bầu trời đêm");
      bubble.textContent = "Z z z...";
      story.textContent = "Giữa một bầu trời đầy sao, có một bạn nhỏ đang ngủ say. Huy mang theo một món quà dành riêng cho ngày 20/10. em có muốn đánh thức Huy không?";
      status.textContent = "✧ Huy đang mơ một giấc mơ thật đẹp.";
      actionText.textContent = "Đánh thức Huy";
      actionIcon.textContent = "☀";
      actionBtn.focus();
    });
