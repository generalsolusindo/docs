# Search
List kecamatan dengan pencarian langsung dengan nama. Kami membatasi request menggunakan throttle limitation, jika terlalu berdekatan maka sistem akan melakukan suspend API call anda sementara


POST|
:---|
https://mdev.juallagi.biz/api/mitra/v2/get_address_by_name |



### Request
| Field      | DataType       | Nullable  | Desc                       |
|------------|----------------|-----------|----------------------------|
| ``search`` | string(min: 3) | ``false`` | Nama kecamatan yang dicari |
```json
{
    "search": "Ngemplak"
}
```

### Response
```json
{
	"status": true,
	"text": "Success",
	"method": "get_address_by_name",
	"data": [
		{
			"id": 1251,
			"text": "Ngemplak, Kabupaten Boyolali, Jawa Tengah"
		},
		{
			"id": 5789,
			"text": "Ngemplak, Kabupaten Sleman, DI Yogyakarta"
		}
	]
}
```
