import React from "react";
import styled from "styled-components";

const CalendarWrapper = styled.div<{
  buttonSize: { width: number; height: number };
}>`
  display: grid;
  grid-template-columns: repeat(7, ${(props) => props.buttonSize.width}px);
  grid-template-rows: repeat(6, ${(props) => props.buttonSize.height}px);
  width: 100%;
  height: 100%;
`;

const DayButton = styled.button<{ isAvailable: boolean }>`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: ${(props) => (props.isAvailable ? "#000000" : "#9e9e9e")};
  font-size: 1rem;
  cursor: ${(props) => (props.isAvailable ? "pointer" : "not-allowed")};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.isAvailable ? "#e69a9a" : "#ddd")};
    radius: 150;
  }
`;

interface CalendarProps {
  currentDay: number;
  onSelectDay: (day: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({ currentDay, onSelectDay }) => {
  // 화면 크기를 기반으로 버튼 크기 계산
  const calculateButtonSize = () => {
    const availableWidth = window.innerWidth - 30; // 양옆 마진(15px * 2) 제외
    const availableHeight = window.innerHeight - 120; // 헤더(120px) 제외
    const buttonWidth = availableWidth / 7; // 7열 기준
    const buttonHeight = availableHeight / 6; // 6행 기준
    return { width: buttonWidth, height: buttonHeight };
  };

  const buttonSize = calculateButtonSize();

  return (
    <CalendarWrapper buttonSize={buttonSize}>
      {Array.from({ length: 31 }, (_, index) => {
        const day = index + 1;
        const isAvailable = day <= currentDay;

        return (
          <DayButton
            key={day}
            isAvailable={isAvailable}
            onClick={() => isAvailable && onSelectDay(day)}
          >
            {day}
          </DayButton>
        );
      })}
    </CalendarWrapper>
  );
};

export default Calendar;
