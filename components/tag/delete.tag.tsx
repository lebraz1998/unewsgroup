import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import { useAppDispatch } from "../../hooks/redux.hooks";
import { setDashboardUpdating } from "../../providers/slices/dashboard";
import { useRouter } from "next/router";
import { Tag } from "../../types/tag";

type ModalProps = {
  tag: Tag;
  onCallBack: () => void;
};

export default function DeleteDialog({ tag, onCallBack }: ModalProps) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(false);
  const { replace } = useRouter();

  const handleClose = () => {
    onCallBack();
  };
  const handleDelete = () => {
    setLoading(true);
    axios.delete(`/api/tag/${tag.id}`).then((res) => {
      dispatch(setDashboardUpdating());
      onCallBack();
    }).catch(e=>{
      console.log(e);
      //replace('/login');
    });
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {loading ? <LinearProgress color="info" /> : <></>}
        <DialogTitle id="responsive-dialog-title">
          Delete App
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete App Data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDelete} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
