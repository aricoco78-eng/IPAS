import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran Ilmu Pengetahuan Alam dan Sosial (IPAS)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal IPAS (18 PG, 3 PGK, 9 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik menganalisis fungsi bagian-bagian rangka manusia dalam melindungi organ vital tubuh.',
    indikatorSoal:
      'Disajikan deskripsi fungsi tulang tengkorak dan tulang rusuk, peserta didik dapat menentukan fungsi proteksi organ penting secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi jenis sendi dan mekanisme kerja otot saat melakukan gerak tubuh.',
    indikatorSoal:
      'Disajikan gambar realistis model anatomi lengan yang ditekuk, peserta didik dapat menentukan jenis sendi engsel dan kondisi kontraksi otot biseps.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik membedakan jenis-jenis otot penyusun tubuh manusia berdasarkan letak dan cara kerjanya.',
    indikatorSoal:
      'Disajikan ciri otot yang melekat pada rangka dan bekerja secara sadar, peserta didik dapat menentukan jenis otot lurik.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik menjelaskan peran sistem saraf sebagai pengendali gerak sadar dan gerak refleks.',
    indikatorSoal:
      'Disajikan ilustrasi reaksi spontan menarik tangan dari panci panas, peserta didik dapat menentukan pusat pengendali gerak refleks (sumsum tulang belakang).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi berbagai penyakit atau kelainan yang menyerang sistem gerak manusia.',
    indikatorSoal:
      'Disajikan kebiasaan sikap duduk membungkuk ke depan, peserta didik dapat menentukan jenis kelainan tulang belakang kifosis.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik menjelaskan latar belakang kedatangan bangsa-bangsa asing ke Indonesia.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi daya tarik kekayaan rempah-rempah dan semboyan 3G sebagai pendorong kedatangan bangsa Eropa ke Nusantara.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik mengenal berbagai bentuk perlawanan rakyat Indonesia terhadap penjajahan bangsa asing.',
    indikatorSoal:
      'Disajikan peristiwa perlawanan heroik rakyat Bali menentang penghapusan hak tawan karang, peserta didik dapat menentukan istilah Perang Puputan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik menganalisis perubahan strategi perjuangan bangsa Indonesia setelah Kebangkitan Nasional 1908.',
    indikatorSoal:
      'Peserta didik dapat menganalisis perbedaan corak perjuangan kedaerahan sebelum 1908 dengan perjuangan organisasi modern bersifat nasional.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik menceritakan peristiwa penting menjelang dan sekitar Proklamasi Kemerdekaan Indonesia.',
    indikatorSoal:
      'Disajikan gambar realistis peristiwa Proklamasi 17 Agustus 1945 dan deskripsi peristiwa 16 Agustus, peserta didik dapat menentukan Peristiwa Rengasdengklok.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi pembagian enam benua berpenghuni di dunia beserta ciri utamanya.',
    indikatorSoal:
      'Disajikan gambar realistis peta fisik permukaan Bumi, peserta didik dapat menentukan Benua Asia sebagai benua terluas dan terpadat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik mengenal kenampakan alam dan karakteristik unik dari enam benua di dunia.',
    indikatorSoal:
      'Disajikan petunjuk kenampakan Gurun Sahara dan Sungai Nil, peserta didik dapat mengidentifikasi Benua Afrika secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik menjelaskan bentuk adaptasi masyarakat dunia terhadap perbedaan kondisi geografis dan kebencanaan.',
    indikatorSoal:
      'Disajikan kondisi geografis Jepang di jalur Ring of Fire, peserta didik dapat menentukan bentuk adaptasi teknologi tahan gempa dan mitigasi bencana.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik menganalisis pemanfaatan teknologi rekayasa lingkungan akibat perbedaan kondisi geografis suatu negara.',
    indikatorSoal:
      'Disajikan kondisi daratan rendah Negara Belanda di bawah permukaan laut, peserta didik dapat menentukan upaya pembangunan tanggul dan polder.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik mengaitkan pemanfaatan kondisi geografis Indonesia demi optimalisasi potensi ekonomi masyarakat.',
    indikatorSoal:
      'Disajikan gambar realistis sawah terasering dan irigasi subak di lereng gunung berapi, peserta didik dapat menentukan optimalisasi potensi pertanian dan agrowisata.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik memahami konsep hubungan antarnegara dan perdagangan internasional (ekspor-impor).',
    indikatorSoal:
      'Disajikan deskripsi penjualan komoditas Indonesia ke luar negeri, peserta didik dapat menentukan istilah kegiatan ekspor.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi bentuk kerja sama Indonesia dengan negara-negara di kawasan regional dan dunia.',
    indikatorSoal:
      'Disajikan negara pemrakarsa dan Deklarasi Bangkok 1967, peserta didik dapat menentukan organisasi kerja sama ASEAN.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik mengenal warisan budaya Indonesia yang telah diakui secara internasional.',
    indikatorSoal:
      'Disajikan gambar realistis Batik, Angklung, Wayang Kulit, dan Gamelan, peserta didik dapat mengidentifikasi UNESCO sebagai lembaga pengakui warisan budaya dunia.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik merefleksikan sikap pelajar Indonesia dalam melestarikan budaya bangsa di tengah globalisasi.',
    indikatorSoal:
      'Disajikan tantangan masuknya budaya asing melalui internet, peserta didik dapat menentukan sikap bijak melestarikan dan mempromosikan budaya lokal.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik menganalisis keterkaitan sendi, sistem saraf, serta upaya menjaga kesehatan sistem gerak manusia.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang sendi peluru, pencegahan kelainan tulang, dan peran saraf pusat, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi faktor pemicu perlawanan serta tonggak persatuan bangsa menuju kemerdekaan.',
    indikatorSoal:
      'Disajikan tiga pernyataan tentang tanam paksa/rodi, Sumpah Pemuda 1928, dan perjuangan kemerdekaan, peserta didik dapat memilih semua pernyataan yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik menganalisis potensi geografis benua di dunia dan pentingnya kerja sama antarnegara.',
    indikatorSoal:
      'Disajikan gambar realistis peta fisik dunia dan tiga opsi analisis geografis, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi sifat alat gerak aktif dan pasif, fungsi sendi engsel, serta kerja otot jantung.',
    indikatorSoal:
      'Disajikan gambar realistis rangka dan otot lengan serta 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Pemahaman IPAS (Sains)',
    tujuanPembelajaran:
      'Peserta didik menelaah susunan sistem saraf pusat dan pencegahan gangguan sistem gerak.',
    indikatorSoal:
      'Disajikan konteks sistem saraf pusat, osteoporosis, dan skoliosis dalam 3 pernyataan, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi peran VOC, tokoh perlawanan daerah, dan strategi politik adu domba penjajah.',
    indikatorSoal:
      'Disajikan konteks masa kolonialisme di Nusantara dan 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi peran tokoh dan peristiwa penyebaran berita Proklamasi Kemerdekaan RI.',
    indikatorSoal:
      'Disajikan gambar realistis Proklamasi Kemerdekaan 1945 dan 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik membandingkan letak geografis dan bentang alam utama enam benua di dunia.',
    indikatorSoal:
      'Disajikan konteks Eurasia/Pegunungan Ural, Amazon/Andes, serta Antartika dalam 3 pernyataan, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Keterampilan Proses',
    tujuanPembelajaran:
      'Peserta didik menganalisis pengaruh kondisi geografis dan iklim terhadap kehidupan dan potensi ekonomi masyarakat.',
    indikatorSoal:
      'Disajikan gambar realistis terasering/subak dan 3 pernyataan tentang erosi, negara 4 musim, serta pengaruh geografis, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik memahami prinsip politik luar negeri bebas aktif, kerja sama bilateral, dan konsep impor.',
    indikatorSoal:
      'Disajikan konteks hubungan antarnegara dalam 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik menilai kontribusi nyata Indonesia dalam misi perdamaian PBB dan organisasi ASEAN.',
    indikatorSoal:
      'Disajikan narasi peran Indonesia di PBB dan ASEAN beserta 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pemahaman IPAS (Sosial)',
    tujuanPembelajaran:
      'Peserta didik mengapresiasi warisan budaya Indonesia yang mendunia beserta cara pelestariannya.',
    indikatorSoal:
      'Disajikan gambar realistis warisan budaya Indonesia dan 3 pernyataan tentang Batik, Subak Bali, dan Angklung, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep materi ${q.topic} dalam mata pelajaran Ilmu Pengetahuan Alam dan Sosial (IPAS).`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('rangka') || t.includes('sendi') || t.includes('otot') || t.includes('saraf') || t.includes('gerak')) {
    return 'Pemahaman IPAS (Sains)';
  }
  if (t.includes('potensi') || t.includes('geografis')) {
    return 'Keterampilan Proses';
  }
  return 'Pemahaman IPAS (Sosial)';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
