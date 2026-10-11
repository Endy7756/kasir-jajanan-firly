# 📱 MOCK-UP VISUAL JAJANAN FIRLY - SISTEM KASIR PROFESIONAL

## 🎯 Halaman 1: LOGIN & SIGN UP

### Halaman Login
```
┌─────────────────────────────────────┐
│  JAJANAN FIRLY                      │
│  Sistem Manajemen Kasir & Gudang    │
│                                     │
│  ┌──────────────────────────────┐   │
│  │ 🎀 Logo Jajanan Firly        │   │
│  └──────────────────────────────┘   │
│                                     │
│  Username: [___________________]    │
│  Password: [___________________]    │
│                                     │
│  [ Masuk ke Sistem ]                │
│                                     │
│  Daftar Karyawan Baru • Lupa Pass?  │
└─────────────────────────────────────┘
```

### Halaman Sign Up
```
┌─────────────────────────────────────┐
│  PENDAFTARAN KARYAWAN BARU          │
│                                     │
│  Nama Lengkap: [_________________]  │
│  Cabang:       [_________________]  │
│  Email:        [_________________]  │
│  Username:     [_________________]  │
│  Password:     [_________________]  │
│  Role:         [Pilih Role ▼]       │
│                 - Kasir             │
│                 - Manager           │
│                                     │
│  [ Kirim Pengajuan Pendaftaran ]    │
│  [ ← Kembali ke Login ]             │
└─────────────────────────────────────┘

📧 Email Admin Terkirim:
"Pendaftaran baru dari: [Nama]
 Status: ⏳ Menunggu Verifikasi
 [Terverifikasi] [Tolak]"
```

---

## 📊 Halaman 2: DASHBOARD

```
┌─────────────────────────────────────────────────┐
│ DASHBOARD                                       │
│ Filter: [Hari Ini ▼] [Bulan Ini] [Custom]     │
│ Dari: [dd/mm/yyyy] - Sampai: [dd/mm/yyyy]      │
│                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │ 💰 Omzet │  │ 📊 Total │  │ 📦 Total │      │
│  │Rp 5.2M  │  │ Trans: 42│  │ Produk:18│      │
│  └──────────┘  └──────────┘  └──────────┘      │
│                                                 │
│  ┌──────────┐  ┌──────────┐                    │
│  │ ⚠️ Stok  │  │ 👥 Kasir │                    │
│  │ Menipis:3│  │ Online: 2│                    │
│  └──────────┘  └──────────┘                    │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │ 📈 Grafik Penjualan (Garis)             │   │
│  │                                         │   │
│  │     /\          /\                      │   │
│  │    /  \        /  \                     │   │
│  │   /    \______/    \                    │   │
│  │ Sen Sel Rab Kam Jum Sab Min             │   │
│  └─────────────────────────────────────────┘   │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │ 🍽️ Top Produk                          │   │
│  │ 1. Es Teh Manis - 120 pcs - Rp 480K    │   │
│  │ 2. Roti Bakar - 85 pcs - Rp 425K       │   │
│  │ 3. Bakso Ayam - 60 pcs - Rp 300K       │   │
│  └─────────────────────────────────────────┘   │
└─────────────────────────────────────────────────┘
```

---

## 💳 Halaman 3: TRANSAKSI KASIR

