import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../components/Calendar";
import QuestionModal from "../components/QuestionModal";
import { questions } from "../data/questions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh; /* 화면 전체를 차지 */
  overflow: hidden; /* 스크롤 제거 */
`;

const Header = styled.h1`
  margin: 0;
  padding: 20px 0;
  font-size: 2rem;
  text-align: center;
  height: 100px; /* 헤더 높이 고정 */
  box-sizing: border-box;
`;

const HomePage: React.FC = () => {
  const today = new Date();
  const currentDay = today.getDate(); // 1부터 31까지 반환
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleSaveAnswer = (day: number, answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [day]: answer,
    }));
  };

  const handleSelectDay = (day: number) => {
    setSelectedDay(day);
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  return (
    <Container>
      <Header>2024</Header>
      <Calendar currentDay={currentDay} onSelectDay={handleSelectDay} />
      {selectedDay && (
        <QuestionModal
          question={questions[selectedDay - 1]}
          answer={answers[selectedDay] || ""}
          onSave={(answer) => handleSaveAnswer(selectedDay, answer)}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};

export default HomePage;
