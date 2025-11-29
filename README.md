# 📦 Barkod Master v7 (Stok & Envanter Yönetimi)

![Version](https://img.shields.io/badge/version-v7.0-blue)
![Platform](https://img.shields.io/badge/platform-PWA%20%7C%20Mobile%20%7C%20Desktop-green)
![License](https://img.shields.io/badge/license-MIT-orange)

**Barkod Master**, tarayıcı üzerinden çalışan, kurulum gerektirmeyen, **çevrimdışı (offline)** çalışabilen ve verilerinizi tamamen cihazınızda saklayan modern bir stok sayım ve takip uygulamasıdır.

HTML5, CSS3 ve Vanilla JavaScript ile geliştirilmiştir. Harici bir sunucuya veya veritabanına ihtiyaç duymaz.

## 🚀 Özellikler

* **📷 Hızlı Barkod Okuma:** `html5-qrcode` kütüphanesi ile kamera üzerinden seri barkod okuma.
* **📱 PWA Desteği:** Android ve iOS cihazlarda "Ana Ekrana Ekle" diyerek uygulama gibi çalışır. İnternet yokken de çalışmaya devam eder.
* **🔢 Hibrit Sayım Modu:**
    * **Adet Modu:** Aynı barkodu okuttuğunuzda sayıyı artırır (Örn: Market kasası).
    * **Kontrol Modu:** Aynı barkod daha önce okunduysa sesli ve titreşimli hata verir.
* **✏️ Akıllı Ürün Tanıma:** Barkodlara isim verebilirsiniz. Uygulama bu isimleri hafızaya alır ve sonraki okumalarda otomatik tanır.
* **⌨️ Manuel Giriş:** Barkod okunamayan durumlarda elle barkod ve adet girişi.
* **📂 Klasörleme Sistemi:** Sayımlarınızı "Depo A", "Raf 1", "İade" gibi klasörlere ayırabilirsiniz.
* **📊 Analiz Paneli:** Tek tuşla toplam ürün çeşidi ve toplam stok adedi raporu.
* **💾 Veri Güvenliği:**
    * **Yedekle (Backup):** Tüm verileri `.json` olarak indirir.
    * **Geri Yükle (Restore):** Yedekten geri döner (Cihaz değişikliği için).
* **📤 Excel/CSV Çıktısı:** Sayım verilerini Excel uyumlu formatta dışa aktarma.
* **🌙 Karanlık Mod:** Göz yormayan ve pil dostu arayüz.

## 📸 Ekran Görüntüleri
![screenshot](https://yasinvs.github.io/barcode-app/screeshot.png)

## 🛠️ Kurulum ve Kullanım

Bu proje **GitHub Pages** üzerinde çalışmak için tasarlanmıştır. Herhangi bir sunucu kurulumu gerektirmez.

### 1. Repoyu Kopyalayın (Fork)
Bu projeyi kendi GitHub hesabınıza Fork'layın veya dosyaları indirip yeni bir repo oluşturun.

### 2. Dosyaları Yükleyin
Ana dizinde şu 3 dosyanın olduğundan emin olun:
* `index.html`
* `manifest.json`
* `sw.js`

### 3. GitHub Pages'i Aktif Edin
1.  Reponuzda **Settings** > **Pages** sekmesine gidin.
2.  **Source** kısmından `Deploy from a branch` seçin.
3.  **Branch** olarak `main` (veya `master`) seçip **Save** deyin.
4.  Birkaç dakika içinde GitHub size `https://kullaniciadi.github.io/repo-adi/` şeklinde bir link verecektir.

### 4. Telefolara Kurulum (PWA)
Verilen linki telefondan Chrome (Android) veya Safari (iOS) ile açın.
* **Android:** Altta çıkan "Ana Ekrana Ekle" uyarısına tıklayın veya menüden "Uygulamayı Yükle" deyin.
* **iOS:** Paylaş butonuna basıp "Ana Ekrana Ekle" (Add to Home Screen) seçeneğini seçin.

## 🔒 Gizlilik

Bu uygulama **Serverless (Sunucusuz)** mimariye sahiptir.
* Tüm veriler tarayıcınızın `localStorage` (Yerel Depolama) alanında tutulur.
* Hiçbir veri dışarıya, buluta veya 3. parti sunuculara gönderilmez.
* Kamera görüntüsü işlenmek üzere sunucuya gitmez, işlem tamamen telefonunuzun işlemcisinde yapılır.

## 🤝 Katkıda Bulunma

Hata bildirimleri ve özellik istekleri için "Issues" kısmını kullanabilirsiniz. Pull Request'ler memnuniyetle kabul edilir.

## 📄 Lisans

Bu proje [MIT License](LICENSE) altında lisanslanmıştır.

---
*Developed with ❤️ by yasinvs*