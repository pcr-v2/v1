import { tForScan } from "@/i18n/common";

export const MENU = [
  {
    name: tForScan("홈"),
    href: "/",
    icon: <></>, // 걍 jsx가 그냥 저냥 깔끔함 className 주거나 할 떄도
    children: [
      {
        name: tForScan("대시보드"),
        href: "/dashboard",
      },
      {
        name: tForScan("그림보기"),
        href: "/drawing/normal",
      },
      {
        name: tForScan("휴지통"),
        href: "/drawing/deleted",
      },
    ],
  },
  // // 2차 범위
  // {
  //   name: t("AI 분석"),
  //   icon: <FolderIcon />,
  //   children: [
  //     {
  //       name: t("AI 리포트"),
  //       href: "/ai/report",
  //     },
  //     {
  //       name: t("그림심리검사"),
  //       href: "/ai/examination",
  //     },
  //   ],
  // },
  {
    name: tForScan("마이페이지"),
    href: "/my",
    icon: <></>,
    children: [
      {
        name: tForScan("구매정보"),
        href: "/my/purchase",
      },
      {
        name: tForScan("학급관리"),
        href: "/my/grade",
      },
      {
        name: tForScan("수업관리"),
        href: "/my/lesson",
        children: [
          {
            name: tForScan("수업 생성/수정"),
            href: "/my/lesson/add",
          },
          {
            name: tForScan("수업 생성/수정"),
            href: "/my/lesson/edit",
          },
        ],
      },
      {
        name: tForScan("개인정보 변경"),
        href: "/my/info",
      },
    ],
  },
  {
    name: tForScan("고객센터"),
    href: "/customer",
    icon: <></>,
    children: [
      {
        name: tForScan("공지사항"),
        href: "/customer/notice",
      },
      // // 2차 범위
      // {
      //   name: t("FAQ"),
      //   href: "/customer/faq",
      // },
      // {
      //   name: t("1:1 문의"),
      //   href: "/customer/inquiry",
      // },
      // {
      //   name: t("아트봉봉 광장"),
      //   href: "/customer/plaza",
      // },
    ],
  },
];
