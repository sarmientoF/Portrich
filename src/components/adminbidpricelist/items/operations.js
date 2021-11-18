export const createSchedulsItems = (state) => {
  const {
    shipping_company,
    ship_name,
    voyage_no,
    pol,
    pod,
    transit1,
    transit2,
    transit3,
    etd,
    eta,
    cy_open,
    cy_cut,
    cfs_cut,
    cfs_open,
  } = state;
  const items = {};
  items["shipping_company"] = shipping_company;
  items["ship_name"] = ship_name;
  items["voyage_no"] = voyage_no;
  const pol_id = pol.ports_id;
  items["pol"] = pol_id;
  const pod_id = pod.ports_id;
  items["pod"] = pod_id;
  if (transit1) {
    const ctransit1_id = transit1.ports_id;
    items["transit1"] = ctransit1_id;
  }
  if (transit2) {
    const ctransit2_id = transit2.ports_id;
    items["transit2"] = ctransit2_id;
  }
  if (transit3) {
    const ctransit3_id = transit3.ports_id;
    items["transit3"] = ctransit3_id;
  }
  items["etd"] = etd;
  items["eta"] = eta;
  items["cy_open"] = cy_open;
  items["cy_cut"] = cy_cut;
  items["cfs_cut"] = cfs_cut;
  items["cfs_open"] = cfs_open;
  return items;
};
