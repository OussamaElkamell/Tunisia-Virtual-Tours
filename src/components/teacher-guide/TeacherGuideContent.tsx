import { memo } from 'react';

interface ImagePageProps {
  src: string;
  alt: string;
}

const ImagePage = memo(({ src, alt }: ImagePageProps) => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <img 
      src={src} 
      alt={alt} 
      className="max-w-full max-h-full object-contain" 
      loading="lazy"
      decoding="async"
    />
  </div>
));

ImagePage.displayName = "ImagePage";

export const GUIDE_PAGES = [
  {
    id: 'cover',
    content: <ImagePage src="/uploads/77c96060-16f3-4d48-aadc-856992fd528f.png" alt="غلاف الدليل" />,
  },
  {
    id: 'intro',
    content: <ImagePage src="/uploads/d338a933-f593-4572-9ae6-8179838646c2.png" alt="مقدمة الدليل" />,
  },
  {
    id: 'lessons-intro',
    content: <ImagePage src="/uploads/88929436-4d79-4da3-8936-e3f9f3846cc2.png" alt="مقدمة الدروس" />,
  },
  {
    id: 'rural-lesson-1',
    content: <ImagePage src="/uploads/42b80745-1a80-4ba4-955b-b63515da0ea9.png" alt="الدرس 1: المشهد الريفي" />,
  },
  {
    id: 'rural-observation',
    content: <ImagePage src="/uploads/fe3d7b6f-16f9-4917-9d84-65f03ddb9f0b.png" alt="بطاقة ملاحظة ميدانية" />,
  },
  {
    id: 'rural-activities-1',
    content: <ImagePage src="/uploads/f4965e99-a7d5-4852-912b-5e7f19a94fbf.png" alt="الأنشطة المقررة أثناء الرحلة 1" />,
  },
  {
    id: 'rural-activities-2',
    content: <ImagePage src="/uploads/8429d6a6-a1c7-43b3-9503-91ad0a7f1a74.png" alt="الأنشطة المقررة أثناء الرحلة 2" />,
  },
  {
    id: 'rural-after-activities',
    content: <ImagePage src="/uploads/b725fa7e-7c8a-4bda-b01b-707a09e22602.png" alt="الأنشطة المقررة بعد الرحلة" />,
  },
  {
    id: 'rural-report',
    content: <ImagePage src="/uploads/d100ef42-0c60-498b-a123-132398d2107d.png" alt="إعداد تقرير جماعي" />,
  },
  {
    id: 'rural-places-1',
    content: <ImagePage src="/uploads/14eb597f-9c8e-4bfb-90d1-f5bb8d511c94.png" alt="أماكن مقترحة 1" />,
  },
  {
    id: 'rural-places-2',
    content: <ImagePage src="/uploads/37c597b6-3e58-45df-adfe-637294b395a5.png" alt="أماكن مقترحة 2" />,
  },
  {
    id: 'rural-places-3',
    content: <ImagePage src="/uploads/bc4d96ec-3a18-418e-9a31-dbb25666996d.png" alt="أماكن مقترحة 3" />,
  },
  {
    id: 'urban-lesson',
    content: <ImagePage src="/uploads/d7f038e0-295a-4471-b552-5d9a106cbdef.png" alt="الدرس 2: المشهد الحضري" />,
  },
  {
    id: 'urban-observation',
    content: <ImagePage src="/uploads/6de5bf2a-4afd-4a1e-bebb-6d3b445fc749.png" alt="بطاقة ملاحظة حضرية" />,
  },
  {
    id: 'urban-activities-1',
    content: <ImagePage src="/uploads/447e496a-acdd-422f-b1e5-241fb5b5ccab.png" alt="الأنشطة المقررة في المدينة 1" />,
  },
  {
    id: 'urban-activities-2',
    content: <ImagePage src="/uploads/f8129dc8-5900-4cb6-8996-1fd13c515b26.png" alt="الأنشطة المقررة في المدينة 2" />,
  },
  {
    id: 'urban-after',
    content: <ImagePage src="/uploads/5d1458d7-6763-454f-adf7-97f0b4b59391.png" alt="الأنشطة بعد الزيارة الحضرية 1" />,
  },
  {
    id: 'urban-report',
    content: <ImagePage src="/uploads/4cd2df7d-1ab2-466d-a197-a44e47070b7a.png" alt="الأنشطة بعد الزيارة الحضرية 2" />,
  },
  {
    id: 'belvedere-park',
    content: <ImagePage src="/uploads/6a9e3ab3-9f9e-4820-bed8-9e07d027fda0.png" alt="حديقة البلفيدير" />,
  },
  {
    id: 'activities-1',
    content: <ImagePage src="/uploads/43aede4d-5f41-4aac-98b7-51e1c67d1ef8.png" alt="الأنشطة المقررة بعد الرحلة 1" />,
  },
  {
    id: 'activities-2',
    content: <ImagePage src="/uploads/38126db0-328c-4fc5-8a79-9479f279d3dd.png" alt="الأنشطة المقررة بعد الرحلة 2" />,
  },
  {
    id: 'activities-3',
    content: <ImagePage src="/uploads/5d5f0a06-31e0-44d9-83b2-b2de9bedef79.png" alt="الأنشطة المقررة بعد الرحلة 3" />,
  },
  {
    id: 'north-locations',
    content: <ImagePage src="/uploads/abfc16b7-e906-4bd4-b666-bdccb3129e24.png" alt="أماكن مقترحة للزيارة - الشمال 1" />,
  },
  {
    id: 'north-locations-2',
    content: <ImagePage src="/uploads/f0f5ff90-a2ee-43e6-ab11-f40ce23be58b.png" alt="أماكن مقترحة للزيارة - الشمال 2" />,
  },
  {
    id: 'lesson-3-intro',
    content: <ImagePage src="/uploads/bd025589-8075-4e6d-a96e-716a6991d1b8.png" alt="الدرس 3: تونس العاصمة - تصميم المدينة" />,
  },
  {
    id: 'field-observation-1',
    content: <ImagePage src="/uploads/1fa984dc-7b62-417a-82aa-124e4861df88.png" alt="بطاقة ملاحظة ميدانية - المدينة العتيقة" />,
  },
  {
    id: 'field-observation-2',
    content: <ImagePage src="/uploads/bb202223-a7bd-4278-a8a9-36a7fce4bc54.png" alt="بطاقة ملاحظة ميدانية - المدينة الحديثة" />,
  },
  {
    id: 'during-trip',
    content: <ImagePage src="/uploads/ace6991f-7a80-48d2-9e3a-2d215c6359e4.png" alt="الأنشطة المقررة أثناء الرحلة" />,
  },
  {
    id: 'after-trip-1',
    content: <ImagePage src="/uploads/fd26f34a-ca24-44df-807d-d249a1049a00.png" alt="الأنشطة المقررة بعد الرحلة - التذكر" />,
  },
  {
    id: 'after-trip-2',
    content: <ImagePage src="/uploads/d69999dd-3c79-470a-8641-76e3a21728ba.png" alt="الأنشطة المقررة بعد الرحلة - التقرير" />,
  },
  {
    id: 'suggested-places',
    content: <ImagePage src="/uploads/b2361950-7bb5-4755-8e3e-2b940f373940.png" alt="أماكن مقترحة للزيارة" />,
  },
  {
    id: 'historic-sites',
    content: <ImagePage src="/uploads/e29d7ec5-639f-42eb-b7fa-210f7f08b32a.png" alt="المواقع التاريخية" />,
  }
];

export default GUIDE_PAGES;
