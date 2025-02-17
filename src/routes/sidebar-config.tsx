
import {
  BookOpen,
  File,
  Settings2,
  FolderSearch2
} from "lucide-react"

import i18n from "@/i18n/i18n"; 

export default [
  {
    title: () => i18n.t("nav.files"),
    url: "files",
    icon: File,
  },
  {
    title: () => i18n.t("nav.projects"),
    url: "projects",
    icon: FolderSearch2,
  },
  {
    title: () => i18n.t("nav.knowledge"),
    url: "knowledge",
    icon: BookOpen,
  },
  {
    title: () => i18n.t("nav.settings"),
    url: "#",
    icon: Settings2,
    isActive: true,
    items: [
      {
        title: () => i18n.t("settings.general"),
        url: "#",
      },
      {
        title: () => i18n.t("settings.team"),
        url: "#",
      },
      {
        title: () => i18n.t("settings.billing"),
        url: "#",
      },
      {
        title: () => i18n.t("settings.limits"),
        url: "#",
      },
    ],
  },
];

