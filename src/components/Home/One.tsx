import { Table } from "antd";
import React from "react";
import { MdOutlineTimerOff } from "react-icons/md";
import { RiTimerFlashLine } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";
import { useOutletContext } from "react-router-dom";
import BreakRow from "./BreakRow";
import Card from "./Card";
import { BreakSection, Content, ContentBody } from "./homepage.styles";
import { BreakTimerModal, LoginTimerModal } from "./Modals/Modals";
import TopRow from "./TopRow";

const One = (props: any) => {
  const c: any = useOutletContext();
  const {
    showAll,
    breaks,
    formatLoginTimer,
    formatBreaksTimer,
    handleStopBreaksTimer,
    handleStartBreaksTimer,
    handleStopLoginTimer,
    handleStartLoginTimer,
    TotalBreakTime,
    averageMinutes,
    averageSeconds,
    columns,
    data,
    isModalOpen,
    Head,

    handleOk,
    handleCancel,
    totalLoggedInTime,
    halfDay,
    fullDay,
    compared,
    total,

    HeadBreak,
    isModalOpenBreak,
    handleOkBreak,
    handleCancelBreak,
    onFinishBreak,
    formBreak,
  } = c;

  console.log(c);
  return (
    <>
      <Content>
        <TopRow />

        <ContentBody>
          {showAll ? (
            <>
              <Card
                name={"Work"}
                icon={<RiTimerFlashLine />}
                formated={formatLoginTimer()}
                cursor={"default"}
              />

              {breaks ? (
                <Card
                  className="breaker"
                  name={"Stop Break"}
                  icon={<SiBuymeacoffee />}
                  formated={formatBreaksTimer()}
                  handler={handleStopBreaksTimer}
                />
              ) : (
                <Card
                  className=""
                  name={"Break"}
                  icon={<SiBuymeacoffee />}
                  formated={"Start Break"}
                  handler={handleStartBreaksTimer}
                />
              )}

              <Card
                className=""
                name={"Work"}
                icon={<MdOutlineTimerOff />}
                formated={"Stop Timer"}
                handler={handleStopLoginTimer}
              />
            </>
          ) : (
            <Card
              className=""
              name={"Work"}
              icon={<RiTimerFlashLine />}
              formated={"Start Timer"}
              handler={handleStartLoginTimer}
            />
          )}
        </ContentBody>

        {showAll && (
          <>
            <BreakRow
              TotalBreakTime={TotalBreakTime}
              averageMinutes={averageMinutes}
              averageSeconds={averageSeconds}
            />
            <BreakSection>
              <Table columns={columns} pagination={false} dataSource={data} />
            </BreakSection>
          </>
        )}
      </Content>

      {/* ::::::  LOGIN TIMER MODAL ::::::::::::*/}
      <LoginTimerModal
        Head={Head}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        totalLoggedInTime={totalLoggedInTime}
        halfDay={halfDay}
        fullDay={fullDay}
        compared={compared}
        total={total}
      />
      {/* ::::::  LOGIN TIMER MODAL ::::::::::::*/}

      {/* ::::::  BREAK TIMER MODAL ::::::::::::*/}
      <BreakTimerModal
        HeadBreak={HeadBreak}
        isModalOpenBreak={isModalOpenBreak}
        handleOkBreak={handleOkBreak}
        handleCancelBreak={handleCancelBreak}
        onFinishBreak={onFinishBreak}
        formBreak={formBreak}
      />
      {/* ::::::  BREAK TIMER MODAL ::::::::::::*/}
    </>
  );
};

export default One;
