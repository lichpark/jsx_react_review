import { chgnum } from "./function/function";
import Button from "./Layout/Buttons/Button";
import Head from "./Layout/Header/Head";
import Info from "./Layout/Info/Info";
import InfoSub from "./Layout/Info/InfoSub";
import VisitInfo from "./Layout/VisitInfo/VisitInfo";

const carInfoList = [
  { left: "차량명", right: "소렌토" },
  { left: "트림", right: "가솔린 터보 2.5 4WD 트렌디" },
  { left: "차량번호", right: "123가087" },
  { left: "차량등록일", right: "2020년 8월 30일(19년형)" },
  { left: "주행거리", right: chgnum(34567) + "km" },
];

const vitInfoList = [
  { left: "고객명", right: "김기아" },
  { left: "연락처", right: "010-7890-7890", callbutton: true },
  {
    left: "방문장소",
    right: "16919 서울시 강남구 삼성로\n 763 금탁프라자301호",
  },
  { left: "차량등록일", right: "2020년 8월 30일(19년형)" },
  { left: "방문일정", right: "2023년 1월 9일 오후 2:00" },
];

function App() {
  return (
    <div className="App">
      <Head
        text1={"확정필요"}
        text2={"대면평가"}
        text3={"방문 일정"}
        text4={"2023년 1월 9일 오후 02:00"}
      />
      <div className="bg-gray-200">
        <div className="bg-white w-full p-3 ">
          <Info
            InfoStatus={true}
            titleText={"차량정보"}
            imgPath={
              "https://www.kia.com/content/dam/kwp/kr/ko/vehicles/represent/krmq206/sorento_mqjj5aed6_a_bn4.png"
            }
          />
          <ul className="flex flex-col gap-y-0.5">
            {carInfoList.map((v) => {
              return <InfoSub infoKey={v.left} infoVal={v.right} />;
            })}
          </ul>
        </div>
        <div className="bg-white w-full p-3 mt-3">
          <VisitInfo titleText={"방문정보"} />
          <ul className="flex flex-col gap-y-0.5">
            {vitInfoList.map((v) => {
              return (
                <InfoSub
                  infoKey={v.left}
                  infoVal={v.right}
                  callbutton={v.callbutton}
                />
              );
            })}
          </ul>
        </div>

        <div className="bg-white w-full p-3 mt-3 flex justify-between gap-5 pt-20 pb-10">
          <Button buttonText={true} />
          <Button buttonText={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
