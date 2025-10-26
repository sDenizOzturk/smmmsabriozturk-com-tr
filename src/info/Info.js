import self from "../img/self.png";
import office1 from "../img/office1.jpg";
import office2 from "../img/office2.jpg";
import office3 from "../img/office3.jpg";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgba(1,51,130,0.6)", "rgb(0,23,255)"];

//rgb(0,255,164)
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

const startYear = 2006;
const experienceYears = new Date().getFullYear() - startYear;

export const info = {
  firstName: "Sabri",
  lastName: "Öztürk",
  fullName: "SMMM Sabri ÖZTÜRK",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "SMMM",
  summary: [
    `${startYear} yılında, bir üniversite öğrencisi iken tam zamanlı çalışan olarak
          adım attığım bu sektörde, geçen kesintisiz ${experienceYears}  yılın ardından edindiğim
          tecrübelerimle, Öztürk SMMM ofisinde kurucu ortak & mali müşavir
          olarak çalışmaktayım.`,
    `Antalya'nın tüm merkez ilçelerinin yanı sıra, diğer ilçelere ve çevre
          illere dağılmış, KOBİ'lerden yüzlerce çalışanı olan büyük firmalara
          kadar geniş bir yelpazede, 150’yi aşkın firmaya hizmet
          vermekteyiz.`,
  ],

  socials: [
    {
      link: "https://wa.me/905559678602",
      icon: "fa fa-whatsapp",
      label: "whatsapp",
    },
    {
      link: "https://www.facebook.com/sabri.ozturk.969",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/smmm_sabri_ozturk",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://linkedin.com/in/sabri-öztürk-8b196522b",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "mailto:ozturk07smmm@hotmail.com",
      icon: "fa fa-envelope",
      label: "mail",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],

  services: [
    {
      name: "Şirket Kuruluş ve Devir İşlemleri",
      details: `Yeni şirket kurulumları, unvan veya adres değişiklikleri, hisse devri
          ve tasfiye süreçlerinde tüm yasal adımların sorunsuz ilerlemesi
          sağlanır. Gerekli belgeler hazırlanır, Ticaret Sicil işlemleri
          eksiksiz olarak takip edilir.`,
    },
    {
      name: "Vergi Beyannameleri",
      details: `Firmaların aylık, üç aylık ve yıllık vergi beyannameleri; gelir,
          kurumlar, KDV, muhtasar ve damga vergisi dâhil olmak üzere eksiksiz
          şekilde hazırlanır, kontrol edilir ve Gelir İdaresi Başkanlığı
          sistemine zamanında gönderilir.`,
    },
    {
      name: "Defter Tutma ve Kayıt İşlemleri",
      details: `Şirketinizin tüm mali hareketleri, yürürlükteki Vergi Usul Kanunu ve
          Tek Düzen Hesap Planı çerçevesinde kayıt altına alınır. Gelir, gider,
          kasa, banka ve stok işlemleri düzenli olarak takip edilerek finansal
          tabloların güvenilirliği sağlanır.`,
    },
    {
      name: "Bordro / SGK İşlemleri",
      details: `Personel bordrolarının hazırlanması, SGK ve İşkur bildirgelerinin
          düzenlenmesi, işe giriş–çıkış bildirimleri ve kıdem–ihbar
          hesaplamaları dâhil olmak üzere tüm insan kaynakları süreçleri
          mevzuata uygun şekilde yürütülür.`,
    },
    {
      name: "E-Fatura / E-Defter Danışmanlığı",
      details: `Firmaların e-dönüşüm süreçlerine geçişi sırasında teknik kurulum,
          entegrasyon, test ve mevzuat uyumu adımlarında tam danışmanlık
          sağlanır. Kullanıcılar için kolay ve sorunsuz bir e-fatura/e-defter
          deneyimi hedeflenir.`,
    },
    {
      name: "Mali Danışmanlık ve Denetim",
      details: `İşletmenizin mevcut mali yapısı analiz edilerek vergi planlaması,
          mevzuat uyumu ve finansal risklerin azaltılmasına yönelik stratejik
          danışmanlık hizmeti sunulur. Düzenli denetimler sayesinde finansal
          süreçlerin sürdürülebilirliği sağlanır.`,
    },
    {
      name: "Bilirkişilik Hizmetleri",
      details: `Mahkemeler, savcılıklar ve resmi kurumlar nezdinde finansal konularda
          bilirkişi olarak rapor hazırlanması, mali incelemelerin yürütülmesi ve
          objektif değerlendirmelerin yapılması sağlanır. Bilirkişilik
          hizmetleri, uzmanlık ve tarafsızlık ilkesiyle sunulur.`,
    },
  ],
  office: {
    map: {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.027645576662!2d30.6012391!3d37.0237143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38bbff04d8593%3A0xba11928fb4d89045!2zTcOtdHLDs3IgU01NTSBIxLBhU5VU0UgSMLDtcSxRUxMRXLsSw!5e0!3m2!1str!2str!4v1698365400000!5m2!1str!2str",
      title: "Öztürk SMMM Ofis Haritası",
    },
    address: [
      "Yeniköy, Atatürk Cd. Belediye İş Merkezi",
      "No: 454/308, Döşemealtı/Antalya",
    ],
    workingHours: ["Pazartesi–Cuma: 09:00–18:00", "Cumartesi: 09:00–13:00"],
    socials: [
      {
        link: "https://wa.me/905424275314",
        icon: "fa fa-whatsapp",
        label: "whatsapp",
      },
      {
        link: "mailto:ozturk07smmm@hotmail.com",
        icon: "fa fa-envelope",
        label: "mail",
      },
    ],
    images: [office1, office2, office3],
  },
};
