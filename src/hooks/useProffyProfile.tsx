// import { useState, useEffect, useContext, createContext, ReactNode } from "react";
// import { ProffyInfo } from "../Utils/schoolData";
// import { api } from "../api";

// interface ProffyProfileContextData {
//   proffyProfile: ProffyInfo[],
// }

// const ProffyProfileContext = createContext<ProffyProfileContextData>(
//   {} as ProffyProfileContextData);

// interface UseProffyProfileProps {
//   children: ReactNode,
// }

// export function ProffyProfileProvider({children}:UseProffyProfileProps){
//   const [proffyProfile, setProffyProfile] = useState<ProffyInfo[]>([]);

//   useEffect(() => {
//     async function getProffyData() {
//       try {
//         const response = await api.get('/study');
//         setProffyProfile(response.data);
//       } catch (error) {
//         console.log("Erro: " + error);
//       }
//     }
//     getProffyData();
//   }, []);

//   return (
//     <ProffyProfileContext.Provider value={{ proffyProfile }}>
//       {children}
//     </ProffyProfileContext.Provider>
//   )
// }

// export function useProffyProfile() {
//   return useContext(ProffyProfileContext);
// }
