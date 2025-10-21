import React from 'react'
import { motion } from 'framer-motion'
import StoryImage from '../components/StoryImage'
import HyperText from '../components/HyperText'
import Highlighter from '../components/Highlighter'

const MyStories: React.FC = () => {
  return (
  <div className="space-y-4 text-neutral-800">
      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
  className="text-center mb-6"
      >
        <HyperText as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          UTS-3 My Stories for You
        </HyperText>
      </motion.div>

      {/* Story 1: Secangkir Keheningan */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
  className="glass-effect rounded-2xl p-4 mb-6 shadow-xl border border-neutral-200"
      >
  <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 flex items-center">
          <span className="bg-gradient-to-r from-primary-200 to-primary-400 w-2 h-12 rounded-full mr-4"></span>
          <Highlighter action="underline" color="#e4e4e7">Secangkir Keheningan</Highlighter>
        </h2>
        
        <StoryImage
          src="/all-about-me/images/secangkir-keheningan.jpg"
          alt="Secangkir Keheningan"
          caption="Manila, 2025 — momen keheningan yang menyatukan tim di tengah kompetisi."
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Langit Manila siang itu terasa sangat terik. Di ruang final Google Solution Challenge, udara dingin dari pendingin ruangan seolah tidak cukup menenangkan kepala yang dipenuhi angka, kode, dan rasa cemas. Di tengah suara keyboard dan bisik strategi tim lain, aku duduk memegang secangkir kopi yang mulai dingin. "Tenang, Rafi," kataku pelan. "Kita hampir selesai."
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Kami sudah bekerja selama dua hari penuh. Kode berjalan dengan baik, demo siap ditampilkan, tetapi suasana di antara kami terasa tegang. Salah satu rekan tim yang biasanya paling aktif tiba-tiba lebih banyak diam. Awalnya aku mengira dia hanya lelah. Aku melanjutkan latihan presentasi, menyusun kata dengan nada cepat agar terlihat percaya diri. Namun, di sela kalimatku, ia berbisik, "Aku merasa tidak didengar."
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Aku menatapnya. Dalam beberapa detik, ruangan yang ramai terasa sunyi. Tak ada yang berbicara. Kami membiarkan keheningan bekerja menggantikan kata-kata. Setelah beberapa saat, aku meletakkan laptop dan berkata, "Oke, mari mulai dari awal. Menurutmu, apa yang sebetulnya ingin kita sampaikan lewat proyek ini?"
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Percakapan yang muncul sesudahnya berjalan lambat, tetapi jujur. Kami saling mendengarkan, menimbang setiap kalimat dengan hati-hati. Dalam momen itulah kami menyadari, inti proyek kami bukan sekadar teknologi, melainkan kemampuan untuk benar-benar memahami orang lain.
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Saat akhirnya giliran kami presentasi, tak ada lagi rasa panik. Kami berbicara sebagai satu suara. Setelah sesi selesai, salah satu juri berkata, "Your teamwork shows understanding." Aku tersenyum kecil. Ternyata keheningan yang kami izinkan hadir justru menjadi jembatan terbaik untuk komunikasi.
          </p>
          
          <p className="text-base leading-relaxed sm:text-lg text-neutral-700">
            Sejak hari itu, aku belajar bahwa diam bukan tanda pasif. Ia adalah bentuk paling jujur dari mendengarkan. Dalam setiap percakapan, secangkir keheningan kadang menjadi alat paling ampuh untuk menemukan arah, baik dalam tim maupun dalam diri sendiri.
          </p>
        </div>
      </motion.div>

      {/* Story 2: Senja di Rumah Kakek */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
  className="glass-effect rounded-2xl p-4 mb-6 shadow-xl border border-neutral-200"
      >
  <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 flex items-center">
          <span className="bg-gradient-to-r from-neutral-200 to-neutral-400 w-2 h-12 rounded-full mr-4"></span>
          Senja di Rumah Kakek
        </h2>
        
        <StoryImage
          src="/all-about-me/images/senja-di-rumah-kakek.jpg"
          alt="Senja di Rumah Kakek"
          caption="Pennsylvania, 2024 — sore tenang di halaman rumah kakek yang mengajarkan arti mendengarkan dengan sabar."
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Sore di kota kecil itu selalu tenang. Angin berhembus pelan di antara pepohonan yang mulai meranggas, sementara matahari turun perlahan di balik perbukitan. Aku berdiri di depan rumah kakek, memandangi langit yang memudar dari biru ke jingga muda. Tidak ada suara bising, hanya dengungan lembut dari mobil yang sesekali lewat di jalan kecil beraspal. Udara dingin menyentuh kulit wajah, dan aroma rumput kering bercampur dengan wangi tanah yang lembap setelah disiram sprinkler.
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Kakek keluar membawa dua gelas cokelat hangat, lalu duduk di kursi goyang di sampingku. "Kau tahu," katanya sambil menyeruput minumannya pelan, "di dunia yang sibuk, ketenangan itu jadi kemewahan." Aku tersenyum kecil, tidak terlalu mengerti maksudnya. Kami duduk lama tanpa bicara. Biasanya aku akan sibuk memeriksa ponsel, tapi sore itu aku membiarkannya di saku. Ada sesuatu pada senja di tempat ini yang membuat waktu seolah berjalan lebih lambat.
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Aku menatap tangan kakek yang berkeriput, menggenggam cangkir dengan tenang. Saat akhirnya aku bertanya apa rahasianya bisa tetap damai di usia lanjut, kakek menjawab tanpa menoleh, "Karena aku berhenti mencoba memenangkan setiap percakapan." Kalimat itu sederhana, tapi entah mengapa terasa berat. Aku terdiam cukup lama. Dalam pikiranku, terlintas berbagai momen di mana aku terlalu ingin benar, ingin menjelaskan diri sendiri, atau ingin orang lain memahami duluan. Mungkin memang benar, sebagian besar kegelisahan lahir dari keinginan untuk selalu didengar, bukan untuk benar-benar memahami.
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Kakek lalu tertawa kecil. "Kau tahu, dulu kakek juga keras kepala," katanya. "Tapi waktu membuat kita belajar. Orang-orang akan lebih mudah mendengar kalau mereka merasa aman di dekatmu." Ia menatap langit, lalu menambahkan, "Jadi, jadilah tempat yang tenang bagi orang lain."
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Aku terdiam lagi, kali ini bukan karena bingung, tapi karena merasa disentuh. Aku memperhatikan burung-burung yang terbang rendah di atas halaman, membentuk pola sebelum menghilang di cakrawala. "Lihat?" kata kakek sambil menunjuk. "Mereka tahu kapan waktunya berhenti, kapan waktunya terbang lagi."
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Kami tertawa pelan. Sore terus bergulir, warna jingga di langit berubah menjadi ungu muda, dan angin membawa suara bel rumah dari kejauhan. Aku ingin waktu berhenti sedikit lebih lama. Di dunia yang serba cepat, tempat seperti ini terasa langka—tempat di mana diam tidak berarti canggung, melainkan nyaman.
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            Ketika matahari benar-benar tenggelam, kakek menepuk bahuku. "Jangan lupa," katanya, "kadang mendengar orang lain adalah bentuk paling dalam dari berbicara." Aku mengangguk, tidak menjawab, tapi di dadaku muncul perasaan hangat yang sulit dijelaskan.
          </p>
          
          <p className="text-lg leading-relaxed">
            Sore itu, rumah kakek bukan hanya tempat singgah, melainkan ruang belajar sederhana tentang komunikasi yang paling tenang: berbicara sedikit, mendengarkan lebih banyak, dan membiarkan suasana berbicara lebih jujur daripada kata-kata. Di dunia yang ramai oleh suara, pelajaran itu rasanya jauh lebih berharga dari sekadar nasihat — ia seperti udara senja itu sendiri: lembut, jernih, dan menenangkan.
          </p>
        </div>
      </motion.div>

      {/* Story 3: Malam di Depan Kampus */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
  className="glass-effect rounded-2xl p-4 shadow-xl border border-neutral-200"
      >
  <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 flex items-center">
          <span className="bg-gradient-to-r from-primary-300 to-primary-500 w-2 h-12 rounded-full mr-4"></span>
          Malam di Depan Kampus
        </h2>
        
        <StoryImage
          src="/all-about-me/images/malam-di-depan-kampus.jpg"
          alt="Malam di Depan Kampus"
          caption="Bandung, 2024 — malam yang lembap di depan kampus menjadi ruang refleksi tentang arti komunikasi yang jujur."
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Hujan baru saja berhenti ketika aku memarkir motor di depan kampus. Lampu jalan memantul di genangan air, membuat bayangan gedung terlihat ganda di permukaan. Udara malam terasa lembap dan dingin, menyisakan aroma tanah basah yang khas Bandung setelah hujan. Aku baru selesai rapat panjang untuk proyek kuliah, kepala masih penuh dengan daftar tugas yang menumpuk. Di tengah malam yang sepi itu, aku memilih berhenti sejenak, membiarkan mesin motor tetap hangat sambil menatap pantulan cahaya dari lampu mobil yang lewat.
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Tulisan besar "Bandung" di dinding depan kampus terlihat jelas, cahayanya terpantul di air. Aku memandangi huruf-huruf itu, seolah sedang memantulkan pikiranku sendiri. Kata itu terasa seperti panggilan—tempat yang menumbuhkan sekaligus menguji. Aku menarik napas panjang dan mencoba mengosongkan kepala.
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Aku teringat percakapan yang belum lama terjadi. Beberapa jam sebelumnya, aku sempat berselisih paham dengan teman satu tim. Kami berbeda pendapat tentang arah proyek, dan aku berbicara terlalu cepat, ingin menyelesaikan masalah dengan logika, bukan empati. Saat suasana mulai menegang, ia hanya diam, lalu berkata pelan, "Aku cuma ingin kamu mendengar dulu." Kalimat itu sederhana tapi menohok. Aku sempat ingin membela diri, tetapi ada sesuatu dalam nada suaranya yang membuatku berhenti.
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Sekarang, di bawah langit malam Bandung yang lembap, kalimat itu terasa bergema kembali. Aku membuka ponsel dan menulis pesan singkat:
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">"Maaf, aku terlalu terburu-buru tadi. Besok kita bahas lagi, pelan-pelan."</p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Aku menatap layar sejenak sebelum menekan tombol kirim. Setelah pesan terkirim, aku tersenyum. Rasanya seperti menutup pintu yang lama terbuka oleh ego. Kadang, memperbaiki komunikasi tidak membutuhkan teori rumit, cukup dengan keberanian untuk mengakui bahwa kita sempat salah.
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            Beberapa menit kemudian, aku menerima balasan:
          </p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">"Oke, aku juga maaf kalau tadi terlalu sensitif. Besok kita cari titik tengah, ya."</p>
          
          <p className="text-base leading-relaxed mb-4 sm:text-lg text-neutral-700">
            Aku membaca pesan itu berulang kali. Suasana sekitar masih sepi, hanya terdengar suara tetesan air dari pepohonan. Aku sadar, perbedaan pendapat sebenarnya bukan masalah. Yang jadi masalah adalah ketika kita terlalu sibuk membenarkan diri sampai lupa bahwa orang lain juga ingin didengar.
          </p>
          
          <p className="text-lg leading-relaxed mb-4">
            Aku menatap lagi genangan air di depan motor. Pantulan lampu jalan membuat tulisan "Bandung" terlihat bergetar, seolah ikut bernapas bersama malam. Dalam pantulan itu, aku melihat bayangan diriku sendiri—seseorang yang sedang belajar untuk lebih sabar, lebih tulus, dan lebih sadar akan cara berbicara.
          </p>
          
          <p className="text-base leading-relaxed sm:text-lg text-neutral-700">
            Malam di depan kampus itu mungkin tampak biasa saja bagi siapa pun yang lewat, tetapi bagiku, ia menjadi ruang kecil untuk berhenti dan belajar. Di antara sisa hujan dan udara yang dingin, aku menemukan pelajaran sederhana tentang komunikasi: bahwa jujur bukan berarti cepat, dan mendengar bukan berarti kalah. Hujan benar-benar berhenti, genangan mulai surut, dan aku menyalakan motor perlahan sambil tersenyum kecil. Aku tahu, besok aku akan berbicara dengan cara yang sedikit lebih baik—dan semoga, juga lebih mendengarkan.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default MyStories
