import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-section-mobile md:p-section-tablet lg:p-section">
      <div className="max-w-container space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-h1-mobile text-primary md:text-h1">
            Carson Antoine
          </h1>
          <p className="text-body-large text-secondary mt-4">
            Full Stack Developer Portfolio
          </p>
          <p className="text-small text-secondary mt-2">Coming soon...</p>
        </div>

        {/* shadcn/ui Component Demo */}
        <Card className="mx-auto max-w-md">
          <CardHeader>
            <CardTitle>shadcn/ui Components</CardTitle>
            <CardDescription>
              Testing base components installation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Type your message here" />
            </div>
            <div className="flex gap-2">
              <Button>Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </CardContent>
        </Card>

        {/* Custom color palette test */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-primary h-12 w-12 rounded"></div>
          <div className="bg-secondary h-12 w-12 rounded"></div>
          <div className="bg-accent h-12 w-12 rounded"></div>
          <div className="bg-success h-12 w-12 rounded"></div>
          <div className="bg-warning h-12 w-12 rounded"></div>
          <div className="bg-error h-12 w-12 rounded"></div>
        </div>
      </div>
    </main>
  );
}
