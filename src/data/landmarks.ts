
export interface Landmark {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  position: {
    x: number;
    y: number;
  };
  coordinates: {
    lng: number;
    lat: number;
  };
  category: "historical" | "cultural" | "nature";
  funFacts: string[];
}

export const landmarks: Landmark[] = [
  {
    id: "chott-el-jerid",
    name: "شط الجريد",
    shortDescription: "أكبر مسطح ملحي في الصحراء الكبرى",
    fullDescription: "شط الجريد هو بحيرة ملحية موسمية تقع في جنوب غرب تونس. يعتبر أكبر مسطح ملحي في الصحراء الكبرى، ويمتد على مساحة تقدر بـ 7,000 كيلومتر مربع. يتميز بمناظره الطبيعية الخلابة وألوانه المتغيرة حسب الفصول.",
    images: [
      "https://www.alchourouk.com/sites/default/files/article/rtr.jpg"
    ],
    position: {
      x: 25,
      y: 75
    },
    coordinates: {
      lng: 8.4213,
      lat: 33.7000
    },
    category: "nature",
    funFacts: [
      "يظهر في بعض الأحيان السراب بسبب ارتفاع درجات الحرارة",
      "يستخرج منه الملح بطرق تقليدية",
      "يتغير لونه حسب الفصول من الأبيض إلى الوردي"
    ]
  },
  {
    id: "ichkeul",
    name: "بحيرة إشكل",
    shortDescription: "بحيرة طبيعية ومحمية وطنية",
    fullDescription: "تقع بحيرة إشكل في شمال تونس وهي جزء من الحديقة الوطنية إشكل. تعتبر موقعًا مهمًا للطيور المهاجرة وتتميز بنظامها البيئي الفريد. البحيرة مدرجة ضمن قائمة التراث العالمي لليونسكو ومحمية رامسار للأراضي الرطبة.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0Ls0Vr1BZ3FyrMiU9xoGfG9QjyrR_O3k2w&s"
    ],
    position: {
      x: 65,
      y: 15
    },
    coordinates: {
      lng: 9.6303,
      lat: 37.1833
    },
    category: "nature",
    funFacts: [
      "تعتبر محطة مهمة للطيور المهاجرة",
      "تتغير ملوحة المياه فيها بين الصيف والشتاء",
      "تحيط بها جبال إشكل الشهيرة"
    ]
  },
  {
    id: "mount-chaambi",
    name: "جبل الشعانبي",
    shortDescription: "أعلى جبل في تونس",
    fullDescription: "جبل الشعانبي هو أعلى قمة جبلية في تونس، يبلغ ارتفاعه 1544 متر فوق مستوى سطح البحر. يقع في محافظة القصرين في وسط غرب البلاد. يتميز بغطائه النباتي المتنوع وآثاره الجيولوجية المهمة.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyTiu4GHLCLPL9wf__iE7kk2AWhh8sfhDIQ&s"
    ],
    position: {
      x: 35,
      y: 45
    },
    coordinates: {
      lng: 8.6751,
      lat: 35.2123
    },
    category: "nature",
    funFacts: [
      "يبلغ ارتفاعه 1544 متر",
      "يغطيه الثلج في فصل الشتاء",
      "يضم أنواعاً نادرة من النباتات"
    ]
  },
  {
    id: "cap-bon",
    name: "رأس الطيب (كاب بون)",
    shortDescription: "شبه جزيرة في شمال شرق تونس",
    fullDescription: "رأس الطيب هو شبه جزيرة تمتد في البحر الأبيض المتوسط شمال شرق تونس. يتميز بشواطئه الصخرية الجميلة وجباله المطلة على البحر. المنطقة غنية بالغابات والينابيع الطبيعية.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr9piOaT5Kf_EaPhZ2oR3N6J1UGMO37JVA2Q&s"
    ],
    position: {
      x: 75,
      y: 20
    },
    coordinates: {
      lng: 11.0321,
      lat: 36.8425
    },
    category: "nature",
    funFacts: [
      "يعتبر من أهم مناطق زراعة الحمضيات في تونس",
      "يضم العديد من المغارات الطبيعية",
      "يطل على البحر من ثلاث جهات"
    ]
  },
  {
    id: "ain-draham",
    name: "عين دراهم",
    shortDescription: "منطقة جبلية غابية في الشمال الغربي",
    fullDescription: "تقع عين دراهم في أقصى الشمال الغربي لتونس، وتتميز بغاباتها الكثيفة من أشجار البلوط والفلين. تعتبر من أكثر المناطق مطراً في تونس، وتشتهر بجمال طبيعتها وهوائها النقي.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOwZeuZlJCtj16SBcaBr2Fk_WNOjoskC1mg&s"
    ],
    position: {
      x: 45,
      y: 10
    },
    coordinates: {
      lng: 8.6873,
      lat: 36.7833
    },
    category: "nature",
    funFacts: [
      "تتساقط عليها الثلوج في فصل الشتاء",
      "تضم أكبر غابة من أشجار الفلين في تونس",
      "تعتبر من أكثر المناطق مطراً في تونس"
    ]
  }
];
