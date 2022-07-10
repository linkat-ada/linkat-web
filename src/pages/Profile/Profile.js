import React, { useState, useEffect } from "react";
import "./profile.css";
import { getUserInfoAction } from "../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, Stack } from "@mui/material";
import { getUserLinksAction } from "../../redux/actions/links";
import { Avatar } from "@mui/material";
import Link from "../../components/Link/Link";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reoderLinksAction } from "../../redux/actions/links";

const Profile = () => {
  const [linksArr, setLinksArr] = useState([]);
  const dispatch = useDispatch();
  let links = useSelector((state) => state?.links?.links);

  const swap = (i, j, arr) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    if (!Array.isArray(links) && links?.length == 0) return;
    const order = links.map((link) => link?.order);
    console.log(order);
    swap(result.source.index-1, result.destination.index-1, order);
    console.log(order);
    reoderLinks(order);
    console.log(result.source.index, result.destination.index);
  };
  const user = useSelector((state) => state?.auth?.data?.user);
  const sortLinks = (links) => {
    if (Array.isArray(links) && links?.length > 0)
      return links.sort((a, b) => a.order - b.order);
  };

  const getUserInfo = async () => {
    await dispatch(getUserInfoAction())
      .then(() => console.log("getUserInfoAction", "sucess"))
      .catch((err) => console.error(err));
  };
  const getUserLinks = async () => {
    await dispatch(getUserLinksAction())
      .then(() => console.log("getUserLinksAction", "sucess"))
      .catch((err) => console.error(err));
  };
  const reoderLinks = async (order) => {
    await dispatch(reoderLinksAction({ newOrder: order }))
      .then(() => console.log("reoder links action", "sucess"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUserInfo();
    getUserLinks();
  }, []);

  console.log(links);

  return (
    <div className="profile">
      <div className="container">
        <img className="bgpic" src={user?.usersprofile?.bgPic} />
        <Avatar
          sx={{
            m: "0 auto",
            mt: "-2em",
            width: "6em",
            height: "6em",
            mb: "4px",
          }}
          src={user?.usersprofile?.profilePic}
        />
        <div className="profile-name-bio">
          <Typography variant="h4" component="h2" color="dark">
            {user?.username || "linkat"}
          </Typography>
          {user?.usersprofile.nickname && (
            <Typography variant="h6" component="h2" color="dark">
              {user?.usersprofile.nickname}
            </Typography>
          )}
          {user?.usersprofile.bio && (
            <Typography
              sx={{
                textAlignLast: "center",
                textTransform: "capitalize",
                whiteSpace: "wrap",
              }}
              variant="p"
              component="p"
              color="dark"
              p="1em 10em 2em 10em"
              size="small"
            >
              {user?.usersprofile.bio}
            </Typography>
          )}
        </div>
        <Box>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <Stack
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="characters"
                  sx={{ m: "0 4em" }}
                  spacing={2}
                  elevation={3}
                >
                  {links &&
                    sortLinks(links)?.map((links, i) => (
                      <Draggable
                        key={links?.id}
                        draggableId={String(links?.order)}
                        index={links?.order}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Link
                              key={links?.id}
                              icon={links?.linktype?.icon}
                              type={links?.linktype?.type}
                              url={links?.url}
                              id={links?.id}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </Stack>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
