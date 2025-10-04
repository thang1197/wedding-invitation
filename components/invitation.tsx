"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createInvitation } from "@/services/service";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function InvitationCard() {
  const [guest, setGuest] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [url, setUrl] = useState("");

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // reset after 2s
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Guest Invitation</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Guest</Label>
                <Input
                  id="guest"
                  type="guest"
                  placeholder="Enter guest"
                  required
                  onChange={(e) => {
                    setGuest(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            onClick={async (e) => {
              const response = await createInvitation(guest);
              setUrl(response);
              setIsOpen(true);
            }}
          >
            Create
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Url</DialogTitle>
            <Input 
            ref={inputRef}
            readOnly value={url} />
            <button
              onClick={(e) => {
                copyToClipboard(url)
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {copied ? "Copied!" : "Copy Text"}
            </button>
            <Button onClick={(e) => setIsOpen(false)}>Đóng</Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
