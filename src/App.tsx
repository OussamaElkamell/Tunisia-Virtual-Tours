import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Map from "./pages/Map";
import Landmarks from "./pages/Landmarks";
import LandmarkDetail from "./pages/LandmarkDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TeacherSpace from "./pages/TeacherSpace";
import Lesson from "./pages/Lesson";
import Quiz from "./pages/Quiz";
import TeacherGuide from "./pages/TeacherGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/map" element={<Map />} />
          <Route path="/landmarks" element={<Landmarks />} />
          <Route path="/landmark/:id" element={<LandmarkDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/teacher-space" element={<TeacherSpace />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/teacher-guide" element={<TeacherGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
