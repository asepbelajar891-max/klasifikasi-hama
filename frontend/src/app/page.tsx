import { Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-4xl font-bold text-primary">Klasifikasi Hama</h1>
      <Bug className="h-12 w-12 text-secondary" />
      <Button className="mt-4">Mulai</Button>
    </main>
  );
}