```
┌─────────────────────────────────────────────────────┐
│ TRANSAKSI KASIR                                     │
│                                                     │
│  Cabang: [Pilih Cabang ▼]   PIC: [Nama Kasir]      │
│  Tanggal: [21/10/2024] | Jam: [14:30:45]          │
│                                                     │
│  ┌───────────────────────────────────────────────┐ │
│  │ KERANJANG BELANJA                             │ │
│  ├──────┬──────────────┬──────┬────────┬────────┤ │
│  │ No   │ Produk       │ Qty  │ Harga  │ Total  │ │
│  ├──────┼──────────────┼──────┼────────┼────────┤ │
│  │ 1    │ Es Teh       │  2   │ 4.000  │ 8.000  │ │
│  │ 2    │ Roti Bakar   │  1   │ 5.000  │ 5.000  │ │
│  │ 3    │ Bakso Ayam   │  3   │ 6.000  │18.000  │ │
│  ├──────┴──────────────┴──────┴────────┴────────┤ │
│  │ Subtotal........................... Rp 31.000   │ │
│  │ Diskon (10%): [_____] ............. Rp -3.100  │ │
│  │ PPN (10%): ........................ Rp 2.790   │ │
│  │ ═══════════════════════════════════════════   │ │
│  │ TOTAL PEMBAYARAN ............... Rp 30.690   │ │
│  └─────────────────────────────────────────────┘ │
│                                                     │
│  METODE PEMBAYARAN:                                 │
│  ◉ Cash  ◯ QRIS  ◯ Transfer  ◯ e-Wallet          │
│                                                     │
│  [Jika QRIS/Transfer/e-Wallet ▼]                  │
│  Nomor Referensi: [____________________]           │
│                                                     │
│  [Bayar & Cetak Struk]  [Batalkan Transaksi]      │
└─────────────────────────────────────────────────────┘
```

### 📄 Struk Cetak
```
╔════════════════════════════════════╗
║      JAJANAN FIRLY - STRUK         ║
║   Cabang Jakarta - PIK: Firly     ║
║════════════════════════════════════║
║ No Struk: INV-20241021-001        ║
║ Tanggal  : 21-10-2024 14:30:45   ║
║────────────────────────────────────║
║ Item         Qty  Harga    Total  ║
║ Es Teh       2    4.000    8.000  ║
║ Roti Bakar   1    5.000    5.000  ║
║ Bakso Ayam   3    6.000   18.000  ║
║────────────────────────────────────║
║ Subtotal ............... 31.000   ║
║ Diskon (10%) .......... -3.100    ║
║ PPN (10%) .............. 2.790    ║
║════════════════════════════════════║
║ TOTAL ................. 30.690    ║
║════════════════════════════════════║
║ Metode Pembayaran: QRIS          ║
║ No Ref: 123456789012345          ║
║════════════════════════════════════║
║     Terima Kasih Atas Belanja     ║
║      Selamat Datang Kembali       ║
╚════════════════════════════════════╝
```

---

## 📦 Halaman 4: KELOLA PRODUK

```
┌──────────────────────────────────────────────────┐
│ KELOLA PRODUK                                    │
│                                                  │
│ [+ Tambah Produk]                               │
│                                                  │
│ Cari: [_________________] [Filter Kategori ▼]  │
│                                                  │
│ ┌────┬──────────┬────────────┬──────┬─────────┐ │
│ │ No │ Barcode  │ Nama       │ Kode │ Kategori│ │
│ ├────┼──────────┼────────────┼──────┼─────────┤ │
│ │ 1  │ [Scan]   │ Es Teh     │ IEST │ Minuman │ │
│ │    │ Barcode  │            │      │         │ │
│ │ 2  │ [Scan]   │ Roti Bakar │ IROB │ Makanan │ │
│ │    │ Barcode  │            │      │         │ │
│ │ 3  │ [Scan]   │ Bakso Ayam │ IBAK │ Makanan │ │
│ │    │ Barcode  │            │      │         │ │
│ ├────┼──────────┼────────────┼──────┼─────────┤ │
│ │    │ Satuan   │ Harga Beli │Harga │  Aksi  │ │
│ ├────┼──────────┼────────────┼──────┼─────────┤ │
│ │ 1  │ Pcs      │ Rp 2.000   │ Rp4K │[Edit][×]│ │
│ │ 2  │ Pcs      │ Rp 3.000   │ Rp5K │[Edit][×]│ │
│ │ 3  │ Pcs      │ Rp 4.000   │ Rp6K │[Edit][×]│ │
│ └────┴──────────┴────────────┴──────┴─────────┘ │
└──────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────┐
│ FORM TAMBAH/EDIT PRODUK                          │
│                                                  │
│ Kode Produk:  [____________]                    │
│ Barcode:      [Scan] atau [Input Manual]        │
│ Nama Barang:  [____________]                    │
│ Kategori:     [Minuman ▼]                       │
│                 - Minuman                        │
│                 - Makanan                        │
│                 - Bumbu Dapur                    │
│                 - Snack                          │
│                                                  │
│ Satuan Jual:  [Pcs ▼]                           │
│                 - Pcs / Pcs                      │
│                 - Pack                           │
│                 - Dus                            │
│                 - Bungkus                        │
│                                                  │
│ Harga Beli (Modal): [Rp ____________]            │
│ Harga Jual:         [Rp ____________]            │
│ Margin:             Rp 2.000 (50%)               │
│                                                  │
│ [ Simpan Produk ]  [ Batal ]                    │
└──────────────────────────────────────────────────┘
```

