"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const CalButton = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      // Configure Cal.com settings
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-link="prithviraj-panda-qtbcvw/30min"
      className="cal-embed-btn"
    >
      Schedule a Call
    </button>
  );
};

export default CalButton;
