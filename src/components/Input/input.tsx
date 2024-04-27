import React, { ChangeEvent, useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setValue(event.target.value);
  //   };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
        }}
        placeholder="Wpisz tekst..."
      >
        Podgląd... {value}
      </input>
    </div>
  );
};
