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
// import Checkbox from "@material-ui/core/Checkbox";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

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

// const DataRegistrationAirExport = () => {
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
//   const [cargname, setCargName] = React.useState("");
//   const [carrier, setCarrier] = React.useState("");
//   const [containertype, setContainerType] = React.useState("");
//   const [thc, setThc] = React.useState("");
//   const [docfee, setDocFee] = React.useState("");
//   const [sealfee, setSealFee] = React.useState("");

//   const handleChangeCustomerName = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setCustomerName(event.target.value);
//   };
//   const handleChangeCargName = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCargName(event.target.value);
//   };
//   const handleChangeCarrier = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCarrier(event.target.value);
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
//         <div className={classes_1.block_title}>輸出（飛行機）</div>
//         <div className={classes_1.block_body}>
//           <div className={classes_1.flex_box}>
//             <TextField
//               id=""
//               select
//               label="航空会社"
//               value={carrier}
//               onChange={handleChangeCarrier}
//               variant="outlined"
//             >
//               {carriers.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </div>
//           <div className={classes_1.block_sub_title}>見積</div>
//           <div className={classes_1.flex_box}>
//             <TextField
//               id=""
//               select
//               label="顧客名"
//               value={customername}
//               onChange={handleChangeCustomerName}
//               variant="outlined"
//             >
//               {customernames.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </div>
//           <div className={classes_1.flex_box}>
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
//             <TextField
//               id=""
//               select
//               label="貨物名"
//               value={cargname}
//               onChange={handleChangeCargName}
//               variant="outlined"
//             >
//               {cargNames.map((option) => (
//                 <MenuItem key={option.value} value={option.value}>
//                   {option.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//             <TextField
//               id=""
//               label="Free Time"
//               type="number"
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">日</InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               id=""
//               label="見積期限"
//               type="date"
//               InputLabelProps={{
//                 shrink: true,
//               }}
//               variant="outlined"
//             />
//           </div>
//           <div className={classes_1.mt20}></div>
//           <div className={classes_1.flex_box}>
//             <TextField
//               id=""
//               label="Air Freight 買い"
//               type="number"
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">$</InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               id=""
//               label="Fuel Surcharge 買い"
//               type="number"
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">$</InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               id=""
//               label="Sequrity Charge 買い"
//               type="number"
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">$</InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               id=""
//               type="number"
//               label="AMS 買い"
//               value={thc}
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">$</InputAdornment>
//                 ),
//               }}
//             />
//           </div>
//           <div className={classes_1.flex_box}>
//             <TextField
//               id=""
//               label="Air Freight 売り"
//               type="number"
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">$</InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               id=""
//               label="Fuel Surcharge 売り"
//               type="number"
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">$</InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               id=""
//               label="Sequrity Charge 売り"
//               type="number"
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">$</InputAdornment>
//                 ),
//               }}
//             />
//             <TextField
//               id=""
//               type="number"
//               label="AMS 売り"
//               value={thc}
//               variant="outlined"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">$</InputAdornment>
//                 ),
//               }}
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
// const countryName = [
//   { title: "Kobe Japan", value: 1 },
//   { title: "Tokyo Japan", value: 2 },
//   { title: "Osaka Japan", value: 3 },
// ];
// const cargNames = [
//   { value: "新車", label: "新車" },
//   { value: "中古車", label: "中古車" },
//   { value: "家具", label: "家具" },
//   { value: "線維", label: "線維" },
// ];
// const carriers = [
//   { value: "ANA Cargo", label: "ANA Cargo" },
//   { value: "JAL Cargo", label: "JAL Cargo" },
//   { value: "Atlas Air", label: "Atlas Air" },
//   { value: "Polar Air Cargo", label: "Polar Air Cargo" },
//   { value: "Southern Air", label: "Southern Air" },
//   { value: "Kalitta Air", label: "Kalitta Air" },
//   { value: "Western Global Air", label: "Western Global Air" },
//   { value: "Volga-Dnepr Air", label: "Volga-Dnepr Air" },
//   { value: "AirBridgeCargo Air", label: "AirBridgeCargo Air" },
//   { value: "ABX Air", label: "ABX Air" },
//   { value: "Cargolux Air", label: "Cargolux Air" },
//   {
//     value: "British Airways World Cargo",
//     label: "British Airways World Cargo",
//   },
//   { value: "KLM Royal Dutch Air", label: "KLM Royal Dutch Air" },
//   { value: "Air France", label: "Air France" },
//   { value: "Martinair Air", label: "Martinair Air" },
//   { value: "Singapore Air Cargo", label: "Singapore Air Cargo" },
//   { value: "Malaysia Air", label: "Malaysia Air" },
//   { value: "Emirates Sky Cargo", label: "Emirates Sky Cargo" },
//   { value: "Etihad Crystal Cargo", label: "Etihad Crystal Cargo" },
//   { value: "MyCargo Air", label: "MyCargo Air" },
//   { value: "Lufthansa Cargo", label: "Lufthansa Cargo" },
//   { value: "AeroLogic", label: "AeroLogic" },
//   { value: "Air Hong Kong", label: "Air Hong Kong" },
//   { value: "Cathay Pacific Air", label: "Cathay Pacific Air" },
//   { value: "China Air Cargo", label: "China Air Cargo" },
//   { value: "EVA Air Cargo", label: "EVA Air Cargo" },
//   { value: "China Eastern Air", label: "China Eastern Air" },
//   { value: "China Cargo Air", label: "China Cargo Air" },
//   { value: "Uni-top Air", label: "Uni-top Air" },
//   { value: "Shanghai Air", label: "Shanghai Air" },
//   { value: "Shenzhen Donghai Air", label: "Shenzhen Donghai Air" },
//   { value: "Korean Air", label: "Korean Air" },
//   { value: "Asiana Air", label: "Asiana Air" },
//   { value: "ASL Air Belgium", label: "ASL Air Belgium" },
//   { value: "Silk Way Air", label: "Silk Way Air" },
//   { value: "Raya Airways", label: "Raya Airways" },
//   { value: "AIRFRANCE", label: "AIRFRANCE" },
//   { value: "SAS Cargo", label: "SAS Cargo" },
//   { value: "IBERIA", label: "IBERIA" },
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
// export default DataRegistrationAirExport;
