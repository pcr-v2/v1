"use client";

import { Box, styled } from "@mui/material";
import { motion, useAnimation } from "framer-motion";

interface IProps {
  isOpen: boolean;
  onClick: () => void;
}

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

const path03Variants = {
  closed: { d: "M0 19.5L24 19.5", opacity: 1 }, // 긴 path로 닫혔을 때
  moving: { d: "M0 14.5L24 14.5", opacity: 1 }, // path02와 겹쳐진 상태
  open: { d: "M0 19.5L24 19.5", opacity: 0 }, // 열림 상태에서도 그대로 유지
};

export default function MenuToggle(props: IProps) {
  const { isOpen, onClick } = props;

  const path01Controls = useAnimation();
  const path02Controls = useAnimation();
  const path03Controls = useAnimation(); // 새로운 path에 대한 controls 추가

  const handleToggle = async () => {
    onClick();
    if (!isOpen) {
      // 먼저 path03을 움직여서 path02와 겹치게 함
      await path02Controls.start(path02Variants.moving);
      await path03Controls.start(path03Variants.moving);

      await path03Controls.start(path03Variants.open); // path03이 사라짐 (opacity: 0)

      // 그 후에 X자 모양 그리기
      await path01Controls.start(path01Variants.open);
      await path02Controls.start(path02Variants.open);
    } else {
      // 닫을 때는 순서를 반대로
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      await path03Controls.start(path03Variants.closed);
      path02Controls.start(path02Variants.closed);
    }
  };

  return (
    <Wrapper onClick={handleToggle}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path
          {...path03Variants.closed} // 새로운 path 추가
          animate={path03Controls} // 이 path는 닫힘과 열림 모두 동일
          transition={{ duration: 0.1 }}
          stroke="#000"
        />
        <motion.path
          {...path01Variants.closed}
          animate={path01Controls}
          transition={{ duration: 0.1 }}
          stroke="#000"
        />
        <motion.path
          {...path02Variants.closed}
          animate={path02Controls}
          transition={{ duration: 0.2 }}
          stroke="#000"
        />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",
    [theme.breakpoints.up("tablet")]: {
      display: "none",
    },
  };
});
