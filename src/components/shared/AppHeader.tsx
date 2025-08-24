import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  BreadcrumbPage,
  Input,
} from "../ui";
import {
  Separator,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui";
import { BellRing } from "lucide-react";

function AppHeader() {
  return (
    <header className="fixed top-0 flex w-full h-16 items-center justify-center bg-[#121212] z-10">
      <div className="w-full max-w-[1328px] flex justify-between  items-center gap-2 px-6 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/assets/vite.svg"
            alt="TaskFlow-Pro"
            className="h-5 w-5 rounded-full cursor-pointer"
          />
          <span className="text-lg font-semibold tracking-tight">
            TaskFlow-Pro
          </span>
          <div className="px-6 flex justify-center items-center text-muted-foreground">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="w-60">
            <Input placeholder="태스크나 프로젝트 검색...[⌘]+[K]" />
          </div>
          <div className="flex items-center gap-2">
            <Separator orientation="vertical" className="!h-4" />
            <div>
              <Button variant="ghost" size="icon">
                <BellRing />
              </Button>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
