import React, { useState } from "react";
import "./AccountInfo.css";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { DrawerOpen } from "../DrawerOpen";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function AccountInfo() {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const [sub, setSub] = useState(false);
  const [open, setOpen] = useState(false);

  // console.log(data);
  // console.log(change);
  return (
    <div id="accInfo">
      <button
        id="open-dash"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Dashboard
      </button>

      <DrawerOpen open={open} setOpen={setOpen} />

      <p id="accInfo-t-1">User Information</p>

      <div id="accInfo-texts">
        <form
          id="accInfo-form"
          onSubmit={(e) => {
            e.preventDefault();

            if (
              e.target.firtsname.value !== "" &&
              e.target.lastname.value !== "" &&
              e.target.email.value !== "" &&
              e.target.gender.value !== "" &&
              e.target.birthday.value !== ""
            ) {
              const firstname = e.target.firtsname.value;
              const lastname = e.target.lastname.value;
              const email = e.target.email.value;
              const birthday = e.target.birthday.value;
              const gender = e.target.gender.value;

              setData({ firstname, lastname, email, birthday, gender });

              e.target.firtsname.value = "";
              e.target.lastname.value = "";
              e.target.email.value = "";
              e.target.birthday.value = "";
              e.target.gender.value = "";
            } else {
              setSub(true);
            }

            // console.log(data[1]);
          }}
        >
          <label id="FormInput">
            <span>First name</span>
            <input type="text" name="firtsname" />
          </label>

          <label id="FormInput">
            <span>Last name</span>
            <input type="text" name="lastname" />
          </label>

          <label id="FormInput">
            <span>Email</span>
            <input type="text" name="email" />
          </label>

          <span>Gender</span>

          <div id="gender">
            <label>
              <input type="radio" name="gender" value="male" />
              <span>Male</span>
            </label>

            <label>
              <input type="radio" name="gender" value="famale" />
              <span>Famale</span>
            </label>
          </div>

          <label id="FormInput">
            <span>Date of birth</span>
            <input type="date" name="birthday" />
          </label>

          {sub === true ? (
            <div>
              <p>Fill Everything</p>

              <button
                onClick={() => {
                  setSub(false);
                }}
              >
                contiune
              </button>
            </div>
          ) : (
            ""
          )}

          <div id="accInfo-another">
            <Button
              id="change-pass"
              name="signInBtn"
              onClick={(e) => {
                setChange(true);
                window.scrollTo(0, 0);

                if (change === true) {
                  e.target.firtsname.value = data.firstname;
                  e.target.lastname.value = data.lastname;
                  e.target.email.value = data.email;
                  e.target.birthday.value = data.birthday;
                  e.target.gender.value = "";
                }
              }}
            >
              Change password
            </Button>
            {/* <div id="sds"> */}
            <label id="sub">
              <Checkbox
                {...label}
                sx={{
                  color: pink[800],
                  "&.Mui-checked": {
                    color: pink[600],
                  },
                }}
              />
              <p>Newsletter subsciption</p>
            </label>
            {/* </div> */}
          </div>

          <div id={change ? "accInfo-form-2" : "accInfo-form-none"}>
            <label id="FormInput">
              <span>Current Password</span>
              <input type="password" name="currentPass" />
            </label>

            <label id="FormInput">
              <span>New password</span>
              <input type="password" name="newPass" />
            </label>

            <label id="FormInput">
              <span>Confirm new password</span>
              <input type="password" name="confirmNewPass" />
            </label>
          </div>

          {change ? (
            <Button
              type="submit"
              id="accInfo-btn"
              onClick={() => {
                if (change === false) {
                  console.log("change = false");
                } else {
                  console.log("change = true");
                }
                setChange(false);
              }}
            >
              SAVE CHANGES
            </Button>
          ) : (
            <Button
              type="submit"
              name="signInBtn"
              id="accInfo-btn"
              onClick={() => {
                if (change === false) {
                  console.log("change = false");
                } else {
                  console.log("change = true");
                }
              }}
            >
              SIGN IN
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
