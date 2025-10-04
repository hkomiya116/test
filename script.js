// いいねボタン機能
function likePost(btn) {
  const span = btn.querySelector("span");
  let count = parseInt(span.textContent);
  span.textContent = count + 1;
}
