# Service (Express)
Atur layanan yang ditampilkan ke akunmu, untuk layanan yang tersedia silahkan cek di halaman pricing


POST                                                   |
:-------------------------------------------------------|
https://mdev.juallagi.biz//api/mitra/v3/set_whitelist_services |


::

## Request
| Field          | DataType | Nullable   | Desc                            |
|----------------|----------|------------|---------------------------------|
| ```services``` | array    | ```true``` | Fill null to reset all settings |

NB: Gunakan json kosong untuk reset pengaturan
```json
{
	"services": ["jne","jnt","sicepat"]
}
```

## Response
```json
{
	"status": true,
	"text": "Success to set",
	"method": "set_whitelist_services"
}
```
