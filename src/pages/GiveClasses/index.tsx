import { useState, FormEvent, memo } from "react";
import { api } from "../../api";

import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { BlockField } from "../../components/Form/BlockField";

import { Schedule } from "./Schedule";
import { FormContainer } from "../../components/Form/FormContainer";
import { subjects } from "../../Utils/schoolData";
import { convertWeekday } from "../../Utils/ConvertWeekday";

function GiveClassesComponent() {

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsApp, setWhatsApp] = useState('');
  const [biografia, setBiografia] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [Weekday, setWeekday] = useState(''); 
  const [time_from, setTime_from] = useState(''); 
  const [time_to, setTime_to] = useState(''); 

  async function onSubmitForm(e: FormEvent) {
    e.preventDefault();
    const weekday = convertWeekday(Weekday);
      
    const data = {
      name, avatar, whatsApp, 
      biografia, subject, cost, 
      weekday, time_from, time_to
    };
    
    try {
      await api.post('/create_proffy', data);
    }catch(error) {
      console.log("Algo deu errado ao cadastrar"+error);
    }

    setName('');
    setAvatar('');
    setWhatsApp('');
    setBiografia('');
    setSubject('');
    setCost('');
    setWeekday('');
    setTime_from('');
    setTime_to('');
  }

  return (
    <section className="flex flex-col w-screen h-screen">
      <Header
        topic='Que incrivel que você quer dar aulas.' 
        additionalText="O primeiro passo é preencher esse formulário de inscrição."
        give_classes
      >
      </Header>
      <form
        onSubmit={onSubmitForm} 
        className="w-full mx-auto lg:w-[62%] mt-[-1.5rem] bg-white rounded-lg flex flex-col gap-10"
      >
        <FormContainer>
          <Form.FormFields
            topic="Seus Dados"
            borderTop
            key="data"
          >
            <Form.Input 
              id="name"
              type="text"
              label="Seu Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Input 
              id="avatar"
              type="text"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Form.Input 
              id="WhatsApp"
              type="text"
              label="WhatsApp"
              value={whatsApp}
              onChange={(e) => setWhatsApp(e.target.value)}
            />
            <Form.Textarea
              label="Biografia"
              value={biografia}
              onChange={(e) => setBiografia(e.target.value)}
            />
          </Form.FormFields> 
          <Form.FormFields 
            topic="Sobre a aula"
            borderTop
            key="classes"
          >
            <BlockField>
              <Form.Select 
                id="subject" 
                label="Matéria"
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
            <BlockField>
              <Form.Input 
                id="cost"
                type="text"
                value={cost}
                label="Custo da sua hora por aula"
                onChange={(e) => setCost(e.target.value)}
              />
            </BlockField>
          </Form.FormFields>
          <Form.FormFields 
            key="Schedule"
            topic="Horários disponíveis"
            borderTop
            buttonSchedule
          >
            <Schedule 
               Weekday={Weekday}
               time_from={time_from} 
               time_to={time_to} 
               onSetWeekday={setWeekday}
               onSetTimeFrom={setTime_from}
               onSetTimeTo={setTime_to}
             />
          </Form.FormFields>
        </FormContainer>
        <Form.FormFooter />
      </form>
    </section>
  );
}

export const GiveClasses = memo(GiveClassesComponent);