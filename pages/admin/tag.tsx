import { DashboardStyled } from "../../styles/dashboard";
import { prisma } from "../../prisma/prisma";
import AdminLayout from "../../components/layouts/Admin.layouts";
import Typography from "@mui/material/Typography";
import { checkCookies, getCookie, removeCookies } from "cookies-next";
import { verify } from "jsonwebtoken";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux.hooks";
import axios from "axios";
import { LinearProgress } from "@mui/material";
import { Tag } from "../../types/tag";
import TableComponent from "../../components/tag/table.component";

export async function getServerSideProps({ req, res }: any) {
  const value = getCookie("token", { req, res });
  if (!value || checkCookies("token")) {
    removeCookies("token", { req, res });
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  try {
    verify(value as string, "213124124124124");
  } catch (error) {
    console.log(error);

    removeCookies("token", { req, res });

    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      result: await prisma.tag.findMany(),
      token: value,
    }, // will be passed to the page component as props
  };
}
export default function DashboardPage(props) {
  const state = useAppSelector((E) => E.dashboard);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Tag[]>([]);
  useEffect(() => {
    if (state.updateDashboardState !== 0) {
      setLoading(true);
      axios.get("/api/tag").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
  }, [state.updateDashboardState]);

  return (
    <AdminLayout>
      <DashboardStyled>
        {loading && <LinearProgress id="loading" />}

        <Typography variant="h5" sx={{ padding: 3 }}>
          Tags
        </Typography>
        <TableComponent tags={data.length > 0 ? data : props.result} />
      </DashboardStyled>
    </AdminLayout>
  );
}
