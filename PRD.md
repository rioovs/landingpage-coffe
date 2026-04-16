Product Requirements Document (PRD): Eazy Coffee Landing Page
1. Ringkasan Eksekutif
Nama Proyek: Eazy Coffee Web Presence

Status: Perencanaan

Tujuan Produk: Membangun kehadiran digital yang profesional untuk Eazy Coffee guna meningkatkan visibilitas merek di Jombang, menarik pelanggan baru melalui showcase menu dan suasana, serta memudahkan konversi (pemesanan online atau kunjungan langsung).

2. Target Pengguna
Warga Lokal Jombang: Yang mencari tempat nongkrong nyaman (cozy), tempat meeting, atau sekadar menikmati kopi berkualitas.

Pengguna Layanan Pesan Antar: Pelanggan yang ingin melihat menu sebelum memesan via aplikasi pihak ketiga (Grab/Gojek).

Penyelenggara Acara/Komunitas: Pihak yang membutuhkan layanan Coffee Catering atau reservasi tempat.

3. Ruang Lingkup & Fitur Utama (Functional Requirements)
Halaman web akan dirancang sebagai Single Page Application (SPA) dengan navigasi scroll mulus ke setiap bagian.

F1. Navigasi Global (Header)

Logo Eazy Coffee.

Tautan jangkar (anchor links) ke: Beranda, Menu, Fasilitas, Ulasan, Lokasi.

Tombol Call-to-Action (CTA) statis: "Pesan Sekarang" (mengarahkan ke link Grab/Gojek).

F2. Hero Section

Gambar latar/korsel (carousel) suasana kedai atau produk unggulan.

Tagline: "Est. 2011 - Brewing Everyday" / "Ngopi di Jombang? #eazycoffee Saja."

Tombol CTA ganda: "Lihat Menu" dan "Rute Lokasi".

F3. Showcase Menu (Highlight)

Grid responsif menampilkan menu andalan (Quesadilla, Loaded Fries, Es Kopi Susu/Lychee Tea).

Gambar beresolusi tinggi beserta nama dan deskripsi singkat.

F4. Informasi Layanan & Fasilitas

Desain berbasis ikon yang merepresentasikan Highlight Instagram: Meeting Point, Delivery Order, Coffee Catering, dan Parking Spot.

F5. Social Proof / Testimoni

Komponen slider atau grid yang menampilkan 3-5 ulasan terbaik dari Google Maps (misalnya ulasan dari Local Guide).

F6. Integrasi Formulir (Fungsionalitas Kontak)

Formulir sederhana untuk pertanyaan Coffee Catering atau reservasi tempat (Nama, Nomor WA, Tanggal, Detail Acara).

F7. Footer & Lokasi

Google Maps Embed yang interaktif.

Informasi operasional (MON — SUN, 11.00 — 21.00).

Alamat lengkap (Jl. Adityawarman 8, Jombang, Jawa Timur 61411).

Tautan media sosial (Instagram).

4. Persyaratan Non-Fungsional (Non-Functional Requirements)
Performa: Halaman harus memuat gambar (First Contentful Paint) di bawah 2 detik. Gambar harus dioptimalkan (webp format).

Responsivitas: Pendekatan Mobile-First Design. UI harus berfungsi sempurna di layar HP, tablet, dan desktop.

SEO: Menggunakan meta tags yang tepat (Title, Description, Open Graph untuk share WhatsApp/IG) dengan kata kunci lokal ("Coffee shop Jombang", "Tempat nongkrong di Jombang", "Eazy Coffee").

5. Tech Stack & Arsitektur
Frontend Framework: Next.js

Bahasa Pemrograman: TypeScript

Styling: Tailwind CSS

6. User Flow (Alur Interaksi Pengguna)
Alur dirancang untuk meminimalkan hambatan dari impresi pertama hingga tindakan konversi.

Skenario A: Konversi Cepat (Pemesanan Online)
Mulai: Pengguna membuka website Eazy Coffee.

Kesan Pertama: Pengguna melihat Hero Section dengan tombol CTA utama.

Tindakan: Pengguna mengklik tombol "Order Online" (di Header) atau "Pesan Sekarang".

Hasil: Pengguna diarahkan keluar web (external link) menuju aplikasi/halaman GoFood atau GrabFood Eazy Coffee.

Skenario B: Eksplorasi & Kunjungan Langsung (Pengunjung Baru)
Mulai: Pengguna membuka website.

Eksplorasi (Scroll ke bawah):

Pengguna melewati Hero Section dan melihat Highlight Menu (Quesadilla, dll).

Memeriksa Fasilitas untuk memastikan ketersediaan Parking Spot dan area Meeting Point.

Membaca Testimoni/Review untuk validasi kualitas.

Keputusan: Pengguna tertarik dan memutuskan untuk datang langsung.

Tindakan: Pengguna menuju bagian bawah (Footer/Lokasi) dan mengklik peta tersemat atau alamat teks.

Hasil: Aplikasi Google Maps terbuka dan memberikan rute navigasi menuju lokasi kedai.

Skenario C: Interaksi Layanan Khusus (Catering / Reservasi)
Mulai: Pengguna membuka website.

Navigasi: Pengguna mengklik tautan "Katering" di menu Header, memicu auto-scroll ke bagian formulir.

Tindakan: Pengguna mengisi formulir (Nama, No. WA, Keperluan acara).

Proses Latar Belakang: Data di-submit, dikirim via endpoint Google Apps Script, dan dicatat ke dalam Google Sheets admin.

Hasil (Pengguna): Menerima notifikasi di layar: "Terima kasih! Tim Eazy Coffee akan segera menghubungi Anda via WhatsApp."

Hasil (Admin): Menerima baris data baru di Google Sheets dan melakukan follow-up manual ke pelanggan.