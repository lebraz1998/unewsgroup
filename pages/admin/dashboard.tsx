import { NextRequest } from "next/server";
import { Prisma } from "../../src/generated/client";
import { DashboardStyled } from "../../styles/dashboard";
import { prisma } from "../../prisma/prisma";

export async function getServerSideProps({ req }: { req: NextRequest }) {
  return {
    props: {
      ...(await prisma.url.findMany()),
    }, // will be passed to the page component as props
  };
}
export default function DashboardPage(props) {
  console.log(props);
  return <DashboardStyled></DashboardStyled>;
}
