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

