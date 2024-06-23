import { FC } from "react";
import { StyledLeftColumnHeader, StyledWrapper } from "./styles";
import { LeftColumnProps } from "./types";
import LeftColumnItem from "./LeftColumnItem/LeftColumnItem";

const LeftColumn: FC<LeftColumnProps> = ({ data, rows, onItemClick }) => {
  return (
    <StyledWrapper>
      <StyledLeftColumnHeader /> {/** Literally just whitespace */}
      {data.map((item, index) => (
        <LeftColumnItem
          id={item.id}
          item={item.label}
          key={item.id}
          rows={rows[index]}
          onItemClick={onItemClick}
        />
      ))}
    </StyledWrapper>
  );
};

export default LeftColumn;
