// SwitchComponents.js:

import React from "react";
import { useParams } from "react-router-dom";
import {
  ChangeProfilePic,
  ChangeEmail,
  ChangePassword,
  ChangeProfile,
  ChangeUsername,
  ChangeBgPic,
} from "../EditProfile/index";

export default function SwitchComponents({ option }) {
  console.log(option)
  let optionCompoenet = null;
  switch (option) {
    case "changeprofilepic":
      optionCompoenet = <ChangeProfilePic name="ChangeProfilePic" />;
      break;
    case "changepassword":
      optionCompoenet = <ChangePassword name="ChangeProfilePic" />;
      break;
    case "changemail":
      optionCompoenet = <ChangeEmail name="ChangeEmail" />;
      break;
    case "changeprofile":
      optionCompoenet = <ChangeProfile name="changeprofile" />;
      break;
    case "changebgpic":
      optionCompoenet = <ChangeBgPic name="ChangeBgPic" />;
    case "changeusername":
      optionCompoenet = <ChangeUsername name="ChangeUsername" />;
    default:
      optionCompoenet = <ChangeProfilePic name="ChangeProfilePic" />;
      break;
  }
  return <div>{ optionCompoenet }</div>;
}
