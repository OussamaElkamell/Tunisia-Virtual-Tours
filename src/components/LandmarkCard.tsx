
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Landmark } from "@/data/landmarks";

interface LandmarkCardProps {
  landmark: Landmark;
}

export function LandmarkCard({ landmark }: LandmarkCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={landmark.images[0]} 
          alt={landmark.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-tunisia-red text-white px-2 py-1 rounded-md text-xs font-[Noto_Kufi_Arabic]">
          {landmark.category === "historical" && "تاريخي"}
          {landmark.category === "cultural" && "ثقافي"}
          {landmark.category === "nature" && "طبيعي"}
        </div>
      </div>
      
      <CardHeader dir="rtl" className="pb-2">
        <CardTitle className="font-[Noto_Kufi_Arabic] text-tunisia-blue">{landmark.name}</CardTitle>
        <CardDescription className="font-[Noto_Kufi_Arabic]">{landmark.shortDescription}</CardDescription>
      </CardHeader>
      
      <CardContent dir="rtl">
        <p className="line-clamp-3 text-gray-700 font-[Noto_Kufi_Arabic]">
          {landmark.fullDescription}
        </p>
      </CardContent>
      
      <CardFooter dir="rtl" className="justify-between">
        <Button asChild variant="outline">
          <Link to={`/landmark/${landmark.id}`} className="font-[Noto_Kufi_Arabic]">
            عرض المزيد
          </Link>
        </Button>
        
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <span className="font-[Noto_Kufi_Arabic]">حقائق مثيرة: </span>
          <span>{landmark.funFacts.length}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