---

## 📊 Halaman 5: MASTER GUDANG / STOK BARANG

```
┌──────────────────────────────────────────────────────┐
│ MASTER GUDANG / DATA STOK                            │
│                                                      │
│ [📥 Import Stok] [Export Excel]                     │
│                                                      │
│ ┌────┬──────────┬────────────┬──────┬─────┬────────┐ │
│ │ No │ Kode     │ Nama       │Kateg │Stok │ Update │ │
│ ├────┼──────────┼────────────┼──────┼─────┼────────┤ │
│ │ 1  │ IEST     │ Es Teh     │Minm  │ 250 │ 21 Oct │ │
│ │    │          │            │      │     │14:30   │ │
│ │ 2  │ IROB     │ Roti Bakar │Makan │ 120 │ 21 Oct │ │
│ │    │          │            │      │     │13:15   │ │
│ │ 3  │ IBAK     │ Bakso Ayam │Makan │  15 │ 20 Oct │ │
│ │    │          │            │      │  ⚠️ │09:00   │ │
│ ├────┼──────────┼────────────┼──────┼─────┼────────┤ │
│ │    │ Modal    │ Harga Jual │ Aksi │     │        │ │
│ ├────┼──────────┼────────────┼──────┼─────┼────────┤ │
│ │ 1  │ Rp 2K    │ Rp 4K      │[+][🔄]│     │        │ │
│ │ 2  │ Rp 3K    │ Rp 5K      │[+][🔄]│     │        │ │
│ │ 3  │ Rp 4K    │ Rp 6K      │[+][🔄]│     │        │ │
│ └────┴──────────┴────────────┴──────┴─────┴────────┘ │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│ UPDATE STOK - Bakso Ayam (IBAK)                      │
│                                                      │
│ Stok Saat Ini: 15 Pcs                               │
│                                                      │
│ Tambah Stok: [___] Pcs                              │
│              [+] [-]                                │
│                                                      │
│ Stok Baru: 15 Pcs                                   │
│                                                      │
│ Catatan: [_______________________________]           │
│                                                      │
│ Update Otomatis:                                     │
│ Tanggal: 21-10-2024                                 │
│ Jam: 15:45:30                                       │
│                                                      │
│ [ Simpan Update ]  [ Batal ]                        │
└──────────────────────────────────────────────────────┘
```

---

## 📋 Halaman 6: RIWAYAT PENJUALAN / LAPORAN TRANSAKSI

```
┌────────────────────────────────────────────────────────────┐
│ RIWAYAT PENJUALAN / TRANSAKSI                              │
│                                                            │
│ Filter:                                                    │
│ [Semua Waktu ▼] [Hari Ini] [Minggu Ini] [Bulan Ini]      │
│ Dari: [dd/mm/yyyy] - Sampai: [dd/mm/yyyy] [Cari]         │
│                                                            │
│ [Export Excel] [Export CSV] [📥 Import]                  │
│                                                            │
│ ┌───┬────────┬───────────────┬────────┬──────────────────┐ │
│ │No │ ID Nota│ Waktu         │Cabang  │ PIC / Kasir      │ │
│ ├───┼────────┼───────────────┼────────┼──────────────────┤ │
│ │ 1 │INV-001 │21-10-202414:30│Jakarta │ Firly (Kasir)    │ │
│ │ 2 │INV-002 │21-10-202413:15│Bandung │ Siti (Kasir)     │ │
│ │ 3 │INV-003 │20-10-202410:45│Jakarta │ Budi (Manager)   │ │
│ ├───┼────────┼───────────────┼────────┼──────────────────┤ │
│ │   │Metode  │ Detail Item   │Total   │ Aksi             │ │
│ ├───┼────────┼───────────────┼────────┼──────────────────┤ │
│ │ 1 │ QRIS   │2x Es Teh, 1x..│Rp31K  │[👁️ Detail][🖨️]  │ │
│ │ 2 │ Cash   │1x Roti, 2x Es │Rp22K  │[👁️ Detail][🖨️]  │ │
│ │ 3 │Transfer│3x Bakso, 2x..│Rp48K  │[👁️ Detail][🖨️]  │ │
│ └───┴────────┴───────────────┴────────┴──────────────────┘ │
│                                                            │
│ RINGKASAN FILTER (Hari Ini):                              │
│ ├─ Total Transaksi: 42 Pcs                                │
│ ├─ Total Omzet: Rp 5.200.000                              │
│ ├─ Metode Pembayaran:                                     │
│ │  • Cash: 20 Transaksi (Rp 2.800.000)                    │
│ │  • QRIS: 15 Transaksi (Rp 1.800.000)                    │
│ │  • Transfer: 7 Transaksi (Rp 600.000)                   │
│ └─ Rata-rata: Rp 123.809 per transaksi                    │
└────────────────────────────────────────────────────────────┘
```

