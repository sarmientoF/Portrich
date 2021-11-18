import axios from "axios";
import { AppConfig } from "../../../../common/config";
import { validEmailFormat } from "../../../../common/validation";

const ENDPOINT = {
  ACCOUNTS: "/api/v1/accounts/",
  USERS_ADDRESS_LIST: "/api/v1/usersaddresslist/",
};

const post = (endpoint, params) => {
  const response = axios.post(`${AppConfig.api.url}${endpoint}`, params, {
    withCredentials: true,
  });
  return response;
};

export const fetchMembers = async (setMembers) => {
  try {
    const result = await axios.get(`${AppConfig.api.url}${ENDPOINT.ACCOUNTS}`, {
      withCredentials: true,
    });

    const members = result.data.map((member) => {
      return {
        id: member.id,
        email: member.email,
        name: member.name,
        department: member.department,
        isRepresentative: member.is_representative,
        company_name: member.company_name,
      };
    });
    setMembers(members);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deleteUser = async (userId, setMembers) => {
  try {
    await axios.delete(`${AppConfig.api.url}${ENDPOINT.ACCOUNTS}${userId}/`, {
      withCredentials: true,
    });
    setMembers((members) => members.filter((member) => member.id !== userId));
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const addEmailAddress = async (
  email,
  CompanyId,
  handleModalOpen,
  setAddEmail
) => {
  try {
    const params = {
      email: email,
      users_company: CompanyId,
    };
    await post(ENDPOINT.USERS_ADDRESS_LIST, params);
    handleModalOpen();
    setAddEmail("");
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const ValidationEmail = async (
  email,
  CompanyId,
  addEmailAddress,
  handleModalOpen,
  setAddEmail
) => {
  const isEmailFormat = validEmailFormat(email);

  if ([email].some((value) => !value)) {
    window.confirm("入力されていない項目があります。");
    return;
  }
  if (!isEmailFormat) {
    window.confirm("メールアドレスの形式で入力してください");
    return;
  }
  addEmailAddress(email, CompanyId, handleModalOpen, setAddEmail);
};

export const fetchMailLists = async (setMailList) => {
  try {
    const result = await axios.get(
      `${AppConfig.api.url}${ENDPOINT.USERS_ADDRESS_LIST}`,
      {
        withCredentials: true,
      }
    );
    const maillists = result.data.map((maillist) => {
      return {
        id: maillist.id,
        users_company: maillist.users_company,
        email: maillist.email,
      };
    });
    setMailList(maillists);
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};

export const deleteMailList = async (Id, handleModalOpen) => {
  try {
    const id = Id;
    await axios.delete(
      `${AppConfig.api.url}${ENDPOINT.USERS_ADDRESS_LIST}${id}`,
      {
        withCredentials: true,
      }
    );
    handleModalOpen();
  } catch (e) {
    console.log(e.response && e.response.data);
  }
};
