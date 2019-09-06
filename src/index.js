import React from "react";
import ReactDOM from "react-dom";
import Scheduler from "devextreme-react/scheduler";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import "./styles.css";
import { data } from "./data";
import { appointmentFormOpeningTemplate } from "./apFormOpeningTemplate";

function App() {
  return (
    <div className="App">
      <h1>test scheduler</h1>
      <Scheduler
        id={"myScheduler"}
        dataSource={data}
        views={["agenda", "month", "day", "week"]}
        defaultCurrentView={"month"}
        currentDate={new Date(2017, 4, 22)}
        height={600}
        width={800}
        onAppointmentFormOpening={appointmentFormOpeningTemplate}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