---

## 👥 Halaman 7: DATA MANAGEMENT / ADMINISTRASI

```
┌─────────────────────────────────────────────────────┐
│ DATA MANAGEMENT - ADMINISTRASI                      │
│                                                     │
│ [TAB] Karyawan | Cabang | Roles | Pengaturan      │
│                                                     │
│ ┌───────────────────────────────────────────────┐  │
│ │ DAFTAR KARYAWAN & VERIFIKASI SIGN UP         │  │
│ │                                               │  │
│ │ ⏳ MENUNGGU VERIFIKASI (3)                    │  │
│ │ ┌──────────────────────────────────────────┐  │  │
│ │ │ 1. Nama: Ahmad                          │  │  │
│ │ │    Email: ahmad@email.com               │  │  │
│ │ │    Cabang: Surabaya                      │  │  │
│ │ │    Role: Kasir                           │  │  │
│ │ │    Tgl Daftar: 21-10-2024                │  │  │
│ │ │    [ Terverifikasi ✓ ] [ Tolak ✗ ]     │  │  │
│ │ └──────────────────────────────────────────┘  │  │
│ │                                               │  │
│ │ ✅ TERVERIFIKASI (8)                         │  │
│ │ ┌──────────────────────────────────────────┐  │  │
│ │ │ 1. Firly (Kasir) - Cabang Jakarta       │  │  │
│ │ │    Email: firly@jajananfirly.com        │  │  │
│ │ │    Tgl Verifikasi: 15-10-2024           │  │  │
│ │ │    [ Reset Password ] [ Nonaktifkan ]   │  │  │
│ │ └──────────────────────────────────────────┘  │  │
│ └───────────────────────────────────────────────┘  │
│                                                     │
│ ┌───────────────────────────────────────────────┐  │
│ │ KELOLA CABANG / OUTLET                       │  │
│ │                                               │  │
│ │ [ + Tambah Cabang Baru ]                     │  │
│ │                                               │  │
│ │ 1. Jakarta     - Rp 2.500.000 (Hari ini)   │  │
│ │    Kasir: Firly, Siti                       │  │
│ │    [ Edit ] [ Hapus ]                       │  │
│ │                                               │  │
│ │ 2. Bandung     - Rp 1.800.000 (Hari ini)   │  │
│ │    Kasir: Budi                              │  │
│ │    [ Edit ] [ Hapus ]                       │  │
│ │                                               │  │
│ │ 3. Surabaya    - Rp 950.000 (Hari ini)     │  │
│ │    Kasir: Ahmad                             │  │
│ │    [ Edit ] [ Hapus ]                       │  │
│ └───────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ PENGATURAN ROLE / ROLE MANAGEMENT                   │
│                                                     │
│ ┌──────────────┬────────┬─────────┬──────────────┐ │
│ │ Fitur        │ Admin  │ Manager │ Kasir        │ │
│ ├──────────────┼────────┼─────────┼──────────────┤ │
│ │ Dashboard    │   ✅   │   ✅    │      ❌      │ │
│ │ Transaksi    │   ✅   │   ❌    │      ✅      │ │
│ │ Produk       │   ✅   │   ✅    │      ❌      │ │
│ │ Gudang       │   ✅   │   ✅    │      ❌      │ │
│ │ Riwayat      │   ✅   │   ✅    │      ✅      │ │
│ │ Admin Panel  │   ✅   │   ❌    │      ❌      │ │
│ └──────────────┴────────┴─────────┴──────────────┘ │
└─────────────────────────────────────────────────────┘
```

