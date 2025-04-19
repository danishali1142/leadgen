
import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

export default function Home() {
  const [galleryImages] = useState([
    "https://source.unsplash.com/random/800x600?tech",
    "https://source.unsplash.com/random/800x600?marketing",
    "https://source.unsplash.com/random/800x600?data",
  ]);

  return (
    <div className="p-4 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Mera Portfolio</h1>
        <p className="text-lg text-gray-600">Lead Generation | Data Entry | Email Marketing</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Home</h2>
        <p>
          Welcome to my professional portfolio! I specialize in lead generation, data entry,
          and email marketing. I help businesses grow by building accurate contact lists and
          running effective campaigns.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, idx) => (
            <img key={idx} src={src} alt="Gallery" className="rounded-xl shadow" />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Portfolio</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold">Lead Generation Project</h3>
            <p className="text-gray-600">
              Collected 5,000+ high-quality B2B leads for a SaaS company with verified emails.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="font-bold">Data Entry Project</h3>
            <p className="text-gray-600">
              Entered and cleaned 10,000+ product data entries in Excel/Google Sheets with 100%
              accuracy.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p>Email: yourname@example.com</p>
        <p>Phone: +92-XXX-XXXXXXX</p>
      </section>

      <footer className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Mera Portfolio. All rights reserved.
      </footer>
    </div>
  );
}
