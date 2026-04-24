/* ============================================
   BLOG DATA — All posts, categories, content
   ============================================ */

const categories = [
    { id: 'fizik-astronomi', name: 'Fizik & Astronomi', icon: '⚛' },
    { id: 'bilgisayar-bilimleri', name: 'Bilgisayar & Yapay Zeka', icon: '⊞' },
    { id: 'evrim-genetik', name: 'Evrim, Genetik & Biyoloji', icon: '🧬' },
    { id: 'tarih', name: 'Tarih', icon: '📜' },
    { id: 'iktisat-ekonomi', name: 'İktisat & Ekonomi', icon: '📊' },
    { id: 'teknoloji', name: 'Teknoloji', icon: '⚙' },
    { id: 'ceviriler', name: 'Çeviriler', icon: '🌍' },
    { id: 'mitoloji', name: 'Mitoloji', icon: '🏛' },
    { id: 'denemeler', name: 'Denemeler', icon: '✎' },
    { id: 'sanat', name: 'Sanat', icon: '🎨' },
    { id: 'psikoloji', name: 'Psikoloji', icon: '🧠' },
];

const posts = [
    // === FİZİK & ASTRONOMİ ===
    {
        id: 'gokyuzu-neden-mavi',
        category: 'fizik-astronomi',
        title: 'Gökyüzü Neden Mavidir?',
        date: '12 Mart 2025',
        excerpt: 'Herkes bilir gökyüzü mavidir. Ama neden? Güneş beyaz ışık gönderiyor, atmosferden geçiyor ve birden mavi oluyor. İşin sırrı şu: Işık saçılır.',
        content: `
            <p>Çocukken hep sordum: "Gökyüzü neden mavi?" Annem "Tanrı öyle yapmış" derdi. Bu bir cevap değil! Gerçek cevap çok daha güzel.</p>
            <p>Güneş'ten gelen ışık <strong>beyazdır</strong> — yani tüm renkleri içerir. Atmosfere girdiğinde, hava moleküllerine çarpar ve <em>saçılır</em>. Ama her renk eşit saçılmaz! Mavi ışık, kırmızıya göre <strong>yaklaşık 10 kat daha fazla</strong> saçılır. Çünkü mavi ışığın dalga boyu daha kısadır.</p>
            <p>İşte bu yüzden yukarı baktığında mavi görürsün — saçılan mavi ışık her yönden gözüne gelir. Güneş batarken ise ışık atmosferde daha uzun yol alır, mavi tamamen saçılır, geriye kırmızı-turuncu kalır. Muhteşem, değil mi?</p>
            <blockquote>Doğa'nın kitabı matematikle yazılmıştır. Ama resimlerine bakmak için matematikçi olmana gerek yok.</blockquote>
        `,
    },
    {
        id: 'kuantum-gariplik',
        category: 'fizik-astronomi',
        title: 'Kuantum: Tuhaf Ama Gerçek',
        date: '5 Şubat 2025',
        excerpt: 'Elektronlar aynı anda iki yerde olabilir mi? Evet. Bu delice geliyor, biliyorum. Ama doğa böyle çalışıyor.',
        content: `
            <p>Kuantum mekaniği hakkında bir şey söyleyeyim: <strong>Kimse onu anlamıyor.</strong> Ben de dahil. Ama onu <em>kullanabiliyoruz</em>. Ve işe yarıyor.</p>
            <p>Çift yarık deneyini duymuşsundur. Elektronları iki yarıktan geçirirsin, ve ekranda bir girişim deseni oluşur — sanki her elektron <strong>aynı anda iki yarıktan birden geçmiş</strong> gibi. Ama hangi yarıktan geçtiğini ölçmeye kalkarsan, desen kaybolur. Gözlem yapmak, sonucu değiştirir.</p>
            <p>Bu felsefe değil, deneysel gerçek. Doğa böyle. Ve bu harika! Çünkü evren, bizim sağduyumuza uymak zorunda değil.</p>
        `,
    },
    {
        id: 'yildizlarin-olumu',
        category: 'fizik-astronomi',
        title: 'Yıldızlar Nasıl Ölür?',
        date: '18 Ocak 2025',
        excerpt: 'Bir yıldız öldüğünde, evrenin en muhteşem havai fişek gösterisi başlar. Ve biz, o patlamanın külleriyiz.',
        content: `
            <p>Yıldızlar sonsuz değildir. Onlar da doğar, yaşar ve ölür. Ama ölümleri... işte asıl hikaye burada başlar.</p>
            <p>Büyük bir yıldızın çekirdeğinde, hidrojen helyuma, helyum karbona, karbon oksijene... böylece demire kadar kaynaşır. Demir, füzyon zincirinin sonudur. Artık enerji üretemez. Çekirdek çöker ve <strong>süpernova</strong> patlaması olur.</p>
            <p>O patlamada, demirden ağır tüm elementler uzaya saçılır. Vücudundaki kalsiyum, kanındaki demir, nefesindeki oksijen... hepsi bir zamanlar bir yıldızın içindeydi. <em>Biz gerçekten yıldız tozuyuz.</em></p>
        `,
    },

    // === BİLGİSAYAR & YAPAY ZEKA ===
    {
        id: 'makineler-dusunebilir-mi',
        category: 'bilgisayar-bilimleri',
        title: 'Makineler Düşünebilir mi?',
        date: '1 Mart 2025',
        excerpt: 'Hayır. Ama biz de tam olarak düşündüğümüzü sanmıyoruz. Mesele şu: "Düşünmek" ne demek?',
        content: `
            <p>İnsanlar bana hep sorar: "Feynman, makineler düşünebilir mi?" Cevabım: <strong>Önce "düşünmek" ne demek onu tanımlayalım.</strong></p>
            <p>Bir bilgisayar satranç oynayabilir, şiir yazabilir, resim çizebilir. Ama bunları bizim yaptığımız gibi yapmaz. Bilgisayarın "anladığı" falan yok — sadece <em>hesap yapıyor</em>. Ama bekle... bizim beynimiz de hesap yapmıyor mu? Nöronlar ateşleniyor, sinyaller gidiyor. Fark ne?</p>
            <p>Belki de fark, bilincin kendisinde. Ama bilinç nedir? İşte bunu <strong>bilmiyoruz</strong>. Ve bilmediğimizi bilmek güzel bir şey. Araştırmaya devam.</p>
        `,
    },
    {
        id: 'en-kucuk-bilgisayar',
        category: 'bilgisayar-bilimleri',
        title: 'En Küçük Bilgisayar Ne Kadar Küçük Olabilir?',
        date: '20 Aralık 2024',
        excerpt: 'Atom boyutunda bilgisayar mümkün mü? Fizik buna ne diyor?',
        content: `
            <p>Bilgisayarları sürekli küçültüyoruz. Ama bir sınır var mı? Evet: <strong>Fizik kanunları.</strong></p>
            <p>Bir bit bilgiyi saklamak için en az bir atom gerekir. Ama kuantum etkileri o boyutta işleri karıştırır. Bir elektron aynı anda iki durumda olabilir — işte kuantum bilgisayarların fikri buradan gelir.</p>
            <p>Peki evrendeki tüm bilgiyi saklamak için kaç atom gerekir? Hesaplayabiliriz! Ama bu başka bir yazının konusu.</p>
        `,
    },

    // === EVRİM, GENETİK & BİYOLOJİ ===
    {
        id: 'hucre-ne-yapiyor',
        category: 'evrim-genetik',
        title: 'Bir Hücre Ne Yapıyor, Gerçekten?',
        date: '15 Şubat 2025',
        excerpt: 'Mikroskopla baktığınızda gördüğünüz şey, evrendeki en karmaşık fabrikadır. Ve her saniye trilyonlarcası içinizde çalışıyor.',
        content: `
            <p>Biyolojiyi hep sıkıcı bulurdum — ta ki bir hücrenin içinde neler olduğunu gerçekten öğrenene kadar.</p>
            <p>Bir hücre, <strong>kendi kendini kopyalayan bir nano-fabrikadır.</strong> DNA bir kütüphane, RNA bir fotokopi makinesi, ribozomlar birer 3D yazıcı. Proteinler işçiler. Her şey sürekli hareket halinde. Ve tüm bunlar, hiçbir "yönetici" olmadan, tamamen fizik ve kimya kanunlarıyla çalışıyor.</p>
            <p>Bu beni hayrete düşürüyor. Hayat, karmaşık görünen ama temelinde basit kurallarla işleyen bir sistem. Tıpkı fizik gibi.</p>
        `,
    },
    {
        id: 'evrim-bir-gercektir',
        category: 'evrim-genetik',
        title: 'Evrim Bir Gerçektir — Ve Çok Güzeldir',
        date: '8 Ocak 2025',
        excerpt: 'Evrim "sadece bir teori" diyenler var. Yerçekimi de "sadece bir teori". Teori, bilimin en güçlü kelimesidir.',
        content: `
            <p>Evrim hakkında konuşalım. Bazıları "bu sadece bir teori" der. <strong>Bilimde "teori", kanıtlanmış, test edilmiş, sağlam bir açıklama demektir.</strong> Yerçekimi teorisi gibi. Mikrop teorisi gibi.</p>
            <p>Evrimin kanıtları her yerde: DNA'mız şempanzelerle %98 aynı. Balinaların leğen kemiği var (artık yürümüyorlar ama ataları yürüyordu). Antibiyotik direnci — bakteriler gözümüzün önünde evrimleşiyor.</p>
            <p>Doğa, milyarlarca yıldır deneme-yanılma yapıyor. Başarılı olanlar devam ediyor. Bu kadar basit. Ve bu kadar muhteşem.</p>
        `,
    },

    // === TARİH ===
    {
        id: 'mayalar-ne-biliyordu',
        category: 'tarih',
        title: 'Mayalar Ne Biliyordu?',
        date: '10 Mart 2025',
        excerpt: 'Mayaların astronomi bilgisi şaşırtıcıydı. Ama onları "gizemli" yapan şey, aslında bizim onları anlamamış olmamız.',
        content: `
            <p>Mayalar hakkında çok şey duyarsın: "Gizemli bir uygarlık", "kayıp bilgiler"... Saçmalık. Mayalar gayet akıllı insanlardı ve biz onların yaptıklarını yeni yeni anlıyoruz.</p>
            <p>Venüs'ün döngüsünü 584 gün olarak hesaplamışlardı. Gerçek değer: 583.92 gün. <strong>Çıplak gözle!</strong> Takvimleri bizimkinden daha hassastı. Sıfır kavramını bağımsız olarak keşfettiler.</p>
            <p>Tarih bize şunu öğretir: İnsan zekası her yerde aynıdır. Fırsat verildiğinde, her toplum gökyüzünü merak eder, sayıları düşünür, evreni anlamaya çalışır.</p>
        `,
    },

    // === İKTİSAT & EKONOMİ ===
    {
        id: 'sayilar-ve-insanlar',
        category: 'iktisat-ekonomi',
        title: 'Sayılar ve İnsanlar',
        date: '25 Şubat 2025',
        excerpt: 'Ekonomi fizik değildir. İnsanlar parçacık gibi davranmaz. Ama yine de bazı şeyleri hesaplayabiliriz.',
        content: `
            <p>Fizikçiler bazen ekonomiye burun kıvırır: "Çok dağınık, kesin değil." Ama mesele şu: <strong>Dağınık sistemler de anlaşılabilir.</strong></p>
            <p>İnsanlar rasyonel değildir. Duyguları, önyargıları, hataları vardır. Ama büyük gruplar halinde, bazı öngörülebilir desenler ortaya çıkar. Tıpkı gaz molekülleri gibi — tek bir molekülün nereye gideceğini bilemezsin, ama milyarlarcasının basıncını hesaplayabilirsin.</p>
            <p>Ekonomi böyle düşünülmeli: <em>Olasılıklı, yaklaşık, ama yine de faydalı.</em></p>
        `,
    },

    // === TEKNOLOJİ ===
    {
        id: 'teknoloji-ve-merak',
        category: 'teknoloji',
        title: 'Teknoloji Merakla Başlar',
        date: '3 Mart 2025',
        excerpt: 'Her teknoloji, bir zamanlar birinin "Acaba?" demesiyle başladı. Transistör, lazer, internet... hepsi temel bilimden doğdu.',
        content: `
            <p>İnsanlar bana "Fizik ne işe yarar?" diye sorardı. Ben de derdim ki: <strong>"Bir şeyin ne işe yaradığını önceden bilemezsin."</strong></p>
            <p>Elektriği keşfedenler ampulü hayal etmiyordu. Kuantum mekaniğini geliştirenler transistörü düşünmüyordu. Ama işte, bugün cebinde taşıdığın telefon, o "işe yaramaz" görünen temel araştırmaların ürünü.</p>
            <p>Teknoloji, merakın çocuğudur. Önce anlamak istersin. Sonra, anladığın şeyi kullanırsın.</p>
        `,
    },

    // === ÇEVİRİLER ===
    {
        id: 'ceviri-uzerine',
        category: 'ceviriler',
        title: 'Çeviri Üzerine: Anlamı Taşımak',
        date: '28 Ocak 2025',
        excerpt: 'Bir metni çevirmek, sadece kelimeleri değiştirmek değildir. Düşünceyi taşımaktır. Ve bu çok zordur.',
        content: `
            <p>Bilimsel metinleri çevirmek ayrı bir sanattır. Çünkü bilimde kelimeler <strong>kesin</strong> anlamlar taşır. "Spin"i "dönüş" diye çevirirsen, yanlış olur. Elektron dönmüyor — sadece dönüyormuş gibi davranıyor.</p>
            <p>Çeviri yaparken asıl mesele şu: <strong>Yazarın ne demek istediğini anlamak.</strong> Sadece sözlük karşılığını bulmak yetmez. Cümlenin ruhunu, bağlamını, ima ettiği şeyi de taşımalısın.</p>
            <p>İyi çeviri, görünmez olandır. Okur, çeviri olduğunu fark etmez bile. İşte hedef budur.</p>
        `,
    },

    // === MİTOLOJİ ===
    {
        id: 'tanrilar-ve-denklemler',
        category: 'mitoloji',
        title: 'Tanrılar ve Denklemler',
        date: '12 Aralık 2024',
        excerpt: 'Her toplum evreni açıklamak için hikayeler yarattı. Bugün biz denklemler kullanıyoruz. Fark ne?',
        content: `
            <p>Mitolojiyi küçümsememek lazım. İnsanlar her zaman "Neden?" diye sormuştur. Şimşek neden çakar? Zeus kızmıştır. Güneş neden doğar? Ra gökyüzünde yolculuk yapıyordur.</p>
            <p>Bunlar "ilkel" açıklamalar değil. <strong>Bunlar, o dönemin en iyi açıklamalarıydı.</strong> Ellerinde başka araç yoktu. Bizim bugün denklemlerle yaptığımızı, onlar hikayelerle yaptı.</p>
            <p>Fark şu: Denklemler yanlışlanabilir. Bir hipotez kurarsın, test edersin. Yanlışsa atarsın. Mitoloji bunu yapamaz. Bilimin üstünlüğü burada: <em>Yanılmaya açık olması.</em></p>
        `,
    },

    // === DENEMELER ===
    {
        id: 'bilimin-anlami',
        category: 'denemeler',
        title: 'Bilimin Anlamı',
        date: '1 Ocak 2025',
        excerpt: 'Bilim bir bilgi koleksiyonu değildir. Bir düşünme biçimidir. Bir merak disiplinidir.',
        content: `
            <p>İnsanlar bilimi bir "gerçekler listesi" sanır. Değildir. <strong>Bilim, soru sorma sanatıdır.</strong></p>
            <p>Bilim insanı, "Bilmiyorum" demekten korkmayan kişidir. "Bilmiyorum — hadi öğrenelim" diyendir. Her cevap, yeni sorular doğurur. Ve bu sonsuz bir oyundur.</p>
            <p>En güzel yanı da şu: Bu oyunu herkes oynayabilir. Özel bir yetenek gerekmez. Sadece merak ve dürüstlük gerekir. <em>Dürüstlük — kendine karşı dürüst olmak. İşte en zoru budur.</em></p>
        `,
    },
    {
        id: 'cargo-cult-bilim',
        category: 'denemeler',
        title: 'Kargo Kültü Bilimi',
        date: '22 Kasım 2024',
        excerpt: 'Bilime benzeyen ama bilim olmayan bir şey var. Ona "kargo kültü bilimi" diyorum.',
        content: `
            <p>Güney Pasifik'te, savaş sırasında adalara uçaklar iner, askerler kargo bırakırdı. Savaş bittikten sonra adalılar, uçakların dönmesi için pistler, kuleler inşa etti — aynısını yaptılar. Ama uçaklar gelmedi. <strong>Form doğruydu, ama öz eksikti.</strong></p>
            <p>Bilimde de aynısı olur. İnsanlar deney yapar, veri toplar, makale yazar. Ama gerçekten <em>merak etmezler</em>. Sonuçları dürüstçe sorgulamazlar. İşte bu kargo kültü bilimidir.</p>
            <p>Gerçek bilim, kendini yanlışlamaya çalışmaktır. En sevdiğin fikri test edip, yanlış çıkarsa sevinmektir. Çünkü yanlış olduğunu öğrenmek de bir şey öğrenmektir.</p>
        `,
    },

    // === SANAT ===
    {
        id: 'cizim-ve-gerceklik',
        category: 'sanat',
        title: 'Çizim ve Gerçeklik',
        date: '5 Mart 2025',
        excerpt: 'Resim yapmayı öğrendiğimde fark ettim: Sanat da bilim gibi, dünyayı gerçekten görmeyi öğretir.',
        content: `
            <p>Yıllarca fizik yaptım. Sonra resim yapmayı öğrendim. Ve şaşırtıcı bir şey keşfettim: <strong>Sanat ve bilim aynı şeyi yapıyor — dikkatli bakmayı öğretiyor.</strong></p>
            <p>Bir model çizerken, ışığın ten üzerinde nasıl dağıldığını, gölgelerin nasıl oluştuğunu, rengin nasıl değiştiğini fark edersin. Fizikçi olarak bunların hepsini biliyordum — optik, saçılma, yansıma. Ama <em>görmüyordum.</em></p>
            <p>Sanat bana görmeyi öğretti. Bilim anlamayı. İkisi birlikte... işte o zaman dünya gerçekten canlanıyor.</p>
        `,
    },

    // === PSİKOLOJİ ===
    {
        id: 'zihin-nedir',
        category: 'psikoloji',
        title: 'Zihin Nedir?',
        date: '18 Şubat 2025',
        excerpt: 'Beynin içinde ne var? Nöronlar, sinyaller, kimyasallar... Peki "ben" nerede?',
        content: `
            <p>En büyük gizemlerden biri: <strong>Madde nasıl bilinç üretir?</strong> Kafatasının içinde bir buçuk kilo et var. Nöronlar ateşleniyor. Ama sen "kendin" olduğunu hissediyorsun. Nasıl?</p>
            <p>Bilim henüz bunu açıklayamıyor. Ama açıklayamaması, açıklanamaz olduğu anlamına gelmez. Sadece henüz yeterince iyi araçlarımız yok. <strong>Bilmediğimizi bilmek, araştırmaya devam etmek için yeterlidir.</strong></p>
            <p>Belki bir gün bilinç dediğimiz şeyin, yeterince karmaşık bir sistemin doğal bir özelliği olduğunu keşfedeceğiz. Tıpkı suyun ıslaklığı gibi — tek bir molekül ıslak değildir, ama milyarlarcası bir araya gelince ıslaklık ortaya çıkar.</p>
        `,
    },
];