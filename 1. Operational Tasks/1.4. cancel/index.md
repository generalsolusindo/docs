# Void

Pembatalan paket yang sedang dalam proses menunggu pickup / menunggu diantar

<br>

POST                                                   |
:-------------------------------------------------------|
https://mdev.juallagi.biz//api/mitra/v3/cancel_shipment |


::

## Disclaimer
Khusus paket **Non-COD** akan melalui proses antrian maksimal 2x24jam untuk benar-benar void dari sistem. Untuk paket COD akan dibatalkan saat itu juga.

## Request

#### Express
| Param      | DataType              | Nullable  | Description                                   |
|------------|-----------------------|-----------|-----------------------------------------------|
| ``awb``    | string(30)            | ``false`` | AWB yang sudah didapatkan, bukan ``order_id`` |
| ``reason`` | string(min:5,max:200) | ``false`` | Alasan pembatalan paket                       |

#### Instant
| Param        | DataType              | Nullable  | Description               |
|--------------|-----------------------|-----------|---------------------------|
| ``order_id`` | string(30)            | ``false`` | Nomor referensi `order_id` |
