import React from "react";
import { getMonth } from "../utils/helper";

export const Message = ({
  message,
  name,
  time
}: {
  message: string;
  name?: string;
  time?: number;
}) => {
  const stamp = new Date(Number(time));
  return (
    <>
      <section className="wrapper" id={`${time}`}>
        {message && <p>{message}</p>}
        <div className="time-stamp">
          {time &&
            `${stamp.getDate()} ${getMonth(
              stamp.getMonth()
            )} ${stamp.getFullYear()}`}
        </div>
      </section>
      <style jsx>
        {`
          .time-stamp {
            color: #716f6f;
            font-size: 10px;
            margin-top: 5px;
            margin-bottom: 5px;
            margin-left: 5px;
          }
          p {
            margin: 5px;
            font-size: 14px;
          }
          .wrapper {
            background-color: #fff;
            padding: 6px 4px;
            border-radius: 6px;
            margin: 15px 5px;
          }
        `}
      </style>
    </>
  );
};