---

## 🔐 Halaman 8: LUPA PASSWORD

```
┌─────────────────────────────────────────┐
│ LUPA PASSWORD?                          │
│                                         │
│ Masukkan Email Terdaftar:              │
│ [_________________________________]     │
│                                         │
│ [ Kirim Link Reset ]                   │
│ [ ← Kembali ke Login ]                 │
└─────────────────────────────────────────┘

✉️ EMAIL NOTIFIKASI:
┌─────────────────────────────────────────┐
│ Judul: Reset Password - Jajanan Firly   │
│                                         │
│ Halo Firly,                             │
│                                         │
│ Anda meminta untuk mereset password     │
│ akun Jajanan Firly Anda.                │
│                                         │
│ [ Klik Disini Untuk Reset Password ]   │
│                                         │
│ Link berlaku selama 24 jam.             │
│                                         │
│ Jika bukan Anda, abaikan email ini.    │
│                                         │
│ - Tim Jajanan Firly                     │
└─────────────────────────────────────────┘
```

---

## 📱 RESPONSIVE DESIGN

```
DESKTOP (1024px)        TABLET (768px)         MOBILE (375px)
┌────────────────┐      ┌─────────────┐        ┌────────┐
│ SIDEBAR         │      │ ☰ MENU      │        │ ☰ MENU │
│                 │      │ CONTENT     │        │        │
│ MENU            │      │             │        │        │
│                 │      │             │        │CONTENT │
│ CONTENT AREA    │      └─────────────┘        │        │
│                 │                            │        │
│                 │                            └────────┘
└────────────────┘
```

---

## 🎨 WARNA & STYLING

```
PRIMARY COLORS:
├─ Sky Blue (#0ea5e9) - Main Color
├─ Pink (#ec4899) - Accent
├─ White (#ffffff) - Background
└─ Gray (#6b7280) - Text Secondary

STATUS COLORS:
├─ Green (#10b981) - Success / Paid
├─ Orange (#f59e0b) - Warning / Low Stock
├─ Red (#ef4444) - Error / Rejected
└─ Yellow (#eab308) - Pending / Review

TYPOGRAPHY:
├─ Font: Poppins
├─ Body: 14px
├─ Heading: 20-32px
└─ Button: 16px
```

---

## ✅ FITUR RINGKASAN

| Halaman | Fitur | Status |
|---------|-------|--------|
| Login | Username/Password, Sign Up, Lupa Password | ✅ |
| Dashboard | Filter (Hari/Bulan/Custom), Grafik, KPI | ✅ |
| Transaksi | Keranjang, Diskon, 4 Metode Bayar, Struk | ✅ |
| Produk | CRUD, Barcode, Kategori, Satuan | ✅ |
| Gudang | Stok Real-time, Update Jam, Tgl | ✅ |
| Riwayat | Filter, Export Excel/CSV, Analisis | ✅ |
| Admin | Verifikasi Karyawan, Kelola Cabang, Role | ✅ |
| Spreadsheet | Google Sheets Integration | ✅ |

---

## 📁 STRUKTUR FILE YANG AKAN DIKIRIM

```
kasir-jajanan-firly/
├── index.html (File HTML lengkap)
├── apps-script.gs (Google Apps Script)
├── template-spreadsheet.xlsx (Template DB)
├── README.md (Panduan instalasi)
└── MOCK_UP_DESIGN.md (File ini)
```

---

**SIAP UNTUK PEMBUATAN FILE FINAL?** ✅

Saya akan langsung membuat:
1. ✅ File HTML/CSS/JS lengkap dengan semua fitur
2. ✅ Google Apps Script untuk Spreadsheet integration
3. ✅ Template Spreadsheet multi-cabang
4. ✅ Panduan instalasi & setup

Semua siap untuk di-download! 🚀
