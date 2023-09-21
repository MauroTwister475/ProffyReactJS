import { BlockField } from "../../components/Form/BlockField";
import { Form } from "../../components/Form";
import { weekday_db } from "../../Utils/schoolData";

export interface ScheduleProps {
  Weekday: string,
  time_from: string,
  time_to: string,
  onSetWeekday: (weekday: string) => void,
  onSetTimeFrom: (from: string) => void,
  onSetTimeTo: (to: string) => void,
}

export function Schedule({Weekday, time_from, time_to, onSetWeekday, onSetTimeFrom, onSetTimeTo}: ScheduleProps) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6">
      <BlockField>
        <Form.Select 
          id="weekday" 
          label="Dia da semana" 
          value={Weekday}
          onChange={(e) => onSetWeekday(e.target.value)}
        >
          {weekday_db.map((day) => {
            return <option key={day.name}>
              {day.name}
            </option>;
          })}
        </Form.Select>
      </BlockField>
      <BlockField>
        <Form.Input 
          id="from"
          type="time"
          label="Das"
          value={time_from}
          onChange={(e) => onSetTimeFrom(e.target.value)}
        />
      </BlockField>
      <BlockField>
        <Form.Input 
          id="to"
          type="time"
          label="Até"
          value={time_to}
          onChange={(e) => onSetTimeTo(e.target.value)}
        />
      </BlockField>
    </div>
  );
}
