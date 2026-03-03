import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Palette 
} from 'lucide-react';
import { Button } from "../components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../components/ui/card";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Layers className="w-6 h-6 text-primary" />
            <span>ReactStack By Perdafos</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">Docs</Button>
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <a href="https://github.com/perdafos" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>
      </nav>

      <header className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Bangun Aplikasi Lebih Cepat dengan <span className="text-primary">Modern Stack</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Starter pack yang sudah terkonfigurasi dengan React, TypeScript, Tailwind CSS, 
          Shadcn UI, dan Lucide Icons. Siap untuk produksi.
        </p>
      </header>

      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Zap className="w-10 h-10 text-yellow-500" />}
            title="Performa Tinggi"
            description="Optimasi otomatis dengan Vite dan React untuk pengalaman pengguna yang sangat cepat."
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-10 h-10 text-blue-500" />}
            title="Type Safe"
            description="Keamanan kode maksimal menggunakan TypeScript di seluruh arsitektur aplikasi."
          />
          <FeatureCard 
            icon={<Palette className="w-10 h-10 text-pink-500" />}
            title="Shadcn UI"
            description="Komponen yang dapat diakses (accessible) dan mudah dikustomisasi sesuka hati."
          />
        </div>
      </section>

      <footer className="border-t py-10 ">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} React Starter Pack. Built by Perdafos.
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="transition-all hover:shadow-md border-muted">
    <CardHeader>
      <div className="mb-2">{icon}</div>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

export default Home;