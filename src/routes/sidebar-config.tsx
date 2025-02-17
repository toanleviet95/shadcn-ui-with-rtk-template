
import {
  BookOpen,
  File,
  Settings2,
  FolderSearch2
} from "lucide-react"

export default [
  {
    title: "Files",
    url: "files",
    icon: File,
  },
  {
    title: "Projects",
    url: "projects",
    icon: FolderSearch2,
  },
  {
    title: "Knowledge",
    url: "knowledge",
    icon: BookOpen,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings2,
    isActive: true,
    items: [
      {
        title: "General",
        url: "#",
      },
      {
        title: "Team",
        url: "#",
      },
      {
        title: "Billing",
        url: "#",
      },
      {
        title: "Limits",
        url: "#",
      },
    ],
  },
];
