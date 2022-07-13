import { useEffect, useState } from "react";
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
import { Url } from "../../types/url";
import Autocomplete from "@mui/material/Autocomplete";
import { tag } from "../../src/generated/client";

type ModalProps = {
  url: Url;
  edit?: boolean;
  onCallBack: () => void;
};
export default function AddUrlModal({ url, onCallBack }: ModalProps) {
  const [tags, setTags] = useState<tag[]>([]);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<any>();
  const [tag, setTag] = useState<any>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    setLoading(true);
    axios.get("/api/tag").then((res) => {
      setTags(res.data);
      setLoading(false);
    });
  }, [url.tagID]);
  console.log(tag);
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
        {
          <Box
            id="add-event-modal"
            component="form"
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              var newurl = {
                title: data.get("title"),
                url: data.get("url"),
                imgUrl: "",
                tagID: tag ? tag.id : url.tagID,
              };

              setLoading(true);

              if (url.id) {
                axios.delete("/api/image?id=" + url.imgUrl).then((res) => {
                  if (image) {
                    axios.post("/api/image", image).then((res) => {
                      newurl.imgUrl = res.data;
                      axios
                        .put(`/api/add/${url.id}`, newurl)
                        .then((res) => {
                          dispatch(setDashboardUpdating());
                          onCallBack();
                        })
                        .catch((e) => {
                          // replace("/login");
                        });
                    });
                  } else {
                    axios
                      .put(`/api/add/${url.id}`, newurl)
                      .then((res) => {
                        dispatch(setDashboardUpdating());
                        onCallBack();
                      })
                      .catch((e) => {
                        // replace("/login");
                      });
                  }
                });
              } else {
                if (image) {
                  axios.post("/api/image", image).then((res) => {
                    newurl.imgUrl = res.data;
                    axios.post("/api/add", newurl).then((res) => {
                      dispatch(setDashboardUpdating());
                      onCallBack();
                    });
                  });
                } else {
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
                }
              }
            }}
          >
            <DialogTitle>App Details</DialogTitle>
            <DialogContent style={{ maxWidth: 800 }}>
              <DialogContentText marginBottom={2}>
                To add App data to the tabe, please enter all required fields.
              </DialogContentText>
              <Grid container spacing={1}>
                <GridModal keys={"asdas"} full>
                  <TextField
                    type={"file"}
                    onChange={(e) => {
                      console.log();
                      const formData = new FormData();
                      formData.append(
                        "image",
                        (e.target as any).files[0],
                        (e.target as any).files[0].name,
                      );
                      setImage(formData);
                    }}
                  />
                </GridModal>
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
                    label="App URL"
                    type="text"
                    fullWidth
                    variant="outlined"
                    required
                  />
                </GridModal>
                {
                  <GridModal keys={"312412"} full>
                    <Autocomplete
                      multiple
                      limitTags={1}
                      options={tags}
                      fullWidth
                      getOptionLabel={(option) => option.title}
                      value={tags.filter((res) => res.id === url.tagID)}
                      onChange={(e, newValue) => {
                        setTag(newValue.length > 0 ? newValue[0] : []);
                      }}
                      autoComplete={false}
                      renderInput={(params) => (
                        <TextField
                          maxRows={1}
                          defaultValue={tags.filter(
                            (res) => res.id === url.tagID,
                          )}
                          {...params}
                          label="tag"
                          id="tag"
                          name="tag"
                        />
                      )}
                    />
                  </GridModal>
                }
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
        }
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
