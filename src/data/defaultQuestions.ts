import { Question } from '../types';
import rangkaSendiImg from '../assets/images/rangka_sendi_manusia_1795414199251.jpg';
import proklamasiImg from '../assets/images/proklamasi_kemerdekaan_ri_1795414199549.jpg';
import enamBenuaImg from '../assets/images/enam_benua_dunia_1795414199908.jpg';
import geografisPotensiImg from '../assets/images/geografis_potensi_subak_1795414199510.jpg';
import warisanBudayaImg from '../assets/images/warisan_budaya_indonesia_1795414199482.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN A: PILIHAN GANDA (18 SOAL)
  // ============================================================================

  // --- Lingkup 1: Bagaimana Tubuh Kita Bergerak (5 PG: No. 1 - 5) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Rangka, Sendi, dan Otot',
    difficulty: 'Mudah',
    text: 'Rangka manusia tersusun atas berbagai jenis tulang yang saling berhubungan dan memiliki fungsi vital bagi tubuh. Berikut ini yang merupakan fungsi utama tulang tengkorak dan tulang rusuk pada tubuh manusia adalah...',
    options: [
      { id: 'A', text: 'Melindungi organ-organ penting yang lunak seperti otak, jantung, dan paru-paru' },
      { id: 'B', text: 'Menghasilkan impuls saraf secara langsung tanpa bantuan otak' },
      { id: 'C', text: 'Mengedarkan oksigen ke seluruh jaringan tubuh' },
      { id: 'D', text: 'Mencerna sari-sari makanan di dalam tubuh' },
    ],
    correctAnswer: 'A',
    explanation:
      'Salah satu fungsi utama rangka adalah melindungi organ vital. Tulang tengkorak melindungi otak dan organ indra di kepala, sedangkan tulang rusuk dan tulang dada melindungi jantung serta paru-paru.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Rangka, Sendi, dan Otot',
    difficulty: 'Sedang',
    imageUrl: rangkaSendiImg,
    imageCaption: 'Model anatomi rangka, sendi bahu, sendi siku, dan otot lengan atas manusia.',
    text: 'Perhatikan model anatomi tubuh manusia pada gambar di atas! Saat lengan bawah ditekuk ke atas seperti pada gambar, sendi yang bekerja pada bagian siku serta mekanisme kerja otot biseps adalah...',
    options: [
      { id: 'A', text: 'Sendi engsel yang bergerak satu arah, dengan otot biseps berkontraksi (memendek dan mengeras)' },
      { id: 'B', text: 'Sendi putar yang berotasi ke segala arah, dengan otot biseps berelaksasi total' },
      { id: 'C', text: 'Sendi pelana yang bergerak dua arah, tanpa melibatkan kerja otot rangka' },
      { id: 'D', text: 'Sendi mati yang tidak memungkinkan terjadinya pergerakan pada lengan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada siku terdapat sendi engsel yang memungkinkan gerakan satu arah (menekuk dan meluruskan). Ketika lengan bawah ditekuk ke atas, otot biseps berkontraksi (mengencang dan memendek) sedangkan otot triseps berelaksasi.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Rangka, Sendi, dan Otot',
    difficulty: 'Mudah',
    text: 'Di dalam tubuh manusia terdapat tiga jenis otot: otot polos, otot lurik (rangka), dan otot jantung. Otot yang menempel pada rangka tubuh dan bekerja secara sadar sesuai perintah otak saat kita berjalan atau menulis adalah...',
    options: [
      { id: 'A', text: 'Otot polos' },
      { id: 'B', text: 'Otot jantung' },
      { id: 'C', text: 'Otot lurik' },
      { id: 'D', text: 'Otot diafragma tak sadar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Otot lurik (otot rangka) melekat pada tulang dan bekerja di bawah kesadaran (volunter), sehingga memungkinkan kita menggerakkan tangan, kaki, dan tubuh sesuai kehendak.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Sistem Saraf',
    difficulty: 'Sedang',
    text: 'Ketika jari tangan Putu tidak sengaja menyentuh panci panas di dapur, ia seketika menarik tangannya sebelum sempat berpikir panjang. Pusat pengendali gerak refleks cepat untuk melindungi tubuh tersebut adalah...',
    options: [
      { id: 'A', text: 'Sumsum tulang belakang' },
      { id: 'B', text: 'Otot betis bagian bawah' },
      { id: 'C', text: 'Sendi peluru pada bahu' },
      { id: 'D', text: 'Tulang belikat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Gerak refleks adalah gerak cepat dan tidak disadari untuk melindungi tubuh dari bahaya. Jalur impuls gerak refleks diproses secara singkat melalui sumsum tulang belakang sebelum pesan sampai ke otak.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Penyakit yang Menyerang Sistem Gerak',
    difficulty: 'Sedang',
    text: 'Seorang anak terbiasa duduk membungkuk ke depan terlalu sering saat belajar di meja yang terlalu rendah, sehingga tulang punggungnya melengkung ke arah belakang secara tidak normal. Kelainan tulang belakang tersebut dinamakan...',
    options: [
      { id: 'A', text: 'Skoliosis' },
      { id: 'B', text: 'Kifosis' },
      { id: 'C', text: 'Lordosis' },
      { id: 'D', text: 'Osteoporosis' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kifosis adalah kelainan tulang belakang yang melengkung ke belakang sehingga tampak membungkuk. Lordosis melengkung ke depan (perut maju), sedangkan skoliosis melengkung ke samping (membentuk huruf S atau C).',
  },

  // --- Lingkup 2: Cerita tentang Indonesia Kita (4 PG: No. 6 - 9) ---
  {
    id: 6,
    type: 'pg',
    topic: 'Kedatangan Bangsa-Bangsa Asing di Indonesia',
    difficulty: 'Mudah',
    text: 'Pada abad ke-16, bangsa-bangsa Eropa seperti Portugis, Spanyol, Belanda, dan Inggris berlomba datang ke Nusantara. Daya tarik utama kepulauan Indonesia yang mendorong kedatangan bangsa-bangsa Eropa tersebut adalah...',
    options: [
      { id: 'A', text: 'Melimpahnya rempah-rempah bernilai tinggi seperti cengkih, pala, dan lada (semboyan 3G)' },
      { id: 'B', text: 'Keinginan mempelajari kesenian modern Eropa yang ada di Maluku' },
      { id: 'C', text: 'Permintaan kerajaan-kerajaan di Jawa untuk memindahkan ibu kota Eropa' },
      { id: 'D', text: 'Pencarian cadangan salju abadi di sepanjang garis khatulistiwa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bangsa Eropa datang ke Indonesia didorong oleh semboyan 3G (Gold, Glory, Gospel), terutama untuk menguasai perdagangan rempah-rempah (cengkih, pala, lada) yang sangat mahal di pasar Eropa.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Macam-Macam Perlawanan',
    difficulty: 'Sedang',
    text: 'Di Bali, rakyat bersama para raja melakukan perlawanan heroik menentang kehendak Belanda yang ingin menghapus hak tawan karang melalui perang habis-habisan sampai titik darah penghabisan yang dikenal sebagai...',
    options: [
      { id: 'A', text: 'Perang Puputan (seperti Puputan Jagaraga dan Puputan Margarana)' },
      { id: 'B', text: 'Perang Padri di Sumatra Barat' },
      { id: 'C', text: 'Perjanjian Bongaya di Makassar' },
      { id: 'D', text: 'Politik Etis di Jawa Tengah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Puputan adalah tradisi perang habis-habisan hingga titik darah penghabisan untuk mempertahankan kehormatan dan kedaulatan tanah air, seperti Perang Jagaraga (1849), Puputan Badung (1906), dan Puputan Margarana (1946).',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Macam-Macam Perlawanan',
    difficulty: 'Sukar',
    text: 'Setelah tahun 1908 (ditandai berdirinya Budi Utomo), bentuk perjuangan bangsa Indonesia melawan penjajahan mengalami perubahan strategi yang mendasar dibandingkan perlawanan sebelum abad ke-20, yaitu...',
    options: [
      { id: 'A', text: 'Beralih dari perjuangan bersifat kedaerahan dengan senjata menjadi perjuangan organisasi modern yang bersifat nasional' },
      { id: 'B', text: 'Mengandalkan bantuan tentara bayaran dari seluruh benua Afrika' },
      { id: 'C', text: 'Menghapus penggunaan bahasa Indonesia dalam kongres pemuda' },
      { id: 'D', text: 'Hanya berjuang secara terpisah di masing-masing desa tanpa persatuan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kebangkitan Nasional 1908 mengubah corak perjuangan dari perlawanan bersenjata yang bersifat kedaerahan menjadi perjuangan terorganisir melalui organisasi pergerakan nasional, pendidikan, dan persatuan seluruh Nusantara.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Kemerdekaan dan Peristiwa di Sekitarnya',
    difficulty: 'Mudah',
    imageUrl: proklamasiImg,
    imageCaption: 'Suasana bersejarah pembacaan teks Proklamasi Kemerdekaan Indonesia pada 17 Agustus 1945.',
    text: 'Perhatikan gambar peristiwa bersejarah di atas! Sebelum pembacaan teks Proklamasi Kemerdekaan dilaksanakan di Jalan Pegangsaan Timur No. 56 Jakarta pada 17 Agustus 1945, terjadi peristiwa penting pada 16 Agustus 1945 ketika golongan muda membawa Ir. Soekarno dan Drs. Moh. Hatta ke luar kota agar terhindar dari pengaruh Jepang, yaitu peristiwa...',
    options: [
      { id: 'A', text: 'Peristiwa Rengasdengklok' },
      { id: 'B', text: 'Bandung Lautan Api' },
      { id: 'C', text: 'Konferensi Meja Bundar' },
      { id: 'D', text: 'Serangan Umum 1 Maret' },
    ],
    correctAnswer: 'A',
    explanation:
      'Peristiwa Rengasdengklok terjadi pada 16 Agustus 1945 ketika para pemuda membawa Soekarno dan Hatta ke Rengasdengklok, Karawang, guna mendesak agar Proklamasi Kemerdekaan Indonesia segera dilaksanakan secepatnya.',
  },

  // --- Lingkup 3: Pelesir Keliling Dunia (5 PG: No. 10 - 14) ---
  {
    id: 10,
    type: 'pg',
    topic: 'Enam Benua di Dunia',
    difficulty: 'Mudah',
    imageUrl: enamBenuaImg,
    imageCaption: 'Peta fisik permukaan Bumi yang memperlihatkan bentang alam benua-benua di dunia.',
    text: 'Perhatikan peta fisik dunia pada gambar di atas! Benua yang memiliki wilayah terluas sekaligus jumlah penduduk terbanyak di dunia, serta menjadi tempat beradanya negara Indonesia, Jepang, dan India adalah...',
    options: [
      { id: 'A', text: 'Benua Asia' },
      { id: 'B', text: 'Benua Eropa' },
      { id: 'C', text: 'Benua Australia' },
      { id: 'D', text: 'Benua Afrika' },
    ],
    correctAnswer: 'A',
    explanation:
      'Benua Asia adalah benua terluas dan berpenduduk terbanyak di dunia. Indonesia terletak di kawasan Asia Tenggara yang merupakan bagian dari Benua Asia.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Enam Benua di Dunia',
    difficulty: 'Mudah',
    text: 'Di antara enam benua berpenghuni di dunia (Asia, Afrika, Amerika Utara, Amerika Selatan, Eropa, dan Australia), benua yang dijuluki "Benua Hitam" serta memiliki gurun pasir terluas di dunia (Gurun Sahara) dan Sungai Nil adalah...',
    options: [
      { id: 'A', text: 'Benua Amerika Selatan' },
      { id: 'B', text: 'Benua Afrika' },
      { id: 'C', text: 'Benua Eropa' },
      { id: 'D', text: 'Benua Australia' },
    ],
    correctAnswer: 'B',
    explanation:
      'Benua Afrika memiliki Gurun Sahara sebagai gurun panas terluas di dunia serta Sungai Nil yang merupakan salah satu sungai terpanjang di dunia.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Perbedaan Geografis Negara-Negara di Dunia',
    difficulty: 'Sedang',
    text: 'Negara Jepang terletak di kawasan Cincin Api Pasifik (Ring of Fire) sehingga sering mengalami gempa bumi dan memiliki banyak gunung berapi aktif. Cara masyarakat Jepang beradaptasi dengan kondisi geografis tersebut antara lain...',
    options: [
      { id: 'A', text: 'Membangun gedung bertingkat dengan teknologi konstruksi tahan gempa dan rutin melakukan simulasi mitigasi bencana' },
      { id: 'B', text: 'Melarang seluruh warganya membangun rumah di seluruh kepulauan Jepang' },
      { id: 'C', text: 'Menghilangkan pelajaran kesiapsiagaan bencana dari sekolah dasar' },
      { id: 'D', text: 'Mengganti seluruh lahan pertanian menjadi gurun pasir buatan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Perbedaan kondisi geografis mendorong adaptasi teknologi dan budaya. Jepang mengembangkan arsitektur tahan gempa, sistem peringatan dini tsunami, serta pendidikan mitigasi bencana sejak usia dini.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Perbedaan Geografis Negara-Negara di Dunia',
    difficulty: 'Sedang',
    text: 'Negara Belanda di Benua Eropa memiliki sebagian besar wilayah daratan yang posisinya lebih rendah dari permukaan air laut. Upaya geografis dan teknologi yang dilakukan Belanda untuk mencegah banjir laut adalah...',
    options: [
      { id: 'A', text: 'Membangun tanggul laut raksasa, polder, kanal air, dan kincir angin atau pompa pengering lahan' },
      { id: 'B', text: 'Mengeruk seluruh daratan agar berubah menjadi lautan dalam' },
      { id: 'C', text: 'Memindahkan seluruh gunung berapi dari Asia ke Belanda' },
      { id: 'D', text: 'Menutup seluruh sungai dengan pasir gurun' },
    ],
    correctAnswer: 'A',
    explanation:
      'Belanda terkenal dengan sistem tanggul laut (dike), kanal pengatur air, serta wilayah daratan reklamasi yang disebut polder untuk melindungi wilayah dataran rendahnya dari luapan air laut.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Pemanfaatan Kondisi Geografis demi Optimalisasi Potensi',
    difficulty: 'Sedang',
    imageUrl: geografisPotensiImg,
    imageCaption: 'Lahan sawah terasering bertingkat dengan sistem irigasi subak di lereng gunung berapi yang subur di Bali.',
    text: 'Perhatikan foto bentang alam di Indonesia pada gambar di atas! Pemanfaatan kondisi geografis lereng gunung berapi bertanah vulkanik subur dan curah hujan tinggi yang tampak pada gambar merupakan contoh optimalisasi potensi pada sektor...',
    options: [
      { id: 'A', text: 'Pertanian lahan basah (padi terasering/subak) dan agrowisata alam' },
      { id: 'B', text: 'Pertambangan minyak lepas pantai di dasar samudra' },
      { id: 'C', text: 'Peternakan unta dan penambangan es kutub' },
      { id: 'D', text: 'Industri pelabuhan kapal kargo antarbenua di puncak gunung' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tanah vulkanik di lereng gunung berapi sangat subur. Masyarakat memanfaatkannya dengan membuat terasering sawah (untuk mencegah erosi), sistem irigasi subak yang adil, sekaligus mengembangkannya menjadi daya tarik wisata alam.',
  },

  // --- Lingkup 4: Indonesia dan Masyarakat Dunia (4 PG: No. 15 - 18) ---
  {
    id: 15,
    type: 'pg',
    topic: 'Hubungan Antar Negara',
    difficulty: 'Mudah',
    text: 'Tidak ada satu pun negara di dunia yang mampu memenuhi seluruh kebutuhan warganya sendiri karena perbedaan sumber daya alam dan keahlian teknologi. Kegiatan menjual barang hasil produksi Indonesia (seperti kopi, batik, atau karet) ke luar negeri disebut...',
    options: [
      { id: 'A', text: 'Impor' },
      { id: 'B', text: 'Ekspor' },
      { id: 'C', text: 'Barter lokal' },
      { id: 'D', text: 'Globalisasi budaya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ekspor adalah kegiatan menjual atau mengirim barang dan jasa produksi dalam negeri ke negara lain, sedangkan impor adalah membeli atau mendatangkan barang dari luar negeri ke dalam negeri.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Kerjasama Indonesia dengan Negara-Negara di Dunia',
    difficulty: 'Sedang',
    text: 'Indonesia bersama Malaysia, Singapura, Thailand, dan Filipina mendirikan organisasi kerja sama regional di kawasan Asia Tenggara melalui Deklarasi Bangkok pada tahun 1967. Organisasi yang dimaksud adalah...',
    options: [
      { id: 'A', text: 'ASEAN (Association of Southeast Asian Nations)' },
      { id: 'B', text: 'Uni Eropa (European Union)' },
      { id: 'C', text: 'Liga Arab' },
      { id: 'D', text: 'OPEC' },
    ],
    correctAnswer: 'A',
    explanation:
      'ASEAN didirikan pada 8 Agustus 1967 di Bangkok oleh lima negara pemrakarsa (Indonesia, Malaysia, Filipina, Singapura, dan Thailand) untuk mempererat kerja sama ekonomi, sosial, budaya, dan stabilitas kawasan.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Warisan Budaya Indonesia yang Mendunia',
    difficulty: 'Mudah',
    imageUrl: warisanBudayaImg,
    imageCaption: 'Pameran ragam warisan budaya Indonesia: kain Batik tulis, Angklung, Wayang Kulit, dan Gamelan.',
    text: 'Perhatikan foto benda-benda warisan budaya Nusantara pada gambar di atas! Keempat benda budaya tersebut (Batik, Angklung, Wayang Kulit, dan Gamelan) telah diakui dunia internasional sebagai Warisan Budaya Takbenda oleh lembaga PBB yang bernama...',
    options: [
      { id: 'A', text: 'UNESCO' },
      { id: 'B', text: 'WHO' },
      { id: 'C', text: 'FIFA' },
      { id: 'D', text: 'IMF' },
    ],
    correctAnswer: 'A',
    explanation:
      'UNESCO (United Nations Educational, Scientific and Cultural Organization) telah menetapkan Wayang (2003), Batik (2009), Angklung (2010), dan Gamelan (2021) sebagai Warisan Budaya Takbenda Dunia asal Indonesia.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Warisan Budaya Indonesia yang Mendunia',
    difficulty: 'Sukar',
    text: 'Sebagai pelajar kelas 6 SD di era globalisasi ketika budaya asing mudah masuk melalui internet, sikap yang paling bijak dalam melestarikan warisan budaya Indonesia yang telah mendunia adalah...',
    options: [
      { id: 'A', text: 'Bangga mengenakan batik, mempelajari kesenian daerah, serta mempromosikan budaya lokal secara positif melalui media digital' },
      { id: 'B', text: 'Menganggap budaya tradisional kuno sehingga harus dilupakan sepenuhnya' },
      { id: 'C', text: 'Meniru seluruh budaya asing tanpa menyaring apakah sesuai dengan nilai Pancasila' },
      { id: 'D', text: 'Melarang wisatawan mancanegara mengenal tari dan musik tradisional Indonesia' },
    ],
    correctAnswer: 'A',
    explanation:
      'Di era globalisasi, generasi muda harus bangga dan aktif melestarikan budaya Nusantara sekaligus memanfaatkan teknologi digital untuk mengenalkan kekayaan budaya Indonesia ke masyarakat dunia.',
  },

  // ============================================================================
  // BAGIAN B: PILIHAN GANDA KOMPLEKS / PGK (3 SOAL, MASING-MASING 3 OPSI)
  // ============================================================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Rangka, Sendi, Otot, Sistem Saraf, dan Kesehatan Gerak',
    difficulty: 'Sedang',
    text: 'Agar tubuh dapat bergerak lincah dan sehat sepanjang hari, sistem rangka, sendi, otot, serta sistem saraf harus bekerja sama dengan baik dan dijaga kesehatannya. Manakah pernyataan berikut yang BENAR mengenai sistem gerak manusia? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Sendi peluru yang terdapat pada pangkal bahu dan panggul memungkinkan gerakan bebas ke segala arah.',
      },
      {
        id: 'B',
        text: 'Mengonsumsi makanan kaya kalsium dan vitamin D, berjemur di pagi hari, serta menjaga posisi duduk tegak membantu mencegah osteoporosis dan kelainan tulang belakang.',
      },
      {
        id: 'C',
        text: 'Otak dan sumsum tulang belakang hanya berfungsi saat kita tidur dan tidak berperan dalam menggerakkan otot tangan.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A BENAR: Sendi peluru menghubungkan tulang berbentuk bonggol dengan mangkuk (seperti bahu dan panggul) sehingga bisa berputar ke segala arah.\n• B BENAR: Kalsium, vitamin D, sinar matahari pagi, dan postur duduk ergonomis menjaga kepadatan dan bentuk tulang.\n• C SALAH: Otak adalah pusat pengendali gerak sadar, sedangkan sumsum tulang belakang mengatur gerak refleks setiap saat.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Cerita tentang Indonesia Kita',
    difficulty: 'Sedang',
    text: 'Perjuangan bangsa Indonesia meraih kemerdekaan melewati perjalanan panjang sejak masa penjajahan hingga peristiwa proklamasi 17 Agustus 1945. Manakah pernyataan yang TEPAT mengenai sejarah perjuangan bangsa Indonesia? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Sistem tanam paksa (cultuurstelsel) dan kerja paksa (rodi/romusha) menimbulkan penderitaan rakyat dan memicu perlawanan di berbagai daerah.',
      },
      {
        id: 'B',
        text: 'Sumpah Pemuda pada tanggal 28 Oktober 1928 mengukuhkan tekad persatuan: satu tanah air, satu bangsa, dan menjunjung bahasa persatuan Bahasa Indonesia.',
      },
      {
        id: 'C',
        text: 'Kemerdekaan Indonesia merupakan hadiah pemberian bangsa penjajah tanpa pengorbanan rakyat Indonesia.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A BENAR: Penindasan ekonomi dan kerja paksa oleh penjajah memicu banyak perlawanan pahlawan seperti Diponegoro, Pattimura, Imam Bonjol, hingga rakyat Bali.\n• B BENAR: Sumpah Pemuda 28 Oktober 1928 menjadi tonggak persatuan nasional.\n• C SALAH: Kemerdekaan Indonesia diraih melalui perjuangan panjang dan pengorbanan seluruh rakyat Indonesia.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Pelesir Keliling Dunia & Masyarakat Dunia',
    difficulty: 'Sukar',
    imageUrl: enamBenuaImg,
    imageCaption: 'Peta fisik bumi yang menunjukkan keterhubungan enam benua melalui lautan dan kondisi geografisnya.',
    text: 'Perhatikan peta dunia di atas! Perbedaan kondisi geografis antarnegara di enam benua melahirkan keunggulan potensi sekaligus mendorong kerja sama internasional. Manakah pernyataan berikut yang BENAR? (Pilih semua jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Negara Indonesia yang berada di wilayah tropis dan kepulauan (negara maritim-agraris) memiliki potensi besar di bidang perikanan, perkebunan rempah, dan pariwisata bahari.',
      },
      {
        id: 'B',
        text: 'Benua Australia merupakan benua terkecil sekaligus negara benua yang terkenal dengan hewan berkantung (kanguru dan koala) serta peternakan domba skala besar.',
      },
      {
        id: 'C',
        text: 'Kerja sama internasional hanya boleh dilakukan dengan negara yang memiliki iklim dan hasil bumi yang sama persis dengan Indonesia.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• A BENAR: Letak strategis di garis khatulistiwa dan bentuk negara kepulauan menjadikan Indonesia kaya hasil laut, pertanian tropis, dan wisata bahari.\n• B BENAR: Australia adalah benua terkecil yang dihuni satu negara utama dengan bentang padang rumput luas (sabana) dan fauna khas marsupial.\n• C SALAH: Kerja sama internasional justru sangat bermanfaat karena tiap negara memiliki perbedaan sumber daya dan teknologi untuk saling melengkapi.',
  },

  // ============================================================================
  // BAGIAN C: PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL, MASING-MASING 3 PERNYATAAN B/S)
  // ============================================================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Rangka, Sendi, dan Otot',
    difficulty: 'Mudah',
    imageUrl: rangkaSendiImg,
    imageCaption: 'Struktur tulang tengkorak, tulang rusuk, sendi bahu, sendi siku, dan otot lengan.',
    text: 'Amati gambar anatomi rangka dan otot manusia di atas! Tentukan kebenaran dari masing-masing pernyataan berikut mengenai bagian sistem gerak tubuh (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Tulang disebut sebagai alat gerak pasif karena tidak dapat bergerak sendiri tanpa digerakkan oleh otot.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sendi engsel pada siku dan lutut memungkinkan gerakan membengkok dan melurus ke satu arah.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Otot jantung bekerja di bawah perintah sadar kita dan dapat dihentikan sesuka hati saat sedang berlari.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Tulang adalah alat gerak pasif, sedangkan otot adalah alat gerak aktif (BENAR).\n2. Sendi engsel bekerja satu arah seperti engsel pintu pada siku dan lutut (BENAR).\n3. Otot jantung bekerja secara otomatis/tak sadar (involunter) terus-menerus memompa darah (SALAH).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Sistem Saraf dan Penyakit Sistem Gerak',
    difficulty: 'Sedang',
    text: 'Siswa kelas 6 mempelajari cara kerja sistem saraf serta gangguan kesehatan yang dapat menyerang tulang dan otot. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Sistem saraf pusat manusia terdiri atas otak dan sumsum tulang belakang yang mengatur seluruh aktivitas tubuh.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Osteoporosis adalah gangguan tulang akibat berkurangnya kepadatan tulang sehingga tulang menjadi keropos dan mudah patah.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Mengangkat beban yang sangat berat di satu sisi bahu saja setiap hari adalah cara terbaik untuk menyembuhkan skoliosis.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Otak dan sumsum tulang belakang merupakan sistem saraf pusat pengendali gerak dan rangsangan (BENAR).\n2. Osteoporosis ditandai pengeroposan tulang akibat kekurangan kalsium/penurunan massa tulang (BENAR).\n3. Membawa beban berat miring pada satu bahu justru dapat memicu tulang belakang melengkung ke samping/skoliosis (SALAH).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Kedatangan Bangsa Asing dan Perlawanan',
    difficulty: 'Sedang',
    text: 'Pada masa kolonialisme, berbagai daerah di Nusantara bangkit melakukan perlawanan terhadap monopoli perdagangan dan penjajahan bangsa asing. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'VOC dibentuk oleh pemerintah Belanda pada tahun 1602 dengan hak istimewa untuk memonopoli perdagangan rempah-rempah di Nusantara.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pangeran Diponegoro memimpin Perang Jawa (1825–1830), sedangkan Kapitan Pattimura memimpin perlawanan rakyat di Maluku.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Politik adu domba (devide et impera) digunakan penjajah untuk mempererat persatuan antara kerajaan-kerajaan di Indonesia.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. VOC diberi hak oktroi oleh Belanda untuk memonopoli perdagangan di Hindia Timur (BENAR).\n2. Diponegoro memimpin perang di Jawa dan Pattimura memimpin perlawanan di Saparua, Maluku (BENAR).\n3. Politik devide et impera bertujuan memecah belah persatuan antar kerajaan agar mudah dikuasai (SALAH).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Kemerdekaan dan Peristiwa di Sekitarnya',
    difficulty: 'Mudah',
    imageUrl: proklamasiImg,
    imageCaption: 'Pembacaan teks Proklamasi Kemerdekaan RI oleh Ir. Soekarno didampingi Drs. Moh. Hatta.',
    text: 'Perhatikan gambar peristiwa Proklamasi Kemerdekaan 17 Agustus 1945 di atas! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Naskah teks Proklamasi Kemerdekaan Indonesia diketik oleh Sayuti Melik setelah dirumuskan di rumah Laksamana Maeda.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Bendera Pusaka Sang Saka Merah Putih yang dikibarkan saat upacara Proklamasi dijahit oleh Ibu Fatmawati.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Berita Proklamasi Kemerdekaan Indonesia sengaja disembunyikan selamanya dari rakyat daerah agar tidak diketahui dunia.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Naskah otentik Proklamasi diketik oleh Sayuti Melik di rumah Laksamana Tadashi Maeda (BENAR).\n2. Ibu Fatmawati menjahit langsung bendera Merah Putih yang dikibarkan pada 17 Agustus 1945 (BENAR).\n3. Berita Proklamasi justru disebarluaskan dengan cepat ke seluruh Nusantara dan dunia melalui radio, surat kabar, dan selebaran (SALAH).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Enam Benua di Dunia',
    difficulty: 'Mudah',
    text: 'Dalam materi Pelesir Keliling Dunia, kita mengenal karakteristik enam benua yang dihuni manusia di permukaan Bumi. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Benua Eropa dan Benua Asia berada pada satu daratan besar (Eurasia) yang dipisahkan oleh Pegunungan Ural.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sungai Amazon dan Pegunungan Andes terletak di Benua Amerika Selatan.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Benua Antartika merupakan benua berpenduduk paling padat dan beriklim tropis panas sepanjang tahun.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Eropa dan Asia menyatu secara geologis sebagai Eurasia dan dibatasi oleh Pegunungan Ural (BENAR).\n2. Hutan hujan Amazon dan Pegunungan Andes berada di Amerika Selatan (BENAR).\n3. Antartika adalah benua es yang sangat dingin dan tidak dihuni penduduk tetap selain peneliti (SALAH).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Perbedaan Geografis dan Optimalisasi Potensi',
    difficulty: 'Sedang',
    imageUrl: geografisPotensiImg,
    imageCaption: 'Pemanfaatan lahan lereng gunung berapi dengan sistem terasering dan pengairan subak.',
    text: 'Perhatikan gambar pemanfaatan wilayah pegunungan tropis Indonesia di atas! Tentukan kebenaran dari masing-masing pernyataan berikut mengenai perbedaan geografis dan optimalisasi potensi (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pembuatan terasering pada lahan miring di daerah pegunungan bermanfaat untuk menahan laju air hujan dan mencegah erosi tanah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Negara yang memiliki iklim empat musim seperti Korea Selatan atau Inggris mengalami pergantian musim semi, panas, gugur, dan dingin.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Kondisi geografis suatu negara sama sekali tidak memengaruhi jenis mata pencaharian, pakaian adat, maupun makanan pokok penduduknya.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Terasering menjaga kesuburan tanah miring dari pengikisan/erosi serta menahan air irigasi (BENAR).\n2. Wilayah subtropis dan sedang memiliki 4 musim, berbeda dengan iklim tropis Indonesia yang memiliki 2 musim (BENAR).\n3. Kondisi geografis sangat memengaruhi mata pencaharian (nelayan, petani, peternak), bahan pakaian, serta pangan lokal (SALAH).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Hubungan Antar Negara',
    difficulty: 'Sedang',
    text: 'Indonesia menjalin hubungan diplomatik dan perdagangan dengan berbagai negara di dunia untuk memenuhi kebutuhan pembangunan nasional. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Politik luar negeri Indonesia bersifat bebas aktif, artinya bebas menentukan sikap tanpa memihak blok kekuatan mana pun dan aktif menjaga perdamaian dunia.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kerja sama antara dua negara secara langsung, misalnya pertukaran pelajar antara Indonesia dan Jepang, disebut kerja sama bilateral.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Ketika Indonesia membeli gandum dan mesin industri berat dari luar negeri, kegiatan tersebut dinamakan ekspor.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Prinsip bebas aktif merupakan landasan politik luar negeri Indonesia sesuai UUD 1945 (BENAR).\n2. Kerja sama antar dua negara disebut bilateral; antar kawasan disebut regional; melibatkan banyak negara lintas kawasan disebut multilateral (BENAR).\n3. Membeli barang dari luar negeri ke dalam negeri adalah impor, bukan ekspor (SALAH).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Kerjasama Indonesia dengan Negara-Negara di Dunia',
    difficulty: 'Sukar',
    text: 'Indonesia berperan aktif dalam berbagai organisasi dunia seperti ASEAN dan Perserikatan Bangsa-Bangsa (PBB). Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Indonesia aktif mengirimkan Pasukan Garuda sebagai bagian dari misi pemeliharaan perdamaian Perserikatan Bangsa-Bangsa (PBB).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Gedung Sekretariat ASEAN berpusat di Jakarta, Indonesia, sebagai bentuk kepercayaan kawasan Asia Tenggara kepada Indonesia.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Tujuan kerja sama internasional adalah untuk memonopoli kekayaan negara berkembang agar seluruhnya dikuasai satu negara saja.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kontingen Garuda adalah pasukan perdamaian Indonesia di bawah mandat PBB yang bertugas di berbagai wilayah konflik dunia (BENAR).\n2. Sekretariat Jenderal ASEAN berkedudukan resmi di Jakarta (BENAR).\n3. Kerja sama internasional bertujuan saling menguntungkan, menjaga perdamaian, serta memajukan kesejahteraan bersama (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Warisan Budaya Indonesia yang Mendunia',
    difficulty: 'Mudah',
    imageUrl: warisanBudayaImg,
    imageCaption: 'Batik, Angklung, Wayang Kulit, dan Gamelan sebagai bagian dari kekayaan budaya Indonesia yang mendunia.',
    text: 'Perhatikan foto ragam warisan budaya Indonesia yang telah dikenal masyarakat dunia pada gambar di atas! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Hari Batik Nasional diperingati setiap tanggal 2 Oktober sebagai pengingat pengakuan UNESCO terhadap Batik Indonesia.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Subak di Bali diakui UNESCO sebagai warisan budaya dunia karena mencerminkan filosofi Tri Hita Karana dalam pengelolaan irigasi sawah.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Alat musik tradisional Angklung berasal dari Jawa Barat dan dimainkan dengan cara ditiup seperti seruling.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Tanggal 2 Oktober ditetapkan sebagai Hari Batik Nasional bertepatan dengan pengakuan UNESCO pada 2 Oktober 2009 (BENAR).\n2. Lanskap Budaya Provinsi Bali (sistem Subak) diakui UNESCO sejak 2012 karena harmoni manusia, alam, dan Tuhan (BENAR).\n3. Angklung adalah alat musik bambu dari Jawa Barat yang dimainkan dengan cara digoyangkan, bukan ditiup (SALAH).',
  },
];
