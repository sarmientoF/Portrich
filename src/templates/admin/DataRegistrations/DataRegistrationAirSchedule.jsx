// import React, { useState, useCallback } from "react";
// import classes_1 from "../../../dist/css/dataentrys.module.css";
// import { TextInput } from "../../../components/Uikit";
// import { useDispatch } from "react-redux";
// import { push } from "connected-react-router";
// import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";
// import { makeStyles } from "@material-ui/core/styles";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import InputAdornment from "@material-ui/core/InputAdornment";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiTextField-root": {
//       margin: theme.spacing(1),
//       width: "21ch",
//     },
//   },
//   root2: {
//     "& .MuiTextField-root": {
//       marginTop: theme.spacing(1),
//       marginBottom: theme.spacing(1),
//       marginRight: theme.spacing(1.5),
//       width: "17.5ch",
//     },
//   },
// }));

// const DataRegistrationShipSchedule = () => {
//   const dispatch = useDispatch();
//   const classes = useStyles();

//   // const [companyname, setCompanyname] = useState("");
//   // const [username, setUsername] = useState("");
//   // const [hurigana, setHurigana] = useState("");
//   // const [tel, setTel] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");

//   // const inputCompanyname = useCallback(
//   //   (e) => {
//   //     setCompanyname(e.target.value);
//   //   },
//   //   [setCompanyname]
//   // );

//   // const inputUsername = useCallback(
//   //   (e) => {
//   //     setUsername(e.target.value);
//   //   },
//   //   [setUsername]
//   // );

//   // const inputHurigana = useCallback(
//   //   (e) => {
//   //     setHurigana(e.target.value);
//   //   },
//   //   [setHurigana]
//   // );

//   // const inputTel = useCallback(
//   //   (e) => {
//   //     setTel(e.target.value);
//   //   },
//   //   [setTel]
//   // );

//   // const inputEmail = useCallback(
//   //   (e) => {
//   //     setEmail(e.target.value);
//   //   },
//   //   [setEmail]
//   // );

//   // const inputPassword = useCallback(
//   //   (e) => {
//   //     setPassword(e.target.value);
//   //   },
//   //   [setPassword]
//   // );

//   // const inputConfirmPassword = useCallback(
//   //   (e) => {
//   //     setConfirmPassword(e.target.value);
//   //   },
//   //   [setConfirmPassword]
//   // );

//   const [customername, setCustomerName] = React.useState("");
//   const [company, setCompany] = React.useState("");
//   const [containertype, setContainerType] = React.useState("");
//   const [thc, setThc] = React.useState("");
//   const [docfee, setDocFee] = React.useState("");
//   const [sealfee, setSealFee] = React.useState("");

//   const handleChangeCustomerName = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setCustomerName(event.target.value);
//   };
//   const handleChangeCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCompany(event.target.value);
//   };
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setContainerType(event.target.value);
//   };
//   const handleChangeThc = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setThc(event.target.value);
//   };
//   const handleChangeDocFee = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setDocFee(event.target.value);
//   };
//   const handleChangeSealFee = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSealFee(event.target.value);
//   };

