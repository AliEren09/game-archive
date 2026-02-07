/*Oyunları kayıt ettiğimiz javascript dosyamız.*/
const oyunlar = [
    {
      id: "sims4",
      title: "Sims 4",
      genre: "Sandbox",
      year: 2014,
      image: "Fotoğraflar/sims.jpg",
      description: "The Sims 4 ile kendi yaşam simülasyonunu yarat! Bu dinamik dünyada, Simlerini kişiselleştir, onların hayatlarını yönet, ilişkiler kur ve onların hayallerini gerçeğe dönüştür. Gerçekten özgür bir oyun deneyimi sunan The Sims 4, yaratıcı ev inşası, detaylı karakter özelleştirme ve açık dünya keşifleri ile seni bekliyor. Yüksek lisanslı kariyerlerden tutun, evcil hayvanlarla eğlenceli anlar yaşamaya kadar, her şey senin elinde. İçerik paketleri ve modlar sayesinde oyun deneyimini sürekli yenileyebilirsin. Kendi hikayeni oluştur, Simlerinin dünyasında unutulmaz anlar yaşa!."
    },
    {
      id: "rdr2",
      title: "Red Dead Redemption 2",
      genre: "Açık Dünya",
      year: 2018,
      image: "Fotoğraflar/rdr2.jpg",
      description: "Red Dead Redemption 2 ile vahşi batının karanlık dünyasında bir yolculuğa çık! Rockstar Games tarafından geliştirilen bu efsanevi açık dünya aksiyon-macera oyunu, 1899 yılında Amerika'nın batısında geçiyor. Oyuncular, Arthur Morgan adlı bir haydut olarak, Van der Linde çetesinin bir parçası olarak hayatta kalmaya ve özgürlük arayışına giriyor. Geniş, detaylı bir açık dünya, zengin karakter hikayeleri, etkileyici görseller ve derinlemesine bir oyun deneyimi sunan Red Dead Redemption 2, görevleri, keşifleri, çeteyle etkileşimleri ve zengin sosyal yapılarıyla dikkat çekiyor. Doğayla iç içe yaşa, haydutluk yap, çetenle birlikte mücadele et ve Batı'nın son günlerini keşfet. Tüm bu süreçte, kararların senin hikayenin seyrini değiştirecek. Gerçekçi oynanış, sürükleyici bir senaryo ve unutulmaz bir atmosferle Red Dead Redemption 2 seni bekliyor!."
    },
    {
      id: "minecraft",
      title: "Minecraft",
      genre: "Sandbox",
      year: 2011,
      image: "Fotoğraflar/minecraft.jpg",
      description: "Minecraft ile hayal gücünü serbest bırak ve kendi dünyanı yarat! Mojang tarafından geliştirilen bu efsanevi sandbox oyunu, oyunculara bloklardan oluşan devasa bir dünyada keşif yapma, inşa etme ve hayatta kalma fırsatı sunuyor. Minecraft, basit ama derinlemesine oynanışıyla her yaştan oyuncuya hitap eder. Tek başına veya arkadaşlarınla birlikte oynayabileceğin birçok oyun modu bulunan Minecraft’ta, sınırsız yaratıcılık ile kendi yapılarından devasa şehirler, mekanizmalar ve hatta oyunlar yaratabilirsin. Ayrıca, hayatta kalma modunda, kaynakları toplayarak, inşa ederek ve canavarlara karşı mücadele ederek zorlayıcı bir deneyim yaşayabilirsin. Minecraft, her gün yenilenen içerikleri ve geniş mod desteğiyle seni bekliyor! İster tek başına ister arkadaşlarınla keşfe çık, bloklarla sınırsız dünyaları keşfet!"
    },
    {
      id: "godofwar",
      title: "God of War",
      genre: "Aksiyon",
      year: 2018,
      image: "Fotoğraflar/godofwar.jpg",
      description: "God of War ile efsanevi bir maceraya atıl ve Kratos'un destanını keşfet! Santa Monica Studio tarafından geliştirilen bu aksiyon-macera oyunu, Yunan ve İskandinav mitolojilerinin harmanlandığı bir dünyada geçiyor. Serinin önceki oyunlarından farklı olarak, God of War (2018), Kratos'un oğlu Atreus ile birlikte çıktığı yolculuğu anlatıyor. Bu sürükleyici hikaye, Kratos'un geçmişiyle yüzleşmesini ve oğluna baba olma sorumluluğunu üstlenmesini konu alıyor. Zorlu düşmanlarla savaşırken, büyüleyici manzaralarla dolu bir dünyayı keşfedecek ve epik savaşlar yaşayacaksınız. God of War, derin dövüş mekanikleri, etkileyici görselleri, zengin karakter gelişimi ve epik hikayesiyle aksiyon-macera türünde bir başyapıt. Kratos'un gücünü ve Atreus'un büyüleyici yeteneklerini birleştirerek, unutulmaz bir yolculuğa çıkmaya hazır ol"
    },
    {
      id: "eldenring",
      title: "Elden Ring",
      genre: "RPG",
      year: 2022,
      image: "Fotoğraflar/eldenring.jpg",
      description: "Elden Ring ile karanlık bir fantezi dünyasında efsanevi bir yolculuğa çık! FromSoftware tarafından geliştirilen ve Hidetaka Miyazaki'nin yönettiği bu aksiyon RPG oyunu, zorlu savaşlar, derin hikaye anlatımı ve geniş açık dünya keşfiyle dikkat çekiyor. Elden Ring, “The Lands Between” adlı gizemli ve tehlikeli bir dünyada geçiyor. Yıkılmış bir krallığın kalıntılarında, Elden Ring’in kırılmasının ardından oluşan kaosun ortasında, oyuncular kendilerini güçlü bir savaşçı olarak buluyor. Derin dövüş mekanikleri, etkileyici boss savaşları ve keşfe dayalı oyun yapısı, her adımda seni sınavlara tabi tutacak. Ayrıca, oyun dünyasında özgürce hareket edebilir, gizemli yerleri keşfedebilir ve kendi oyun tarzına uygun stratejiler geliştirebilirsin. Elden Ring, ödüllü tasarımı, zengin lore’u ve heyecan verici atmosferi ile seni bekliyor!"
    },
    {
      id: "gtav",
      title: "GTA V",
      genre: "Açık Dünya",
      year: 2013,
      image: "Fotoğraflar/gta5.jpg",
      description: "Grand Theft Auto V (GTA 5) ile suç dolu, özgür bir dünyanın kapılarını arala! Rockstar Games tarafından geliştirilen bu aksiyon-macera oyunu, Los Santos adlı geniş ve detaylı bir şehirde geçiyor. Üç farklı karakteri kontrol ederek, suç dünyasında yükselmek için büyük soygunlara katıl, kanunsuz işlere gir ve dünyanın en büyük suçlularından biri ol. GTA 5, eşsiz açık dünya tasarımı, derin hikaye anlatımı, yoğun aksiyon sahneleri ve gerçekçi detaylarıyla oyuncuları içine çeker. Michael, Trevor ve Franklin'in hikayeleri birbirine bağlanırken, her karakterin kendine özgü yetenekleri ve hayatları var. Heyecan verici araçlarla araba sür, uçakla gökyüzünü keşfet ya da su altı dünyasına dal. Ayrıca, çevrimiçi çok oyunculu mod olan GTA Online ile arkadaşlarınla birlikte, sürekli genişleyen bir dünyada mücadele et. GTA 5, suç, aksiyon ve keşif dolu bir deneyim sunuyor!"


    },
    {
      id: "amongus",
      title: "Among Us",
      genre: "Strateji",
      year: 2013,
      image: "Fotoğraflar/amongus.jpg",
      description: "Among Us ile arkadaşlarınla birlikte, mürettebat üyeleri olarak görevleri tamamlamaya çalışırken, sahtekârları bulmaya çalışın. Sahtekârlar ise gizlice mürettebatı öldürüp kimliklerini saklamaya çalışacak. İletişim, strateji ve güven test edileceğiniz eğlenceli bir sosyal dedektiflik oyunu!"
    },
    {
      id: "stardewvalley",
      title: "Stardew Valley",
      genre: "Sandbox",
      year: 2016,
      image: "Fotoğraflar/stardewvalley.jpg",
      description: "Stardew Valley, bir çiftlik simülasyonu oyunudur. Kendi çiftliğini devralarak, toprakları işleyip, bitkiler yetiştirip, hayvanlarla ilgilenerek hayatını kurabilirsin. Ayrıca kasaba halkı ile ilişkiler kurabilir, madencilik, balıkçılık ve diğer etkinliklerle zaman geçirebilirsin. Oyun, huzurlu bir çiftlik hayatı sunarken, keşif ve sosyal etkileşimle de eğlenceli bir deneyim sağlar."
    },
    {
      id: "phasmophobia",
      title: "Phasmophobia",
      genre: "Korku",
      year: 2020,
      image: "Fotoğraflar/phasmophobia.jpg",
      description: "Phasmophobia, korku temalı bir kooperatif hayatta kalma oyunudur. Oyuncular, bir grup medyum olarak, perili evleri keşfeder ve farklı türdeki hayaletleri tespit etmeye çalışır. Takım çalışması, hayalet türlerini bulma ve çeşitli araçları kullanma üzerine kurulu oyun, gerilim dolu anlar ve korku atmosferiyle oyuncuları etkiler. Gizemli varlıklarla karşılaşırken, hayaletleri bulup, doğru tanımlama yaparak görevleri tamamlamalısınız."
    },
  
  {
    id: "worldbox",
    title: "World Box",
    genre: "Sandbox",
    year: 2012,
    image: "Fotoğraflar/worldbox.jpg",
    description: "WorldBox, Maxim Karpenko tarafından geliştirilen bir tanrı simülasyonu ve sandbox oyunudur. Oyuncular, farklı yaratıklar ve medeniyetler yaratarak veya yok ederek dünyalar inşa edebilir ve bu dünyaların evrimini gözlemleyebilirler. Oyun, doğal afetler, savaşlar ve diğer kaotik olaylarla dünyayı şekillendirme imkânı sunar."
  },
  {
    id: "battlefield1",
    title: "Battlefield 1",
    genre: "Aksiyon",
    year: 2016,
    image: "Fotoğraflar/battlefield1.jpg",
    description: "Battlefield 1, DICE tarafından geliştirilen ve Electronic Arts tarafından yayımlanan birinci şahıs nişancı oyunudur. Oyun, I. Dünya Savaşı'nda geçen tek oyunculu (War Stories) adlı kısa hikâyelerden oluşan bir kampanya sunar. Çok oyunculu modda ise 64 oyuncuya kadar desteklenen büyük ölçekli çatışmalar, tanklar, uçaklar ve atlı birlikler gibi dönemin araçlarıyla zenginleştirilmiştir. Grafiksel olarak etkileyici, stratejik derinliği olan ve tarihî atmosferiyle dikkat çeker."
  },
  {
    id: "battlefield3",
    title: "Battlefield 3",
    genre: "Aksiyon",
    year: 2011,
    image: "Fotoğraflar/battlefield3.jpg",
    description: "Battlefield 3, DICE tarafından geliştirilen ve Electronic Arts tarafından yayımlanan birinci şahıs nişancı oyunudur. Modern savaş temalı bu oyun, oyunculara Amerika Birleşik Devletleri, Çin ve Orta Doğu Koalisyonu (MEC) arasında geçen kurgusal bir dünya savaşında yer alma imkânı sunar. Oyun, 64 oyuncuya kadar desteklenen büyük ölçekli çok oyunculu haritalar, yeni sınıf sistemleri ve takım tabanlı strateji unsurlarıyla dikkat çeker. Ayrıca, oyuncuların rütbe kazandıkça yeni silahlar ve ödüller kazandığı bir ilerleme sistemi de içerir."
  },
  {
    id: "battlefield4",
    title: "Battlefield 4",
    genre: "Aksiyon",
    year: 2013,
    image: "Fotoğraflar/battlefield4.jpg",
    description: "Battlefield 4, DICE tarafından geliştirilen ve Electronic Arts tarafından yayımlanan birinci şahıs nişancı oyunudur. Modern savaş temalı bu oyun, oyunculara Amerika Birleşik Devletleri, Çin ve Orta Doğu Koalisyonu (MEC) arasında geçen kurgusal bir dünya savaşında yer alma imkânı sunar. Oyun, 64 oyuncuya kadar desteklenen büyük ölçekli çok oyunculu haritalar, yeni sınıf sistemleri ve takım tabanlı strateji unsurlarıyla dikkat çeker. Ayrıca, oyuncuların rütbe kazandıkça yeni silahlar ve ödüller kazandığı bir ilerleme sistemi de içerir."
  },
  {
    id: "battlefield5",
    title: "Battlefield V",
    genre: "Aksiyon",
    year: 2018,
    image: "Fotoğraflar/battlefield5.jpg",
    description: "Battlefield V, DICE tarafından geliştirilen ve Electronic Arts tarafından yayımlanan birinci şahıs nişancı oyunudur. Oyun, II. Dünya Savaşı'nı konu alır ve serinin köklerine dönüş yaparak, savaşın daha önce keşfedilmemiş cephelerine odaklanır. Tek oyunculu modda, (War Stories) adı verilen kısa hikayelerle farklı karakterlerin bakış açıları sunulur. Çok oyunculu modda ise 64 oyuncuya kadar desteklenen büyük ölçekli çatışmalar, yeni oyun modları ve dinamik hava koşullarıyla zenginleştirilmiştir. Ayrıca, (Firestorm) adlı battle royale modu da oyuna eklenmiştir. Battlefield V, takım tabanlı strateji, çevresel tahribat ve gerçekçi atmosferiyle dikkat çeker."
  },
  {
    id: "left4dead",
    title: "Left 4 Dead",
    genre: "Korku",
    year: 2008,
    image: "Fotoğraflar/left4dead.jpg",
    description: "Left 4 Dead, Valve ve Turtle Rock Studios tarafından geliştirilen, kooperatif birinci şahıs nişancı türünde bir hayatta kalma korku oyunudur. Oyuncular, enfekte olmuş bir dünyada hayatta kalan dört karakterden biri olarak, zombilerle dolu ortamlarda güvenli bölgelere ulaşmaya çalışır. Dinamik yapay zeka (Direktör) sistemi, her oynayışta farklı deneyimler sunar. Hem tek oyunculu hem de çok oyunculu modlarıyla, takım çalışması ve strateji ön plandadır."
  },
  {
    id: "left4dead2",
    title: "Left 4 Dead 2",
    genre: "Korku",
    year: 2009,
    image: "Fotoğraflar/left4dead2.jpg",
    description: "Left 4 Dead 2, Valve tarafından geliştirilen ve yayımlanan birinci şahıs nişancı türünde bir hayatta kalma korku oyunudur. Oyuncular, apokaliptik bir dünyada, zombi benzeri yaratıklara karşı hayatta kalmaya çalışan dört yeni karakteri yönetir. Beş ana kampanya boyunca, oyuncular güvenli evlere ulaşmaya çalışırken, yeni türdeki özel enfekte yaratıklarla mücadele ederler. Oyun, dinamik hava koşulları ve seviyelerdeki değişikliklerle her oynanışta farklı deneyimler sunar. Hem tek oyunculu hem de çevrimiçi çok oyunculu modlarıyla, takım çalışması ve strateji ön plandadır."
  },
  {
    id: "fc25",
    title: "FC25",
    genre: "Spor",
    year: 2024,
    image: "Fotoğraflar/fc25.jpg",
    description: "EA Sports FC 25, EA Sports'un FIFA markasıyla olan lisans anlaşmasının sona ermesinin ardından piyasaya sürdüğü ikinci futbol simülasyonu oyunudur. 27 Eylül 2024'te dünya genelinde PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC ve Nintendo Switch platformlarında yayımlandı. Oyunun kapağında Real Madrid'in genç yıldızı Jude Bellingham yer alırken, Ultimate Edition kapağında Gianluigi Buffon, Aitana Bonmatí, Zinedine Zidane, David Beckham ve Jude Bellingham gibi futbol ikonları bulunuyor."
  },
  {
    id: "nba2k25",
    title: "NBA 2K25",
    genre: "Spor",
    year: 2024,
    image: "Fotoğraflar/nba2k25.jpg",
    description: "NBA 2K25, Visual Concepts tarafından geliştirilen ve 2K tarafından yayımlanan basketbol simülasyonu oyunudur. 6 Eylül 2024'te PC, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S ve Nintendo Switch platformlarında yayımlanmıştır."
  },
  {
    id: "metro2033",
    title: "Metro 2033",
    genre: "Aksiyon",
    year: 2010,
    image: "Fotoğraflar/metro2033.jpg",
    description: "Metro 2033, Dmitry Glukhovsky'nin aynı adlı romanından uyarlanan, 2010 yılında 4A Games tarafından geliştirilen ve THQ tarafından yayımlanan birinci şahıs nişancı ve hayatta kalma korku oyunudur. Oyun, 2013 yılında gerçekleşen küresel bir nükleer felaketin ardından Moskova metrosunda hayatta kalan insanları konu alır. Oyuncular, Artyom adlı bir karakteri kontrol ederek, hem mutantlarla hem de insan düşmanlarla dolu karanlık metro tünellerinde hayatta kalmaya çalışır. Atmosferi, gerilim dolu hikâyesi ve detaylı çevre tasarımıyla dikkat çeker."
  },
  {
    id: "metrolastlight",
    title: "Metro: Last Light",
    genre: "Aksiyon",
    year: 2013,
    image: "Fotoğraflar/metrolastlight.jpg",
    description: "Metro: Last Light, 4A Games tarafından geliştirilen ve Deep Silver tarafından yayımlanan birinci şahıs nişancı türünde bir hayatta kalma korku oyunudur. Oyun, 2034 yılında, Moskova'nın post-apokaliptik metro tünellerinde hayatta kalmaya çalışan insanlığın kalıntılarını konu alır. Artyom adlı ana karakter, önceki oyunda karşılaştığı (Karanlıklar) adlı varlıkların izini sürer ve insanlık için hayati öneme sahip bir görevi yerine getirmeye çalışır."
  },
  {
    id: "metroexodus",
    title: "Metro Exodus",
    genre: "Aksiyon",
    year: 2013,
    image: "Fotoğraflar/metroexodus.jpg",
    description: "Metro Exodus, 4A Games tarafından geliştirilen ve Deep Silver tarafından yayımlanan birinci şahıs nişancı türünde bir hayatta kalma korku oyunudur. Oyun, Dmitry Glukhovsky'nin aynı adlı romanından uyarlanmıştır ve Metro serisinin üçüncü oyunudur."
  },
  {
    id: "thewitcher2",
    title: "The Witcher 2: Assassins of Kings",
    genre: "RPG",
    year: 2011,
    image: "Fotoğraflar/thewitcher2.jpg",
    description: "The Witcher 2: Assassins of Kings ile Geralt of Rivia'nın karanlık ve entrikalarla dolu dünyasına adım atın! Geralt, suçsuzluğunu kanıtlamaya çalışırken, devasa bir krallıkta siyasi entrikalar ve gizli örgütlerin derinliklerine dalar. Seçimlerinize göre şekillenen bir hikâyeyi keşfederken, aksiyon dolu dövüşler ve zengin karakter gelişimi sizi bekliyor. Bu derinlemesine rol yapma oyununda, stratejik dövüşler ve zorlu düşmanlarla karşılaşarak, Geralt’ı geçmişinin karanlık sırlarını çözmeye yönlendirin. Yüksek kaliteli grafikler ve etkileyici bir atmosferle unutulmaz bir deneyim yaşayın!"
  },
  {
    id: "thewitcher3",
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    year: 2015,
    image: "Fotoğraflar/thewitcher3.jpg",
    description: "The Witcher 3: Wild Hunt, CD Projekt RED tarafından geliştirilen ve 2015 yılında piyasaya sürülen, açık dünya rol yapma oyunudur. Geralt of Rivia, kaybolan kızı Ciri’yi ararken, gizemli ve tehlikeli bir dünyada büyük bir savaşa doğru sürüklenir. Geralt’ın seçimleri, dünyayı, karakterlerle olan ilişkilerini ve hikâyenin seyrini doğrudan etkiler. Geniş bir açık dünyada, zorlu düşmanlarla mücadele ederken, unutulmaz yan görevler ve güçlü hikâyelerle dolu bir deneyim sunar. Dinamik dövüş sistemi ve etkileyici atmosferiyle The Witcher 3, oyuncuları derin bir rol yapma deneyimiyle büyüler."
  },
  {
    id: "fallout2",
    title: "Fallout 2",
    genre: "RPG",
    year: 1998,
    image: "Fotoğraflar/fallout2.jpg",
    description: "Fallout 2, Black Isle Studios tarafından geliştirilen ve 1998 yılında yayımlanan klasik bir izometrik rol yapma oyunudur. Nükleer felaket sonrası hayatta kalan insanlık, çorak topraklarda mücadele etmeye devam etmektedir. Oyuncular, Vault Dweller olarak bilinen bir karakteri kontrol eder ve görev olarak, kendi köyünü kurtarmak için büyük bir yolculuğa çıkar. Oyun, derin diyalog seçenekleri, özgürlük ve zengin bir hikaye sunar. Fallout 2, geniş bir açık dünya, yüzlerce farklı karakter ve stratejik savaş sistemiyle, kararlarınızın dünyayı nasıl etkileyeceğini gösteren bir deneyim sunar."
  },
  {
    id: "fallout3",
    title: "Fallout 3",
    genre: "RPG",
    year: 2008,
    image: "Fotoğraflar/fallout3.jpg",
    description: "Fallout 3, Bethesda Game Studios tarafından geliştirilen ve 2008 yılında piyasaya sürülen açık dünya, aksiyon rol yapma oyunudur. Nükleer savaşın ardından, oyuncular, Washington D.C.'nin yıkıntılarında hayatta kalmaya çalışan bir karakteri kontrol eder. Ana karakter, Vault 101'den çıkarak kaybolan babasını bulmaya çalışırken, zengin bir açık dünya, zorlu düşmanlar, moral seçimler ve derinlemesine hikâyelerle karşılaşır. Hayatta kalmak için kaynakları dikkatlice yönetmeli, karşılaştığın gruplarla etkileşimde bulunmalı ve her kararının dünyayı nasıl değiştirdiğini görmelisin. Fallout 3, özgürlük, keşif ve strateji ile oyunculara unutulmaz bir deneyim sunar."
  },
  {
    id: "deadspace1",
    title: "Dead Space 1",
    genre: "Korku",
    year: 2008,
    image: "Fotoğraflar/deadspace1.jpg",
    description: "Dead Space, EA Redwood Shores (şimdi Visceral Games) tarafından geliştirilen ve 2008 yılında yayımlanan bir hayatta kalma korku oyunudur. Oyuncular, Isaac Clarke adlı bir mühendis olarak, terkedilmiş bir uzay gemisinde korkunç bir yaratık saldırısına uğramış mürettebatı keşfeder. Uzayda hayatta kalmak için sınırlı kaynaklarla mücadele ederken, dehşet verici yaratıklarla karşılaşır. Gerilim dolu atmosferi, stratejik dövüş sistemi ve hikâyesi ile oyunculara unutulmaz bir korku deneyimi sunar."
  },
  {
    id: "deadspace2",
    title: "Dead Space 2",
    genre: "Korku",
    year: 2011,
    image: "Fotoğraflar/deadspace2.jpg",
    description: "Dead Space 2, Visceral Games tarafından geliştirilen ve 2011'de yayımlanan bir hayatta kalma korku oyunudur. İlk oyunun ardından, Isaac Clarke, ikincil bir uzay istasyonunda kendini tekrar hayatta kalma mücadelesi verirken bulur. Hem psikolojik korku hem de fiziksel tehditler ön planda olup, Isaac'in geçmişi ve travmaları da oyunun derinlemesine anlatısına dahil edilir. Gelişmiş dövüş mekaniği, yeni ortamlar ve korkunç yaratıklarla daha yoğun bir korku deneyimi sunar."
  },
  {
    id: "deadspace3",
    title: "Dead Space 3",
    genre: "Korku",
    year: 2013,
    image: "Fotoğraflar/deadspace3.jpg",
    description: "Dead Space 3, Visceral Games tarafından geliştirilen ve 2013'te yayımlanan, serinin üçüncü ve son oyunudur. Isaac Clarke ve yeni bir karakter olan John Carver, dondurulmuş bir gezegende, Necromorph adı verilen yaratıklara karşı hayatta kalmaya çalışırlar. Hem tek oyunculu hem de kooperatif çok oyunculu mod sunarak, oyunculara birlikte hayatta kalma fırsatı verir. Daha fazla aksiyon odaklı, yeni mekanikler ve keşfedilecek yeni dünyalarla korku unsurları geliştirilmiştir."
  },
  {
    id: "theforest",
    title: "The Forest",
    genre: "Hayatta Kalma",
    year: 2014,
    image: "Fotoğraflar/theforest.jpg",
    description: "The Forest, Endnight Games tarafından geliştirilen bir hayatta kalma korku oyunudur. Bir uçak kazası sonrası ıssız bir adada mahsur kalan oyuncular, hayatta kalmaya çalışırken, adada yaşayan dehşet verici yaratıklarla mücadele eder. Kaynakları toplayarak, sığınaklar inşa edip, yiyecek ve su temin etmek zorundasınız. Oyun, atmosferik korku ve hayatta kalma mekaniklerini birleştirerek, oyunculara hem gerilim hem de özgürlük dolu bir deneyim sunar."
  },
  {
    id: "sonsoftheforest",
    title: "Sons Of The Forest",
    genre: "Hayatta Kalma",
    year: 2023,
    image: "Fotoğraflar/sonsoftheforest.jpg",
    description: "Sons of the Forest, The Forest serisinin devamı olup, Endnight Games tarafından geliştirilen ve 2023 yılında yayımlanan bir hayatta kalma korku oyunudur. Oyuncular, yeni bir adada hayatta kalmaya çalışırken, daha gelişmiş yapay zeka, yeni yaratıklar ve keşfedilecek daha büyük alanlar ile karşılaşırlar. Gerilim ve hayatta kalma unsurlarını derinleştiren oyun, oyunculara daha fazla etkileşim ve keşif fırsatı sunar. Ayrıca, daha detaylı inşa sistemleri ve yeni tehditler oyunun özellikleri arasında yer alır."
  },
  {
    id: "thelongdark",
    title: "The Long Dark",
    genre: "Hayatta Kalma",
    year: 2014,
    image: "Fotoğraflar/thelongdark.jpg",
    description: "The Long Dark, Hinterland Games tarafından geliştirilen bir hayatta kalma oyunudur. Oyun, büyük bir felaketin ardından kuzeydeki izole bir bölgeye düşen oyuncuyu kontrol eder. Yalnızca doğa ile mücadele ederek hayatta kalmaya çalışan oyuncular, soğuk hava, açlık, susuzluk ve vahşi hayvanlarla başa çıkmalıdır. Gerçekçi hayatta kalma unsurları ve stratejik kaynak yönetimi ile derin bir deneyim sunan oyun, oyunculara zorlu doğa koşullarında hayatta kalmayı hedefler."
  },
  {
    id: "residentevil2",
    title: "Resident Evil 2 Remake",
    genre: "Korku",
    year: 2019,
    image: "Fotoğraflar/residentevil2.jpg",
    description: "Resident Evil 2 (Remake), Capcom tarafından geliştirilen ve 2019'da yayımlanan bir hayatta kalma korku oyunudur. 1998 çıkışlı orijinal Resident Evil 2 oyununu modern grafikler, geliştirilmiş oynanış ve yeni seslendirme ile yeniden sunar. Oyuncular, Raccoon City'yi istila eden zombi salgını sırasında, Leon S. Kennedy ve Claire Redfield karakterlerini kontrol ederek, hayatta kalmaya çalışırlar. Gerilim dolu atmosferi, detaylı çevre tasarımı ve akılcı zorluklarla oyunculara unutulmaz bir deneyim sunar."
  },
  {
    id: "residentevil3",
    title: "Resident Evil 3 Remake",
    genre: "Korku",
    year: 2020,
    image: "Fotoğraflar/residentevil3.jpg",
    description: "Resident Evil 3 (Remake), Capcom tarafından geliştirilen ve 2020 yılında yayımlanan bir hayatta kalma korku oyunudur. Orijinal Resident Evil 3 oyununun modern bir versiyonudur. Oyun, Raccoon City'nin çöküşünü ve Jill Valentine’ın, Nemi adı verilen ölümcül biyolojik silahı atlatmaya çalışırken yaşadığı korku dolu anları anlatır. Gerçekçi grafikler, yeni dövüş mekanikleri ve akıcı hareketlerle, oyunculara sürükleyici bir deneyim sunar."
  },
  {
    id: "residentevil4",
    title: "Resident Evil 4 Remake",
    genre: "Korku",
    year: 2023,
    image: "Fotoğraflar/residentevil4.jpg",
    description: "Resident Evil 4 (Remake), Capcom tarafından geliştirilen ve 2023 yılında yayımlanan bir hayatta kalma korku oyunudur. 2005'te çıkan orijinal Resident Evil 4 oyununun, tamamen yenilenmiş grafikler, mekanikler ve birinci şahıs bakış açısı ile yeniden sunulmuş halidir. Oyuncular, Leon S. Kennedy’yi kontrol ederek, Avrupa'daki bir köyde esir alınan başkanın kızını kurtarmaya çalışırken, korkunç yaratıklar ve gizemli güçlerle mücadele eder. Yenilikçi dövüş sistemi, atmosfer ve hikaye derinliğiyle bu remake, hayatta kalma korku türünde önemli bir adım atmıştır."
  },
  {
    id: "residentevilbiohazard",
    title: "Resident Evil 7: Biohazard",
    genre: "Korku",
    year: 2017,
    image: "Fotoğraflar/residentevilbiohazard.jpg",
    description: "Resident Evil 7: Biohazard, Capcom tarafından geliştirilen ve 2017 yılında yayımlanan bir hayatta kalma korku oyunudur. Oyun, serinin önceki oyunlarından farklı olarak, birinci şahıs bakış açısıyla sunulmuştur. Ethan Winters, kaybolan karısını ararken, Amerika'nın kırsalında korkunç bir çiftlik ailesiyle karşılaşır. Gelişmiş korku atmosferi, gerilim dolu mekanikler ve korkutucu yaratıklar ile oyuncuları sıkı bir hayatta kalma mücadelesine sokar. Biohazard, serinin köklerine dönüş yaparak, korku ve gerilim öğelerini ön plana çıkarır."
  },
  {
    id: "residentevilvillage",
    title: "Resident Evil Village",
    genre: "Korku",
    year: 2021,
    image: "Fotoğraflar/residentevilvillage.jpg",
    description: "Resident Evil Village, Capcom tarafından geliştirilen ve 2021 yılında yayımlanan bir hayatta kalma korku oyunudur. Resident Evil 7: Biohazard'ın devamı niteliğinde olan oyun, Ethan Winters'ın ailesini kurtarma çabalarını sürdürürken, korkunç bir köyde ve kasvetli bir şatoda hayatta kalmaya çalışmasını konu alır. Oyun, birinci şahıs bakış açısını sürdürerek, korku öğelerini geliştirirken, aksiyon ve keşif unsurlarını da içine katar. Gerçekçi grafikleri, çeşitli korku öğeleri ve yaratık çeşitliliğiyle oyuncuları etkileyici bir korku deneyimi bekler."
  },
  {
    id: "civilization6",
    title: "Civilization 6",
    genre: "Strateji",
    year: 2016,
    image: "Fotoğraflar/civilization6.jpg",
    description: "Civilization 6, Firaxis Games tarafından geliştirilen ve 2016'da yayımlanan, sıra tabanlı bir strateji oyunudur. Oyuncular, tarihi bir uygarlığı yöneterek, savaş, diplomasi, bilim, kültür ve ticaret yoluyla dünyada en güçlü devlet olmayı hedefler. Her seçim, uygarlığının yönünü ve tarihsel gelişimini etkiler. Genişleyen haritalar, birçok farklı strateji ve zafer yolu sunarak, oyunculara derinlemesine bir strateji deneyimi yaşatır."
  },
  {
    id: "frostpunk",
    title: "Frostpunk",
    genre: "Strateji",
    year: 2018,
    image: "Fotoğraflar/frostpunk.jpg",
    description: "Frostpunk, 11 bit Studios tarafından geliştirilen ve 2018 yılında yayımlanan bir hayatta kalma şehir kurma oyunudur. Oyun, soğuk bir kıyamet sonrası dünyada geçer. Hayatta kalan son insanları bir arada tutabilmek için, sıcaklık ve kaynakları doğru bir şekilde yönetmek gerekmektedir. Şehir inşa ederken, toplumsal düzeni korumak ve moral değerleriyle uğraşmak, kritik kararlar almayı gerektirir. Derin etik seçimler ve zorlu hayatta kalma unsurlarıyla dikkat çeker."
  },
  {
    id: "frostpunk2",
    title: "Frostpunk 2",
    genre: "Strateji",
    year: 2024,
    image: "Fotoğraflar/frostpunk2.jpg",
    description: "Frostpunk 2, 11 bit Studios tarafından geliştirilen ve 2024 yılında yayımlanan bir hayatta kalma ve şehir kurma oyunudur. Frostpunk'ın devamı olarak, daha soğuk bir gelecekte, insanlık kaynakların tükenmesiyle birlikte petrol temelli bir ekonomi üzerine kurulu bir yönetim mücadelesi verir. Şehir kurma ve kaynak yönetimi gibi unsurlar, yeni mekaniklerle genişletilmiştir. Oyuncular, teknolojiyi kullanarak, hayatta kalmak ve toplumsal düzeni sağlamak için yeni yollar aramalıdır."
  },
  {
    id: "daysgone",
    title: "Days Gone",
    genre: "Açık Dünya",
    year: 2019,
    image: "Fotoğraflar/daysgone.jpg",
    description: "Days Gone, Bend Studio tarafından geliştirilen ve 2019 yılında yayımlanan açık dünya hayatta kalma aksiyon oyunudur. Oyun, bir zombi kıyameti sonrası hayatta kalan Deacon St. John'un hikayesini anlatır. Deacon, hayatta kalan diğer insanlarla hayatta kalma mücadelesi verirken, aynı zamanda kaybolan eşini arar. Açık dünya tasarımı, motosiklet kullanımı, zombi sürülerinin korkutucu yapısı ve kaynak yönetimi ile oyunculara derinlemesine bir deneyim sunar."
  },
  {
    id: "saintsrow3",
    title: "Saints Row: The Third",
    genre: "Açık Dünya",
    year: 2011,
    image: "Fotoğraflar/saintsrow.jpg",
    description: "Saints Row: The Third, Volition tarafından geliştirilen ve 2011'de yayımlanan, aksiyon odaklı açık dünya oyunudur. Oyuncular, Third Street Saints adlı çetenin lideri olarak, suç, çatışma ve eğlenceli aksiyonlarla dolu bir dünyada özgürce hareket ederler. Komik ve abartılı oyun mekanikleri, güçlü karakter özelleştirmesi ve renkli açık dünya tasarımıyla dikkat çeker. Oyuncular, çetelerini daha da büyütüp, şehirdeki suçları ele geçirirken, çeşitli görevler ve çılgın aktivitelerle eğlenceli bir deneyim yaşar."
  },
  {
    id: "pes2013",
    title: "PES 2013",
    genre: "Spor",
    year: 2012,
    image: "Fotoğraflar/pes2013.jpg",
    description: "PES 2013, Konami tarafından geliştirilen ve 2012'de yayımlanan futbol simülasyon oyunudur. Bu oyun, PES serisinin önemli bir çıkış yapmasını sağladı ve futbol oyunlarının oynanışını daha gerçekçi hale getirdi. Yeni dribbling, kontrol ve pas mekanikleriyle oyuncular, saha içinde daha fazla özgürlük hissetti. Ayrıca, oyun, takım stratejileri ve bireysel yeteneklere büyük bir vurgu yaparak, futbolun dinamiklerine derinlemesine bir yaklaşım sundu."
  },
  {
    id: "pes2014",
    title: "PES 2014",
    genre: "Spor",
    year: 2013,
    image: "Fotoğraflar/pes2014.jpg",
    description: "PES 2014, Konami'nin FOX Engine ile geliştirdiği ve 2013'te yayımlanan futbol simülasyonu oyunudur. Bu sürüm, yeni grafik motoruyla daha gerçekçi bir atmosfer ve fiziksel simülasyon sundu. Oyun, daha akıcı animasyonlar ve oyuncu kontrolü sunarak, saha içindeki hareketlerin çok daha dinamik ve doğal görünmesini sağladı. Bunun yanı sıra, oyuncu yapay zekâsı ve stratejik yönler de önemli ölçüde geliştirildi."
  },
  {
    id: "pes2015",
    title: "PES 2015",
    genre: "Spor",
    year: 2014,
    image: "Fotoğraflar/pes2015.jpg",
    description: "PES 2015, Konami tarafından geliştirilen ve 2014 yılında yayımlanan futbol simülasyon oyunudur. PES 2015, önceki sürüme göre önemli iyileştirmeler yaparak, daha gerçekçi bir futbol deneyimi sundu. Oyun, çok daha akıcı animasyonlar, daha gerçekçi top fiziği ve gelişmiş yapay zekâ sunarak, hem tek oyunculu hem de çok oyunculu modlarda oldukça keyifli bir deneyim sundu. Yeni paslaşma ve dribbling sistemleri ile futbolseverlere derinlemesine bir oynanış sundu."
  },
  {
    id: "pes2016",
    title: "PES 2016",
    genre: "Spor",
    year: 2015,
    image: "Fotoğraflar/pes2016.jpg",
    description: "PES 2016, Konami tarafından geliştirilen ve 2015'te yayımlanan futbol simülasyon oyunudur. PES serisinin en beğenilen sürümlerinden biri olarak kabul edilir. Geliştirilmiş grafikler, daha akıcı animasyonlar ve gerçekçi top fiziği ile futbolseverleri etkileyen oyun, oyuncu hareketleri ve stratejik derinlikte önemli yenilikler sundu. Ayrıca, UEFA Şampiyonlar Ligi lisansına sahip olmasıyla dikkat çeker. PES 2016, takım stratejilerinin ve oyuncu becerilerinin ön planda olduğu, keyifli bir futbol deneyimi sundu."
  },
  {
    id: "pes2017",
    title: "PES 2017",
    genre: "Spor",
    year: 2016,
    image: "Fotoğraflar/pes2017.jpg",
    description: "PES 2017, Konami tarafından geliştirilen ve 2016'da yayımlanan futbol simülasyonu oyunudur. PES 2017, önceki sürüme kıyasla daha derinlemesine oyun mekanikleri ve geliştirilmiş yapay zekâ ile dikkat çeker. Yeni oynanış sistemleri, gelişmiş paslaşma ve top kontrolü ile daha gerçekçi bir futbol deneyimi sunar. Ayrıca, daha iyi takım yönetimi, oyuncu yapay zekâsı ve stratejik derinlik ile futbolseverlere çok daha keyifli bir deneyim yaşatır. Geliştirilen animasyonlar ve görseller, oyun dünyasında büyük övgü aldı."
  },
  {
    id: "unraveltwo",
    title: "Unravel Two",
    genre: "Strateji",
    year: 2018,
    image: "Fotoğraflar/unraveltwo.jpg",
    description: "Unravel Two, Coldwood Interactive tarafından geliştirilen ve 2018 yılında yayımlanan bir bulmaca-platform oyunudur. Oyun, oyuncuları birbirine bağlı iki (Yarny) adlı küçük ipten karakteri kontrol etmeye davet eder. İki oyuncunun birlikte işbirliği yaparak, zorlukları aşmaları gereken bir dünyada hayatta kalmaya çalışırlar. Oyuncular, birlikte fiziksel bulmacalar çözerek, çevreyi keşfeder ve sıcacık bir hikâyeyi takip ederler. Hem tek başına hem de çok oyunculu olarak oynanabilen Unravel Two, oyunculara duygusal bir deneyim sunar."
  },
  {
    id: "littlenightmares",
    title: "Little Nightmares 1",
    genre: "Korku",
    year: 2017,
    image: "Fotoğraflar/littlenightmares.jpg",
    description: "Little Nightmares, Tarsier Studios tarafından geliştirilen ve 2017 yılında yayımlanan bir korku-platform oyunudur. Oyun, küçük bir kız olan Six'in, devasa ve korkutucu bir dünyada, karanlık yaratıklardan kaçarken hayatta kalma mücadelesini konu alır. Görsel tarzı ve atmosferi ile dikkat çekerken, oyuncular gizemli bulmacaları çözerek ilerler. Little Nightmares, gerilim dolu atmosferi ve etkileyici hikâyesi ile korku severler için unutulmaz bir deneyim sunar."
  },
  {
    id: "littlenightmares2",
    title: "Little Nightmares 2",
    genre: "Korku",
    year: 2021,
    image: "Fotoğraflar/littlenightmares2.jpg",
    description: "Little Nightmares 2, Tarsier Studios tarafından geliştirilen ve 2021 yılında yayımlanan bir aksiyon-korku oyunudur. İlk oyunun devamı niteliğinde olan bu yapımda, oyuncular, Six'in yanına yeni bir karakter olan Mono'yu da alarak korkutucu bir dünyada hayatta kalmaya çalışırlar. Little Nightmares 2, önceki oyunun atmosferik korku ve gerilim öğelerini geliştirerek, daha karmaşık bulmacalar ve gizemli ortamlar ile oyunculara daha derin bir deneyim sunar."
  },
  {
    id: "thelastofus",
    title: "The Last Of Us Part I",
    genre: "Hayatta Kalma",
    year: 2013,
    image: "Fotoğraflar/thelastofus.jpg",
    description: "The Last of Us, Naughty Dog tarafından geliştirilen ve 2013'te yayımlanan aksiyon-macera oyunudur. Oyun, kıyamet sonrası bir dünyada, Ellie ve Joel adlı iki karakterin hayatta kalma mücadelesini konu alır. İnsanlık, ölümcül bir enfeksiyon nedeniyle yok olma tehlikesiyle karşı karşıyadır ve Joel, Ellie’yi koruyarak, onun hayatta kalmasını sağlamaya çalışır. Zengin bir hikâye, derin karakter gelişimi ve duygusal anlatım ile The Last of Us, video oyunları tarihinde en beğenilen oyunlardan biri haline gelmiştir."
  },
  {
    id: "thelastofus2",
    title: "The Last Of Us Part II",
    genre: "Hayatta Kalma",
    year: 2020,
    image: "Fotoğraflar/thelastofus2.jpg",
    description: "The Last of Us Part II, Naughty Dog tarafından geliştirilen ve 2020 yılında yayımlanan aksiyon-macera oyunudur. İlk oyunun devamı olarak, Ellie'nin, yaşadığı travmalarla başa çıkmaya çalışırken ve intikam peşinde koşarken yaşadığı zorlu süreçleri takip eder. Oyun, daha geniş bir açık dünya, gelişmiş savaş mekanikleri ve derinlemesine bir hikâyeye sahiptir. The Last of Us Part II, güçlü duygusal anlar, zorlayıcı seçimler ve karmaşık karakterlerle, video oyunlarının anlatabileceği en derin hikayelerden birini sunar."
  },
  {
    id: "justcause",
    title: "Just Cause",
    genre: "Açık Dünya",
    year: 2006,
    image: "Fotoğraflar/justcause.jpg",
    description: "Just Cause, Avalanche Studios tarafından geliştirilen ve 2006 yılında yayımlanan bir aksiyon-macera oyunudur. Oyuncular, Rico Rodriguez adlı bir ajanı kontrol ederek, diktatörlükle yönetilen bir tropikal adada özgürlük mücadelesi verir. Oyun, geniş açık dünyası, yıkılabilir çevresi ve çılgın aksiyon sahneleriyle dikkat çeker. Just Cause, dinamik oynanış ve yaratıcı yıkım ile oyunculara büyük bir özgürlük sunar."
  },
  {
    id: "justcause2",
    title: "Just Cause 2",
    genre: "Açık Dünya",
    year: 2010,
    image: "Fotoğraflar/justcause2.jpg",
    description: "Just Cause 2, Avalanche Studios tarafından geliştirilen ve 2010 yılında yayımlanan açık dünya aksiyon oyunudur. İlk oyunun devamı olan bu oyun, Rico Rodriguez’in görevleri doğrultusunda, devasa bir açık dünyada, diktatörlükle yönetilen Panau adasında hükümetin işlerini bozma mücadelesini konu alır. Yıkılabilir çevreler, geniş keşif alanları, araç kullanma özgürlüğü ve zorlu görevlerle, Just Cause 2 aksiyon dolu bir deneyim sunar."
  },
  {
    id: "justcause3",
    title: "Just Cause 3",
    genre: "Açık Dünya",
    year: 2015,
    image: "Fotoğraflar/justcause3.jpg",
    description: "Just Cause 3, Avalanche Studios tarafından geliştirilen ve 2015 yılında yayımlanan bir aksiyon-macera oyunudur. Rico Rodriguez, Just Cause 2’deki görevlerinin ardından, doğduğu adaya geri döner ve burada kendi halkını özgürleştirmeye çalışır. Oyun, daha büyük bir açık dünya, gelişmiş yıkım mekanikleri ve daha fazla araç özgürlüğü sunar. Yıkılabilir yapılar, helikopterler, uçaklar, araçlar ve daha fazlası ile aksiyon dolu bir deneyim sunar."
  },
  {
    id: "justcause4",
    title: "Just Cause 4",
    genre: "Açık Dünya",
    year: 2018,
    image: "Fotoğraflar/justcause4.jpg",
    description: "Just Cause 4, Avalanche Studios tarafından geliştirilen ve 2018 yılında yayımlanan bir aksiyon-macera oyunudur. Rico Rodriguez, eski düşmanları ve yeni tehlikelerle mücadele etmek için Solis adasına gelir. Bu sürüm, daha büyük ve daha detaylı bir açık dünya haritası, yeni hava ve yer koşulları (fırtınalar ve kasırgalar gibi) ve gelişmiş araç mekanikleri sunar. Oyuncular, yıkıcı güçlerle düşmanları alt ederken, büyük keşif alanlarında özgürce hareket ederler."
  },
  {
    id: "cod",
    title: "Call of Duty: Modern Warfare 1",
    genre: "Aksiyon",
    year: 2007,
    image: "Fotoğraflar/cod.jpg",
    description: "Call of Duty: Modern Warfare (COD: MW1), Infinity Ward tarafından geliştirilen ve 2007 yılında yayımlanan birinci şahıs nişancı oyunudur. Oyun, modern askeri çatışmaların merkezine odaklanarak, oyuncuları dünya çapında tehlikeli bir terörist tehdidiyle mücadeleye sokar. İleri düzey grafikler, sinematik anlatım tarzı ve sürükleyici hikayesiyle büyük bir etki yaratmıştır. Modern Warfare 1, çok oyunculu modları ve yeni özellikleriyle, nişancı oyunlarına yeni bir soluk getirmiştir."
  }, 
  {
    id: "cod2",
    title: "Call of Duty: Modern Warfare 2",
    genre: "Aksiyon",
    year: 2009,
    image: "Fotoğraflar/cod2.jpg",
    description: "Call of Duty: Modern Warfare 2, Infinity Ward tarafından geliştirilen ve 2009 yılında yayımlanan birinci şahıs nişancı oyunudur. Modern Warfare 2, ilk oyunun devamı olup, dünya çapında terörizmle mücadele ederken yeni karakterlerle ve daha büyük bir hikâyeyle oyuncuları aksiyonun içine çeker. Yeni silahlar, çok oyunculu modlar ve gelişmiş yapay zeka, MW2'yi dönemin en popüler oyunlarından biri yapmıştır. Oyunun sinematik sahneleri ve hikayesi, oyunculara unutulmaz bir deneyim sunar."
  },
  {
    id: "cod3",
    title: "Call of Duty: Modern Warfare 3",
    genre: "Aksiyon",
    year: 2011,
    image: "Fotoğraflar/cod3.jpg",
    description: "Call of Duty: Modern Warfare 3, Infinity Ward ve Sledgehammer Games tarafından geliştirilen ve 2011 yılında yayımlanan birinci şahıs nişancı oyunudur. Oyun, Modern Warfare 2'nin bıraktığı yerden devam eder ve dünya çapında devam eden çatışmaları ve terörist saldırıları konu alır. Gelişmiş savaş teknolojileri, yeni çok oyunculu modlar ve yeni karakterler ile aksiyon daha da hızlanır. MW3, büyük bir final sunarak, serinin en heyecan verici oyunlarından biri olmuştur."
  },
  {
    id: "cod4",
    title: "Call of Duty: Modern Warfare 4",
    genre: "Aksiyon",
    year: 2019,
    image: "Fotoğraflar/cod4.jpg",
    description: "Call of Duty: Modern Warfare 4, Infinity Ward tarafından geliştirilen ve 2019 yılında yayımlanan birinci şahıs nişancı oyunudur. Modern Warfare 4 (2019), serinin reboot'u olarak kabul edilir ve oyuncuları modern askeri çatışmaların içine çeker. Gerçekçi grafikler, sinematik hikaye anlatımı, yeni karakterler ve gelişmiş çok oyunculu modları ile dikkat çeker. Bu oyun, özellikle multiplayer modu ve Warzone adlı battle royale modunun eklenmesiyle büyük ilgi görmüştür. MW4, yeni nesil teknolojilerle donatılmış, derinlemesine bir aksiyon deneyimi sunar."
  },
  {
    id: "commandandconquers",
    title: "Command & Conquer: Generals",
    genre: "Strateji",
    year: 2003,
    image: "Fotoğraflar/commandandconquers.jpg",
    description: "Command & Conquer: Generals, EA Games tarafından geliştirilen ve 2003 yılında yayımlanan gerçek zamanlı strateji (RTS) oyunudur. Bu oyun, Command & Conquer serisinin bir parçası olup, modern savaş teknolojilerine dayalı olarak üç farklı güç arasında geçer: Amerika Birleşik Devletleri, Çin ve Global Liberation Army (GLA). Oyuncular, seçtikleri tarafın liderliğini üstlenerek, kaynak toplama, üssünü inşa etme ve stratejik savaşlar yaparak düşmanları yok etmeye çalışırlar. Gelişmiş 3D grafikleri, farklı birimler ve stratejik derinliğiyle Generals, gerçek zamanlı strateji oyunları arasında önemli bir yere sahiptir. Yeni ünite çeşitliliği, teknolojik yenilikler ve etkileyici çok oyunculu modu ile öne çıkar."
  },
  {
    id: "portal",
    title: "Portal 1",
    genre: "Strateji",
    year: 2007,
    image: "Fotoğraflar/portal.jpg",
    description: "Portal, Valve tarafından geliştirilen birinci şahıs bulmaca oyunudur. Oyun, oyuncuları Aperture Science adlı bir araştırma laboratuvarında mahsur kalan bir karakter olan Chell olarak kontrol eder. Oyunun en belirgin özelliği, (portal) adı verilen özel cihazla mekanik bulmacaları çözme yeteneğidir. Bu cihaz, iki portal açarak, oyuncunun bir noktadan diğerine geçmesini sağlar. Zeka ve fizik tabanlı bulmacalarla dolu bu oyun, hem şaşırtıcı hem de eğlenceli bir deneyim sunar."
  },
  {
    id: "portal2",
    title: "Portal 2",
    genre: "Strateji",
    year: 2011,
    image: "Fotoğraflar/portal2.jpg",
    description: "Portal 2, Valve tarafından geliştirilen ve 2011 yılında yayımlanan birinci şahıs bulmaca oyunudur. Portal'ın devamı olan bu oyun, daha büyük bir hikâye, yeni mekanikler ve daha fazla karakterle doludur. Çeşitli portal türleri ve yeni öğelerle, bulmacalar daha da karmaşık hâle gelir. Oyun, derinlemesine bir anlatıma sahipken, karakterler arasında geçen diyaloglarla da oyuncuları güldürmeyi başarır. Portal 2, zekâ dolu bulmacalar ve muazzam atmosferiyle büyük beğeni topladı."
  },
  {
    id: "prototype",
    title: "Prototype 1",
    genre: "Açık Dünya",
    year: 2009,
    image: "Fotoğraflar/prototype.jpg",
    description: "Prototype, Radical Entertainment tarafından geliştirilen ve 2009 yılında yayımlanan açık dünya aksiyon oyunudur. Oyuncular, Alex Mercer adlı bir karakteri kontrol eder ve New York City'deki biyolojik bir felaketi araştırırken, üstlendiği mutant güçleriyle kendini keşfeder. Gerçekçi fizik ve aksiyon dolu dövüş sistemleriyle dikkat çeken oyun, Alex'in mutant güçlerini kullanarak şehri keşfetmesini ve düşmanları alt etmesini konu alır. Hızlı hareket etme, büyük yıkım yaratma ve devasa bir şehirde özgürce gezme imkanı sunar."
  },
  {
    id: "prototype2",
    title: "Prototype 2",
    genre: "Açık Dünya",
    year: 2012,
    image: "Fotoğraflar/prototype2.jpg",
    description: "Prototype 2, Radical Entertainment tarafından geliştirilen ve 2012 yılında yayımlanan açık dünya aksiyon oyunudur. Bu oyunda, Alex Mercer'ın yerine James Heller adlı yeni bir karakteri kontrol edersiniz. Heller, eski kahraman Alex Mercer’ın mutant virüsünün etkisiyle daha da güçlenmiş bir karakterdir. Prototype 2, önceki oyunun dövüş mekaniğini geliştirir ve yeni mutasyonlar ekler. Hikâye, şehrin farklı bölgelerinde keşif yaparken, güç ve intikam arayışı üzerine kuruludur."
  },
  {
    id: "oxygennotincluded",
    title: "Oxygen Not İncluded",
    genre: "Sandbox",
    year: 2019,
    image: "Fotoğraflar/oxygennotincluded.jpg",
    description: "Oxygen Not Included, Klei Entertainment tarafından geliştirilen bir hayatta kalma simülasyon oyunudur. Oyuncular, bir grup astronotun, bir uzay kolonisini kurmak ve hayatta kalmak için mücadele etmesini yönetir. Koloninin temel ihtiyaçlarını karşılamak, oksijen üretmek, kaynakları yönetmek ve yapıları inşa etmek, oyuncuların başlıca görevlerindendir. Oyun, zekâ gerektiren bulmacalar, yönetim ve kaynak yönetimi unsurlarıyla oyunculara zorlu ama keyifli bir deneyim sunar. Çeşitli biyomlar, yaratıcı yapılar ve derinlemesine mekanikler, Oxygen Not Included'ı hayatta kalma simülasyonları arasında öne çıkarır."
  },
  {
    id: "heartsofiron4",
    title: "Hearts Of Iron IV",
    genre: "Strateji",
    year: 2016,
    image: "Fotoğraflar/heartsofiron4.jpg",
    description: "Hearts of Iron IV, Paradox Interactive tarafından geliştirilen ve 2016 yılında yayımlanan bir strateji oyunudur. Oyun, II. Dünya Savaşı'nda yer alan devletlerin lideri olarak, askeri strateji ve diplomasi kullanarak savaşın gidişatını değiştirmeye çalışmanızı sağlar. Ülke yönetimi, savaş planları, kaynak yönetimi ve ittifaklar kurma gibi unsurlarla, derin stratejik kararlar almanız gerekir. Her oyun, farklı taktikler ve senaryolarla şekillenir, bu da yüksek tekrar oynanabilirlik sağlar."
  },
  {
    id: "unturned",
    title: "Unturned",
    genre: "Hayatta Kalma",
    year: 2014,
    image: "Fotoğraflar/unturned.jpg",
    description: "Unturned, Nelson Sexton tarafından geliştirilen ve 2014 yılında yayımlanan bir hayatta kalma oyunudur. Zombi kıyameti sonrası bir dünyada, oyuncular hayatta kalmaya çalışırken, kaynakları toplar, barınaklar inşa eder ve düşmanlarla mücadele eder. Grafiksel olarak basit bir tarza sahip olsa da, Unturned dinamik bir çok oyunculu deneyim sunar. Oyun, zombi salgınından kaçmak ve hayatta kalmak için strateji, işbirliği ve kaynak yönetimi gerektirir."
  },
  {
    id: "dyinglight",
    title: "Dying Light",
    genre: "Hayatta Kalma",
    year: 2015,
    image: "Fotoğraflar/dyinglight.jpg",
    description: "Dying Light, Techland tarafından geliştirilen ve 2015 yılında yayımlanan birinci şahıs hayatta kalma korku oyunudur. Oyun, bir zombi kıyameti sonrası hayatta kalmaya çalışan Kyle Crane adlı bir karakteri takip eder. Dinamik parkur hareketleri ve gece gündüz döngüsü, oyunun temel özelliklerindendir. Gündüzleri keşif yapabilirken, geceleri zombiler daha tehlikeli hale gelir ve hayatta kalma mücadelesi daha da zorlu hale gelir. Zengin açık dünya, parkur ve dövüş sistemiyle dikkat çeker."
  },
  {
    id: "dyinglight2",
    title: "Dying Light 2",
    genre: "Hayatta Kalma",
    year: 2022,
    image: "Fotoğraflar/dyinglight2.jpg",
    description: "Dying Light 2, Techland tarafından geliştirilen ve 2022 yılında yayımlanan aksiyon hayatta kalma oyunudur. İlk oyunun devamı olan bu yapım, parkur sistemini geliştirerek, oyunculara daha büyük bir açık dünya ve daha derin bir hikâye sunar. Ana karakter Aiden Caldwell, zombi kıyametinin ardından hayatta kalan son insanlardan biri olarak, eski kayıp kardeşini aramak için bir şehirdeki keşfiyle mücadele eder. Oyun, moral seçimler, zorlu savaşlar ve farklı sonlara yol açan etkileşimler sunar."
  },
  {
    id: "untildawn",
    title: "Until Dawn",
    genre: "Korku",
    year: 2015,
    image: "Fotoğraflar/untildawn.jpg",
    description: "Until Dawn, Supermassive Games tarafından geliştirilen ve 2015 yılında yayımlanan bir korku gerilim oyunudur. Oyun, sekiz genç arkadaşın, bir dağda terkedilmiş bir malikanede korkunç bir gecede hayatta kalmaya çalıştığı hikâyeyi anlatır. Oyuncular, karakterlerin hayatta kalmasını veya ölmesini belirleyen çeşitli seçimler yaparlar. Until Dawn, interaktif hikaye anlatımı, korkutucu atmosfer ve sürükleyici karakter dinamikleri ile dikkat çeker. Seçimlerin oyun dünyasında doğrudan etkiler yaratması, oyuncuları farklı deneyimler yaşamaya davet eder."
  },
  {
    id: "oblivion",
    title: "The Elder Scrolls IV: Oblivion",
    genre: "RPG",
    year: 2006,
    image: "Fotoğraflar/oblivion.jpg",
    description: "The Elder Scrolls IV: Oblivion, Bethesda Game Studios tarafından geliştirilen ve 2006 yılında yayımlanan açık dünya rol yapma oyunudur. Oyun, Tamriel kıtasındaki Cyrodiil bölgesinde, Oblivion adı verilen bir boyutun kapılarının açılmasını durdurmaya çalışan bir kahramanı takip eder. Oyuncular, karakterlerini özelleştirip, devasa bir dünyada keşif yaparken, ana hikâyenin yanı sıra birçok yan görevde de yer alır. Gelişmiş diyalog sistemi, zengin karakter gelişimi ve açık dünya tasarımı ile unutulmaz bir deneyim sunar."
  },
  {
    id: "rust",
    title: "Rust",
    genre: "Hayatta Kalma",
    year: 2013,
    image: "Fotoğraflar/rust.jpg",
    description: "Rust, Facepunch Studios tarafından geliştirilen ve 2013 yılında yayımlanan bir hayatta kalma oyunudur. Oyuncular, bir adada çıplak olarak başlar ve hayatta kalabilmek için kaynakları toplayarak barınaklar inşa etmeli, yiyecek ve su temin etmelidir. Diğer oyuncularla etkileşime girerek, ticaret yapabilir veya savaşabilirsiniz. Yıkılabilir yapılar, zorlu çevre koşulları ve rekabetçi PvP deneyimi ile, Rust, oyunculara hem strateji hem de beceri gerektiren bir hayatta kalma mücadelesi sunar."
  },
  {
    id: "hades1",
    title: "Hades",
    genre: "Aksiyon",
    year: 2020,
    image: "Fotoğraflar/hades1.jpg",
    description: "Hades, Supergiant Games tarafından geliştirilen ve 2020 yılında yayımlanan bir aksiyon roguelike oyunudur. Oyuncular, yeraltı dünyasında Hades'in oğlu Zagreus olarak, babasının hükümetine karşı isyan ederken, her defasında farklı bir zindanı keşfeder. Oyunun dövüş mekanikleri, hızlı aksiyon ve karakter gelişimi üzerine yoğunlaşırken, her ölüm yeni bir başlangıç olarak, oyunculara zorlu ama tatmin edici bir deneyim sunar."
  },

  {
    id: "hades2",
    title: "Hades 2",
    genre: "Aksiyon",
    year: 2023,
    image: "Fotoğraflar/hades2.jpg",
    description: "Hades 2, Supergiant Games tarafından geliştirilen ve 2023 yılında yayımlanan aksiyon roguelike oyunudur. İlk oyunun devamı olarak, oyuncular, yeraltı dünyasında yeni bir karakter olan Melinoe’yi kontrol eder. Babası Hades'in hükümetine karşı yeniden başlatılan isyan, yeni dövüş mekanikleri, karakterler ve derinlemesine hikâye sunar. Yeni güçlü büyüler ve ölüm döngüsü, her oyunun sonrasında yeni keşifler için fırsatlar yaratır."
  },
  {
    id: "borderlands1",
    title: "Borderlands",
    genre: "Aksiyon",
    year: 2009,
    image: "Fotoğraflar/borderlands1.jpg",
    description: "Borderlands, Gearbox Software tarafından geliştirilen ve 2009 yılında yayımlanan birinci şahıs nişancı, RPG karışımı bir aksiyon oyunudur. Pandora adlı çöl gezegeninde geçen oyun, oyuncuları, farklı karakter sınıflarından birini seçerek görevler yapmaya, düşmanları yok etmeye ve loot (ganimet) toplayarak karakterlerini geliştirmeye davet eder. Akılcı ve esprili diyalogları, gelişmiş silah çeşitliliği ve renkli grafik tarzı ile büyük ilgi görmüştür."
  },
  {
    id: "borderlands2",
    title: "Borderlands 2",
    genre: "Aksiyon",
    year: 2012,
    image: "Fotoğraflar/borderlands2.jpg",
    description: "Borderlands 2, Gearbox Software tarafından geliştirilen ve 2012 yılında yayımlanan aksiyon, RPG öğeleri barındıran birinci şahıs nişancı oyunudur. Pandora gezegenindeki çöl ortamlarında geçen oyun, önceki oyunun hikâyesini genişleterek, yeni karakterler, yeni düşmanlar ve yeni silahlarla oyunculara zenginleştirilmiş bir deneyim sunar. Daha güçlü diyaloglar, zenginleştirilmiş hikâye anlatımı ve kooperatif çok oyunculu modları ile daha büyük bir aksiyon deneyimi sağlar."
  },
  {
    id: "borderlands3",
    title: "Borderlands 3",
    genre: "Aksiyon",
    year: 2019,
    image: "Fotoğraflar/borderlands3.jpg",
    description: "Borderlands 3, Gearbox Software tarafından geliştirilen ve 2019 yılında yayımlanan aksiyon, RPG öğeleri barındıran birinci şahıs nişancı oyunudur. Pandora gezegeninin devamı olarak, yeni karakterler ve yeni mekaniklerle oyunculara daha geniş bir açık dünya sunar. Hikâye, çılgın yeni düşmanlar, bol miktarda loot ve daha büyük kooperatif oyun seçenekleriyle sürükleyici bir deneyim sunar. Aksiyonu ve diyaloglarıyla serinin en eğlenceli bölümlerinden biridir."
  },
  {
    id: "thecabinfactory",
    title: "The Cabin Factory",
    genre: "Korku",
    year: 2024,
    image: "Fotoğraflar/thecabinfactory.jpg",
    description: "The Cabin Factory, International Cat Studios tarafından geliştirilen ve Future Friends Games tarafından yayımlanan birinci şahıs korku simülasyon oyunudur. Oyuncular, bir kabin fabrikasında çalışan yeni bir denetçi olarak, banttan geçen kabinleri inceleyip, içlerinde herhangi bir 'hareket' olup olmadığını kontrol ederler. Eğer bir kabinde anormallik tespit edilirse, 'tehlike' butonuna basarak dışarı çıkmaları gerekir. Oyun, tekrarlayan mekânlar ve psikolojik korku unsurlarıyla, dikkatli gözlem ve hızlı karar verme yeteneklerini test eder. Unreal Engine 5 ile geliştirilen oyun, atmosferik sesler ve görsellerle gerilim dolu bir deneyim sunar."
  },
  {
    id: "deadbydaylight",
    title: "Dead by Daylight",
    genre: "Korku",
    year: 2016,
    image: "Fotoğraflar/deadbydaylight.jpg",
    description: "Dead by Daylight, Behaviour Interactive tarafından geliştirilen ve 2016 yılında yayımlanan asimetrik çok oyunculu korku oyunudur. Oyun, dört hayatta kalan oyuncunun, tek bir oyuncu tarafından kontrol edilen katil ile hayatta kalma mücadelesi verdiği bir korku deneyimi sunar. Hayatta kalanlar, çeşitli tuzaklardan kaçıp, haritada bulunan jeneratörleri tamir etmeye çalışırken, katil onları avlamaya çalışır. Her katilin kendine özgü yetenekleri ve oynanış tarzı vardır, bu da oyunun sürekli olarak farklı deneyimler sunmasını sağlar. Dead by Daylight, sürekli gerilim, strateji ve takım çalışması gerektiren bir oyun olarak korku severler için etkileyici bir deneyim sunar."
} 
]