# 📦 Barkod Master v17 (Stok & Envanter Yönetimi)

![Version](https://img.shields.io/badge/version-v17.0-blue)
![Platform](https://img.shields.io/badge/platform-PWA%20%7C%20Mobile%20%7C%20Desktop-green)
![License](https://img.shields.io/badge/license-MIT-orange)

**Barkod Master**, tarayıcı üzerinden çalışan, kurulum gerektirmeyen, **çevrimdışı (offline)** çalışabilen ve verilerinizi tamamen cihazınızda saklayan modern bir stok sayım ve takip uygulamasıdır. Google Sheets, GitHub Gist ve Özel API entegrasyonları ile kurumsal ihtiyaçlara cevap verir.

## 📸 Ekran Görüntüsü

![Barkod Master Arayüz](https://raw.githubusercontent.com/yasinvs/barcode-app/refs/heads/main/screenshot.png)

## 🚀 Özellikler

* **📷 Turbo Barkod Okuma:** Donanım hızlandırma ve sürekli odaklama ile seri okuma.
* **📱 PWA Desteği:** Android/iOS ana ekrana uygulama olarak eklenir, internetsiz çalışır.
* **☁️ Bulut Entegrasyonları:**
    * **Google Sheets:** Sayım verilerini doğrudan E-Tabloya yazar.
    * **Google Drive:** Yedek dosyalarını Drive'a kaydeder.
    * **GitHub Gist:** Ayarlar ve veriler cihazlar arası senkronize edilir.
    * **Custom API:** Verileri kendi sunucunuza (Webhook) POST eder.
* **🔢 Hibrit Sayım Modu:** Adet takibi veya tekil kontrol modu.
* **📂 Klasörleme:** Depo, raf veya kategori bazlı ayrıştırma.
* **📊 Analiz Paneli:** Anlık stok ve çeşit raporu.
* **⚙️ Kolay Ayar Transferi:** Ayarları JSON olarak içe/dışa aktarma.

## 🛠️ Kurulum

Bu proje **GitHub Pages** üzerinde çalışmak için tasarlanmıştır.

1.  Bu repoyu **Fork** edin.
2.  `Settings > Pages` kısmından `main` branch'ini seçip kaydedin.
3.  Size verilen `https://kullaniciadi.github.io/repo/` linkini telefondan açın.

---

## ☁️ Google Sheets & Drive Entegrasyonu

Verilerinizi Google E-Tablolar'a göndermek için aşağıdaki adımları izleyin:

1.  Yeni bir [Google Sheet](https://sheets.new) oluşturun.
2.  **Uzantılar > Apps Script** menüsüne gidin.
3.  Aşağıdaki kodu editöre yapıştırın ve `MY_SECRET` kısmına kendi şifrenizi yazın:

```javascript
function doPost(e) {
  try {
    var params = JSON.parse(e.postData.contents);
    
    // GÜVENLİK ŞİFRESİ (Uygulamadaki ile aynı olmalı)
    var MY_SECRET = "SüperGizliSifre123!"; 
    
    if (params.secret !== MY_SECRET) {
      return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": "Yetkisiz Erişim!" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var operation = params.operation; 

    // Raporu Tabloya Yaz
    if (operation === 'report' || operation === 'all') {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      sheet.clear();
      var csvData = Utilities.parseCsv(params.csvContent, ';');
      if (csvData.length > 0) {
        sheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData);
      }
    }

    // Yedeği Drive'a Kaydet
    if (operation === 'backup' || operation === 'all') {
      var fileName = "BarkodMaster_Yedek_" + new Date().toISOString().slice(0,10) + ".json";
      DriveApp.createFile(fileName, params.jsonContent, MimeType.PLAIN_TEXT);
    }

    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (f) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": f.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```
4. Dağıt (Deploy) > Yeni Dağıtım diyerek yayınlayın.
5. Erişim Yetkisi (Who has access): Anyone (Herkes) olarak seçin (Şifre koruması olduğu için güvenlidir).
6. Size verilen Web App URL adresini kopyalayıp uygulamanın ayarlar menüsüne yapıştırın.

## 📡 Özel API (Webhook) Entegrasyonu

Eğer verileri kendi sunucunuza (CRM, ERP vb.) göndermek isterseniz, uygulamanın gönderdiği **JSON Payload** yapısı şöyledir:

Endpoint: Ayarlarda girdiğiniz URL (Örn: `https://api.site.com/upload`) Method: **POST**

```json
{
  "source": "BarkodMaster",
  "timestamp": "30.11.2025 14:30:00",
  "filename": "Tum_Stok_Raporu.csv",
  "csvContent": "Barkod;Urun_Adi;Adet;Tarih;Klasör\n8690001;Kalem;10;...\n..."
}
```
*Not: Sunucunuzda CORS (Cross-Origin Resource Sharing) izinlerinin açık olduğundan emin olun.*

## ⚙️ Ayar Dosyası (Config JSON)

Cihazlar arasında ayarları (Tokenler, URL'ler) taşımak için "Ayarları İndir" butonunu kullanabilirsiniz. Örnek `barkod_master_config.json` yapısı:

```json
{
  "gistToken": "ghp_AbCdEfGhIjKlMnOpQrStUvWxYz123456",
  "driveUrl": "https://script.google.com/macros/s/AKfycbx.../exec",
  "driveSecret": "SüperGizliSifre123!",
  "customApiUrl": "https://webhook.site/..."
}
```

## 🔒 Gizlilik

* Tüm veriler tarayıcınızın `localStorage` alanında tutulur.
* Siz "Gönder" butonuna basmadığınız sürece hiçbir veri dışarı çıkmaz.
* Sunucusuz (Serverless) mimari ile çalışır.

## 📄 Lisans
Bu proje *MIT License* altında lisanslanmıştır.