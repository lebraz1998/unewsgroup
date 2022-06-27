import { NextRequest } from "next/server";
import { DashboardStyled } from "../../styles/dashboard";
import { prisma } from "../../prisma/prisma";
import AdminLayout from "../../components/layouts/Admin.layouts";
import TableComponent from "../../components/dashboard/table.component";
import Typography from "@mui/material/Typography";
import { checkCookies, getCookie, removeCookies } from "cookies-next";
import { verify } from "jsonwebtoken";

export async function getServerSideProps({ req, res }: any) {
  const value = getCookie("token", { req, res });
  if (!value || checkCookies("token")) {
    console.log("asdas");

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
      result: await prisma.url.findMany(),
      token: value,
    }, // will be passed to the page component as props
  };
}
export default function DashboardPage(props) {
  return (
    <AdminLayout>
      <DashboardStyled>
        <Typography variant="h5" sx={{ padding: 3 }}>
          Apps
        </Typography>
        <TableComponent urls={props.result} />
      </DashboardStyled>
    </AdminLayout>
  );
}
