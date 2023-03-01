import useFetch from "../API/FetchUrl";
//import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { apiKey } from "../API/Constant";
import { baseApiUrl } from "../API/Constant";
import { CircularProgress, Alert } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

export default function Trailer(props) {
  let url = `${baseApiUrl}/${props.group}/${props.id}/videos?api_key=${apiKey}&language=en-US`;
  const { data, loading, error } = useFetch(url);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    isDataAvailable &&
    data.results.map((video) => {
      if (
        video.name == "Main Trailer" ||
        video.name == "Official Trailer" ||
        video.name == "Final Trailer"
      ) {
        return (
          <section>
                <div className="trailer-wrapper" >
                  <iframe style={{width:"450px", height:"300px"}}
                    id="trailer"
                    src={"https://www.youtube.com/embed/" + video.key}
                    title={video.name}
                  ></iframe>
                </div>
          </section>
        );
      }
    })
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Modal from "@mui/material/Modal";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// export default function TrailerModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Do you want to see trailer?</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//             Do you want to see trailer?
//           </Typography> */}
//           <div className="trailer-wrapper" >
//             <iframe
//               id="trailer"
//               src={"https://www.youtube.com/embed/" + video.key}
//               title={video.name}
//             ></iframe>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
