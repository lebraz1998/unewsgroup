import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import { StyledAddModal } from "../../styles/dashboard";
import axios from "axios";
import { useAppDispatch } from "../../hooks/redux.hooks";
import { setDashboardUpdating } from "../../providers/slices/dashboard";
import { useRouter } from "next/router";
import { Tag } from "../../types/tag";

type ModalProps = {
  tag: Tag;
  edit?: boolean;
  onCallBack: () => void;
};
export default function AddTagModal({ tag, onCallBack }: ModalProps) {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { replace } = useRouter();
  return (
    <Dialog open={true} onClose={onCallBack} fullScreen>
      <StyledAddModal>
        <Backdrop
          sx={{
            zIndex: (theme) => theme.zIndex.modal - 1,
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
          open={loading}
        >
          <LinearProgress color="info" style={{ width: "100%" }} />
        </Backdrop>{" "}
        <Box
          id="add-event-modal"
          component="form"
          onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            var newtag = {
              title: data.get("title"),
            };
            setLoading(true);

            if (tag.id) {
                  axios
                    .put(`/api/tag/${tag.id}`, newtag)
                    .then((res) => {
                      dispatch(setDashboardUpdating());
                      onCallBack();
                    })
                    .catch((e) => {
                      // replace("/login");
                    });
            } else {
                axios
                  .post("/api/tag", newtag)
                  .then((res) => {
                    dispatch(setDashboardUpdating());
                    onCallBack();
                  })
                  .catch((e) => {
                    console.log(e);
                    // replace("/login");
                  });
            }
          }}
        >
          <DialogTitle>Tag Details</DialogTitle>
          <DialogContent style={{ maxWidth: 800 }}>
            <DialogContentText marginBottom={2}>
              To add Tag data to the tabe, please enter all required fields.
            </DialogContentText>
            <Grid container spacing={1}>
              <GridModal keys={"4"} full>
                <TextField
                  margin="dense"
                  id="title"
                  name="title"
                  defaultValue={tag.title}
                  label="Tag Title"
                  type="text"
                  fullWidth
                  variant="outlined"
                  required
                />
              </GridModal>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={onCallBack}>
              Cancel
            </Button>
            {tag.id ? (
              <>
                <Button variant="contained" type="submit">
                  Save
                </Button>
              </>
            ) : (
              <Button variant="contained" type="submit">
                Add
              </Button>
            )}
          </DialogActions>
        </Box>
      </StyledAddModal>
    </Dialog>
  );
}

const GridModal = ({
  children,
  keys,
  full,
}: {
  children: JSX.Element;
  keys: string;
  full?: boolean;
}) => (
  <Grid key={keys} xs={12} md={full ? 12 : 6} item>
    {children}
  </Grid>
);
