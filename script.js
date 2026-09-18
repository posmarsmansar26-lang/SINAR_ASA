/* ===== PINDAH HALAMAN ===== */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p =>
    p.classList.remove('active')
  );

  document.getElementById(id).classList.add('active');
  document.getElementById("footerNav").style.display = "flex";
}

/* ===== LIBUR NASIONAL 2025 ===== */
const holidays2025 = {
  "2025-10-05": "Maulid Nabi Muhammad SAW",
  "2025-10-22": "Hari Santri Nasional",
  "2025-11-10": "Hari Pahlawan",
  "2025-11-25": "Hari Guru Nasional",
  "2025-12-22": "Hari Ibu Nasional",
  "2025-12-25": "Hari Raya Natal"
};

/* ===== HARI INTERNASIONAL 2025 ===== */
const internationalDays2025 = {
  "2025-10-01": "Hari Lansia Internasional",
  "2025-10-05": "Hari Guru Sedunia",
  "2025-10-10": "Hari Kesehatan Mental Sedunia",
  "2025-10-16": "Hari Pangan Sedunia",
  "2025-10-24": "Hari Perserikatan Bangsa-Bangsa",
  "2025-11-10": "Hari Sains Sedunia",
  "2025-11-20": "Hari Anak Sedunia",
  "2025-12-01": "Hari AIDS Sedunia",
  "2025-12-03": "Hari Penyandang Disabilitas Internasional",
  "2025-12-10": "Hari Hak Asasi Manusia",
  "2025-12-20": "Hari Solidaritas Kemanusiaan Internasional"
};

/* ===== EVENT POSMAR 2025 ===== */
const posmarEvents2025 = {
  "2025-10-28": "Upacara Sumpah Pemuda",
  "2025-11-10": "Upacara Hari Pahlawan",
  "2025-11-10": "Reorganisasi Kepengurusan Rohis",
  "2025-12-11": "ClassMeeting Semester 1",
  "2025-12-12": "ClassMeeting Semester 1",
  "2025-12-15": "ClassMeeting Semester 1",
  "2025-12-16": "HUT SMA NEGERI 1 RENGEL",
  "2025-12-25": "Peringatan Hari Raya Natal",
  "2025-12-17": "Khataman Al-Qur'an",
  "2025-12-20": "Kunjungan Religi"
};

/* ===== LIBUR NASIONAL 2026 ===== */
const holidays2026 = {
  "2026-01-01": "Tahun Baru Masehi",
  "2026-01-16": "Isra' Mi'raj Nabi Muhammad",
  "2026-01-31": "Hari Lahir Nahdlatul Ulama (NU)",
  "2026-02-16": "Cuti Bersama Tahun Baru Imlek",
  "2026-02-17": "Tahun Baru Imlek",
  "2026-02-20": "Ramadhan",
  "2026-03-18": "Cuti Bersama Hari Suci Nyepi",
  "2026-03-19": "Hari Suci Nyepi",
  "2026-03-20": "Cuti bersama Hari Raya Idul Fitri",
  "2026-03-21": "Hari Raya Idul Fitri",
  "2026-03-22": "Hari Raya Idul Fitri",
  "2026-03-23": "Hari Raya Idul Fitri",
  "2026-03-24": "Hari Raya Idul Fitri",
  "2026-04-03": "Wafat Isa Al-masih",
  "2026-04-05": "Hari Paskah",
  "2026-04-21": "Hari Kartini",
  "2026-05-01": "Hari Buruh Internasional",
  "2026-05-02": "Hari Pendidikan Nasional",
  "2026-05-14": "Hari Kenaikan Isa Al-masih",
  "2026-05-20": "Hari Kebangkitan Nasional",
  "2026-05-27": "Hari Raya Idhul Adha",
  "2026-05-28": "Hari Raya Idhul Adha",
  "2026-05-31": "Hari Raya Waisak",
  "2026-06-01": "Hari Lahir Pancasila",
  "2026-06-16": "1 Muharram",
  "2026-07-23": "Hari Anak Nasional",
  "2026-08-17": "Hari Kemerdekaan RI",
  "2026-08-25": "Maulid Nabi Muhammad",
  "2026-10-05": "Hari Guru Sedunia",
  "2026-10-12": "Hari Jadi Jawa Timur",
  "2026-10-22": "Hari Santri Nasional",
  "2026-11-09": "Hari Jadi Tuban",
  "2026-11-12": "Hari Ayah Nasional",
  "2026-11-25": "Hari Guru Nasional",
  "2026-12-22": "Hari Ibu Nasional",
  "2026-12-24": "Cuti Hari Raya Natal",
  "2026-12-25": "Hari Raya Natal"
};

/* ===== HARI INTERNASIONAL 2026 ===== */
const internationalDays2026 = {
  "2026-01-01": "Tahun Baru Masehi",
  "2026-01-10": "Hari Gerakan Satu Juta Pohon",
  "2026-01-24": "Hari Pendidikan",
  "2026-02-14": "Hari Valentine",
  "2026-03-20": "Hari Kebahagiaan",
  "2026-03-21": "Hari Hutan Sedunia",
  "2026-03-22": "Hari Air Sedunia",
  "2026-03-27": "Hari Teater Sedunia",
  "2026-04-07": "Hari Kesehatan Sedunia",
  "2026-04-22": "Hari Bumi (Earth Day)",
  "2026-04-23": "Hari Buku Sedunia",
  "2026-04-29": "Hari Tari",
  "2026-05-08": "Hari Palang Merah",
  "2026-05-15": "Hari Keluarga",
  "2026-05-22": "Hari Keanekaragaman Hayati",
  "2026-06-01": "Hari Orang Tua Sedunia",
  "2026-06-05": "Hari Lingkungan Hidup Sedunia",
  "2026-06-08": "Hari Laut Sedunia",
  "2026-06-14": "Hari Donor Darah Sedunia",
  "2026-06-26": "Hari Anti Narkoba",
  "2026-07-30": "Hari Persahabatan",
  "2026-08-12": "Hari Remaja",
  "2026-12-01": "Hari AIDS Sedunia",
  "2026-12-10": "Hari Hak Asasi Manusia"
};

