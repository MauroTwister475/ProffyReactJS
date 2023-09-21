import { FormEvent, memo, useState } from "react";
import { api } from "../../api";
import { ProffyProfile } from "./ProffyProfile";

import { Header } from "../../components/Header";
import { BlockField } from "../../components/Form/BlockField";
import { Form } from "../../components/Form";
import { ProffyInfo, subjects, weekday_db } from "../../Utils/schoolData";
// import { useQuery } from "react-query";

function StudyComponent() {
  const [proffyProfile, setProffyProfile] = useState<ProffyInfo[]>([]);
  const [whatsAppLink, setWhatsAppLink] = useState('');

  const [subject, setSubject] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time, setTime] = useState('');
  const [fetching, setFetching] = useState(false);

  const FILTER_URL = `/study?subject=${subject}&weekday=${weekday}&time=${time}`
  console.log({subject, weekday, time});

  async function sendDataToQuery(e: FormEvent) {
    e.preventDefault();
    
    const response = await api.get(FILTER_URL);
    setProffyProfile(response.data);
    setFetching(true);
    // const pos = proffyProfile.findIndex()
    setWhatsAppLink(proffyProfile[8].whatsApp);
    // setWhatsAppLink(proffyProfile.);
  }

  return (
    <form 
      onSubmit={sendDataToQuery}
      className="w-screen h-screen" 
    >
      <Header topic='Esses são os proffys disponíveis.'>
        <div className="w-full flex flex-col mx-auto gap-4 lg:flex-row lg:w-[80%] lg:mt-[2rem] xl:mt-[3rem]">
          <BlockField topic="Matéria">
            <Form.Select 
              label=""
              id="subject" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              {subjects.map(subject => {
                return (
                  <option key={subject.name}>
                    {subject.name}
                  </option>
              )})}
            </Form.Select>
          </BlockField>
          <BlockField topic="Dia de semana">
            <Form.Select 
              label=""
              id="weekday" 
              value={weekday}
              onChange={(e) => setWeekday(e.target.value)}
            >
              {weekday_db.map(day => {
                return (
                  <option key={day.name}>
                    {day.name}
                  </option>
              )})}
            </Form.Select>
          </BlockField>
          <BlockField topic="Horas">
            <Form.Input 
              id='hour'
              type='time'
              label=''
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </BlockField>
          <BlockField topic="">
            <button
              type="submit" 
              className="w-full mt-[2.8rem] h-[5rem] text-[1.5rem] font-semibold text-white rounded-lg bg-green-500 transition-colors cursor-pointer lg:w-[20rem] hover:bg-green-600"
            >
              Filtrar
            </button>
          </BlockField>
        </div>
      </Header> ? 
      <main className="w-full h-auto flex flex-col items-center justify-center px-10 py-20 lg:py-32">
      {!fetching ? 
          <span className="text-zinc-500 text-[2rem]">
            Faça uma pesquisa
          </span>
         : (proffyProfile.length !== 0 ? 
            <ProffyProfile 
              proffyProfile={proffyProfile}
              whatsAppLink={whatsAppLink}
            />
          :
          <span className="text-zinc-500 text-[2rem] text-center">
            Nenhum professor encontrado com base a sua pesquisa.
          </span>)
        }
      </main>
    </form>
  );
}

export const Study = memo(StudyComponent);


/*

{proffyProfile.length !== 0 ? 
          <ProffyProfile 
            proffyProfile={proffyProfile}
          />: 
          <span className="text-zinc-500 text-[2rem]">
            Nenhum professor encontrado
          </span>
        }
*/