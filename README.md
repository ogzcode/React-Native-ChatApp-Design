# Todo Uygulaması

Bu proje, Expo React Native ve Firebase kullanılarak geliştirilmiş, Firebase de Auth işlemleri ve CRUD işlemlerini içeren bir todo uygulamasıdır.

## Başlarken

Aşağıdaki adımları izleyerek projeyi yerel ortamınızda çalıştırabilirsiniz.

### Önkoşullar

- Node.js'in en son sürümünün yüklü olduğundan emin olun.
- Expo CLI'nin yüklü olduğundan emin olun. Yükleme talimatları için [Expo CLI Dokümantasyonu](https://docs.expo.dev/get-started/installation/)nu kontrol edin.

### Kurulum
> Uyulama Android SDK S ve Pixel 3 cihazında test edilmiştir.<br>
> Firebase de yeni bir proje oluşturarak aşağıdaki verileri doldurunuz
```
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
```

1. Bu depoyu yerel makinenize klonlayın:

    ```bash
    git clone https://github.com/kullaniciadi/proje-adı.git
    ```

2. Proje dizinine gidin:

    ```bash
    cd proje-adı
    ```

3. Gerekli bağımlılıkları yükleyin:

    ```bash
    npm install
    ```

4. Firebase projenizi oluşturun ve Firebase yapılandırma bilgilerinizi `src/firebase/config.js` dosyasına ekleyin.

5. Uygulamayı başlatın:

    ```bash
    npm run android
    ```

6. Expo Developer Tools'u açmak için tarayıcınızda çıkan QR kodunu tarayın veya emülatör kullanıyorsanız emülatörü seçin.

## Kullanım

Uygulama başarıyla başlatıldıktan sonra, kullanıcı kaydolabilir, giriş yapabilir ve todo listesini yönetebilir.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen önce [Katk CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyun.

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

## İletişim

Eğer herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen [email protected] adresine e-posta gönderin.