/* ===== EVENT POSMAR 2026 ===== */
const posmarEvents2026 = {
  "2026-01-28": "Expo Campus",
  "2026-01-21": "Peringatan Isra' Mi'raj",
  "2026-02-26": "SMANSAR Berbagi",
  "2026-03-06": "SMANSAR Berbagi",
  "2026-03-06": "Nuzulul Qur'an",
  "2026-03-12": "SMANSAR Berbagi",
  "2026-03-26": "Pelaksanaan Zakat Fitrah",
  "2026-03-26": "Pesantren Kilat",
  "2026-03-30": "Halal Bihalal Idul FItri",
  "2026-04-05": "Peringatan Hari Kebangkitan Yesus Kristus",
  "2026-04-11": "Perpisahan kelas XII",
  "2026-05-11": "ClassMeeting Semester 1",
  "2026-06-10": "ClassMeeting Semester 2",
  "2026-06-11": "ClassMeeting Semester 2",
  "2026-06-12": "ClassMeeting Semester 2",
  "2026-06-13": "ClassMeeting Semester 2",
  "2026-07-26": "Demo Ekstrakulikuler",
  "2026-08-07": "SARASA(SMANSAR Berbagi Cinta dan Asa",
  "2026-08-11": "ClassMeeting Semester 1",
  "2026-09-11": "Peringatan Maulid Nabi",
  "2026-09-12": "Posmar Cup Season 8",
  "2026-09-13": "Posmar Cup Season 8",
  "2026-09-19": "Posmar Cup Season 8",
  "2026-09-20": "Posmar Cup Season 8",
  "2026-10-11": "ClassMeeting Semester 1",
  "2026-11-11": "ClassMeeting Semester 1",
  "2026-12-11": "ClassMeeting Semester 1"
};

/* ===== DATA BULAN & HARI ===== */
const months = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

const days = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const container = document.getElementById("calendarContainer");

/* ===== FUNGSI MEMBUAT KALENDER ===== */
function createCalendar(year, monthIndex, holidayData, internationalData, posmarData) {
  const month = months[monthIndex];
  const monthDiv = document.createElement("div");
  monthDiv.className = "month";

  monthDiv.innerHTML = `<h3>${month} ${year}</h3>`;

  const grid = document.createElement("div");
  grid.className = "calendar-grid";

  /* ===== NAMA HARI ===== */
  days.forEach(day => {
    grid.innerHTML += `<div class="day header">${day}</div>`;
  });

  /* ===== HARI PERTAMA ===== */
  const firstDay = new Date(year, monthIndex, 1).getDay();

  /* ===== JUMLAH HARI ===== */
  const totalDays = new Date(year, monthIndex + 1, 0).getDate();

  /* ===== KOTAK KOSONG ===== */
  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div class="day"></div>`;
  }

  let h = [];
  let iD = [];
  let p = [];

  /* ===== TANGGAL ===== */
  for (let d = 1; d <= totalDays; d++) {
    const dateStr = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    let cls = "day";

    /* ===== MINGGU ===== */
    if (new Date(year, monthIndex, d).getDay() === 0) {
      cls += " sunday";
    }

    /* ===== LIBUR NASIONAL ===== */
    if (holidayData[dateStr]) {
      cls += " holiday";
      h.push(`🔴 ${d} ${month} – ${holidayData[dateStr]}`);
    }

    /* ===== HARI INTERNASIONAL ===== */
    if (internationalData[dateStr]) {
      cls += " international";
      iD.push(`🟠 ${d} ${month} – ${internationalData[dateStr]}`);
    }

    /* ===== EVENT POSMAR ===== */
    if (posmarData[dateStr]) {
      cls += " posmar";
      p.push(`🔵 ${d} ${month} – ${posmarData[dateStr]}`);
    }

    grid.innerHTML += `<div class="${cls}">${d}</div>`;
  }

  monthDiv.appendChild(grid);

  /* ===== CATATAN BULAN ===== */
  if (h.length || iD.length || p.length) {
    const note = document.createElement("div");
    note.style.marginTop = "10px";

    note.innerHTML = `
      <b style="color:red;">🔴 Hari Libur Nasional</b><br>
      ${h.join("<br>") || "-"}<br><br>

      <b style="color:orange;">🟠 Hari Internasional</b><br>
      ${iD.join("<br>") || "-"}<br><br>

      <b style="color:#1976d2;">🔵 Event POSMAR</b><br>
      ${p.join("<br>") || "-"}
    `;

    monthDiv.appendChild(note);
  }

  container.appendChild(monthDiv);
}

/* ===== OKTOBER - DESEMBER 2025 ===== */
for (let m = 9; m <= 11; m++) {
  createCalendar(2025, m, holidays2025, internationalDays2025, posmarEvents2025);
}

/* ===== JANUARI - DESEMBER 2026 ===== */
for (let m = 0; m < 12; m++) {
  createCalendar(2026, m, holidays2026, internationalDays2026, posmarEvents2026);
}

/* ===== MODE GELAP / TERANG ===== */
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

/* ===== MEMUAT TEMA SAAT WEB DIBUKA ===== */
window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
  }
});
