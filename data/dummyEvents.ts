import { EventTicket, Banner } from '../types/event';

export const dummyEvents: EventTicket[] = [
    {
        id: '1',
        slug: 'rituals-nadin-amizah',
        title: 'Rituals – Nadin Amizah',
        title_en: 'Rituals – Nadin Amizah',
        date: '26 Juni 2026',
        price: 125000,
        imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'JNM Bloc',
            logo: 'https://ui-avatars.com/api/?name=JNM&background=f3f4f6&color=1e3a8a',
        },
        category: 'Musik',
        location: 'JNM Bloc, Yogyakarta',
        description: 'Rituals merupakan pertunjukan intim persembahan Nadin Amizah yang dirancang khusus untuk membagikan proses bermusik dan karya-karyanya secara lebih dekat dan hangat bersama para pendengarnya. Konser ini mengusung konsep pertunjukan teaterikal yang menyentuh hati.',
        terms: [
            'Tiket yang sah adalah tiket yang dibeli melalui saluran resmi penjualan.',
            'Penonton wajib menunjukkan kartu identitas (KTP/SIM/Paspor) asli saat penukaran tiket.',
            'Dilarang membawa senjata tajam, obat-obatan terlarang, serta kamera profesional ke dalam area acara.',
            'Penyelenggara berhak mengeluarkan penonton yang melanggar ketertiban umum.'
        ],
        talents: [
            {
                name: 'Nadin Amizah',
                role: 'Main Performer',
                imageUrl: 'https://ui-avatars.com/api/?name=Nadin+Amizah&background=fce7f3&color=db2777'
            },
            {
                name: 'Sal Priadi',
                role: 'Guest Star',
                imageUrl: 'https://ui-avatars.com/api/?name=Sal+Priadi&background=e0f2fe&color=0284c7'
            }
        ],
        facilities: ['Area Kuliner (Food Bazaar)', 'Toilet Bersih', 'Mushola', 'Medis/P3K', 'Area Parkir Luas'],
        bannerUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '19:30 - 22:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=JNM+Bloc+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'nadinamizah', link: 'https://instagram.com/nadinamizah' },
            { platform: 'tiktok', username: 'nadinamizah', link: 'https://tiktok.com/@nadinamizah' }
        ]
    },
    {
        id: '2',
        slug: 'jogja-rockphonic-standing',
        title: 'Jogja Rockphonic (Standing)',
        date: '13 Juni 2026',
        price: 185000,
        imageUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Elkamasihcreative',
            logo: 'https://ui-avatars.com/api/?name=EC&background=f3f4f6&color=1e3a8a',
        },
        category: 'Musik',
        location: 'Stadion Kridosono, Yogyakarta',
        description: 'Menampilkan kolaborasi megah grup band rock legendaris Indonesia dengan aransemen simfoni orkestra modern yang membahana. Siapkan energi Anda untuk bernyanyi bersama ribuan pecinta musik rock!',
        terms: [
            'Tiket kategori Standing (Festival) tidak memiliki nomor kursi.',
            'Dilarang membawa botol minum kaca dan kaleng ke area konser.',
            'Gunakan pakaian yang nyaman dan alas kaki yang sesuai untuk area berdiri.',
            'Penukaran tiket gelang dilakukan H-1 di area Stadion Kridosono.'
        ],
        talents: [
            {
                name: 'Sheila on 7',
                role: 'Headliner Band',
                imageUrl: 'https://ui-avatars.com/api/?name=SO7&background=dcfce7&color=16a34a'
            },
            {
                name: 'Kotak Band',
                role: 'Rock Band',
                imageUrl: 'https://ui-avatars.com/api/?name=Kotak&background=fee2e2&color=dc2626'
            }
        ],
        facilities: ['Merchandise Booth', 'Medical Tent', 'F&B Zone', 'Loker Penyimpanan Barang'],
        bannerUrl: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '18:00 - 23:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Stadion+Kridosono+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'elkamasihcreative', link: 'https://instagram.com/elkamasihcreative' }
        ]
    },
    {
        id: '3',
        slug: 'partilibur-2026',
        title: 'Partilibur 2026',
        date: '01 - 02 Agustus 2026',
        price: 99000,
        imageUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'PARTILIBUR',
            logo: 'https://ui-avatars.com/api/?name=PL&background=f3f4f6&color=1e3a8a',
        },
        category: 'Musik',
        location: 'Lippo Plaza, Yogyakarta',
        description: 'Rayakan musim liburanmu bersama festival musik elektronik, pop, dan indie terbesar di Yogyakarta. Menghadirkan panggung multimedia canggih dengan instalasi lampu yang memesona.',
        terms: [
            'Tiket berlaku untuk 2 hari acara (2-Day Pass).',
            'Pengunjung di bawah usia 18 tahun wajib didampingi orang dewasa.',
            'Dilarang melakukan transaksi atau menjual kembali tiket untuk tujuan komersial.',
            'Seluruh penonton wajib mematuhi protokol kesehatan dan keamanan setempat.'
        ],
        talents: [
            {
                name: 'Weird Genius',
                role: 'Electronic DJ Duo',
                imageUrl: 'https://ui-avatars.com/api/?name=WG&background=e0e7ff&color=4338ca'
            },
            {
                name: 'Hindia',
                role: 'Indie Pop Singer',
                imageUrl: 'https://ui-avatars.com/api/?name=Hindia&background=fef3c7&color=d97706'
            }
        ],
        facilities: ['Electronic Charger Station', 'Food Truck Bazaar', 'VIP Lounge', 'Toilet Eksklusif'],
        bannerUrl: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '15:00 - 23:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Lippo+Plaza+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'partilibur', link: 'https://instagram.com/partilibur' }
        ]
    },
    {
        id: '4',
        slug: 'songlist-festival',
        title: 'SongList Festival',
        date: '14 Juni 2026',
        price: 80000,
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Rorojongrang Organizer',
            logo: 'https://ui-avatars.com/api/?name=RO&background=f3f4f6&color=1e3a8a',
        },
        category: 'Musik',
        location: 'Tebing Breksi, Yogyakarta',
        description: 'Nikmati konser musik berlatar belakang batuan kapur Tebing Breksi yang indah di bawah sinar rembulan Yogyakarta. Festival musik yang menyatukan harmoni alam dan kreativitas modern.',
        terms: [
            'Tiket berkategori General Admission.',
            'Acara bersifat outdoor, disarankan membawa jas hujan pribadi.',
            'Dilarang membawa drone tanpa izin tertulis dari penyelenggara.',
            'Pintu masuk dibuka pukul 15.00 WIB.'
        ],
        talents: [
            {
                name: 'Kunto Aji',
                role: 'Solo Singer',
                imageUrl: 'https://ui-avatars.com/api/?name=Kunto+Aji&background=fae8ff&color=a21caf'
            },
            {
                name: 'Pamungkas',
                role: 'Acoustic Guitarist & Singer',
                imageUrl: 'https://ui-avatars.com/api/?name=Pamungkas&background=ffedd5&color=c2410c'
            }
        ],
        facilities: ['Spot Foto Instagenic', 'Food Bazaar', 'Mushola Tebing', 'Area Parkir Motor & Mobil'],
        bannerUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '16:00 - 22:30 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Tebing+Breksi+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'songlistfest', link: 'https://instagram.com/songlistfest' }
        ]
    },
    {
        id: '5',
        slug: 'songlist-festival-day2',
        title: 'SongList Festival Day 2',
        date: '15 Juni 2026',
        price: 80000,
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Rorojongrang Organizer',
            logo: 'https://ui-avatars.com/api/?name=RO&background=f3f4f6&color=1e3a8a',
        },
        category: 'Musik',
        location: 'Tebing Breksi, Yogyakarta',
        description: 'Kelanjutan keseruan SongList Festival hari ke-2. Menampilkan jajaran musisi lokal dan nasional yang akan menemani senja hingga malam syahdu Anda di Tebing Breksi.',
        terms: [
            'Tiket khusus Day 2 Pass.',
            'Dilarang merusak keasrian alam dan struktur geologi Tebing Breksi.',
            'Dilarang membawa rokok elektrik atau vape ke area utama panggung.',
            'Penukaran e-tiket dapat dilakukan mulai pukul 12.00 WIB.'
        ],
        talents: [
            {
                name: 'Fourtwnty',
                role: 'Indie Folk Band',
                imageUrl: 'https://ui-avatars.com/api/?name=Fourtwnty&background=d1fae5&color=065f46'
            },
            {
                name: 'Fiersa Besari',
                role: 'Folk Pop Singer',
                imageUrl: 'https://ui-avatars.com/api/?name=Fiersa&background=ffedd5&color=9a3412'
            }
        ],
        facilities: ['Amfiteater Terbuka', 'Food Bazaar', 'Toilet Umum', 'Keamanan 24 Jam'],
        bannerUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '16:00 - 22:30 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Tebing+Breksi+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'songlistfest', link: 'https://instagram.com/songlistfest' }
        ]
    },
    {
        id: '6',
        slug: 'songlist-festival-day3',
        title: 'SongList Festival Day 3',
        date: '16 Juni 2026',
        price: 80000,
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Rorojongrang Organizer',
            logo: 'https://ui-avatars.com/api/?name=RO&background=f3f4f6&color=1e3a8a',
        },
        category: 'Musik',
        location: 'Tebing Breksi, Yogyakarta',
        description: 'Hari penutupan dari rangkaian SongList Festival. Rasakan puncak kemeriahan pesta kembang api spektakuler berpadu kolaborasi istimewa musisi legendaris.',
        terms: [
            'Tiket khusus Day 3 Pass.',
            'Penyelenggara tidak bertanggung jawab atas kehilangan barang pribadi.',
            'Dilarang membawa hewan peliharaan ke dalam area konser.',
            'Harap menjaga kebersihan dan membuang sampah pada tempatnya.'
        ],
        talents: [
            {
                name: 'Tulus',
                role: 'Pop Soloist Headliner',
                imageUrl: 'https://ui-avatars.com/api/?name=Tulus&background=f3e8ff&color=6b21a8'
            },
            {
                name: 'Yura Yunita',
                role: 'Pop Soloist Singer',
                imageUrl: 'https://ui-avatars.com/api/?name=Yura&background=fce7f3&color=9d174d'
            }
        ],
        facilities: ['Fireworks View Point', 'Food Bazaar', 'Mushola & Toilet', 'Parkir VIP'],
        bannerUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '16:00 - 23:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Tebing+Breksi+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'songlistfest', link: 'https://instagram.com/songlistfest' }
        ]
    },
    {
        id: 'p1',
        slug: 'fia-rallycross-world-cup-indonesia-2026',
        title: 'FIA Rallycross World Cup Indonesia 2026',
        date: '15 Desember 2026',
        price: 150000,
        imageUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'FIA Indonesia',
            logo: 'https://ui-avatars.com/api/?name=FIA&background=f3f4f6&color=1e3a8a',
        },
        category: 'Olahraga',
        location: 'Jakarta Utara',
        description: 'Kejuaraan dunia balap mobil reli silang (Rallycross) resmi di bawah naungan FIA kini hadir pertama kalinya di Indonesia. Saksikan pertarungan sengit pembalap kelas dunia di trek tanah dan aspal khusus di Jakarta Utara!',
        terms: [
            'Tiket berlaku sesuai tanggal yang tertera.',
            'Penonton wajib mengenakan gelang pengenal selama berada di area sirkuit.',
            'Dilarang mendekati pagar pembatas lintasan balap demi keselamatan.',
            'Gunakan pelindung telinga (earplug) terutama untuk penonton anak-anak.'
        ],
        talents: [
            {
                name: 'Johan Kristoffersson',
                role: 'World RX Champion',
                imageUrl: 'https://ui-avatars.com/api/?name=Johan+K&background=dbeafe&color=1d4ed8'
            },
            {
                name: 'Timmy Hansen',
                role: 'Main Driver Team Hansen',
                imageUrl: 'https://ui-avatars.com/api/?name=Timmy+H&background=fee2e2&color=dc2626'
            }
        ],
        facilities: ['Tribun Penonton Utama', 'F&B Food Court', 'Area Parkir Luas', 'Medical Center', 'Paddock Walk Access (VIP Only)'],
        bannerUrl: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '09:00 - 18:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Jakarta+Utara',
        socials: [
            { platform: 'instagram', username: 'fiaworldrx', link: 'https://instagram.com/fiaworldrx' }
        ]
    },
    {
        id: 'p2',
        slug: 'mommy-n-me-2026',
        title: "Mommy n'Me 2026",
        date: '28 Juni 2026',
        price: 50000,
        imageUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Reed Panorama Exhibitions',
            logo: 'https://ui-avatars.com/api/?name=RPE&background=fce7f3&color=db2777',
        },
        category: 'Pameran',
        location: 'Jakarta Pusat',
        description: 'Pameran festival kebutuhan ibu hamil, bayi, dan anak-anak terbesar di Indonesia. Temukan ribuan produk perlengkapan dengan diskon eksklusif dan ikuti talkshow edukatif bersama pakar kesehatan anak.',
        terms: [
            'Tiket masuk berlaku harian (1-Day Admission).',
            'Anak-anak di bawah tinggi badan 100cm gratis tiket masuk.',
            'Dilarang membawa kereta dorong (stroller) berukuran ekstra besar di jam-jam padat.',
            'Harap menjaga kebersihan dan menggunakan tempat sampah daur ulang.'
        ],
        talents: [
            {
                name: 'dr. Meta Hanindita, Sp.A',
                role: 'Pediatrician & Talkshow Host',
                imageUrl: 'https://ui-avatars.com/api/?name=Meta+H&background=fce7f3&color=9d174d'
            },
            {
                name: 'Tasya Kamila',
                role: 'Mom Influencer Guest',
                imageUrl: 'https://ui-avatars.com/api/?name=Tasya+K&background=ffedd5&color=c2410c'
            }
        ],
        facilities: ['Nursery & Breastfeeding Room', 'Stroller Rental Station', 'Kids Playground Area', 'Bazaar Makanan & Minuman', 'Medical/P3K'],
        bannerUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '10:00 - 21:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Jakarta+Pusat',
        socials: [
            { platform: 'instagram', username: 'mommynme.id', link: 'https://instagram.com/mommynme.id' }
        ]
    },
    {
        id: 'p3',
        slug: 'ideafest-sub-x-youth-up',
        title: 'IDEAFEST SUB x YOUTH UP',
        date: '12 Oktober 2026',
        price: 75000,
        imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'IdeaFest Indonesia',
            logo: 'https://ui-avatars.com/api/?name=IF&background=fef3c7&color=d97706',
        },
        category: 'Seminar',
        location: 'Kota Surabaya',
        description: 'Festival kreatif terbesar hadir di Surabaya berkolaborasi dengan Youth Up. Dapatkan inspirasi tanpa batas dari para pembicara industri kreatif nasional mengenai inovasi digital, seni, dan pengembangan diri generasi muda.',
        terms: [
            'Tiket berlaku untuk seluruh sesi conference dan workshop.',
            'Dilarang melakukan perekaman video sesi presentasi tanpa izin tertulis panitia.',
            'Sertifikat digital akan dikirimkan maksimal H+7 setelah acara berakhir.',
            'Harap berpakaian sopan dan kasual.'
        ],
        talents: [
            {
                name: 'Raditya Dika',
                role: 'Content Creator & Writer',
                imageUrl: 'https://ui-avatars.com/api/?name=Raditya+D&background=fef3c7&color=b45309'
            },
            {
                name: 'Najwa Shihab',
                role: 'Journalist & Founder Narasi',
                imageUrl: 'https://ui-avatars.com/api/?name=Najwa+S&background=e0f2fe&color=0369a1'
            }
        ],
        facilities: ['Idea Lounge & Networking Cafe', 'Creative Booth Bazaar', 'WiFi Area Kecepatan Tinggi', 'E-Certificate Eksklusif'],
        bannerUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '09:00 - 17:30 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Surabaya',
        socials: [
            { platform: 'instagram', username: 'ideafest', link: 'https://instagram.com/ideafest' }
        ]
    },
    {
        id: 'p4',
        slug: 'aldi-taher-world-tour-2026',
        title: 'ALDI TAHER - WORLD TOUR 2026 by BENGKEL HALL',
        date: '05 September 2026',
        price: 100000,
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Bengkel Space',
            logo: 'https://ui-avatars.com/api/?name=BS&background=f3e8ff&color=7e22ce',
        },
        category: 'Musik',
        location: 'Jakarta Selatan',
        description: 'Pertunjukan musik fenomenal bertajuk World Tour dari Aldi Taher di Bengkel Space, Jakarta Selatan. Bersiaplah untuk menyanyi lagu-lagu hits ikonik dan menikmati malam penuh tawa dan hiburan segar!',
        terms: [
            'Tiket berkategori General Admission (Standing).',
            'Hanya berlaku untuk pengunjung berusia 18 tahun ke atas.',
            'Dilarang membawa rokok elektrik atau vape ke dalam area panggung utama.',
            'Penukaran tiket gelang dibuka mulai pukul 17.00 WIB.'
        ],
        talents: [
            {
                name: 'Aldi Taher',
                role: 'Lead Performer',
                imageUrl: 'https://ui-avatars.com/api/?name=Aldi+T&background=f3e8ff&color=6b21a8'
            }
        ],
        facilities: ['Food & Beverage Station', 'Medical Room', 'Loker Penyimpanan Barang', 'Smoking Area Khusus'],
        bannerUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '19:00 - 22:30 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Bengkel+Space+SCBD',
        socials: [
            { platform: 'instagram', username: 'alditaher.official', link: 'https://instagram.com/alditaher.official' }
        ]
    },
];