//   return (
//     <div className={classes.root}>
//       <div className={classes_1.block}>
//         <div className={classes_1.block_title}>スケジュール登録(船)</div>
//         <div className={classes_1.block_body}>
//           <div className={classes_1.block_sub_title}>スケジュール</div>
//           <div className={classes_1.flex_box}>
//             <TextField
//               id=""
//               select
//               label="船会社名"
//               value={company}
//               onChange={handleChangeCompany}
//               variant="outlined"
//             >
//               {companys.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//             <Autocomplete
//               id="combo-box-demo"
//               margin="dense"
//               options={countryName}
//               getOptionLabel={(option) => option.title}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="空港名(From)"
//                   variant="outlined"
//                 />
//               )}
//             />
//             <Autocomplete
//               id="combo-box-demo"
//               options={countryName}
//               getOptionLabel={(option) => option.title}
//               renderInput={(params) => (
//                 <TextField {...params} label="空港名(To)" variant="outlined" />
//               )}
//             />
//             <Autocomplete
//               id="combo-box-demo"
//               margin="dense"
//               options={countryName}
//               getOptionLabel={(option) => option.title}
//               renderInput={(params) => (
//                 <TextField {...params} label="経由空港" variant="outlined" />
//               )}
//             />
//             <TextField id="" label="飛行機名" type="text" variant="outlined" />
//             {/* <TextField id="" label="Voyage No" type="text" variant="outlined" /> */}
//           </div>
//           <div className={classes_1.mt20}></div>
//           <div className={classes_1.flex_box}>
//             <TextField
//               id=""
//               label="出発日"
//               type="date"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               variant="outlined"
//             />
//             <TextField
//               id=""
//               label="到着日"
//               type="date"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               variant="outlined"
//             />
//             <TextField
//               id=""
//               label="Transit Days"
//               type="number"
//               variant="outlined"
//             />
//           </div>
//           <div className={classes_1.flex_box}>
//             <TextField
//               id=""
//               label="OPEN"
//               type="date"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               variant="outlined"
//             />
//             <TextField
//               id=""
//               label="CUT"
//               type="date"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               variant="outlined"
//             />
//           </div>
//           <div className={classes_1.form_area}>
//             <div className={classes_1.submit_area}>
//               <input
//                 type="submit"
//                 className={classes_1.submit}
//                 value="見積を登録"
//                 onClick={() => dispatch(push("/signup_confirm"))}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const customernames = [
//   { value: "a", label: "A社" },
//   { value: "b", label: "B社" },
//   { value: "c", label: "C社" },
// ];
// const companys = [
//   { value: "maersk", label: "MAERSK" },
//   { value: "cma_cgm", label: "CMA CGM" },
//   { value: "sealand_a_maersk", label: "SEARAND A MAERSK" },
//   { value: "one", label: "ONE" },
//   { value: "evergreen", label: "EVERGREEN" },
//   { value: "cosco", label: "COSCO" },
//   { value: "oocl", label: "OOCL" },
//   { value: "zim", label: "ZIM" },
//   { value: "hapag", label: "HAPAG" },
//   { value: "wan_hai", label: "WAN HAI" },
//   { value: "kmtc", label: "KMTC" },
//   { value: "yang_ming", label: "YANG MING" },
//   { value: "inter_asia", label: "INTER ASIA" },
//   { value: "dong_young", label: "DONG YOUNG" },
//   { value: "namsung", label: "NAMSUNG" },
//   { value: "hamburg_sud", label: "HAMBRUG_SUD(センワマリタイム)" },
//   { value: "hapag_lloyd", label: "HAPAG LIOYD" },
//   { value: "heung_a_line", label: "HEUNG A LINE " },
//   { value: "namsung", label: "NAMSUNG" },
//   { value: "hyundai", label: "HYUNDAI" },
//   { value: "dongjin", label: "DONGJIN" },
//   { value: "ningbo", label: "NINGBO" },
//   { value: "sinotrans", label: "SINOTRANS" },
//   { value: "sitc", label: "SITC" },
//   { value: "t_s_line", label: "T.S LINE(ホームリンガ商会)" },
//   { value: "zin_line", label: "ZIN LINE" },
// ];
// const countryName = [
//   { title: "Kobe Japan", value: 1 },
//   { title: "Tokyo Japan", value: 2 },
//   { title: "Osaka Japan", value: 3 },
// ];
// const cargName = [
//   { title: "新車", value: 1 },
//   { title: "中古車", value: 2 },
//   { title: "家具", value: 3 },
//   { title: "線維", value: 4 },
// ];

// const containerTypes = [
//   { value: "20 D S", label: "20 Dry Standard" },
//   { value: "40 D S", label: "40 Dry Standard" },
//   { value: "40 D H", label: "40  Dry High" },
//   { value: "20 R S", label: "20 Reefer Standard" },
//   { value: "40 R S", label: "40 Reefer Standard" },
// ];
// const thcs = [
//   { value: "32000", label: "32000" },
//   { value: "33000", label: "33000" },
//   { value: "33100", label: "33100" },
//   { value: "35000", label: "35000" },
//   { value: "34000", label: "34000" },
//   { value: "35000", label: "35000" },
//   { value: "35000", label: "35000" },
//   { value: "45000", label: "45000" },
//   { value: "46000", label: "46000" },
//   { value: "47000", label: "47000" },
//   { value: "48000", label: "48000" },
//   { value: "48800", label: "48800" },
//   { value: "49000", label: "49000" },
// ];
// const docfees = [
//   { value: "4400", label: "4400" },
//   { value: "6600", label: "6600" },
//   { value: "7700", label: "7700" },
// ];
// const sealfees = [
//   { value: "1000", label: "1000" },
//   { value: "1500", label: "1500" },
// ];
// export default DataRegistrationShipSchedule;
