
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn js_lamp_on_off(count: isize) {
    println!("{}", count)
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![js_lamp_on_off])
        .run(tauri::generate_context!())
        .expect("Неизвестная ошибка >.<");
}