export const dummyNearbyEvents: EventTicket[] = [
    {
        id: 'n1',
        slug: 'symphony-under-the-stars',
        title: 'Symphony Under the Stars',
        date: '15 Juni 2026',
        price: 150000,
        imageUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Jogja Symphony Orchestra',
            logo: 'https://ui-avatars.com/api/?name=JSO&background=e0e7ff&color=4338ca',
        },
        category: 'Musik',
        location: 'Candi Prambanan, Sleman',
        description: 'Nikmati malam magis dengan pertunjukan musik klasik dari orkestra ternama berlatar belakang keindahan Candi Prambanan yang menawan. Menampilkan mahakarya komposer dunia legendaris.',
        terms: [
            'Tiket berlaku untuk satu orang.',
            'Pengunjung wajib mengenakan pakaian semi-formal/rapi.',
            'Dilarang menyalakan kamera flash selama pertunjukan berlangsung.',
            'Pintu masuk gerbang Candi Prambanan dibuka sejak 16.30 WIB.'
        ],
        talents: [
            {
                name: 'Addie MS',
                role: 'Conductor & Composer',
                imageUrl: 'https://ui-avatars.com/api/?name=Addie+MS&background=c7d2fe&color=3730a3'
            },
            {
                name: 'Isyana Sarasvati',
                role: 'Guest Soprano Soloist',
                imageUrl: 'https://ui-avatars.com/api/?name=Isyana&background=fbcfe8&color=9d174d'
            }
        ],
        facilities: ['Tempat Duduk VIP & Festival', 'Shuttle Bus Area', 'Mushola Candi', 'Welcome Drink', 'Medical Station'],
        bannerUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '19:00 - 22:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Candi+Prambanan+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'jogjasymphony', link: 'https://instagram.com/jogjasymphony' }
        ]
    },
    {
        id: 'n2',
        slug: 'art-canvas-exhibition-2026',
        title: 'Art & Canvas Exhibition 2026',
        date: '18 Juni 2026',
        price: 50000,
        imageUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Jogja Art Gallery',
            logo: 'https://ui-avatars.com/api/?name=JAG&background=fef3c7&color=d97706',
        },
        category: 'Pameran',
        location: 'Malioboro, Yogyakarta',
        description: 'Pameran seni rupa modern yang menghadirkan ratusan lukisan, instalasi patung, dan seni grafis kontemporer karya seniman muda berbakat dari berbagai kota di Indonesia.',
        terms: [
            'Tiket dapat ditukarkan pada hari apa saja selama periode pameran.',
            'Dilarang menyentuh objek seni atau karya lukisan yang dipajang.',
            'Fotografi diizinkan tanpa menggunakan lampu flash/blitz.',
            'Anak di bawah 10 tahun harus didampingi oleh orang tua.'
        ],
        talents: [
            {
                name: 'Eko Nugroho',
                role: 'Curator & Artist',
                imageUrl: 'https://ui-avatars.com/api/?name=Eko+Nugroho&background=fef3c7&color=b45309'
            },
            {
                name: 'Heri Dono',
                role: 'Veteran Fine Artist',
                imageUrl: 'https://ui-avatars.com/api/?name=Heri+Dono&background=e0f2fe&color=0369a1'
            }
        ],
        facilities: ['Buku Panduan Pameran', 'Art Shop / Souvenir', 'Audio Guide Headset', 'Mini Cafe & Resto'],
        bannerUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '10:00 - 19:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Jogja+Art+Gallery+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'jogjaartgallery', link: 'https://instagram.com/jogjaartgallery' }
        ]
    },
    {
        id: 'n3',
        slug: 'fantasy-world-carnival',
        title: 'Fantasy World Carnival',
        date: '20 Juni 2026',
        price: 75000,
        imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Yogyakarta Fun Park',
            logo: 'https://ui-avatars.com/api/?name=YFP&background=dcfce7&color=15803d',
        },
        category: 'Wahana',
        location: 'Sleman, Yogyakarta',
        description: 'Festival wahana rekreasi keluarga terbesar dengan puluhan permainan seru, bianglala raksasa dengan pemandangan gunung Merapi, dan pertunjukan karnaval malam hari yang bercahaya.',
        terms: [
            'Tiket masuk sudah termasuk akses ke 15 wahana standar.',
            'Beberapa wahana ekstrem menerapkan syarat tinggi badan minimal.',
            'Dilarang membawa makanan dari luar ke dalam area taman rekreasi.',
            'Taman bermain dibuka mulai pukul 10.00 hingga 22.00 WIB.'
        ],
        talents: [
            {
                name: 'Circus Troupe',
                role: 'Carnival Performers',
                imageUrl: 'https://ui-avatars.com/api/?name=Circus&background=fce7f3&color=be185d'
            },
            {
                name: 'Clown & Magic Show',
                role: 'Street Performers',
                imageUrl: 'https://ui-avatars.com/api/?name=Magic&background=ecfdf5&color=047857'
            }
        ],
        facilities: ['Food Court Luas', 'Loker Barang Bermotor', 'Pusat Informasi & Anak Hilang', 'Toilet Ramah Difabel', 'Stroller Rental'],
        bannerUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '14:00 - 22:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Sleman+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'jogjafunpark', link: 'https://instagram.com/jogjafunpark' }
        ]
    },
    {
        id: 'n4',
        slug: 'yogyakarta-fun-run-2026',
        title: 'Yogyakarta Fun Run 2026',
        date: '21 Juni 2026',
        price: 120000,
        imageUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Kemenpora DIY',
            logo: 'https://ui-avatars.com/api/?name=KM&background=fce7f3&color=be185d',
        },
        category: 'Olahraga',
        location: 'Stadion Mandala Krida, Yogyakarta',
        description: 'Ajang lari santai sejauh 5K dan 10K melewati rute-rute bersejarah kota Yogyakarta. Nikmati kesegaran udara pagi diiringi tarian adat tradisional di setiap check point.',
        terms: [
            'Tiket sudah termasuk Race Pack (Jersey resmi, BIB, Medali Finisher, dan Sponsor Voucher).',
            'Peserta wajib dalam kondisi kesehatan prima untuk mengikuti perlombaan lari.',
            'Pengambilan Race Pack dilakukan di Stadion Mandala Krida H-2 acara.',
            'Start lari dimulai tepat pukul 05.30 WIB.'
        ],
        talents: [
            {
                name: 'Agus Prayogo',
                role: 'National Athlete Coach',
                imageUrl: 'https://ui-avatars.com/api/?name=Agus+Prayogo&background=dbeafe&color=1d4ed8'
            },
            {
                name: 'Melanie Putria',
                role: 'Running Enthusiast MC',
                imageUrl: 'https://ui-avatars.com/api/?name=Melanie&background=fce7f3&color=db2777'
            }
        ],
        facilities: ['Water Station di setiap 2K', 'Ambulans & Fisioterapi', 'Race Pack & Jersey', 'Medali Finisher Eksklusif', 'Refreshment Zone'],
        bannerUrl: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '05:00 - 10:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Stadion+Mandala+Krida+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'jogjafunrun', link: 'https://instagram.com/jogjafunrun' }
        ]
    },
    {
        id: 'n5',
        slug: 'drama-musikal-roro-jonggrang',
        title: 'Drama Musikal Roro Jonggrang',
        date: '24 Juni 2026',
        price: 100000,
        imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Pentas Seni Ramayana',
            logo: 'https://ui-avatars.com/api/?name=PSR&background=f3e8ff&color=7e22ce',
        },
        category: 'Teater',
        location: 'Teater Terbuka Ramayana, Sleman',
        description: 'Pertunjukan sendratari dan drama musikal spektakuler yang menceritakan legenda seribu candi Roro Jonggrang dan Bandung Bondowoso dengan efek tata lampu dramatis dan musik gamelan langsung.',
        terms: [
            'Tiket berupa E-Voucher yang wajib ditukarkan menjadi tiket fisik di loket Prambanan.',
            'Kursi diatur berdasarkan urutan kedatangan penonton (First come, first served).',
            'Dilarang merekam video berdurasi panjang atau melakukan live streaming pertunjukan.',
            'Pertunjukan dimulai tepat waktu, penonton telat dilarang masuk hingga jeda babak.'
        ],
        talents: [
            {
                name: 'Didik Nini Thowok',
                role: 'Choreographer & Senior Dancer',
                imageUrl: 'https://ui-avatars.com/api/?name=Didik+NT&background=f3e8ff&color=7e22ce'
            },
            {
                name: 'Seniwati Soloist',
                role: 'Roro Jonggrang Lead Role',
                imageUrl: 'https://ui-avatars.com/api/?name=Seniwati&background=fce7f3&color=db2777'
            }
        ],
        facilities: ['Kursi Penonton Nyaman', 'Audio Sound System Stereo', 'Leaflet Sinopsis Cerita', 'Lahan Parkir Kompleks Prambanan'],
        bannerUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '19:30 - 21:30 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Candi+Prambanan+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'ramayanaprambanan', link: 'https://instagram.com/ramayanaprambanan' }
        ]
    },
    {
        id: 'n6',
        slug: 'tech-startup-summit-yogyakarta',
        title: 'Tech Startup Summit Yogyakarta',
        date: '28 Juni 2026',
        price: 45000,
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Innovative Academy UGM',
            logo: 'https://ui-avatars.com/api/?name=IA&background=e0f2fe&color=0369a1',
        },
        category: 'Seminar',
        location: 'Fisipol UGM, Yogyakarta',
        description: 'Seminar dan networking event bagi pegiat startup teknologi, developer, investor, dan mahasiswa di Yogyakarta. Membahas tren teknologi AI, pendanaan ventura, dan strategi pertumbuhan bisnis.',
        terms: [
            'E-tiket berlaku untuk seminar utama dan sesi networking makan siang.',
            'Peserta diharapkan memakai pakaian rapi/business casual.',
            'Dilarang melakukan promosi komersial tanpa izin stan pameran resmi.',
            'Sertifikat elektronik akan dikirimkan H+3 melalui email terdaftar.'
        ],
        talents: [
            {
                name: 'Nadiem Makarim',
                role: 'Keynote Speaker (Tech Visionary)',
                imageUrl: 'https://ui-avatars.com/api/?name=Nadiem&background=e0f2fe&color=0284c7'
            },
            {
                name: 'Startup Founders Panel',
                role: 'Tech Industry Experts',
                imageUrl: 'https://ui-avatars.com/api/?name=Founders&background=f0fdf4&color=16a34a'
            }
        ],
        facilities: ['Lunch Box & Coffee Break', 'E-Certificate Resmi', 'Networking Lounge', 'Startup Exhibition Booths', 'AC & WiFi UGM'],
        bannerUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '08:30 - 16:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Fisipol+UGM+Yogyakarta',
        socials: [
            { platform: 'instagram', username: 'innovativeacademy', link: 'https://instagram.com/innovativeacademy' }
        ]
    },
    {
        id: 'n7',
        slug: 'aldi-taher-world-tour-2026',
        title: 'ALDI TAHER - WORLD TOUR 2026 by BENGKEL HALL',
        date: '05 September 2026',
        price: 100000,
        imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Bengkel Space',
            logo: 'https://ui-avatars.com/api/?name=BS&background=f3e8ff&color=7e22ce',
        },
        category: 'Musik',
        location: 'Jakarta Selatan',
        description: 'Pertunjukan musik fenomenal bertajuk World Tour dari Aldi Taher di Bengkel Space, Jakarta Selatan. Bersiaplah untuk menyanyi lagu-lagu hits ikonik dan menikmati malam penuh tawa dan hiburan segar!',
        terms: [
            'Tiket berkategori General Admission (Standing).',
            'Hanya berlaku untuk pengunjung berusia 18 tahun ke atas.',
            'Dilarang membawa rokok elektrik atau vape ke dalam area panggung utama.',
            'Penukaran tiket gelang dibuka mulai pukul 17.00 WIB.'
        ],
        talents: [
            {
                name: 'Aldi Taher',
                role: 'Lead Performer',
                imageUrl: 'https://ui-avatars.com/api/?name=Aldi+T&background=f3e8ff&color=6b21a8'
            }
        ],
        facilities: ['Food & Beverage Station', 'Medical Room', 'Loker Penyimpanan Barang', 'Smoking Area Khusus'],
        bannerUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '19:00 - 22:30 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Bengkel+Space+SCBD',
        socials: [
            { platform: 'instagram', username: 'alditaher.official', link: 'https://instagram.com/alditaher.official' }
        ]
    },
    {
        id: 'n8',
        slug: 'mommy-n-me-2026',
        title: "Mommy n'Me 2026",
        date: '28 Juni 2026',
        price: 50000,
        imageUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        organizer: {
            name: 'Reed Panorama Exhibitions',
            logo: 'https://ui-avatars.com/api/?name=RPE&background=fce7f3&color=db2777',
        },
        category: 'Pameran',
        location: 'Jakarta Pusat',
        description: 'Pameran festival kebutuhan ibu hamil, bayi, dan anak-anak terbesar di Indonesia. Temukan ribuan produk perlengkapan dengan diskon eksklusif dan ikuti talkshow edukatif bersama pakar kesehatan anak.',
        terms: [
            'Tiket masuk berlaku harian (1-Day Admission).',
            'Anak-anak di bawah tinggi badan 100cm gratis tiket masuk.',
            'Dilarang membawa kereta dorong (stroller) berukuran ekstra besar di jam-jam padat.',
            'Harap menjaga kebersihan dan menggunakan tempat sampah daur ulang.'
        ],
        talents: [
            {
                name: 'dr. Meta Hanindita, Sp.A',
                role: 'Pediatrician & Talkshow Host',
                imageUrl: 'https://ui-avatars.com/api/?name=Meta+H&background=fce7f3&color=9d174d'
            },
            {
                name: 'Tasya Kamila',
                role: 'Mom Influencer Guest',
                imageUrl: 'https://ui-avatars.com/api/?name=Tasya+K&background=ffedd5&color=c2410c'
            }
        ],
        facilities: ['Nursery & Breastfeeding Room', 'Stroller Rental Station', 'Kids Playground Area', 'Bazaar Makanan & Minuman', 'Medical/P3K'],
        bannerUrl: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        time: '10:00 - 21:00 WIB',
        googleMapsLink: 'https://maps.google.com/?q=Jakarta+Pusat',
        socials: [
            { platform: 'instagram', username: 'mommynme.id', link: 'https://instagram.com/mommynme.id' }
        ]
    },
];

export const dummyBanners: Banner[] = [
    {
        id: '1',
        imageUrl: 'https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fhero_banner%2FF5AW2TSLPQ.jpg&w=1600&q=100'
    },
    {
        id: '2',
        imageUrl: 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/w1600h0/infopages/2023/02/28/6d3176ef-2cdf-4455-8aa2-1514436a1898-1677554423022-1ee19e78f8da167bda9c59f696bdca8d.png'
    },
    {
        id: '3',
        imageUrl: 'https://www.bca.co.id/-/media/Feature/Promo/Page/2024/06/20240607-tiket-com-banner.jpg?v=1'
    }
];