export interface UserProps {
  id: number;
  name: string;
  email: string;
  role: string;
  avata: {
    id: number | null;
    url: string | null;
  };
}

export interface EheaderProps {
  pageName?: string;
  user: UserProps
}

export interface TableContextType {
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserProps | null;
}

export interface ClassInfor {
  id: number,
  code: string,
  name: string,
  users: UserClassInfor[],
}

export interface UserClassInfor {
  id: number;
  name: string;
  status: string;
  role: string;
}

export interface ExamGroupInfor {
  id: number,
  name: string,
  clas: number,
  start_time: string,
  await_time: number,
  created_at: string,
  is_once: boolean,
  is_save_local: boolean
}

export interface ExamGroupPayload{
  name: string;
  await_time: number;
  start_time: string;

}

interface questionProp{
  type: string;
  correct_answer: string;
  index: number;
}

export interface examPayloadProp{
  name: string;
  code: string;
  exam_group: number;
  number_of_question: number;
  total_time: number;
  correct_answer: {};
  question: questionProp[] ;
  description: string;
  file: string;
  deleted_question: string;
}

export interface payloadErrorProp {
  name?: string | null;
  code?: string | null;
  total_time?: string | null;
  number_of_question?: string | null;
}