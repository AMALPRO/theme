/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cnZL8KJqLtc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] h-screen w-full">
      <div className="relative aspect-video md:aspect-auto">
        <video
          className="w-full h-full object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          controls
        />
        <div className="absolute top-4 left-4 bg-black/50 rounded-md px-3 py-1 text-white text-sm">Live</div>
      </div>
      <div className="bg-muted overflow-auto">
        <div className="p-4 grid gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/placeholder.svg"
              width={64}
              height={36}
              alt="Thumbnail"
              className="rounded-md"
              style={{ aspectRatio: "64/36", objectFit: "cover" }}
            />
            <div>
              <div className="font-medium line-clamp-1">Cooking with Chef Ramsay</div>
              <div className="text-muted-foreground text-sm">12.3K viewers</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/placeholder.svg"
              width={64}
              height={36}
              alt="Thumbnail"
              className="rounded-md"
              style={{ aspectRatio: "64/36", objectFit: "cover" }}
            />
            <div>
              <div className="font-medium line-clamp-1">Speedrunning Super Mario Bros</div>
              <div className="text-muted-foreground text-sm">8.7K viewers</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/placeholder.svg"
              width={64}
              height={36}
              alt="Thumbnail"
              className="rounded-md"
              style={{ aspectRatio: "64/36", objectFit: "cover" }}
            />
            <div>
              <div className="font-medium line-clamp-1">Painting Landscapes with Acrylics</div>
              <div className="text-muted-foreground text-sm">4.2K viewers</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/placeholder.svg"
              width={64}
              height={36}
              alt="Thumbnail"
              className="rounded-md"
              style={{ aspectRatio: "64/36", objectFit: "cover" }}
            />
            <div>
              <div className="font-medium line-clamp-1">Minecraft Modding Tutorial</div>
              <div className="text-muted-foreground text-sm">9.5K viewers</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="/placeholder.svg"
              width={64}
              height={36}
              alt="Thumbnail"
              className="rounded-md"
              style={{ aspectRatio: "64/36", objectFit: "cover" }}
            />
            <div>
              <div className="font-medium line-clamp-1">Unboxing the Latest Tech Gadgets</div>
              <div className="text-muted-foreground text-sm">6.8K viewers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted flex flex-col">
        <div className="p-4 border-b">
          <h3 className="font-medium">Live Chat</h3>
        </div>
        <div className="flex-1 overflow-auto p-4 space-y-4">
          <div className="flex items-start gap-3">
            <Avatar className="shrink-0">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="bg-background rounded-md p-3 text-sm">
              <div className="font-medium">John Doe</div>
              <div>Hey everyone, what's up?</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="shrink-0">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className="bg-background rounded-md p-3 text-sm">
              <div className="font-medium">Sarah Anderson</div>
              <div>Loving the stream so far!</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="shrink-0">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>
            <div className="bg-background rounded-md p-3 text-sm">
              <div className="font-medium">Michael Johnson</div>
              <div>Can't wait to see what's next!</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="shrink-0">
              <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
              <AvatarFallback>EW</AvatarFallback>
            </Avatar>
            <div className="bg-background rounded-md p-3 text-sm">
              <div className="font-medium">Emily Wilson</div>
              <div>This is so much fun!</div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <div className="relative">
            <Textarea placeholder="Type your message..." className="pr-16 rounded-md" />
            <Button type="submit" size="icon" className="absolute w-8 h-8 top-3 right-3">
              <ArrowUpIcon className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}
