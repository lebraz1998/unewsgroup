import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux.hooks";
import MoreVertSharp from "@mui/icons-material/MoreVertSharp";
import DeleteDialog from "./delete.tag";
import Add from "@mui/icons-material/Add";
import AddTagModal from "./add.tag";
import { Tag } from "../../types/tag";

export default function TableComponent({ tags }: { tags: Tag[] }) {
  const [modal, setModal] = useState<any>([]);
  return (
    <div id="table" style={{ height: 500 }}>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <IconButton
          onClick={() => {
            setModal([
              <AddTagModal
                tag={{ title: ""}}
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
        rows={tags.map((res) => ({
          col2: res,
          id: res.id,
          col1: res.title,
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
];

const ListMenu = (props: Tag) => {
  const dispatch = useAppDispatch();

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
        tag={props}
        onCallBack={() => {
          setModal([]);
          handleClose();
        }}
      />,
    ]);
  };
  const handleOnPress = () => {
    setModal([
      <AddTagModal
        key={Date.now()}
        tag={props}
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
