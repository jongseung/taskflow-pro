import {
  ChevronDown,
  LayoutDashboard,
  CheckSquare,
  TrendingUp,
  Calendar,
  CirclePlus,
  FolderOpen,
} from "lucide-react";
import { Button } from "../ui";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  path: string;
  showProjects?: boolean; // 태스크만 true
}

interface Project {
  id: string;
  name: string;
  color: string;
  progress: number;
  taskCount: number;
}

const projects: Project[] = [
  {
    id: "proj-1",
    name: "웹사이트 리뉴얼",
    color: "#ef4444",
    progress: 75,
    taskCount: 12,
  },
  {
    id: "proj-2",
    name: "모바일 앱 개발",
    color: "#10b981",
    progress: 45,
    taskCount: 8,
  },
  {
    id: "proj-3",
    name: "API 개선",
    color: "#f59e0b",
    progress: 90,
    taskCount: 5,
  },
];

const menuItems: MenuItem[] = [
  { id: "dashboard", label: "대시보드", icon: <LayoutDashboard />, path: "/" },
  {
    id: "tasks",
    label: "태스크",
    icon: <CheckSquare />,
    path: "/tasks",
    showProjects: true,
  },
  { id: "calendar", label: "캘린더", icon: <Calendar />, path: "/calendar" },
  { id: "analytics", label: "분석", icon: <TrendingUp />, path: "/analytics" },
];

function AppSidebar() {
  const [activeMenu, setActiveMenu] = useState<string>("dashboard");
  const [showProjects, setShowProjects] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <aside className="w-1/5 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        {/* Shadcn UI의 Typography h4 컴포넌트 그대로 사용 */}
        <h4 className="scroll-m-20 text-l font-semibold tracking-tight">
          카테고리
        </h4>
        <ChevronDown className="mt-1" />
      </div>
      <div className="w-full flex flex-col gap-2">
        {menuItems.map((menu) => {
          return (
            <Button
              key={menu.id}
              asChild
              variant={"ghost"}
              className={`justify-start text-base transition-all duration-500 ${
                activeMenu === menu.id
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-white hover:pl-6"
              }`}
            >
              <Link
                className={`flex items-center gap-2`}
                to={menu.path}
                onClick={() => {
                  setActiveMenu(menu.id);
                  if (menu.showProjects) {
                    setShowProjects(true);
                  } else {
                    setShowProjects(false);
                  }
                }}
              >
                {menu.icon}
                {menu.label}
              </Link>
            </Button>
          );
        })}
      </div>
      {showProjects && (
        <>
          <div className="flex items-center gap-2">
            <h5 className="scroll-m-20 text-l font-semibold tracking-tight">
              프로젝트
            </h5>
            <ChevronDown className="mt-1" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex flex-col">
              {projects.length > 0 ? (
                <>
                  {/* 프로젝트 리스트 */}
                  <div className="flex flex-col gap-1">
                    {projects.map((project) => (
                      <Button
                        key={project.id}
                        variant="ghost"
                        onClick={() => setActiveProject(project.id)}
                        className={`justify-start transition-all duration-300 h-auto py-3 ${
                          activeProject === project.id
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent hover:pl-6"
                        }`}
                      >
                        <div className="flex items-center gap-3 w-full">
                          {/* 프로젝트 색상 점 */}
                          <div
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: project.color }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-medium truncate text-sm">
                                {project.name}
                              </span>
                              <span className="text-xs text-muted-foreground ml-2">
                                {project.taskCount}개
                              </span>
                            </div>
                            {/* 진행률 바 */}
                            <div className="w-full bg-muted/50 h-1.5 rounded-full mt-2">
                              <div
                                className="h-1.5 rounded-full transition-all duration-500"
                                style={{
                                  width: `${project.progress}%`,
                                  backgroundColor: project.color,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>

                  {/* 생성 버튼 */}
                  <Button
                    variant="ghost"
                    className="cursor-pointer justify-start text-muted-foreground hover:text-primary hover:bg-primary/10 border-2 border-dashed border-muted-foreground/20 hover:border-primary/40 transition-all duration-300 mt-3 py-6"
                  >
                    <CirclePlus className="w-4 h-4 mr-3" />새 프로젝트 만들기
                  </Button>
                </>
              ) : (
                <div>
                  {/* 빈 상태 */}
                  <div className="flex flex-col items-center justify-center py-4 px-4">
                    <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mb-4">
                      <FolderOpen className="w-8 h-8 text-muted-foreground/60" />
                    </div>
                    <p className="text-sm text-muted-foreground text-center mb-2 font-medium">
                      아직 프로젝트가 없어요
                    </p>
                    <p className="text-xs text-muted-foreground/70 text-center mb-4">
                      첫 번째 프로젝트를 만들어보세요!
                    </p>

                    {/* 빈 상태에서의 생성 버튼 */}
                    <Button variant="destructive" className="rounded-2xl">
                      <CirclePlus className="w-4 h-4" />
                      프로젝트 만들기
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

export default AppSidebar;
