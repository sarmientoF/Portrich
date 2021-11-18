import axios from "axios";
import {
  faFileExcel,
  faFilePdf,
  faFileWord,
  faFilePowerpoint,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import { AppConfig } from "../../../../common/config";

const ENDPOINT = {
  UPLOAD_FILES_DOCUMENTS: "/api/v1/cargo_statuses/documents/",
  UPLOAD_FILES_BILLOFLOADINGS: "/api/v1/cargo_statuses/billoflagings/",
  UPLOAD_FILES_PERMITCERTIFCATES: "/api/v1/cargo_statuses/permitcertificates/",
  UPLOAD_FILES_PAYMENTINVOICEES: "/api/v1/cargo_statuses/paymentinvoices/",
};

const get = (endpoint, params) => {
  return axios.get(`${AppConfig.api.url}${endpoint}`, {
    withCredentials: true,
  });
};
//書類
export const fetchFiles = async (cargo_status_id, setList) => {
  try {
    const response = await get(
      `${ENDPOINT.UPLOAD_FILES_DOCUMENTS}?cargo_status=${cargo_status_id}`
    );
    setList(
      response.data.map((row) => {
        return {
          id: row.id,
          title: row.name,
          created_by: row.created_by,
          created_at:
            row.created_at && new Date(row.created_at).toLocaleDateString(),
        };
      })
    );
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const uploadFileAndFetchAll = async (
  cargo_status_id,
  file,
  setFileList
) => {
  const formData = new FormData();
  formData.append("contents", file);
  formData.append("name", file.name);
  formData.append("cargo_status", cargo_status_id);
  try {
    await axios.post(
      `${AppConfig.api.url}${ENDPOINT.UPLOAD_FILES_DOCUMENTS}`,
      formData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    fetchFiles(cargo_status_id, setFileList);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

const uploadFileAndFetchStatus = async (
  endpoint,
  param,
  item_id,
  isUploaded
) => {
  try {
    if (isUploaded === null || isUploaded === undefined) {
      await axios.post(`${AppConfig.api.url}${endpoint}`, param, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } else {
      await axios.put(`${AppConfig.api.url}${endpoint}${item_id}/`, param, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

//BL
export const billofladingsFetchFiles = async (
  bill_of_lading_id,
  setBillOfLadings
) => {
  try {
    const response = await get(
      `${ENDPOINT.UPLOAD_FILES_BILLOFLOADINGS}${bill_of_lading_id}/`
    );
    setBillOfLadings(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const billofladingsUploadFileAndFetchAll = async (
  bill_of_lading_id,
  file,
  cargoStatus,
  setBillOfLadings,
  handleModalOpen
) => {
  const formData = new FormData();
  formData.append("contents", file);
  formData.append("users_company", cargoStatus.users_company);
  formData.append("cargo_status", cargoStatus.id);
  try {
    await uploadFileAndFetchStatus(
      ENDPOINT.UPLOAD_FILES_BILLOFLOADINGS,
      formData,
      bill_of_lading_id,
      cargoStatus.bill_of_lading_id
    );
    billofladingsFetchFiles(bill_of_lading_id, setBillOfLadings);
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deleteBillOfLadings = async (
  billingitems,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = billingitems.bill_of_lading_id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.UPLOAD_FILES_BILLOFLOADINGS}${id}/`,
      {
        withCredentials: true,
      }
    );
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

//請求書
export const paymentinvoicesFetchFiles = async (
  payment_invoice_id,
  setPaymentInvoices
) => {
  try {
    const response = await get(
      `${ENDPOINT.UPLOAD_FILES_PAYMENTINVOICEES}${payment_invoice_id}/`
    );
    setPaymentInvoices(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const paymentinvoicesUploadFileAndFetchAll = async (
  payment_invoice_id,
  file,
  cargoStatus,
  setPaymentInvoices,
  handleModalOpen
) => {
  const formData = new FormData();
  formData.append("contents", file);
  formData.append("users_company", cargoStatus.users_company);
  formData.append("cargo_status", cargoStatus.id);
  try {
    await uploadFileAndFetchStatus(
      ENDPOINT.UPLOAD_FILES_PAYMENTINVOICEES,
      formData,
      payment_invoice_id,
      cargoStatus.payment_invoice_id
    );
    paymentinvoicesFetchFiles(payment_invoice_id, setPaymentInvoices);
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deleteDeletePaymentInvoiceId = async (
  billingitems,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = billingitems.payment_invoice_id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.UPLOAD_FILES_PAYMENTINVOICEES}${id}/`,
      {
        withCredentials: true,
      }
    );
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

//許可証
export const permitcertificatesFetchFiles = async (
  permit_certificate_id,
  setPermitCertificates
) => {
  try {
    const response = await get(
      `${ENDPOINT.UPLOAD_FILES_PERMITCERTIFCATES}${permit_certificate_id}/`
    );
    setPermitCertificates(response.data);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const permitcertificatesUploadFileAndFetchAll = async (
  permit_certificate_id,
  file,
  cargoStatus,
  setPermitCertificates,
  handleModalOpen
) => {
  const formData = new FormData();
  formData.append("contents", file);
  formData.append("users_company", cargoStatus.users_company);
  formData.append("cargo_status", cargoStatus.id);
  try {
    await uploadFileAndFetchStatus(
      ENDPOINT.UPLOAD_FILES_PERMITCERTIFCATES,
      formData,
      permit_certificate_id,
      cargoStatus.permit_certificate_id
    );
    permitcertificatesFetchFiles(permit_certificate_id, setPermitCertificates);
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deletePermitCertificateId = async (
  billingitems,
  handleClose,
  handleModalOpen
) => {
  try {
    const id = billingitems.permit_certificate_id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.UPLOAD_FILES_PERMITCERTIFCATES}${id}/`,
      {
        withCredentials: true,
      }
    );
    handleClose();
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const getFileIcon = (filename) => {
  if (filename.endsWith(".doc") || filename.endsWith(".docx")) {
    return faFileWord;
  }
  if (filename.endsWith(".pdf")) {
    return faFilePdf;
  }
  if (filename.endsWith(".ppx") || filename.endsWith(".pptx")) {
    return faFilePowerpoint;
  }
  if (filename.endsWith(".xls") || filename.endsWith(".xlsx")) {
    return faFileExcel;
  }
  return faFile;
};

export const getFileColor = (filename) => {
  if (filename.endsWith(".doc") || filename.endsWith(".docx")) {
    return { color: "#6398e8" };
  }
  if (filename.endsWith(".pdf")) {
    return { color: "#fb776b" };
  }
  if (filename.endsWith(".ppx") || filename.endsWith(".pptx")) {
    return { color: "#fb776b" };
  }
  if (filename.endsWith(".xls") || filename.endsWith(".xlsx")) {
    return { color: "#62e89e" };
  }
  return { color: "#fb776b" };
};
