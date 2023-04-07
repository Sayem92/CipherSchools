import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "react-calendar-heatmap/dist/styles.css";


const ChipherMap = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Sayem92/events`)
      .then((response) => {
        const contributions = response.data
          .filter((event) => event.type === "PushEvent")
          .reduce((acc, event) => {
            const date = moment(event.created_at).format("YYYY-MM-DD");
            acc[date] = (acc[date] || 0) + event.payload.size;
            return acc;
          }, {});
        setContributions(contributions);
      });
  }, []);

  return (
    <div
      className="mx-12"
      data-for="contributions-tooltip"
      data-event-off="mouseout"
    >
      <ReactTooltip
      //  id="heatmap-tooltip"
      />
      <ReactCalendarHeatmap
        startDate={moment().subtract(1, "year").toDate()}
        endDate={new Date()}
        values={Array.from(
          { length: moment().diff(moment().subtract(1, "year"), "days") + 1 },
          (_, index) => {
            const date = moment()
              .subtract(1, "year")
              .startOf("day")
              .add(index, "days");
            const count = contributions[moment(date).format("YYYY-MM-DD")] || 0;
            return { date: date.toDate(), count };
          }
        )}
        showWeekdayLabels={true}
        classForValue={(value) => {
          if (!value || value.count === 0) {
            return "color-github-0";
          }
          if (value.count <= 3) {
            return `color-github-1`;
          }
          if (value.count <= 6) {
            return `color-github-2`;
          }
          if (value.count <= 9) {
            return `color-github-3`;
          }
          return `color-github-4`;
        }}
        tooltipDataAttrs={(value) => ({
          "data-tip": `${value.count} contribution(s) : ${moment(
            value.date
          ).format("MMM D, YYYY")}`,
        })}
      />
    </div>
  );
};

export default ChipherMap;
