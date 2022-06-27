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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import axios from "axios";
import { useAppDispatch } from "../../hooks/redux.hooks";
import { setDashboardUpdating } from "../../providers/slices/dashboard";
import { useRouter } from "next/router";
import { Url } from "../../types/url";

type ModalProps = {
  url: Url;
  edit?: boolean;
  onCallBack: () => void;
};
export default function AddUrlModal({ url, onCallBack }: ModalProps) {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState();
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
            let newurl;
              newurl = {
                title: parseInt(data.get("title") as any),
                url: parseInt(data.get("url") as any),
                createDate: new Date(
                  data.get("createDate") as string,
                ).getTime(),
              };
            setLoading(true);
            if (url.id) {
              axios
                .put(`/api/add/${url.id}`, newurl)
                .then((res) => {
                  dispatch(setDashboardUpdating());
                  onCallBack();
                })
                .catch((e) => {
                  // replace("/login");
                });
            } else
              axios
                .post("/api/add", newurl)
                .then((res) => {
                  dispatch(setDashboardUpdating());
                  onCallBack();
                })
                .catch((e) => {
                  console.log(e);
                  // replace("/login");
                });
          }}
        >
          <DialogTitle>App Details</DialogTitle>
          <DialogContent style={{ maxWidth: 800 }}>
            <DialogContentText marginBottom={2}>
              To add App data to the tabe, please enter all required
              fields.
            </DialogContentText>
            <Grid container spacing={3}>
                    <GridModal keys={"4"} full>
                      <TextField
                        margin="dense"
                        id="title"
                        name="title"
                        defaultValue={url.title}
                        label="App Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        required
                      />
                    </GridModal>
                    <GridModal keys={"7"} full>
                      <TextField
                        margin="dense"
                        id="url"
                        name="url"
                        defaultValue={url.url}
                        label="App Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        required
                      />
                    </GridModal>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <GridModal keys={"21999233"} full>
                      <DatePicker
                        label="Date"
                        value={date}
                        onChange={(
                          f: any,
                          keyboardInputValue?: string,
                        ): void => {
                          setDate(f);
                        }}
                        renderInput={(params) => (
                          <TextField
                            fullWidth
                            required
                            name="createDate"
                            {...params}
                          />
                        )}
                      />
                    </GridModal>
                  </LocalizationProvider>
                </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={onCallBack}>
              Cancel
            </Button>
            {url.id ? (
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
