'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { Mail, Lock } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Demo validation
    if (!email || !password) {
      toast({
        title: 'Missing fields',
        description: 'Please enter both email and password.',
      });
      setLoading(false);
      return;
    }

    // Simulate login
    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Login Successful',
        description: `Welcome, ${email}!`,
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <Toaster />
      <Card className="w-full max-w-md shadow-xl border-none bg-white/90 dark:bg-background/80 backdrop-blur-lg">
        <CardHeader className="flex flex-col items-center gap-2">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/90 mb-2">
            <Mail className="w-7 h-7 text-primary-foreground" />
          </span>
          <CardTitle className="text-3xl font-bold tracking-tight">Sign in</CardTitle>
          <CardDescription className="text-center text-muted-foreground">
            Welcome back! Please login to your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} autoComplete="off">
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="email" className="mb-1 block">Email</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                </span>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@email.com"
                  className="pl-10"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoFocus
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="password" className="mb-1 block">Password</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Lock className="w-5 h-5" />
                </span>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              type="submit"
              className="w-full text-lg font-semibold"
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Login'}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              <span>Don&apos;t have an account?</span>
              <a
                href="#"
                className="ml-1 text-primary hover:underline font-medium"
              >
                Sign up
              </a>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
