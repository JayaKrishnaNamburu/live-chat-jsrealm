import React from "react";

export const Message = ({
  message,
  name,
  time
}: {
  message: string;
  name?: string;
  time?: number;
}) => {
  return (
    <>
      <section className="wrapper">{message && <p>{message}</p>}</section>
      <style jsx>
        {`
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
