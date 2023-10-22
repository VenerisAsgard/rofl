const { invoke } = window.__TAURI__.tauri;

let b = document.querySelector("body")
let t1 = document.querySelector(".text")
let t = document.querySelectorAll("*.text")
async function swither() {
  if (b.style.backgroundColor == 'black') {b.style.backgroundColor = '#FFFDD0'} else {b.style.backgroundColor = 'black'}
  if (b.style.backgroundColor == 'black') {t1.textContent = "Нажмите на лампочку, чтобы включить свет!"} else {t1.textContent = "Нажмите на лампочку, чтобы выключить свет!"}
  for (var i = 0; i < t.length; i++) {
    if (b.style.backgroundColor == 'black') {t[i].style.color = '#FFFDD0'} else {t[i].style.color = 'black'}
  }

  await invoke("js_lamp_on_off", {count: 2});
}
