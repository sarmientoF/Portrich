import React, { useEffect, useState } from "react";
import classes from "../../../dist/css/shipments_detail.module.css";
import {
  ShipmentsManegementDialogAdditionalCost,
  ShipmentsManegementDialogPaymentDeadline,
} from "../../index";
import { AppConfig } from "../../../common/config";
import {
  billofladingsUploadFileAndFetchAll,
  permitcertificatesUploadFileAndFetchAll,
  paymentinvoicesUploadFileAndFetchAll,
} from "./files/operations";
import {
  fetchBillingItems,
  fetchOriginalBillingItem,
} from "./billings/operations";
import { fetchAdditionalCost } from "./quote/operations";
import { AnnounceModal } from "../../../components/common/index";
import {
  ShipmentsManagementDeleteBillOfLadings,
  ShipmentsManagementDeletePaymentInvoiceId,
  ShipmentsManagementDeletePermitCertificateId,
} from "../../index";
import {
  Modal,
  Backdrop,
  Fade,
  Button,
  TextField,
  makeStyles,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from "@material-ui/core/";

const ENDPOINT = {
  FILE_DOWNLOAD_DOCUMENTS: "/api/v1/cargo_statuses/documents/download/",
  FILE_DOWNLOAD_BILLOFLOADINGS:
    "/api/v1/cargo_statuses/billoflagings/download/",
  FILE_DOWNLOAD_PERMITCERTIFCATES:
    "/api/v1/cargo_statuses/permitcertificates/download/",
  FILE_DOWNLOAD_PAYMENTINVOICEES:
    "/api/v1/cargo_statuses/paymentinvoices/download/",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "27ch",
    },
  },
  enableButton: {
    background: "#0052cc",
    color: "#fff",
    width: "18%",
  },
  disableButton: {},
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ShipmentsManagementBilling = (props) => {
  const {
    textStates,
    setTextStates,
    cargoStatus,
    queryParameters,
    setBillOfLadings,
    setPermitCertificates,
    setPaymentInvoices,
  } = props;
  const style = useStyles();
  const [billingitems, setBillingItems] = useState([]);
  const [additionalcost, setAdditionalCost] = useState([]);
  useEffect(() => {
    fetchBillingItems(setBillingItems, queryParameters.cargo_status_id);
    fetchOriginalBillingItem(setTextStates, cargoStatus);
    fetchAdditionalCost(setAdditionalCost, queryParameters.cargo_status_id);
  }, []);
  const handleChangePaymentDeadline = (e) => {
    setTextStates({ ...textStates, payment_deadline: e.target.value });
  };
  const handleChangeIsPaied = (e) => {
    setTextStates({ ...textStates, is_paied: e.target.checked });
  };
  const handleChangeAdditionalName = (e) => {
    setTextStates({ ...textStates, additional_name: e.target.value });
  };
  const handleChangeAdditionalBuyPrice = (e) => {
    setTextStates({ ...textStates, additional_buy_price: e.target.value });
  };
  const handleChangeAdditionalSellPrice = (e) => {
    setTextStates({ ...textStates, additional_sell_price: e.target.value });
  };

  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const billofladingsUpload = (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    billofladingsUploadFileAndFetchAll(
      billingitems.bill_of_lading_id,
      e.target.files[0],
      billingitems,
      setBillOfLadings,
      handleModalOpen
    );
  };

  const permitcertificatesUpload = (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    permitcertificatesUploadFileAndFetchAll(
      billingitems.permit_certificate_id,
      e.target.files[0],
      billingitems,
      setPermitCertificates,
      handleModalOpen
    );
  };
  const paymentinvoicesUpload = (e) => {
    if (e.target.files.length === 0) {
      return;
    }
    paymentinvoicesUploadFileAndFetchAll(
      billingitems.payment_invoice_id,
      e.target.files[0],
      billingitems,
      setPaymentInvoices,
      handleModalOpen
    );
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.s_d_area}>
      <div className={classes.management_area}>
        <div className={classes.management_title}>支払い情報</div>
        <div className={classes.management_form_area}>
          <div className={style.root}>
            <TextField
              label="支払い期限日"
              type="date"
              variant="outlined"
              value={textStates.payment_deadline || ""}
              onChange={handleChangePaymentDeadline}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  value={textStates.is_paied || false}
                  onChange={handleChangeIsPaied}
                  checked={textStates.is_paied ? true : false}
                />
              }
              label="支払いが完了されたらチェックして更新"
              labelPlacement="top"
            />
          </div>
        </div>
        <div className={classes.management_form_area}>
          <div className={classes.management_dialog}>
            <ShipmentsManegementDialogPaymentDeadline
              textStates={textStates}
              cargoStatus={cargoStatus}
              handleOpen={handleOpen}
            />
          </div>
        </div>
        <div className={classes.management_title}>追加で費用がかかった場合</div>
        <div className={classes.management_form_area}>
          <div className={style.root}>
            <TextField
              label="項目名"
              type="text"
              variant="outlined"
              value={textStates.additional_name || ""}
              onChange={handleChangeAdditionalName}
            />
            <TextField
              label="買い金額"
              type="number"
              variant="outlined"
              value={textStates.additional_buy_price || ""}
              onChange={handleChangeAdditionalBuyPrice}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">¥</InputAdornment>
                ),
              }}
            />
            <TextField
              label="売り金額"
              type="number"
              variant="outlined"
              value={textStates.additional_sell_price || ""}
              onChange={handleChangeAdditionalSellPrice}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">¥</InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        {additionalcost.length === 0 ? (
          <></>
        ) : (
          <div>
            <div className={classes.management_title}>その他費用登録項目</div>
            <div className={classes.management_list}>
              <div className={classes.management_list_name}>項目名</div>
              <div className={classes.management_list_buy}>買い金額</div>
              <div className={classes.management_list_sell}>売り金額</div>
            </div>
            {additionalcost.map((quote, index) => (
              <div className={classes.management_list} key={index}>
                <div className={classes.management_list_name}>{quote.name}</div>
                <div className={classes.management_list_buy}>
                  ¥{quote.buy_price}
                </div>
                <div className={classes.management_list_sell}>
                  ¥{quote.sell_price}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={classes.management_form_area}>
          <div className={classes.management_dialog}>
            <ShipmentsManegementDialogAdditionalCost
              textStates={textStates}
              cargoStatus={cargoStatus}
              handleOpen={handleOpen}
            />
          </div>
        </div>
        <div className={classes.management_title}>BL Up Load</div>
        <div className={classes.management_form_area}>
          <Button
            variant="contained"
            component="label"
            className={style.enableButton}
          >
            BL Upload File
            <input type="file" hidden onInput={billofladingsUpload}></input>
          </Button>
        </div>
        <div className={classes.document_area}>
          {billingitems.bill_of_lading_id === null ? (
            <></>
          ) : (
            <>
              <a
                href={`${AppConfig.api.url}${ENDPOINT.FILE_DOWNLOAD_BILLOFLOADINGS}${billingitems.bill_of_lading_id}/`}
                className={classes.document_item}
              >
                <div className={classes.document_item_title}>
                  BLアップロード済み
                </div>
              </a>
              <ShipmentsManagementDeleteBillOfLadings
                billingitems={billingitems}
              />
            </>
          )}
        </div>
        <div className={classes.management_title}>請求書 Up Load</div>
        <div className={classes.management_form_area}>
          <Button
            variant="contained"
            component="label"
            className={style.enableButton}
          >
            請求書 Upload File
            <input type="file" hidden onInput={paymentinvoicesUpload}></input>
          </Button>
        </div>
        <div className={classes.document_area}>
          {billingitems.payment_invoice_id === null ? (
            <></>
          ) : (
            <>
              <a
                href={`${AppConfig.api.url}${ENDPOINT.FILE_DOWNLOAD_PAYMENTINVOICEES}${billingitems.permit_certificate_id}/`}
                className={classes.document_item}
              >
                <div className={classes.document_item_title}>
                  請求書アップロード済み
                </div>
              </a>
              <ShipmentsManagementDeletePaymentInvoiceId
                billingitems={billingitems}
              />
            </>
          )}
        </div>
        <div className={classes.management_title}>許可証 Up Load</div>
        <div className={classes.management_form_area}>
          <Button
            variant="contained"
            component="label"
            className={style.enableButton}
          >
            許可証 Upload File
            <input
              type="file"
              hidden
              onInput={permitcertificatesUpload}
            ></input>
          </Button>
        </div>
        <div className={classes.document_area}>
          {billingitems.permit_certificate_id === null ? (
            <></>
          ) : (
            <>
              <a
                href={`${AppConfig.api.url}${ENDPOINT.FILE_DOWNLOAD_PERMITCERTIFCATES}${billingitems.payment_invoice_id}/`}
                className={classes.document_item}
              >
                <div className={classes.document_item_title}>
                  許可証アップロード済み
                </div>
              </a>
              <ShipmentsManagementDeletePermitCertificateId
                billingitems={billingitems}
              />
            </>
          )}
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={style.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={style.paper}>
            <h2 id="transition-modal-title">請求書情報を登録しました。</h2>
            <p id="transition-modal-description">何か文入れても良い</p>
          </div>
        </Fade>
      </Modal>
      <AnnounceModal
        isOpen={modalopen}
        setModalOpen={setModalOpen}
        title="書類の登録が完了しました。"
        text=""
      />
    </div>
  );
};

export default ShipmentsManagementBilling;
