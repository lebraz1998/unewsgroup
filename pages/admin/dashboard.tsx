import { NextRequest } from "next/server";
import { DashboardStyled } from "../../styles/dashboard";
import { prisma} from '../../prisma/prisma'
import AdminLayout from "../../components/layouts/Admin.layouts";
import TableComponent from "../../components/dashboard/table.component";
import { Typography } from "@mui/material";
export async function getServerSideProps({ req }: { req: NextRequest }) {
  return {
    props: {
      result: (await prisma.url.findMany()),
    }, // will be passed to the page component as props
  };
}
export default function DashboardPage(props) {
  return (
    <AdminLayout>
      <DashboardStyled>
        <Typography variant="h5" sx={{ padding: 3}}>Apps</Typography>
        <TableComponent urls={props.result} />
      </DashboardStyled>
    </AdminLayout>
  );
}
