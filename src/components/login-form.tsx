"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconCode } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // // Replace this with your actual authentication logic
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ username, password }),
      // });

      // if (response.ok) {
      //   // Successful login
      //   const data = await response.json();

      //   // Store token in localStorage or httpOnly cookie
      //   localStorage.setItem("token", data.token);

      //   // Redirect to dashboard or home page
      //   router.push("/dashboard");
      // } else {
      //   // Handle login errors
      //   const errorData = await response.json();
      //   setError(errorData.message || "Login failed");
      // }
      router.push("/dashboard");
    } catch (err) {
      // Network or unexpected errors
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-black border border-neutral-800 text-white py-8">
        <CardHeader>
          <div className="flex items-center justify-center my-2">
            <IconCode className="w-10 h-10" />
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {error && (
                <div className="bg-red-500 text-white p-3 rounded">{error}</div>
              )}
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input
                  className="border-neutral-800"
                  id="username"
                  type="text"
                  placeholder="shhh"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-neutral-800"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full bg-white text-black font-semibold hover:bg-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
