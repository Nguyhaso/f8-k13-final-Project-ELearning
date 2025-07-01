import {createContext, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {LoadingScreen} from "../index.tsx";
import {decode, getNewToken, type TableContextType, type UserProps} from "../../ulti";


export const TableContext = createContext<TableContextType | null>(null)
export default function ProtectedLayout({children}: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserProps>(
    {
      id: 1,
      name: 'admin',
      email: 'admin@gmail',
      role: 'admin',
      avata: {
        id:  1,
        url:  'https://via.placeholder.com/150'
      }
    })
  ;

  const location = useLocation();
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const provider = {accessToken, refreshToken, loading, setLoading, user}
  const publicPaths = ["/login", "/register"];

  useEffect(() => {
      const checkToken = async () => {
        const currentPath = location.pathname;
        if (publicPaths.includes(currentPath)) {
          setLoading(false);
          return;
        }
        if (!accessToken || !refreshToken) {
          navigate('/login');
          return null;
        }

        try {
          const decoded: any = decode(accessToken);
          const now = Date.now() / 1000;
          if (decoded.exp < now) {
            const newTokenData = await getNewToken(refreshToken);
            localStorage.setItem('accessToken', newTokenData.data.access);
            console.warn("Access token expired");
            return;
          }

          setUser({
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            role: decoded.role,
            avata: decoded.avata,
          });
        } catch (e) {
          console.error("Invalid token");
          navigate("/login");
          return;
        } finally {
          setLoading(false);
        }
        setLoading(false);

      }
      checkToken().catch(console.error);
    }, []
  )
  ;

  if (loading) {
    return (
      <LoadingScreen/>
    );
  }


  return <TableContext.Provider value={provider}>{children}</TableContext.Provider>;
}
