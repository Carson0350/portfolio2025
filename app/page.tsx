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
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-50 p-section-mobile md:p-section-tablet lg:p-section">
      <div className="max-w-container space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-h1-mobile md:text-h1 text-primary-800">
            Carson Antoine
          </h1>
          <p className="text-body-large text-primary-600 mt-4">
            Full Stack Developer Portfolio
          </p>
          <p className="text-small text-neutral-600 mt-2">Coming soon...</p>
        </div>

        {/* shadcn/ui Component Demo */}
        <Card className="mx-auto max-w-md shadow-card">
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
            <div className="flex flex-wrap gap-2">
              <Button className="flex-1 min-w-fit">Primary Button</Button>
              <Button variant="outline" className="flex-1 min-w-fit">
                Outline Button
              </Button>
              <Button variant="ghost" className="flex-1 min-w-fit">
                Ghost Button
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Custom color palette test */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="bg-primary-800 h-12 w-12 rounded-lg shadow-sm"></div>
          <div className="bg-accent-500 h-12 w-12 rounded-lg shadow-sm"></div>
          <div className="bg-success-500 h-12 w-12 rounded-lg shadow-sm"></div>
          <div className="bg-warning-500 h-12 w-12 rounded-lg shadow-sm"></div>
          <div className="bg-error-500 h-12 w-12 rounded-lg shadow-sm"></div>
          <div className="bg-info-500 h-12 w-12 rounded-lg shadow-sm"></div>
        </div>
      </div>
    </main>
  );
}
