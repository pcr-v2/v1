import React from "react";

import TestImg from "@/images/test.png";

export default function Content() {
  return (
    <section className="content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        lobortis dui, vel cursus elit. Maecenas quis facilisis libero, quis
        porta libero. Mauris suscipit, dolor in porttitor sodales, lectus leo
        tempor lorem, nec euismod magna orci in metus. Aliquam erat volutpat.
        Phasellus turpis est, imperdiet eu aliquam ut, congue at elit. Aliquam
        laoreet lacus nec nibh molestie, ut mollis mi consequat. Suspendisse
        potenti. Duis dolor erat, pellentesque ut lorem id.
      </p>
      <img
        src={TestImg.src}
        alt="Man in a fedora"
        style={{ width: "500px", height: "900px" }}
      />
    </section>
  );
}
