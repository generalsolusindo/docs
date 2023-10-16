# Preference
Alamat callback harus memiliki catatan A atau AAAA yang valid. Kami akan menolak URL yang belum dapat diakses. Untuk saat ini, hanya satu callback / webhook yang diperbolehkan. Maka harap perhatikan dan persiapkan baik - baik. Method yang kami kirimkan adalah POST. Segala bentuk kesalahan didalam sistem anda bukan tanggung jawab kami.

<br>

> ❌ **Peringatan**
> 
> Tidak disarankan untuk melakukan perubahan callback endpoint tanpa informasi terlebih dahulu


<br>


POST                                                   |
-------------------------------------------------------|
https://mdev.juallagi.biz//api/mitra/set_callback |


### Request

| Parameter |Type| Description                                 |
|-----------|------|---------------------------------------------|
| ``url``   |String| URL Valid (Kami akan melakukan validasi NS) |
```json
{
    "url": "https://blog.juallagi.biz/webhook-test"
}
```

### Response
```json
{
  "status": true,
  "method": "set_callback",
  "text": "Callback di set ke https://blog.juallagi.biz/webhook-test"
}
```
