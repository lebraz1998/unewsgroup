import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import MoreVertSharp from "@mui/icons-material/MoreVertSharp";
import { Url } from "../../types/url";
import DeleteDialog from "./delete.dashboard";
import AddUrlModal from "./add.dashboard";
import Add from "@mui/icons-material/Add";
import { Tag } from "../../types/tag";
import moment from "moment";
import { useRouter } from "next/router";

export default function TableComponent({
  urls,
  tags,
}: {
  urls: Url[];
  tags: Tag[];
}) {
  const [modal, setModal] = useState<any>([]);
  return (
    <div id="table" style={{ height: 500 }}>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <IconButton
          onClick={() => {
            setModal([
              <AddUrlModal
                key={"sadasda"}
                url={{ created: Date.now(), imgUrl: "", title: "", url: "" }}
                onCallBack={() => {
                  setModal([]);
                }}
              />,
            ]);
          }}
        >
          <Add />
        </IconButton>
      </div>
      {modal}
      <DataGrid
        rows={urls.map((res) => ({
          col2: res,
          id: res.id,

          col1: res.title,
          col3: res.url,
          col4: moment(res.created).format("DD-MM-yyy hh:mm a"),
        }))}
        columns={columns}
      />
    </div>
  );
}
const columns: GridColDef[] = [
  {
    filterable: false,

    width: 60,
    field: "col2",
    headerName: "",
    renderCell: (param) => {
      return <ListMenu {...param.value}></ListMenu>;
    },
  },

  { field: "col1", headerName: "Title", width: 200 },
  { field: "col3", headerName: "Url", width: 160 },
  { field: "col4", headerName: "Created", width: 160 },
];

const ListMenu = (props: Url) => {
  const selector = useAppSelector((e) => e.dashboard);
  const { reload } = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [modal, setModal] = useState<any[]>([]);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    setModal([
      <DeleteDialog
        key={Date.now()}
        url={props}
        onCallBack={() => {
          setModal([]);
          handleClose();
        }}
      />,
    ]);
  };
  const handleOnPress = () => {
    setModal([
      <AddUrlModal
        key={Date.now()}
        url={props}
        onCallBack={() => {
          setModal([]);
          handleClose();
        }}
      />,
    ]);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (selector.updateDashboardState !== 0) {
      reload();
    }
  }, [selector.updateDashboardState, reload]);

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertSharp />
      </IconButton>
      {modal}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleOnPress}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </>
  );
};
