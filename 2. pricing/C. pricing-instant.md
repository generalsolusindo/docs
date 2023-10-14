# Pricing (Instant)

## Disclaimer
Kami menggunakan base url yang berbeda dengan express, diharapkan untuk memperhatikan base url anda. Response yang disediakan api instant sedikit berbeda dengan api prod yaitu:

```json
{
  "status": true,
  "text": "string",
  "result": "object|null"
}
```
POST                                      |
---------------------------------------------------|
https://mdev.juallagi.biz/open-api/v1/instants/price |

::


## Request 
| Param | Type     | Nullable | Remark  |
|---------------|----------|----------|---------------------------------------------------------|
| `service`     | `array`  | yes      | Bisa diisi dengan `gosend`, `grab_express`, dan `borzo` | 
| `item_price`  | `int`    | no       | Nilai barang yang akan dikirim  | 
| `origin`      | `object` | no       | Data pengirim (lihat tabel alamat dibawah)      |
| `destination` | `object` | no       | Data penerima (lihat tabel alamat dibawah)      |
| `weight`      | `int`    | no       | Berat barang yang akan dikirim dalam satuan gram| 

### Alamat

| Param     | Type     | Nullable | Remark   |
|-----------|----------|----------|--------------------------------------------------|
| `lat`     | `float`  | no       | Latitude |
| `long`    | `float`  | no       | Longitude|
| `address` | `string` | no       | Detail alamat berupa nama jalan atau detail lain |


## Response Sample

```json
{
	"status": true,
	"text": "success",
	"method": "mitra_pricing",
	"result": [
		{
			"name": "gosend",
			"costs": [
				{
					"service_type": "instant",
					"estimation": "1-2 hours",
					"price": {
						"admin_fee": 1000,
						"shipping_costs": 54000,
						"total_price": 55000
					}
				},
				{
					"service_type": "sameday",
					"estimation": "6-8 hours",
					"price": {
						"admin_fee": 1000,
						"shipping_costs": 31500,
						"total_price": 32500
					}
				}
			],
			"insurances": [
				{
					"value": 500,
					"type": "silver"
				},
				{
					"value": 1000,
					"type": "gold"
				}
			]
		},
		{
			"name": "borzo",
			"costs": [
				{
					"service_type": "instant",
					"estimation": null,
					"price": {
						"admin_fee": 1500,
						"shipping_costs": 8800,
						"total_price": 10300
					}
				}
			],
			"insurances": [
				{
					"value": 500,
					"type": "silver"
				},
				{
					"value": 1000,
					"type": "gold"
				}
			]
		}
	],
	"code": null
}
```
